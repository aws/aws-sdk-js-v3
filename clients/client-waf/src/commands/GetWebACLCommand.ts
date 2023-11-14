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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GetWebACLRequest, GetWebACLResponse } from "../models/models_0";
import { de_GetWebACLCommand, se_GetWebACLCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetWebACLCommand}.
 */
export interface GetWebACLCommandInput extends GetWebACLRequest {}
/**
 * @public
 *
 * The output of {@link GetWebACLCommand}.
 */
export interface GetWebACLCommandOutput extends GetWebACLResponse, __MetadataBearer {}

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
 * 		       <p>Returns the <a>WebACL</a> that is specified by <code>WebACLId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, GetWebACLCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, GetWebACLCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const input = { // GetWebACLRequest
 *   WebACLId: "STRING_VALUE", // required
 * };
 * const command = new GetWebACLCommand(input);
 * const response = await client.send(command);
 * // { // GetWebACLResponse
 * //   WebACL: { // WebACL
 * //     WebACLId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     MetricName: "STRING_VALUE",
 * //     DefaultAction: { // WafAction
 * //       Type: "BLOCK" || "ALLOW" || "COUNT", // required
 * //     },
 * //     Rules: [ // ActivatedRules // required
 * //       { // ActivatedRule
 * //         Priority: Number("int"), // required
 * //         RuleId: "STRING_VALUE", // required
 * //         Action: {
 * //           Type: "BLOCK" || "ALLOW" || "COUNT", // required
 * //         },
 * //         OverrideAction: { // WafOverrideAction
 * //           Type: "NONE" || "COUNT", // required
 * //         },
 * //         Type: "REGULAR" || "RATE_BASED" || "GROUP",
 * //         ExcludedRules: [ // ExcludedRules
 * //           { // ExcludedRule
 * //             RuleId: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     WebACLArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWebACLCommandInput - {@link GetWebACLCommandInput}
 * @returns {@link GetWebACLCommandOutput}
 * @see {@link GetWebACLCommandInput} for command's `input` shape.
 * @see {@link GetWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFServiceException}
 * <p>Base exception class for all service exceptions from WAF service.</p>
 *
 * @example To get a web ACL
 * ```javascript
 * // The following example returns the details of a web ACL with the ID createwebacl-1472061481310.
 * const input = {
 *   "WebACLId": "createwebacl-1472061481310"
 * };
 * const command = new GetWebACLCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "WebACL": {
 *     "DefaultAction": {
 *       "Type": "ALLOW"
 *     },
 *     "MetricName": "CreateExample",
 *     "Name": "CreateExample",
 *     "Rules": [
 *       {
 *         "Action": {
 *           "Type": "ALLOW"
 *         },
 *         "Priority": 1,
 *         "RuleId": "WAFRule-1-Example"
 *       }
 *     ],
 *     "WebACLId": "createwebacl-1472061481310"
 *   }
 * }
 * *\/
 * // example id: getwebacl-1475006348525
 * ```
 *
 */
export class GetWebACLCommand extends $Command<GetWebACLCommandInput, GetWebACLCommandOutput, WAFClientResolvedConfig> {
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
  constructor(readonly input: GetWebACLCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetWebACLCommandInput, GetWebACLCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetWebACLCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFClient";
    const commandName = "GetWebACLCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWAF_20150824",
        operation: "GetWebACL",
      },
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
  private serialize(input: GetWebACLCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetWebACLCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWebACLCommandOutput> {
    return de_GetWebACLCommand(output, context);
  }
}
