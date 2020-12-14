import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { GetChangeTokenRequest, GetChangeTokenResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetChangeTokenCommand,
  serializeAws_json1_1GetChangeTokenCommand,
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

export type GetChangeTokenCommandInput = GetChangeTokenRequest;
export type GetChangeTokenCommandOutput = GetChangeTokenResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>When you want to create, update, or delete AWS WAF objects, get a change token and include the change token in the create, update, or delete request. Change tokens ensure that your application doesn't submit conflicting requests to AWS WAF.</p>
 * 		       <p>Each create, update, or delete request must use a unique change token. If your application submits a <code>GetChangeToken</code> request
 * 			and then submits a second <code>GetChangeToken</code> request before submitting a create, update, or delete request, the second
 * 			<code>GetChangeToken</code> request returns the same value as the first <code>GetChangeToken</code> request.</p>
 * 		       <p>When you use a change token in a create, update, or delete request, the status of the change token changes to <code>PENDING</code>,
 * 			which indicates that AWS WAF is propagating the change to all AWS WAF servers. Use <code>GetChangeTokenStatus</code> to determine the
 * 			status of your change token.</p>
 */
export class GetChangeTokenCommand extends $Command<
  GetChangeTokenCommandInput,
  GetChangeTokenCommandOutput,
  WAFRegionalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetChangeTokenCommandInput) {
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
  ): Handler<GetChangeTokenCommandInput, GetChangeTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "GetChangeTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetChangeTokenRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetChangeTokenResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetChangeTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetChangeTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetChangeTokenCommandOutput> {
    return deserializeAws_json1_1GetChangeTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
