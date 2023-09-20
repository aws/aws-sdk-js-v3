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

import { GetSampledRequestsRequest, GetSampledRequestsResponse } from "../models/models_0";
import { de_GetSampledRequestsCommand, se_GetSampledRequestsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSampledRequestsCommand}.
 */
export interface GetSampledRequestsCommandInput extends GetSampledRequestsRequest {}
/**
 * @public
 *
 * The output of {@link GetSampledRequestsCommand}.
 */
export interface GetSampledRequestsCommandOutput extends GetSampledRequestsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets detailed information about a specified number of requests--a sample--that WAF
 *          randomly selects from among the first 5,000 requests that your Amazon Web Services resource received
 *          during a time range that you choose. You can specify a sample size of up to 500 requests,
 *          and you can specify any time range in the previous three hours.</p>
 *          <p>
 *             <code>GetSampledRequests</code> returns a time range, which is usually the time range that
 *          you specified. However, if your resource (such as a CloudFront distribution) received 5,000
 *          requests before the specified time range elapsed, <code>GetSampledRequests</code> returns
 *          an updated time range. This new time range indicates the actual period during which WAF
 *          selected the requests in the sample.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetSampledRequestsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetSampledRequestsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const input = { // GetSampledRequestsRequest
 *   WebAclArn: "STRING_VALUE", // required
 *   RuleMetricName: "STRING_VALUE", // required
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   TimeWindow: { // TimeWindow
 *     StartTime: new Date("TIMESTAMP"), // required
 *     EndTime: new Date("TIMESTAMP"), // required
 *   },
 *   MaxItems: Number("long"), // required
 * };
 * const command = new GetSampledRequestsCommand(input);
 * const response = await client.send(command);
 * // { // GetSampledRequestsResponse
 * //   SampledRequests: [ // SampledHTTPRequests
 * //     { // SampledHTTPRequest
 * //       Request: { // HTTPRequest
 * //         ClientIP: "STRING_VALUE",
 * //         Country: "STRING_VALUE",
 * //         URI: "STRING_VALUE",
 * //         Method: "STRING_VALUE",
 * //         HTTPVersion: "STRING_VALUE",
 * //         Headers: [ // HTTPHeaders
 * //           { // HTTPHeader
 * //             Name: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       Weight: Number("long"), // required
 * //       Timestamp: new Date("TIMESTAMP"),
 * //       Action: "STRING_VALUE",
 * //       RuleNameWithinRuleGroup: "STRING_VALUE",
 * //       RequestHeadersInserted: [
 * //         {
 * //           Name: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ResponseCodeSent: Number("int"),
 * //       Labels: [ // Labels
 * //         { // Label
 * //           Name: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       CaptchaResponse: { // CaptchaResponse
 * //         ResponseCode: Number("int"),
 * //         SolveTimestamp: Number("long"),
 * //         FailureReason: "TOKEN_MISSING" || "TOKEN_EXPIRED" || "TOKEN_INVALID" || "TOKEN_DOMAIN_MISMATCH",
 * //       },
 * //       ChallengeResponse: { // ChallengeResponse
 * //         ResponseCode: Number("int"),
 * //         SolveTimestamp: Number("long"),
 * //         FailureReason: "TOKEN_MISSING" || "TOKEN_EXPIRED" || "TOKEN_INVALID" || "TOKEN_DOMAIN_MISMATCH",
 * //       },
 * //       OverriddenAction: "STRING_VALUE",
 * //     },
 * //   ],
 * //   PopulationSize: Number("long"),
 * //   TimeWindow: { // TimeWindow
 * //     StartTime: new Date("TIMESTAMP"), // required
 * //     EndTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSampledRequestsCommandInput - {@link GetSampledRequestsCommandInput}
 * @returns {@link GetSampledRequestsCommandOutput}
 * @see {@link GetSampledRequestsCommandInput} for command's `input` shape.
 * @see {@link GetSampledRequestsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
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
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 */
export class GetSampledRequestsCommand extends $Command<
  GetSampledRequestsCommandInput,
  GetSampledRequestsCommandOutput,
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
  constructor(readonly input: GetSampledRequestsCommandInput) {
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
  ): Handler<GetSampledRequestsCommandInput, GetSampledRequestsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSampledRequestsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "GetSampledRequestsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWAF_20190729",
        operation: "GetSampledRequests",
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
  private serialize(input: GetSampledRequestsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSampledRequestsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSampledRequestsCommandOutput> {
    return de_GetSampledRequestsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
