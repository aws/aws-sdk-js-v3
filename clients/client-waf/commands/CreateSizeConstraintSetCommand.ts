import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { CreateSizeConstraintSetRequest, CreateSizeConstraintSetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateSizeConstraintSetCommand,
  serializeAws_json1_1CreateSizeConstraintSetCommand,
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

export type CreateSizeConstraintSetCommandInput = CreateSizeConstraintSetRequest;
export type CreateSizeConstraintSetCommandOutput = CreateSizeConstraintSetResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Creates a <code>SizeConstraintSet</code>. You then use <a>UpdateSizeConstraintSet</a> to identify the part of a
 * 			web request that you want AWS WAF to check for length, such as the length of the <code>User-Agent</code> header or the length of the query string.
 * 			For example, you can create a <code>SizeConstraintSet</code> that matches any requests that have a query string that is longer than 100 bytes.
 * 			You can then configure AWS WAF to reject those requests.</p>
 * 		       <p>To create and configure a <code>SizeConstraintSet</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 * 				<code>CreateSizeConstraintSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>CreateSizeConstraintSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 * 				<code>UpdateSizeConstraintSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <a>UpdateSizeConstraintSet</a> request to specify the part of the request that you want AWS WAF to inspect
 * 				(for example, the header or the URI) and the value that you want AWS WAF to watch for.</p>
 *             </li>
 *          </ol>
 * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 */
export class CreateSizeConstraintSetCommand extends $Command<
  CreateSizeConstraintSetCommandInput,
  CreateSizeConstraintSetCommandOutput,
  WAFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSizeConstraintSetCommandInput) {
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
  ): Handler<CreateSizeConstraintSetCommandInput, CreateSizeConstraintSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFClient";
    const commandName = "CreateSizeConstraintSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSizeConstraintSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSizeConstraintSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSizeConstraintSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateSizeConstraintSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSizeConstraintSetCommandOutput> {
    return deserializeAws_json1_1CreateSizeConstraintSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
