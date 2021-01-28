import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { GetRateBasedRuleManagedKeysRequest, GetRateBasedRuleManagedKeysResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetRateBasedRuleManagedKeysCommand,
  serializeAws_json1_1GetRateBasedRuleManagedKeysCommand,
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

export type GetRateBasedRuleManagedKeysCommandInput = GetRateBasedRuleManagedKeysRequest;
export type GetRateBasedRuleManagedKeysCommandOutput = GetRateBasedRuleManagedKeysResponse & __MetadataBearer;

/**
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
 */
export class GetRateBasedRuleManagedKeysCommand extends $Command<
  GetRateBasedRuleManagedKeysCommandInput,
  GetRateBasedRuleManagedKeysCommandOutput,
  WAFRegionalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
    configuration: WAFRegionalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRateBasedRuleManagedKeysCommandInput, GetRateBasedRuleManagedKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "GetRateBasedRuleManagedKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRateBasedRuleManagedKeysRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRateBasedRuleManagedKeysResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRateBasedRuleManagedKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRateBasedRuleManagedKeysCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRateBasedRuleManagedKeysCommandOutput> {
    return deserializeAws_json1_1GetRateBasedRuleManagedKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
