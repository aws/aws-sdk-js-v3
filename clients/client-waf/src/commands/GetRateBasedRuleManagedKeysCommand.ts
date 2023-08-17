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

import { GetRateBasedRuleManagedKeysRequest, GetRateBasedRuleManagedKeysResponse } from "../models/models_0";
import { de_GetRateBasedRuleManagedKeysCommand, se_GetRateBasedRuleManagedKeysCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRateBasedRuleManagedKeysCommand}.
 */
export interface GetRateBasedRuleManagedKeysCommandInput extends GetRateBasedRuleManagedKeysRequest {}
/**
 * @public
 *
 * The output of {@link GetRateBasedRuleManagedKeysCommand}.
 */
export interface GetRateBasedRuleManagedKeysCommandOutput
  extends GetRateBasedRuleManagedKeysResponse,
    __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Returns an array of IP addresses currently being blocked by the <a>RateBasedRule</a> that is specified by the <code>RuleId</code>. The maximum
 *          number of managed keys that will be blocked is 10,000. If more than 10,000 addresses exceed
 *          the rate limit, the 10,000 addresses with the highest rates will be blocked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, GetRateBasedRuleManagedKeysCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, GetRateBasedRuleManagedKeysCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const input = { // GetRateBasedRuleManagedKeysRequest
 *   RuleId: "STRING_VALUE", // required
 *   NextMarker: "STRING_VALUE",
 * };
 * const command = new GetRateBasedRuleManagedKeysCommand(input);
 * const response = await client.send(command);
 * // { // GetRateBasedRuleManagedKeysResponse
 * //   ManagedKeys: [ // ManagedKeys
 * //     "STRING_VALUE",
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRateBasedRuleManagedKeysCommandInput - {@link GetRateBasedRuleManagedKeysCommandInput}
 * @returns {@link GetRateBasedRuleManagedKeysCommandOutput}
 * @see {@link GetRateBasedRuleManagedKeysCommandInput} for command's `input` shape.
 * @see {@link GetRateBasedRuleManagedKeysCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *  <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p>
 * 			      <ul>
 *             <li>
 *                <p>You specified an invalid parameter name.</p>
 *             </li>
 *             <li>
 *                <p>You specified an invalid value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>)
 * 					using an action other than <code>INSERT</code> or <code>DELETE</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code>
 *                   <code>Type</code> other than
 * 					<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p>
 *             </li>
 *             <li>
 * 		 	           <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p>
 * 		          </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code>
 *                   <code>Type</code> other than
 * 					<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code>
 *                   <code>Type</code> other than
 * 					HEADER, METHOD, QUERY_STRING, URI, or BODY.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code>
 * 					but no value for <code>Data</code>.</p>
 *             </li>
 *             <li>
 * 			   		       <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p>
 * 			   	     </li>
 *          </ul>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFServiceException}
 * <p>Base exception class for all service exceptions from WAF service.</p>
 *
 */
export class GetRateBasedRuleManagedKeysCommand extends $Command<
  GetRateBasedRuleManagedKeysCommandInput,
  GetRateBasedRuleManagedKeysCommandOutput,
  WAFClientResolvedConfig
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
  constructor(readonly input: GetRateBasedRuleManagedKeysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRateBasedRuleManagedKeysCommandInput, GetRateBasedRuleManagedKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRateBasedRuleManagedKeysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFClient";
    const commandName = "GetRateBasedRuleManagedKeysCommand";
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
  private serialize(input: GetRateBasedRuleManagedKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRateBasedRuleManagedKeysCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRateBasedRuleManagedKeysCommandOutput> {
    return de_GetRateBasedRuleManagedKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
