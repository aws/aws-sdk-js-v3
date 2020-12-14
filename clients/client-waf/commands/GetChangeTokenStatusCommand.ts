import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { GetChangeTokenStatusRequest, GetChangeTokenStatusResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetChangeTokenStatusCommand,
  serializeAws_json1_1GetChangeTokenStatusCommand,
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

export type GetChangeTokenStatusCommandInput = GetChangeTokenStatusRequest;
export type GetChangeTokenStatusCommandOutput = GetChangeTokenStatusResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Returns the status of a <code>ChangeToken</code> that you got by calling <a>GetChangeToken</a>. <code>ChangeTokenStatus</code> is
 * 			one of the following values:</p>
 * 		       <ul>
 *             <li>
 *                <p>
 *                   <code>PROVISIONED</code>: You requested the change token by calling <code>GetChangeToken</code>, but you haven't used it yet
 * 				in a call to create, update, or delete an AWS WAF object.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PENDING</code>: AWS WAF is propagating the create, update, or delete request to all AWS WAF servers.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>INSYNC</code>: Propagation is complete.</p>
 *             </li>
 *          </ul>
 */
export class GetChangeTokenStatusCommand extends $Command<
  GetChangeTokenStatusCommandInput,
  GetChangeTokenStatusCommandOutput,
  WAFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetChangeTokenStatusCommandInput) {
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
  ): Handler<GetChangeTokenStatusCommandInput, GetChangeTokenStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFClient";
    const commandName = "GetChangeTokenStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetChangeTokenStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetChangeTokenStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetChangeTokenStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetChangeTokenStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetChangeTokenStatusCommandOutput> {
    return deserializeAws_json1_1GetChangeTokenStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
