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

import { ListSqlInjectionMatchSetsRequest, ListSqlInjectionMatchSetsResponse } from "../models/models_0";
import { de_ListSqlInjectionMatchSetsCommand, se_ListSqlInjectionMatchSetsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSqlInjectionMatchSetsCommand}.
 */
export interface ListSqlInjectionMatchSetsCommandInput extends ListSqlInjectionMatchSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListSqlInjectionMatchSetsCommand}.
 */
export interface ListSqlInjectionMatchSetsCommandOutput extends ListSqlInjectionMatchSetsResponse, __MetadataBearer {}

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
 * 		       <p>Returns an array of <a>SqlInjectionMatchSet</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, ListSqlInjectionMatchSetsCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, ListSqlInjectionMatchSetsCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const input = { // ListSqlInjectionMatchSetsRequest
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListSqlInjectionMatchSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListSqlInjectionMatchSetsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   SqlInjectionMatchSets: [ // SqlInjectionMatchSetSummaries
 * //     { // SqlInjectionMatchSetSummary
 * //       SqlInjectionMatchSetId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSqlInjectionMatchSetsCommandInput - {@link ListSqlInjectionMatchSetsCommandInput}
 * @returns {@link ListSqlInjectionMatchSetsCommandOutput}
 * @see {@link ListSqlInjectionMatchSetsCommandInput} for command's `input` shape.
 * @see {@link ListSqlInjectionMatchSetsCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
 *
 * @throws {@link WAFRegionalServiceException}
 * <p>Base exception class for all service exceptions from WAFRegional service.</p>
 *
 * @example To list SQL injection match sets
 * ```javascript
 * // The following example returns an array of up to 100 SQL injection match sets.
 * const input = {
 *   "Limit": 100
 * };
 * const command = new ListSqlInjectionMatchSetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SqlInjectionMatchSets": [
 *     {
 *       "Name": "MySQLInjectionMatchSet",
 *       "SqlInjectionMatchSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
 *     }
 *   ]
 * }
 * *\/
 * // example id: listsqlinjectionmatchset-1474493560103
 * ```
 *
 */
export class ListSqlInjectionMatchSetsCommand extends $Command<
  ListSqlInjectionMatchSetsCommandInput,
  ListSqlInjectionMatchSetsCommandOutput,
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
  constructor(readonly input: ListSqlInjectionMatchSetsCommandInput) {
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
  ): Handler<ListSqlInjectionMatchSetsCommandInput, ListSqlInjectionMatchSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSqlInjectionMatchSetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "ListSqlInjectionMatchSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWAF_Regional_20161128",
        operation: "ListSqlInjectionMatchSets",
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
  private serialize(input: ListSqlInjectionMatchSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSqlInjectionMatchSetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSqlInjectionMatchSetsCommandOutput> {
    return de_ListSqlInjectionMatchSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
