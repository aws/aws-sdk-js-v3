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

import { ListLoggingConfigurationsRequest, ListLoggingConfigurationsResponse } from "../models/models_0";
import { de_ListLoggingConfigurationsCommand, se_ListLoggingConfigurationsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLoggingConfigurationsCommand}.
 */
export interface ListLoggingConfigurationsCommandInput extends ListLoggingConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListLoggingConfigurationsCommand}.
 */
export interface ListLoggingConfigurationsCommandOutput extends ListLoggingConfigurationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves an array of your <a>LoggingConfiguration</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListLoggingConfigurationsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListLoggingConfigurationsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const input = { // ListLoggingConfigurationsRequest
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListLoggingConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListLoggingConfigurationsResponse
 * //   LoggingConfigurations: [ // LoggingConfigurations
 * //     { // LoggingConfiguration
 * //       ResourceArn: "STRING_VALUE", // required
 * //       LogDestinationConfigs: [ // LogDestinationConfigs // required
 * //         "STRING_VALUE",
 * //       ],
 * //       RedactedFields: [ // RedactedFields
 * //         { // FieldToMatch
 * //           SingleHeader: { // SingleHeader
 * //             Name: "STRING_VALUE", // required
 * //           },
 * //           SingleQueryArgument: { // SingleQueryArgument
 * //             Name: "STRING_VALUE", // required
 * //           },
 * //           AllQueryArguments: {},
 * //           UriPath: {},
 * //           QueryString: {},
 * //           Body: { // Body
 * //             OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 * //           },
 * //           Method: {},
 * //           JsonBody: { // JsonBody
 * //             MatchPattern: { // JsonMatchPattern
 * //               All: {},
 * //               IncludedPaths: [ // JsonPointerPaths
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //             InvalidFallbackBehavior: "MATCH" || "NO_MATCH" || "EVALUATE_AS_STRING",
 * //             OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 * //           },
 * //           Headers: { // Headers
 * //             MatchPattern: { // HeaderMatchPattern
 * //               All: {},
 * //               IncludedHeaders: [ // HeaderNames
 * //                 "STRING_VALUE",
 * //               ],
 * //               ExcludedHeaders: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //             OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //           },
 * //           Cookies: { // Cookies
 * //             MatchPattern: { // CookieMatchPattern
 * //               All: {},
 * //               IncludedCookies: [ // CookieNames
 * //                 "STRING_VALUE",
 * //               ],
 * //               ExcludedCookies: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //             OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //           },
 * //           HeaderOrder: { // HeaderOrder
 * //             OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //           },
 * //         },
 * //       ],
 * //       ManagedByFirewallManager: true || false,
 * //       LoggingFilter: { // LoggingFilter
 * //         Filters: [ // Filters // required
 * //           { // Filter
 * //             Behavior: "KEEP" || "DROP", // required
 * //             Requirement: "MEETS_ALL" || "MEETS_ANY", // required
 * //             Conditions: [ // Conditions // required
 * //               { // Condition
 * //                 ActionCondition: { // ActionCondition
 * //                   Action: "ALLOW" || "BLOCK" || "COUNT" || "CAPTCHA" || "CHALLENGE" || "EXCLUDED_AS_COUNT", // required
 * //                 },
 * //                 LabelNameCondition: { // LabelNameCondition
 * //                   LabelName: "STRING_VALUE", // required
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         DefaultBehavior: "KEEP" || "DROP", // required
 * //       },
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLoggingConfigurationsCommandInput - {@link ListLoggingConfigurationsCommandInput}
 * @returns {@link ListLoggingConfigurationsCommandOutput}
 * @see {@link ListLoggingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListLoggingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *  <p>The operation isn't valid. </p>
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *  <p>The operation failed because WAF didn't recognize a parameter in the request. For
 *          example: </p>
 *          <ul>
 *             <li>
 *                <p>You specified a parameter name or value that isn't valid.</p>
 *             </li>
 *             <li>
 *                <p>Your nested statement isn't valid. You might have tried to nest a statement that
 *                can’t be nested. </p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>DefaultAction</code> that
 *                isn't among the types available at <a>DefaultAction</a>.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                with which a web ACL can't be associated.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 */
export class ListLoggingConfigurationsCommand extends $Command<
  ListLoggingConfigurationsCommandInput,
  ListLoggingConfigurationsCommandOutput,
  WAFV2ClientResolvedConfig
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
  constructor(readonly input: ListLoggingConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLoggingConfigurationsCommandInput, ListLoggingConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLoggingConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "ListLoggingConfigurationsCommand";
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
  private serialize(input: ListLoggingConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLoggingConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListLoggingConfigurationsCommandOutput> {
    return de_ListLoggingConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
