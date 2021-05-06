import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import {
  PutAccountDedicatedIpWarmupAttributesRequest,
  PutAccountDedicatedIpWarmupAttributesResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand,
  serializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface PutAccountDedicatedIpWarmupAttributesCommandInput
  extends PutAccountDedicatedIpWarmupAttributesRequest {}
export interface PutAccountDedicatedIpWarmupAttributesCommandOutput
  extends PutAccountDedicatedIpWarmupAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Enable or disable the automatic warm-up feature for dedicated IP addresses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutAccountDedicatedIpWarmupAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutAccountDedicatedIpWarmupAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutAccountDedicatedIpWarmupAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccountDedicatedIpWarmupAttributesCommandInput} for command's `input` shape.
 * @see {@link PutAccountDedicatedIpWarmupAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutAccountDedicatedIpWarmupAttributesCommand extends $Command<
  PutAccountDedicatedIpWarmupAttributesCommandInput,
  PutAccountDedicatedIpWarmupAttributesCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAccountDedicatedIpWarmupAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAccountDedicatedIpWarmupAttributesCommandInput, PutAccountDedicatedIpWarmupAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "PutAccountDedicatedIpWarmupAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAccountDedicatedIpWarmupAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutAccountDedicatedIpWarmupAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutAccountDedicatedIpWarmupAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutAccountDedicatedIpWarmupAttributesCommandOutput> {
    return deserializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
