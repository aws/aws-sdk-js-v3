import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListSkillsStoreSkillsByCategoryRequest, ListSkillsStoreSkillsByCategoryResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand,
  serializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand,
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

export type ListSkillsStoreSkillsByCategoryCommandInput = ListSkillsStoreSkillsByCategoryRequest;
export type ListSkillsStoreSkillsByCategoryCommandOutput = ListSkillsStoreSkillsByCategoryResponse & __MetadataBearer;

/**
 * <p>Lists all skills in the Alexa skill store by category.</p>
 */
export class ListSkillsStoreSkillsByCategoryCommand extends $Command<
  ListSkillsStoreSkillsByCategoryCommandInput,
  ListSkillsStoreSkillsByCategoryCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSkillsStoreSkillsByCategoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSkillsStoreSkillsByCategoryCommandInput, ListSkillsStoreSkillsByCategoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "ListSkillsStoreSkillsByCategoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSkillsStoreSkillsByCategoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSkillsStoreSkillsByCategoryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListSkillsStoreSkillsByCategoryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSkillsStoreSkillsByCategoryCommandOutput> {
    return deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
