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

import { GetByteMatchSetRequest, GetByteMatchSetResponse } from "../models/models_0";
import { de_GetByteMatchSetCommand, se_GetByteMatchSetCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetByteMatchSetCommand}.
 */
export interface GetByteMatchSetCommandInput extends GetByteMatchSetRequest {}
/**
 * @public
 *
 * The output of {@link GetByteMatchSetCommand}.
 */
export interface GetByteMatchSetCommandOutput extends GetByteMatchSetResponse, __MetadataBearer {}

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
 * 		       <p>Returns the <a>ByteMatchSet</a> specified by <code>ByteMatchSetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, GetByteMatchSetCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, GetByteMatchSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const input = { // GetByteMatchSetRequest
 *   ByteMatchSetId: "STRING_VALUE", // required
 * };
 * const command = new GetByteMatchSetCommand(input);
 * const response = await client.send(command);
 * // { // GetByteMatchSetResponse
 * //   ByteMatchSet: { // ByteMatchSet
 * //     ByteMatchSetId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     ByteMatchTuples: [ // ByteMatchTuples // required
 * //       { // ByteMatchTuple
 * //         FieldToMatch: { // FieldToMatch
 * //           Type: "STRING_VALUE", // required
 * //           Data: "STRING_VALUE",
 * //         },
 * //         TargetString: "BLOB_VALUE", // required
 * //         TextTransformation: "STRING_VALUE", // required
 * //         PositionalConstraint: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetByteMatchSetCommandInput - {@link GetByteMatchSetCommandInput}
 * @returns {@link GetByteMatchSetCommandOutput}
 * @see {@link GetByteMatchSetCommandInput} for command's `input` shape.
 * @see {@link GetByteMatchSetCommandOutput} for command's `response` shape.
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
 * @example To get a byte match set
 * ```javascript
 * // The following example returns the details of a byte match set with the ID exampleIDs3t-46da-4fdb-b8d5-abc321j569j5.
 * const input = {
 *   "ByteMatchSetId": "exampleIDs3t-46da-4fdb-b8d5-abc321j569j5"
 * };
 * const command = new GetByteMatchSetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ByteMatchSet": {
 *     "ByteMatchSetId": "exampleIDs3t-46da-4fdb-b8d5-abc321j569j5",
 *     "ByteMatchTuples": [
 *       {
 *         "FieldToMatch": {
 *           "Data": "referer",
 *           "Type": "HEADER"
 *         },
 *         "PositionalConstraint": "CONTAINS",
 *         "TargetString": "badrefer1",
 *         "TextTransformation": "NONE"
 *       }
 *     ],
 *     "Name": "ByteMatchNameExample"
 *   }
 * }
 * *\/
 * // example id: getbytematchset-1473273311532
 * ```
 *
 */
export class GetByteMatchSetCommand extends $Command<
  GetByteMatchSetCommandInput,
  GetByteMatchSetCommandOutput,
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
  constructor(readonly input: GetByteMatchSetCommandInput) {
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
  ): Handler<GetByteMatchSetCommandInput, GetByteMatchSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetByteMatchSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "GetByteMatchSetCommand";
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
  private serialize(input: GetByteMatchSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetByteMatchSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetByteMatchSetCommandOutput> {
    return de_GetByteMatchSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
