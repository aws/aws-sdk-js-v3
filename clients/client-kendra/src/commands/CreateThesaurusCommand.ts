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

import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import {
  CreateThesaurusRequest,
  CreateThesaurusRequestFilterSensitiveLog,
  CreateThesaurusResponse,
  CreateThesaurusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateThesaurusCommand,
  serializeAws_json1_1CreateThesaurusCommand,
} from "../protocols/Aws_json1_1";

export interface CreateThesaurusCommandInput extends CreateThesaurusRequest {}
export interface CreateThesaurusCommandOutput extends CreateThesaurusResponse, __MetadataBearer {}

/**
 * <p>Creates a thesaurus for an index. The thesaurus
 *       contains a list of synonyms in Solr format.</p>
 *          <p>For an example of adding a thesaurus file to an index, see
 *          <a href="https://docs.aws.amazon.com/kendra/latest/dg/index-synonyms-adding-thesaurus-file.html">Adding
 *             custom synonyms to an index</a>.</p>
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
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 */
export class CreateThesaurusCommand extends $Command<
  CreateThesaurusCommandInput,
  CreateThesaurusCommandOutput,
  KendraClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateThesaurusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "CreateThesaurusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateThesaurusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateThesaurusResponseFilterSensitiveLog,
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
