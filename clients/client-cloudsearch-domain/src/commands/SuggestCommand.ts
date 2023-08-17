// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  CloudSearchDomainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudSearchDomainClient";
import { SuggestRequest, SuggestResponse } from "../models/models_0";
import { de_SuggestCommand, se_SuggestCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SuggestCommand}.
 */
export interface SuggestCommandInput extends SuggestRequest {}
/**
 * @public
 *
 * The output of {@link SuggestCommand}.
 */
export interface SuggestCommandOutput extends SuggestResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves autocomplete suggestions for a partial query string. You can use suggestions enable you to display likely matches before users finish typing. In Amazon CloudSearch, suggestions are based on the contents of a particular text field. When you request suggestions, Amazon CloudSearch finds all of the documents whose values in the suggester field start with the specified query string. The beginning of the field must match the query string to be considered a match. </p>
 *       <p>For more information about configuring suggesters and retrieving suggestions, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html">Getting Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
 *
 *       <p>The endpoint for submitting <code>Suggest</code> requests is domain-specific. You submit suggest requests to a domain's search endpoint. To get the search endpoint for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchDomainClient, SuggestCommand } from "@aws-sdk/client-cloudsearch-domain"; // ES Modules import
 * // const { CloudSearchDomainClient, SuggestCommand } = require("@aws-sdk/client-cloudsearch-domain"); // CommonJS import
 * const client = new CloudSearchDomainClient(config);
 * const input = { // SuggestRequest
 *   query: "STRING_VALUE", // required
 *   suggester: "STRING_VALUE", // required
 *   size: Number("long"),
 * };
 * const command = new SuggestCommand(input);
 * const response = await client.send(command);
 * // { // SuggestResponse
 * //   status: { // SuggestStatus
 * //     timems: Number("long"),
 * //     rid: "STRING_VALUE",
 * //   },
 * //   suggest: { // SuggestModel
 * //     query: "STRING_VALUE",
 * //     found: Number("long"),
 * //     suggestions: [ // Suggestions
 * //       { // SuggestionMatch
 * //         suggestion: "STRING_VALUE",
 * //         score: Number("long"),
 * //         id: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param SuggestCommandInput - {@link SuggestCommandInput}
 * @returns {@link SuggestCommandOutput}
 * @see {@link SuggestCommandInput} for command's `input` shape.
 * @see {@link SuggestCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchDomainClientResolvedConfig | config} for CloudSearchDomainClient's `config` shape.
 *
 * @throws {@link SearchException} (client fault)
 *  <p>Information about any problems encountered while processing a search request.</p>
 *
 * @throws {@link CloudSearchDomainServiceException}
 * <p>Base exception class for all service exceptions from CloudSearchDomain service.</p>
 *
 */
export class SuggestCommand extends $Command<
  SuggestCommandInput,
  SuggestCommandOutput,
  CloudSearchDomainClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: SuggestCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchDomainClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SuggestCommandInput, SuggestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SuggestCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchDomainClient";
    const commandName = "SuggestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: SuggestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SuggestCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SuggestCommandOutput> {
    return de_SuggestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
