import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DeleteTagsInput, DeleteTagsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteTagsCommand,
  serializeAws_json1_1DeleteTagsCommand,
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

export type DeleteTagsCommandInput = DeleteTagsInput;
export type DeleteTagsCommandOutput = DeleteTagsOutput & __MetadataBearer;

/**
 * <p>Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags.</p>
 * 		       <p>If you specify a tag that doesn't exist, Amazon ML ignores it.</p>
 */
export class DeleteTagsCommand extends $Command<
  DeleteTagsCommandInput,
  DeleteTagsCommandOutput,
  MachineLearningClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MachineLearningClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTagsCommandInput, DeleteTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "DeleteTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTagsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTagsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTagsCommandOutput> {
    return deserializeAws_json1_1DeleteTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
