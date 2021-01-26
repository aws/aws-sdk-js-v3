import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { CreateGeoMatchSetRequest, CreateGeoMatchSetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateGeoMatchSetCommand,
  serializeAws_json1_1CreateGeoMatchSetCommand,
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

export type CreateGeoMatchSetCommandInput = CreateGeoMatchSetRequest;
export type CreateGeoMatchSetCommandOutput = CreateGeoMatchSetResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Creates an <a>GeoMatchSet</a>, which you use to specify which web requests you want to allow or block based on the country
 * 			that the requests originate from. For example, if you're receiving a lot of requests from one or more countries and you want to block the requests, you can create an <code>GeoMatchSet</code> that contains those countries and then configure AWS WAF to block the requests. </p>
 * 		       <p>To create and configure a <code>GeoMatchSet</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 * 				<code>CreateGeoMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>CreateGeoMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 * 				<a>UpdateGeoMatchSet</a> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <code>UpdateGeoMatchSetSet</code> request to specify the countries that you want AWS WAF to watch for.</p>
 *             </li>
 *          </ol>
 * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 */
export class CreateGeoMatchSetCommand extends $Command<
  CreateGeoMatchSetCommandInput,
  CreateGeoMatchSetCommandOutput,
  WAFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateGeoMatchSetCommandInput) {
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
  ): Handler<CreateGeoMatchSetCommandInput, CreateGeoMatchSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFClient";
    const commandName = "CreateGeoMatchSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGeoMatchSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateGeoMatchSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateGeoMatchSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateGeoMatchSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGeoMatchSetCommandOutput> {
    return deserializeAws_json1_1CreateGeoMatchSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
