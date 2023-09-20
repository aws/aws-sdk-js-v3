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

import { GenerateMobileSdkReleaseUrlRequest, GenerateMobileSdkReleaseUrlResponse } from "../models/models_0";
import { de_GenerateMobileSdkReleaseUrlCommand, se_GenerateMobileSdkReleaseUrlCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GenerateMobileSdkReleaseUrlCommand}.
 */
export interface GenerateMobileSdkReleaseUrlCommandInput extends GenerateMobileSdkReleaseUrlRequest {}
/**
 * @public
 *
 * The output of {@link GenerateMobileSdkReleaseUrlCommand}.
 */
export interface GenerateMobileSdkReleaseUrlCommandOutput
  extends GenerateMobileSdkReleaseUrlResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Generates a presigned download URL for the specified release of the mobile SDK.</p>
 *          <p>The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see
 * <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GenerateMobileSdkReleaseUrlCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GenerateMobileSdkReleaseUrlCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const input = { // GenerateMobileSdkReleaseUrlRequest
 *   Platform: "IOS" || "ANDROID", // required
 *   ReleaseVersion: "STRING_VALUE", // required
 * };
 * const command = new GenerateMobileSdkReleaseUrlCommand(input);
 * const response = await client.send(command);
 * // { // GenerateMobileSdkReleaseUrlResponse
 * //   Url: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GenerateMobileSdkReleaseUrlCommandInput - {@link GenerateMobileSdkReleaseUrlCommandInput}
 * @returns {@link GenerateMobileSdkReleaseUrlCommandOutput}
 * @see {@link GenerateMobileSdkReleaseUrlCommandInput} for command's `input` shape.
 * @see {@link GenerateMobileSdkReleaseUrlCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *  <p>The operation isn't valid. </p>
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *  <p>The operation failed because WAF didn't recognize a parameter in the request. For
 *          example: </p>
 *          <ul>
 *             <li>
 *                <p>You specified a parameter name or value that isn't valid.</p>
 *             </li>
 *             <li>
 *                <p>Your nested statement isn't valid. You might have tried to nest a statement that
 *                can’t be nested. </p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>DefaultAction</code> that
 *                isn't among the types available at <a>DefaultAction</a>.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                with which a web ACL can't be associated.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>WAF couldn’t perform the operation because your resource doesn't exist.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. </p>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 */
export class GenerateMobileSdkReleaseUrlCommand extends $Command<
  GenerateMobileSdkReleaseUrlCommandInput,
  GenerateMobileSdkReleaseUrlCommandOutput,
  WAFV2ClientResolvedConfig
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
  constructor(readonly input: GenerateMobileSdkReleaseUrlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GenerateMobileSdkReleaseUrlCommandInput, GenerateMobileSdkReleaseUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GenerateMobileSdkReleaseUrlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "GenerateMobileSdkReleaseUrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWAF_20190729",
        operation: "GenerateMobileSdkReleaseUrl",
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
  private serialize(input: GenerateMobileSdkReleaseUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GenerateMobileSdkReleaseUrlCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GenerateMobileSdkReleaseUrlCommandOutput> {
    return de_GenerateMobileSdkReleaseUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
