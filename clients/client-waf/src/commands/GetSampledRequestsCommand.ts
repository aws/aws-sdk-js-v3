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

import { GetSampledRequestsRequest, GetSampledRequestsResponse } from "../models/models_0";
import { de_GetSampledRequestsCommand, se_GetSampledRequestsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

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
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Gets detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests that your AWS resource received during a time range that you choose. You can specify a sample size of up to 500 requests, and you can specify any time range in the previous three hours.</p>
 * 		       <p>
 *             <code>GetSampledRequests</code> returns a time range, which is usually the time range that you specified. However, if your resource
 * 			(such as a CloudFront distribution) received 5,000 requests before the specified time range elapsed, <code>GetSampledRequests</code>
 * 			returns an updated time range. This new time range indicates the actual period during which AWS WAF selected the requests in the sample.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, GetSampledRequestsCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, GetSampledRequestsCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const input = { // GetSampledRequestsRequest
 *   WebAclId: "STRING_VALUE", // required
 *   RuleId: "STRING_VALUE", // required
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
 * //       RuleWithinRuleGroup: "STRING_VALUE",
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
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFServiceException}
 * <p>Base exception class for all service exceptions from WAF service.</p>
 *
 * @example To get a sampled requests
 * ```javascript
 * // The following example returns detailed information about 100 requests --a sample-- that AWS WAF randomly selects from among the first 5,000 requests that your AWS resource received between the time period 2016-09-27T15:50Z to 2016-09-27T15:50Z.
 * const input = {
 *   "MaxItems": 100,
 *   "RuleId": "WAFRule-1-Example",
 *   "TimeWindow": {
 *     "EndTime": "2016-09-27T15:50Z",
 *     "StartTime": "2016-09-27T15:50Z"
 *   },
 *   "WebAclId": "createwebacl-1472061481310"
 * };
 * const command = new GetSampledRequestsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "PopulationSize": 50,
 *   "SampledRequests": [
 *     {
 *       "Action": "BLOCK",
 *       "Request": {
 *         "ClientIP": "192.0.2.44",
 *         "Country": "US",
 *         "HTTPVersion": "HTTP/1.1",
 *         "Headers": [
 *           {
 *             "Name": "User-Agent",
 *             "Value": "BadBot "
 *           }
 *         ],
 *         "Method": "HEAD"
 *       },
 *       "Timestamp": "2016-09-27T14:55Z",
 *       "Weight": 1
 *     }
 *   ],
 *   "TimeWindow": {
 *     "EndTime": "2016-09-27T15:50Z",
 *     "StartTime": "2016-09-27T14:50Z"
 *   }
 * }
 * *\/
 * // example id: getsampledrequests-1474927997195
 * ```
 *
 */
export class GetSampledRequestsCommand extends $Command<
  GetSampledRequestsCommandInput,
  GetSampledRequestsCommandOutput,
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
    configuration: WAFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSampledRequestsCommandInput, GetSampledRequestsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSampledRequestsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFClient";
    const commandName = "GetSampledRequestsCommand";
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
