import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteFeatureGroupRequest } from "../models/models_1";
import {
  deserializeAws_json1_1DeleteFeatureGroupCommand,
  serializeAws_json1_1DeleteFeatureGroupCommand,
} from "../protocols/Aws_json1_1";
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

export type DeleteFeatureGroupCommandInput = DeleteFeatureGroupRequest;
export type DeleteFeatureGroupCommandOutput = __MetadataBearer;

/**
 * <p>Delete the <code>FeatureGroup</code> and any data that was written to the
 *             <code>OnlineStore</code> of the <code>FeatureGroup</code>. Data cannot be accessed from
 *          the <code>OnlineStore</code> immediately after <code>DeleteFeatureGroup</code> is called. </p>
 *          <p>Data written into the <code>OfflineStore</code> will not be deleted. The AWS Glue
 *          database and tables that are automatically created for your <code>OfflineStore</code> are
 *          not deleted. </p>
 */
export class DeleteFeatureGroupCommand extends $Command<
  DeleteFeatureGroupCommandInput,
  DeleteFeatureGroupCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFeatureGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFeatureGroupCommandInput, DeleteFeatureGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DeleteFeatureGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFeatureGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFeatureGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteFeatureGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFeatureGroupCommandOutput> {
    return deserializeAws_json1_1DeleteFeatureGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
