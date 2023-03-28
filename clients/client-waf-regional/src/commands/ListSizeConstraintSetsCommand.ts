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

import { ListSizeConstraintSetsRequest, ListSizeConstraintSetsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListSizeConstraintSetsCommand,
  serializeAws_json1_1ListSizeConstraintSetsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 *
 * The input for {@link ListSizeConstraintSetsCommand}.
 */
export interface ListSizeConstraintSetsCommandInput extends ListSizeConstraintSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListSizeConstraintSetsCommand}.
 */
export interface ListSizeConstraintSetsCommandOutput extends ListSizeConstraintSetsResponse, __MetadataBearer {}

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
 * 		       <p>Returns an array of <a>SizeConstraintSetSummary</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, ListSizeConstraintSetsCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, ListSizeConstraintSetsCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const input = { // ListSizeConstraintSetsRequest
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListSizeConstraintSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListSizeConstraintSetsCommandInput - {@link ListSizeConstraintSetsCommandInput}
 * @returns {@link ListSizeConstraintSetsCommandOutput}
 * @see {@link ListSizeConstraintSetsCommandInput} for command's `input` shape.
 * @see {@link ListSizeConstraintSetsCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
 *
 *
 * @example To list a size constraint sets
 * ```javascript
 * // The following example returns an array of up to 100 size contraint match sets.
 * const input = {
 *   "Limit": 100
 * };
 * const command = new ListSizeConstraintSetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SizeConstraintSets": [
 *     {
 *       "Name": "MySampleSizeConstraintSet",
 *       "SizeConstraintSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
 *     }
 *   ]
 * }
 * *\/
 * // example id: listsizeconstraintsets-1474300067597
 * ```
 *
 */
export class ListSizeConstraintSetsCommand extends $Command<
  ListSizeConstraintSetsCommandInput,
  ListSizeConstraintSetsCommandOutput,
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
  constructor(readonly input: ListSizeConstraintSetsCommandInput) {
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
  ): Handler<ListSizeConstraintSetsCommandInput, ListSizeConstraintSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSizeConstraintSetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "ListSizeConstraintSetsCommand";
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
  private serialize(input: ListSizeConstraintSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSizeConstraintSetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSizeConstraintSetsCommandOutput> {
    return deserializeAws_json1_1ListSizeConstraintSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
