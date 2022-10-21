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

import {
  GetSampledRequestsRequest,
  GetSampledRequestsRequestFilterSensitiveLog,
  GetSampledRequestsResponse,
  GetSampledRequestsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetSampledRequestsCommand,
  serializeAws_json1_1GetSampledRequestsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

export interface GetSampledRequestsCommandInput extends GetSampledRequestsRequest {}
export interface GetSampledRequestsCommandOutput extends GetSampledRequestsResponse, __MetadataBearer {}

/**
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
 * const command = new GetSampledRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSampledRequestsCommandInput} for command's `input` shape.
 * @see {@link GetSampledRequestsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
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
      inputFilterSensitiveLog: GetSampledRequestsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSampledRequestsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSampledRequestsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSampledRequestsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSampledRequestsCommandOutput> {
    return deserializeAws_json1_1GetSampledRequestsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
