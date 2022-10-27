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
  GenerateMobileSdkReleaseUrlRequest,
  GenerateMobileSdkReleaseUrlRequestFilterSensitiveLog,
  GenerateMobileSdkReleaseUrlResponse,
  GenerateMobileSdkReleaseUrlResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GenerateMobileSdkReleaseUrlCommand,
  serializeAws_json1_1GenerateMobileSdkReleaseUrlCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

export interface GenerateMobileSdkReleaseUrlCommandInput extends GenerateMobileSdkReleaseUrlRequest {}
export interface GenerateMobileSdkReleaseUrlCommandOutput
  extends GenerateMobileSdkReleaseUrlResponse,
    __MetadataBearer {}

/**
 * <p>Generates a presigned download URL for the specified release of the mobile SDK.</p>
 *          <p>The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see
 * <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GenerateMobileSdkReleaseUrlCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GenerateMobileSdkReleaseUrlCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new GenerateMobileSdkReleaseUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateMobileSdkReleaseUrlCommandInput} for command's `input` shape.
 * @see {@link GenerateMobileSdkReleaseUrlCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
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
      inputFilterSensitiveLog: GenerateMobileSdkReleaseUrlRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GenerateMobileSdkReleaseUrlResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GenerateMobileSdkReleaseUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GenerateMobileSdkReleaseUrlCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GenerateMobileSdkReleaseUrlCommandOutput> {
    return deserializeAws_json1_1GenerateMobileSdkReleaseUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
