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

import { GetChangeTokenStatusRequest, GetChangeTokenStatusResponse } from "../models/models_0";
import { de_GetChangeTokenStatusCommand, se_GetChangeTokenStatusCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetChangeTokenStatusCommand}.
 */
export interface GetChangeTokenStatusCommandInput extends GetChangeTokenStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetChangeTokenStatusCommand}.
 */
export interface GetChangeTokenStatusCommandOutput extends GetChangeTokenStatusResponse, __MetadataBearer {}

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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, GetChangeTokenStatusCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, GetChangeTokenStatusCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const input = { // GetChangeTokenStatusRequest
 *   ChangeToken: "STRING_VALUE", // required
 * };
 * const command = new GetChangeTokenStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetChangeTokenStatusResponse
 * //   ChangeTokenStatus: "PROVISIONED" || "PENDING" || "INSYNC",
 * // };
 *
 * ```
 *
 * @param GetChangeTokenStatusCommandInput - {@link GetChangeTokenStatusCommandInput}
 * @returns {@link GetChangeTokenStatusCommandOutput}
 * @see {@link GetChangeTokenStatusCommandInput} for command's `input` shape.
 * @see {@link GetChangeTokenStatusCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFRegionalServiceException}
 * <p>Base exception class for all service exceptions from WAFRegional service.</p>
 *
 * @example To get the change token status
 * ```javascript
 * // The following example returns the status of a change token with the ID abcd12f2-46da-4fdb-b8d5-fbd4c466928f.
 * const input = {
 *   "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
 * };
 * const command = new GetChangeTokenStatusCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ChangeTokenStatus": "PENDING"
 * }
 * *\/
 * // example id: getchangetokenstatus-1474658417107
 * ```
 *
 */
export class GetChangeTokenStatusCommand extends $Command<
  GetChangeTokenStatusCommandInput,
  GetChangeTokenStatusCommandOutput,
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
    configuration: WAFRegionalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetChangeTokenStatusCommandInput, GetChangeTokenStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetChangeTokenStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "GetChangeTokenStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWAF_Regional_20161128",
        operation: "GetChangeTokenStatus",
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
  private serialize(input: GetChangeTokenStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetChangeTokenStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetChangeTokenStatusCommandOutput> {
    return de_GetChangeTokenStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
