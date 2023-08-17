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

import { GetRateBasedStatementManagedKeysRequest, GetRateBasedStatementManagedKeysResponse } from "../models/models_0";
import {
  de_GetRateBasedStatementManagedKeysCommand,
  se_GetRateBasedStatementManagedKeysCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRateBasedStatementManagedKeysCommand}.
 */
export interface GetRateBasedStatementManagedKeysCommandInput extends GetRateBasedStatementManagedKeysRequest {}
/**
 * @public
 *
 * The output of {@link GetRateBasedStatementManagedKeysCommand}.
 */
export interface GetRateBasedStatementManagedKeysCommandOutput
  extends GetRateBasedStatementManagedKeysResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the IP addresses that are currently blocked by a rate-based rule instance. This
 *        is only available for rate-based rules that aggregate solely on the IP address or on the forwarded IP
 *        address. </p>
 *          <p>The maximum
 *          number of addresses that can be blocked for a single rate-based rule instance is 10,000.
 *          If more than 10,000 addresses exceed the rate limit, those with the highest rates are
 *          blocked.</p>
 *          <p>For a rate-based rule that you've defined inside a rule group, provide the name of the
 *          rule group reference statement in your request, in addition to the rate-based rule name and
 *          the web ACL name. </p>
 *          <p>WAF monitors web requests and manages keys independently for each unique combination
 *          of web ACL, optional rule group, and rate-based rule. For example, if you define a
 *          rate-based rule inside a rule group, and then use the rule group in a web ACL, WAF
 *          monitors web requests and manages keys for that web ACL, rule group reference statement,
 *          and rate-based rule instance. If you use the same rule group in a second web ACL, WAF
 *          monitors web requests and manages keys for this second usage completely independent of your
 *          first. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetRateBasedStatementManagedKeysCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetRateBasedStatementManagedKeysCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const input = { // GetRateBasedStatementManagedKeysRequest
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   WebACLName: "STRING_VALUE", // required
 *   WebACLId: "STRING_VALUE", // required
 *   RuleGroupRuleName: "STRING_VALUE",
 *   RuleName: "STRING_VALUE", // required
 * };
 * const command = new GetRateBasedStatementManagedKeysCommand(input);
 * const response = await client.send(command);
 * // { // GetRateBasedStatementManagedKeysResponse
 * //   ManagedKeysIPV4: { // RateBasedStatementManagedKeysIPSet
 * //     IPAddressVersion: "IPV4" || "IPV6",
 * //     Addresses: [ // IPAddresses
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   ManagedKeysIPV6: {
 * //     IPAddressVersion: "IPV4" || "IPV6",
 * //     Addresses: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRateBasedStatementManagedKeysCommandInput - {@link GetRateBasedStatementManagedKeysCommandInput}
 * @returns {@link GetRateBasedStatementManagedKeysCommandOutput}
 * @see {@link GetRateBasedStatementManagedKeysCommandInput} for command's `input` shape.
 * @see {@link GetRateBasedStatementManagedKeysCommandOutput} for command's `response` shape.
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
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>WAF couldn’t perform the operation because your resource doesn't exist.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. </p>
 *
 * @throws {@link WAFUnsupportedAggregateKeyTypeException} (client fault)
 *  <p>The rule that you've named doesn't aggregate solely on the IP address or solely on the forwarded IP address. This call
 *            is only available for rate-based rules with an <code>AggregateKeyType</code> setting of <code>IP</code> or <code>FORWARDED_IP</code>.</p>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 */
export class GetRateBasedStatementManagedKeysCommand extends $Command<
  GetRateBasedStatementManagedKeysCommandInput,
  GetRateBasedStatementManagedKeysCommandOutput,
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
  constructor(readonly input: GetRateBasedStatementManagedKeysCommandInput) {
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
  ): Handler<GetRateBasedStatementManagedKeysCommandInput, GetRateBasedStatementManagedKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRateBasedStatementManagedKeysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "GetRateBasedStatementManagedKeysCommand";
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
  private serialize(
    input: GetRateBasedStatementManagedKeysCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetRateBasedStatementManagedKeysCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRateBasedStatementManagedKeysCommandOutput> {
    return de_GetRateBasedStatementManagedKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
