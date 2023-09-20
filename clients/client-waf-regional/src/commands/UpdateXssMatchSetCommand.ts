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

import { UpdateXssMatchSetRequest, UpdateXssMatchSetResponse } from "../models/models_0";
import { de_UpdateXssMatchSetCommand, se_UpdateXssMatchSetCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateXssMatchSetCommand}.
 */
export interface UpdateXssMatchSetCommandInput extends UpdateXssMatchSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateXssMatchSetCommand}.
 */
export interface UpdateXssMatchSetCommandOutput extends UpdateXssMatchSetResponse, __MetadataBearer {}

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
 * 		       <p>Inserts or deletes <a>XssMatchTuple</a> objects (filters) in an <a>XssMatchSet</a>.
 * 			For each <code>XssMatchTuple</code> object, you specify the following values:</p>
 * 		       <ul>
 *             <li>
 *                <p>
 *                   <code>Action</code>: Whether to insert the object into or delete the object from the
 *                array. To change an
 *                <code>XssMatchTuple</code>, you delete the existing object and add a new
 *                one.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FieldToMatch</code>: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter,
 * 				the name of the header or parameter.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TextTransformation</code>: Which text transformation, if any, to perform on the web request before
 * 				inspecting the request for cross-site scripting attacks.</p>
 * 				           <p>You can only specify a single type of TextTransformation.</p>
 *             </li>
 *          </ul>
 * 		       <p>You use <code>XssMatchSet</code> objects to specify which CloudFront requests
 *          that
 *          you want to allow, block, or count. For example, if you're receiving
 *          requests that contain cross-site scripting attacks in the request body and you want to
 *          block the requests, you can create an <code>XssMatchSet</code> with the applicable
 *          settings, and then configure AWS WAF to block the requests. </p>
 * 		       <p>To create and configure an <code>XssMatchSet</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Submit a <a>CreateXssMatchSet</a> request.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 * 				<a>UpdateIPSet</a> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <code>UpdateXssMatchSet</code> request to specify the parts of web requests that you want AWS WAF to
 * 				inspect for cross-site scripting attacks.</p>
 *             </li>
 *          </ol>
 * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, UpdateXssMatchSetCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, UpdateXssMatchSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const input = { // UpdateXssMatchSetRequest
 *   XssMatchSetId: "STRING_VALUE", // required
 *   ChangeToken: "STRING_VALUE", // required
 *   Updates: [ // XssMatchSetUpdates // required
 *     { // XssMatchSetUpdate
 *       Action: "INSERT" || "DELETE", // required
 *       XssMatchTuple: { // XssMatchTuple
 *         FieldToMatch: { // FieldToMatch
 *           Type: "URI" || "QUERY_STRING" || "HEADER" || "METHOD" || "BODY" || "SINGLE_QUERY_ARG" || "ALL_QUERY_ARGS", // required
 *           Data: "STRING_VALUE",
 *         },
 *         TextTransformation: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateXssMatchSetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateXssMatchSetResponse
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateXssMatchSetCommandInput - {@link UpdateXssMatchSetCommandInput}
 * @returns {@link UpdateXssMatchSetCommandOutput}
 * @see {@link UpdateXssMatchSetCommandInput} for command's `input` shape.
 * @see {@link UpdateXssMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *  <p>The operation failed because there was nothing to do. For example:</p>
 * 			      <ul>
 *             <li>
 *                <p>You tried to remove a <code>Rule</code> from a <code>WebACL</code>, but the <code>Rule</code> isn't in the specified <code>WebACL</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to remove an IP address from an <code>IPSet</code>, but the IP address isn't in the specified <code>IPSet</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to remove a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code>
 * 					isn't in the specified <code>WebACL</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to add a <code>Rule</code> to a <code>WebACL</code>, but the <code>Rule</code> already exists in the
 * 					specified <code>WebACL</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to add a <code>ByteMatchTuple</code> to a <code>ByteMatchSet</code>, but the <code>ByteMatchTuple</code>
 *                already exists in the specified <code>WebACL</code>.</p>
 *             </li>
 *          </ul>
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
 * @throws {@link WAFLimitsExceededException} (client fault)
 *  <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create
 * 			for an AWS account. For more information, see
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
 *
 * @throws {@link WAFNonexistentContainerException} (client fault)
 *  <p>The operation failed because you tried to add an object to or delete an object from another object that doesn't exist. For example:</p>
 * 		       <ul>
 *             <li>
 *                <p>You tried to add a <code>Rule</code> to or delete a <code>Rule</code> from a <code>WebACL</code> that doesn't exist.</p>
 *             </li>
 *             <li>
 *                <p>You tried to add a <code>ByteMatchSet</code> to or delete a <code>ByteMatchSet</code> from a <code>Rule</code> that doesn't exist.</p>
 *             </li>
 *             <li>
 *                <p>You tried to add an IP address to or delete an IP address from an <code>IPSet</code> that doesn't exist.</p>
 *             </li>
 *             <li>
 *                <p>You tried to add a <code>ByteMatchTuple</code> to or delete a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code>
 * 				that doesn't exist.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFStaleDataException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
 *
 * @throws {@link WAFRegionalServiceException}
 * <p>Base exception class for all service exceptions from WAFRegional service.</p>
 *
 * @example To update an XSS match set
 * ```javascript
 * // The following example deletes an XssMatchTuple object (filters) in an XssMatchSet with the ID example1ds3t-46da-4fdb-b8d5-abc321j569j5.
 * const input = {
 *   "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *   "Updates": [
 *     {
 *       "Action": "DELETE",
 *       "XssMatchTuple": {
 *         "FieldToMatch": {
 *           "Type": "QUERY_STRING"
 *         },
 *         "TextTransformation": "URL_DECODE"
 *       }
 *     }
 *   ],
 *   "XssMatchSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
 * };
 * const command = new UpdateXssMatchSetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
 * }
 * *\/
 * // example id: updatexssmatchset-1475534098881
 * ```
 *
 */
export class UpdateXssMatchSetCommand extends $Command<
  UpdateXssMatchSetCommandInput,
  UpdateXssMatchSetCommandOutput,
  WAFRegionalClientResolvedConfig
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
  constructor(readonly input: UpdateXssMatchSetCommandInput) {
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
  ): Handler<UpdateXssMatchSetCommandInput, UpdateXssMatchSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateXssMatchSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "UpdateXssMatchSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWAF_Regional_20161128",
        operation: "UpdateXssMatchSet",
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
  private serialize(input: UpdateXssMatchSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateXssMatchSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateXssMatchSetCommandOutput> {
    return de_UpdateXssMatchSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
