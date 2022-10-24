// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  DeleteDatasetRequest,
  DeleteDatasetRequestFilterSensitiveLog,
  DeleteDatasetResponse,
  DeleteDatasetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDatasetCommand,
  serializeAws_json1_1DeleteDatasetCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface DeleteDatasetCommandInput extends DeleteDatasetRequest {}
export interface DeleteDatasetCommandOutput extends DeleteDatasetResponse, __MetadataBearer {}

/**
 * <p>Deletes an existing Amazon Rekognition Custom Labels dataset.
 *    Deleting a dataset might take while. Use <a>DescribeDataset</a> to check the
 *    current status. The dataset is still deleting if the value of <code>Status</code> is
 *    <code>DELETE_IN_PROGRESS</code>. If you try to access the dataset after it is deleted, you get
 *    a <code>ResourceNotFoundException</code> exception.
 *
 * </p>
 *          <p>You can't delete a dataset while it is creating (<code>Status</code> =  <code>CREATE_IN_PROGRESS</code>)
 *       or if the dataset is updating (<code>Status</code> =  <code>UPDATE_IN_PROGRESS</code>).</p>
 *          <p>This operation requires permissions to perform the <code>rekognition:DeleteDataset</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DeleteDatasetCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DeleteDatasetCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new DeleteDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatasetCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class DeleteDatasetCommand extends $Command<
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: DeleteDatasetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDatasetCommandInput, DeleteDatasetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteDatasetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "DeleteDatasetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDatasetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteDatasetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDatasetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDatasetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDatasetCommandOutput> {
    return deserializeAws_json1_1DeleteDatasetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
