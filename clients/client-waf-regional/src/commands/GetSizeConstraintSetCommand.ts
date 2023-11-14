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

import { GetSizeConstraintSetRequest, GetSizeConstraintSetResponse } from "../models/models_0";
import { de_GetSizeConstraintSetCommand, se_GetSizeConstraintSetCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSizeConstraintSetCommand}.
 */
export interface GetSizeConstraintSetCommandInput extends GetSizeConstraintSetRequest {}
/**
 * @public
 *
 * The output of {@link GetSizeConstraintSetCommand}.
 */
export interface GetSizeConstraintSetCommandOutput extends GetSizeConstraintSetResponse, __MetadataBearer {}

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
 * 		       <p>Returns the <a>SizeConstraintSet</a> specified by <code>SizeConstraintSetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, GetSizeConstraintSetCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, GetSizeConstraintSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const input = { // GetSizeConstraintSetRequest
 *   SizeConstraintSetId: "STRING_VALUE", // required
 * };
 * const command = new GetSizeConstraintSetCommand(input);
 * const response = await client.send(command);
 * // { // GetSizeConstraintSetResponse
 * //   SizeConstraintSet: { // SizeConstraintSet
 * //     SizeConstraintSetId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     SizeConstraints: [ // SizeConstraints // required
 * //       { // SizeConstraint
 * //         FieldToMatch: { // FieldToMatch
 * //           Type: "URI" || "QUERY_STRING" || "HEADER" || "METHOD" || "BODY" || "SINGLE_QUERY_ARG" || "ALL_QUERY_ARGS", // required
 * //           Data: "STRING_VALUE",
 * //         },
 * //         TextTransformation: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE", // required
 * //         ComparisonOperator: "EQ" || "NE" || "LE" || "LT" || "GE" || "GT", // required
 * //         Size: Number("long"), // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSizeConstraintSetCommandInput - {@link GetSizeConstraintSetCommandInput}
 * @returns {@link GetSizeConstraintSetCommandOutput}
 * @see {@link GetSizeConstraintSetCommandInput} for command's `input` shape.
 * @see {@link GetSizeConstraintSetCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
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
 * @throws {@link WAFRegionalServiceException}
 * <p>Base exception class for all service exceptions from WAFRegional service.</p>
 *
 * @example To get a size constraint set
 * ```javascript
 * // The following example returns the details of a size constraint match set with the ID example1ds3t-46da-4fdb-b8d5-abc321j569j5.
 * const input = {
 *   "SizeConstraintSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
 * };
 * const command = new GetSizeConstraintSetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
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
 * // example id: getsizeconstraintset-1475005422493
 * ```
 *
 */
export class GetSizeConstraintSetCommand extends $Command<
  GetSizeConstraintSetCommandInput,
  GetSizeConstraintSetCommandOutput,
  WAFRegionalClientResolvedConfig
> {
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
  constructor(readonly input: GetSizeConstraintSetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFRegionalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSizeConstraintSetCommandInput, GetSizeConstraintSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSizeConstraintSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "GetSizeConstraintSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWAF_Regional_20161128",
        operation: "GetSizeConstraintSet",
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
  private serialize(input: GetSizeConstraintSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSizeConstraintSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSizeConstraintSetCommandOutput> {
    return de_GetSizeConstraintSetCommand(output, context);
  }
}
