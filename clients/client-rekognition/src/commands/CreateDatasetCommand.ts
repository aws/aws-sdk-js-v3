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
  CreateDatasetRequest,
  CreateDatasetRequestFilterSensitiveLog,
  CreateDatasetResponse,
  CreateDatasetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateDatasetCommand,
  serializeAws_json1_1CreateDatasetCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface CreateDatasetCommandInput extends CreateDatasetRequest {}
export interface CreateDatasetCommandOutput extends CreateDatasetResponse, __MetadataBearer {}

/**
 * <p>Creates a new Amazon Rekognition Custom Labels dataset. You can create a dataset by using
 *    an Amazon Sagemaker format manifest file or by copying an existing Amazon Rekognition Custom Labels dataset.</p>
 *          <p>To create a training dataset for a project, specify <code>train</code> for the value of
 *       <code>DatasetType</code>. To create the test dataset for a project,
 *       specify <code>test</code> for the value of <code>DatasetType</code>.
 *     </p>
 *          <p>The response from <code>CreateDataset</code> is the Amazon Resource Name (ARN) for the dataset.
 *    Creating a dataset takes a while to complete. Use <a>DescribeDataset</a> to check the
 *    current status. The dataset created successfully if the value of <code>Status</code> is
 *    <code>CREATE_COMPLETE</code>. </p>
 *          <p>To check if any non-terminal errors occurred, call <a>ListDatasetEntries</a>
 * and check for the presence of <code>errors</code> lists in the JSON Lines.</p>
 *          <p>Dataset creation fails if a terminal error occurs (<code>Status</code> = <code>CREATE_FAILED</code>).
 *       Currently, you can't access the terminal error information.
 *
 *    </p>
 *          <p>For more information, see Creating dataset in the <i>Amazon Rekognition Custom Labels Developer Guide</i>.</p>
 *          <p>This operation requires permissions to perform the <code>rekognition:CreateDataset</code> action.
 *    If you want to copy an existing dataset, you also require permission to perform the <code>rekognition:ListDatasetEntries</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, CreateDatasetCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, CreateDatasetCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new CreateDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatasetCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class CreateDatasetCommand extends $Command<
  CreateDatasetCommandInput,
  CreateDatasetCommandOutput,
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

  constructor(readonly input: CreateDatasetCommandInput) {
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
  ): Handler<CreateDatasetCommandInput, CreateDatasetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateDatasetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "CreateDatasetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDatasetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDatasetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDatasetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDatasetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDatasetCommandOutput> {
    return deserializeAws_json1_1CreateDatasetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
