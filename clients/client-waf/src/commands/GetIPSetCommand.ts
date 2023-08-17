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

import { GetIPSetRequest, GetIPSetResponse } from "../models/models_0";
import { de_GetIPSetCommand, se_GetIPSetCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIPSetCommand}.
 */
export interface GetIPSetCommandInput extends GetIPSetRequest {}
/**
 * @public
 *
 * The output of {@link GetIPSetCommand}.
 */
export interface GetIPSetCommandOutput extends GetIPSetResponse, __MetadataBearer {}

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
 * 		       <p>Returns the <a>IPSet</a> that is specified by <code>IPSetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, GetIPSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, GetIPSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const input = { // GetIPSetRequest
 *   IPSetId: "STRING_VALUE", // required
 * };
 * const command = new GetIPSetCommand(input);
 * const response = await client.send(command);
 * // { // GetIPSetResponse
 * //   IPSet: { // IPSet
 * //     IPSetId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     IPSetDescriptors: [ // IPSetDescriptors // required
 * //       { // IPSetDescriptor
 * //         Type: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIPSetCommandInput - {@link GetIPSetCommandInput}
 * @returns {@link GetIPSetCommandOutput}
 * @see {@link GetIPSetCommandInput} for command's `input` shape.
 * @see {@link GetIPSetCommandOutput} for command's `response` shape.
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
 * @example To get an IP set
 * ```javascript
 * // The following example returns the details of an IP match set with the ID example1ds3t-46da-4fdb-b8d5-abc321j569j5.
 * const input = {
 *   "IPSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
 * };
 * const command = new GetIPSetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "IPSet": {
 *     "IPSetDescriptors": [
 *       {
 *         "Type": "IPV4",
 *         "Value": "192.0.2.44/32"
 *       }
 *     ],
 *     "IPSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
 *     "Name": "MyIPSetFriendlyName"
 *   }
 * }
 * *\/
 * // example id: getipset-1474658688675
 * ```
 *
 */
export class GetIPSetCommand extends $Command<GetIPSetCommandInput, GetIPSetCommandOutput, WAFClientResolvedConfig> {
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
  constructor(readonly input: GetIPSetCommandInput) {
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
  ): Handler<GetIPSetCommandInput, GetIPSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetIPSetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFClient";
    const commandName = "GetIPSetCommand";
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
  private serialize(input: GetIPSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetIPSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIPSetCommandOutput> {
    return de_GetIPSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
