import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { CreateThesaurusRequest, CreateThesaurusResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateThesaurusCommand,
  serializeAws_json1_1CreateThesaurusCommand,
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

export interface CreateThesaurusCommandInput extends CreateThesaurusRequest {}
export interface CreateThesaurusCommandOutput extends CreateThesaurusResponse, __MetadataBearer {}

/**
 * <p>Creates a thesaurus for an index. The thesaurus
 *       contains a list of synonyms in Solr format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, CreateThesaurusCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, CreateThesaurusCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new CreateThesaurusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateThesaurusCommandInput} for command's `input` shape.
 * @see {@link CreateThesaurusCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateThesaurusCommand extends $Command<
  CreateThesaurusCommandInput,
  CreateThesaurusCommandOutput,
  KendraClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateThesaurusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateThesaurusCommandInput, CreateThesaurusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "CreateThesaurusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateThesaurusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateThesaurusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateThesaurusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateThesaurusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateThesaurusCommandOutput> {
    return deserializeAws_json1_1CreateThesaurusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
