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

import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import {
  DeleteDatasetRequest,
  DeleteDatasetRequestFilterSensitiveLog,
  DeleteDatasetResponse,
  DeleteDatasetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteDatasetCommand,
  serializeAws_restJson1DeleteDatasetCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteDatasetCommandInput extends DeleteDatasetRequest {}
export interface DeleteDatasetCommandOutput extends DeleteDatasetResponse, __MetadataBearer {}

/**
 * <p>Deletes an existing Amazon Lookout for Vision <code>dataset</code>. </p>
 *          <p>If your the project has a single
 *       dataset, you must create a new dataset before you can create a model.</p>
 *          <p>If you project has a training dataset and a test dataset consider the following. </p>
 *          <ul>
 *             <li>
 *                <p>If you delete the test dataset, your project reverts to a single dataset project. If you then
 *       train the model, Amazon Lookout for Vision internally splits the remaining dataset into a training and test dataset.</p>
 *             </li>
 *             <li>
 *                <p>If you delete the training dataset, you must create a training dataset before you can create a model.</p>
 *             </li>
 *          </ul>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:DeleteDataset</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, DeleteDatasetCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, DeleteDatasetCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new DeleteDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatasetCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 */
export class DeleteDatasetCommand extends $Command<
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput,
  LookoutVisionClientResolvedConfig
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
    configuration: LookoutVisionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDatasetCommandInput, DeleteDatasetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteDatasetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutVisionClient";
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
    return serializeAws_restJson1DeleteDatasetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDatasetCommandOutput> {
    return deserializeAws_restJson1DeleteDatasetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
