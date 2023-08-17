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

import { GetSqlInjectionMatchSetRequest, GetSqlInjectionMatchSetResponse } from "../models/models_0";
import { de_GetSqlInjectionMatchSetCommand, se_GetSqlInjectionMatchSetCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSqlInjectionMatchSetCommand}.
 */
export interface GetSqlInjectionMatchSetCommandInput extends GetSqlInjectionMatchSetRequest {}
/**
 * @public
 *
 * The output of {@link GetSqlInjectionMatchSetCommand}.
 */
export interface GetSqlInjectionMatchSetCommandOutput extends GetSqlInjectionMatchSetResponse, __MetadataBearer {}

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
 * 		       <p>Returns the <a>SqlInjectionMatchSet</a> that is specified by <code>SqlInjectionMatchSetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, GetSqlInjectionMatchSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, GetSqlInjectionMatchSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const input = { // GetSqlInjectionMatchSetRequest
 *   SqlInjectionMatchSetId: "STRING_VALUE", // required
 * };
 * const command = new GetSqlInjectionMatchSetCommand(input);
 * const response = await client.send(command);
 * // { // GetSqlInjectionMatchSetResponse
 * //   SqlInjectionMatchSet: { // SqlInjectionMatchSet
 * //     SqlInjectionMatchSetId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     SqlInjectionMatchTuples: [ // SqlInjectionMatchTuples // required
 * //       { // SqlInjectionMatchTuple
 * //         FieldToMatch: { // FieldToMatch
 * //           Type: "STRING_VALUE", // required
 * //           Data: "STRING_VALUE",
 * //         },
 * //         TextTransformation: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSqlInjectionMatchSetCommandInput - {@link GetSqlInjectionMatchSetCommandInput}
 * @returns {@link GetSqlInjectionMatchSetCommandOutput}
 * @see {@link GetSqlInjectionMatchSetCommandInput} for command's `input` shape.
 * @see {@link GetSqlInjectionMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFServiceException}
 * <p>Base exception class for all service exceptions from WAF service.</p>
 *
 * @example To get a SQL injection match set
 * ```javascript
 * // The following example returns the details of a SQL injection match set with the ID example1ds3t-46da-4fdb-b8d5-abc321j569j5.
 * const input = {
 *   "SqlInjectionMatchSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
 * };
 * const command = new GetSqlInjectionMatchSetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SqlInjectionMatchSet": {
 *     "Name": "MySQLInjectionMatchSet",
 *     "SqlInjectionMatchSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
 *     "SqlInjectionMatchTuples": [
 *       {
 *         "FieldToMatch": {
 *           "Type": "QUERY_STRING"
 *         },
 *         "TextTransformation": "URL_DECODE"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: getsqlinjectionmatchset-1475005940137
 * ```
 *
 */
export class GetSqlInjectionMatchSetCommand extends $Command<
  GetSqlInjectionMatchSetCommandInput,
  GetSqlInjectionMatchSetCommandOutput,
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
  constructor(readonly input: GetSqlInjectionMatchSetCommandInput) {
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
  ): Handler<GetSqlInjectionMatchSetCommandInput, GetSqlInjectionMatchSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSqlInjectionMatchSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFClient";
    const commandName = "GetSqlInjectionMatchSetCommand";
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
  private serialize(input: GetSqlInjectionMatchSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSqlInjectionMatchSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSqlInjectionMatchSetCommandOutput> {
    return de_GetSqlInjectionMatchSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
