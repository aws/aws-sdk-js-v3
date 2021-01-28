import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { DeleteDatasetRequest, DeleteDatasetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteDatasetCommand,
  serializeAws_restJson1DeleteDatasetCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DeleteDatasetCommandInput = DeleteDatasetRequest;
export type DeleteDatasetCommandOutput = DeleteDatasetResponse & __MetadataBearer;

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
 *          <p>It might take a while to delete the dataset. To check the current status, check the <code>Status</code> field
 *       in the response from a call to <a>DescribeDataset</a>. </p>
 */
export class DeleteDatasetCommand extends $Command<
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput,
  LookoutVisionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutVisionClient";
    const commandName = "DeleteDatasetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDatasetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDatasetResponse.filterSensitiveLog,
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
