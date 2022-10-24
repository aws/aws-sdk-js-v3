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

import {
  EnableApplicationLayerAutomaticResponseRequest,
  EnableApplicationLayerAutomaticResponseRequestFilterSensitiveLog,
  EnableApplicationLayerAutomaticResponseResponse,
  EnableApplicationLayerAutomaticResponseResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1EnableApplicationLayerAutomaticResponseCommand,
  serializeAws_json1_1EnableApplicationLayerAutomaticResponseCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

export interface EnableApplicationLayerAutomaticResponseCommandInput
  extends EnableApplicationLayerAutomaticResponseRequest {}
export interface EnableApplicationLayerAutomaticResponseCommandOutput
  extends EnableApplicationLayerAutomaticResponseResponse,
    __MetadataBearer {}

/**
 * <p>Enable the Shield Advanced automatic application layer DDoS mitigation for the protected resource. </p>
 *          <note>
 *             <p>This feature is available for Amazon CloudFront distributions and Application Load Balancers only.</p>
 *          </note>
 *          <p>This causes Shield Advanced to create, verify, and apply WAF rules for DDoS attacks that it detects for the
 *        resource. Shield Advanced applies the rules in a Shield rule group inside the web ACL that you've associated
 *            with the resource. For information about how automatic mitigation works and the requirements for using it, see
 *    <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced-automatic-app-layer-response.html">Shield Advanced automatic application layer DDoS mitigation</a>.</p>
 *          <note>
 *             <p>Don't use this action to make changes to automatic mitigation settings when it's already enabled for a resource. Instead, use <a>UpdateApplicationLayerAutomaticResponse</a>.</p>
 *          </note>
 *          <p>To use this feature, you must associate a web ACL with the protected resource. The web ACL must be created using the latest version of WAF (v2). You can associate the web ACL through the Shield Advanced console
 *            at <a href="https://console.aws.amazon.com/wafv2/shieldv2#/">https://console.aws.amazon.com/wafv2/shieldv2#/</a>. For more information,
 *                see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a>. You can also associate the web ACL to the resource through the WAF console or the WAF API, but you must manage Shield Advanced automatic mitigation through Shield Advanced. For information about WAF, see
 *        <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, EnableApplicationLayerAutomaticResponseCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, EnableApplicationLayerAutomaticResponseCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new EnableApplicationLayerAutomaticResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableApplicationLayerAutomaticResponseCommandInput} for command's `input` shape.
 * @see {@link EnableApplicationLayerAutomaticResponseCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 */
export class EnableApplicationLayerAutomaticResponseCommand extends $Command<
  EnableApplicationLayerAutomaticResponseCommandInput,
  EnableApplicationLayerAutomaticResponseCommandOutput,
  ShieldClientResolvedConfig
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

  constructor(readonly input: EnableApplicationLayerAutomaticResponseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    EnableApplicationLayerAutomaticResponseCommandInput,
    EnableApplicationLayerAutomaticResponseCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        EnableApplicationLayerAutomaticResponseCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "EnableApplicationLayerAutomaticResponseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableApplicationLayerAutomaticResponseRequestFilterSensitiveLog,
      outputFilterSensitiveLog: EnableApplicationLayerAutomaticResponseResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: EnableApplicationLayerAutomaticResponseCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableApplicationLayerAutomaticResponseCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableApplicationLayerAutomaticResponseCommandOutput> {
    return deserializeAws_json1_1EnableApplicationLayerAutomaticResponseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
