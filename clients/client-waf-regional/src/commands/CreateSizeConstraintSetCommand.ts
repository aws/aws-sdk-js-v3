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

import { CreateSizeConstraintSetRequest, CreateSizeConstraintSetResponse } from "../models/models_0";
import { de_CreateSizeConstraintSetCommand, se_CreateSizeConstraintSetCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSizeConstraintSetCommand}.
 */
export interface CreateSizeConstraintSetCommandInput extends CreateSizeConstraintSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateSizeConstraintSetCommand}.
 */
export interface CreateSizeConstraintSetCommandOutput extends CreateSizeConstraintSetResponse, __MetadataBearer {}

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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, CreateSizeConstraintSetCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, CreateSizeConstraintSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const input = { // CreateSizeConstraintSetRequest
 *   Name: "STRING_VALUE", // required
 *   ChangeToken: "STRING_VALUE", // required
 * };
 * const command = new CreateSizeConstraintSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateSizeConstraintSetResponse
 * //   SizeConstraintSet: { // SizeConstraintSet
 * //     SizeConstraintSetId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     SizeConstraints: [ // SizeConstraints // required
 * //       { // SizeConstraint
 * //         FieldToMatch: { // FieldToMatch
 * //           Type: "STRING_VALUE", // required
 * //           Data: "STRING_VALUE",
 * //         },
 * //         TextTransformation: "STRING_VALUE", // required
 * //         ComparisonOperator: "STRING_VALUE", // required
 * //         Size: Number("long"), // required
 * //       },
 * //     ],
 * //   },
 * //   ChangeToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSizeConstraintSetCommandInput - {@link CreateSizeConstraintSetCommandInput}
 * @returns {@link CreateSizeConstraintSetCommandOutput}
 * @see {@link CreateSizeConstraintSetCommandInput} for command's `input` shape.
 * @see {@link CreateSizeConstraintSetCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFDisallowedNameException} (client fault)
 *  <p>The name specified is invalid.</p>
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
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
 * @throws {@link WAFStaleDataException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using a change token that has already been used.</p>
 *
 * @throws {@link WAFRegionalServiceException}
 * <p>Base exception class for all service exceptions from WAFRegional service.</p>
 *
 * @example To create a size constraint
 * ```javascript
 * // The following example creates size constraint set named MySampleSizeConstraintSet.
 * const input = {
 *   "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *   "Name": "MySampleSizeConstraintSet"
 * };
 * const command = new CreateSizeConstraintSetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
 *   "SizeConstraintSet": {
 *     "Name": "MySampleSizeConstraintSet",
 *     "SizeConstraintSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
 *     "SizeConstraints": [
 *       {
 *         "ComparisonOperator": "GT",
 *         "FieldToMatch": {
 *           "Type": "QUERY_STRING"
 *         },
 *         "Size": 0,
 *         "TextTransformation": "NONE"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: createsizeconstraint-1474299140754
 * ```
 *
 */
export class CreateSizeConstraintSetCommand extends $Command<
  CreateSizeConstraintSetCommandInput,
  CreateSizeConstraintSetCommandOutput,
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
    configuration: WAFRegionalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSizeConstraintSetCommandInput, CreateSizeConstraintSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSizeConstraintSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "CreateSizeConstraintSetCommand";
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
  private serialize(input: CreateSizeConstraintSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSizeConstraintSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSizeConstraintSetCommandOutput> {
    return de_CreateSizeConstraintSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
