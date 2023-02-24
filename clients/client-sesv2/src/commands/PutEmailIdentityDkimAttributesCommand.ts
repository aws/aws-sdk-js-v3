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
  PutEmailIdentityDkimAttributesRequest,
  PutEmailIdentityDkimAttributesRequestFilterSensitiveLog,
  PutEmailIdentityDkimAttributesResponse,
  PutEmailIdentityDkimAttributesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutEmailIdentityDkimAttributesCommand,
  serializeAws_restJson1PutEmailIdentityDkimAttributesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

export interface PutEmailIdentityDkimAttributesCommandInput extends PutEmailIdentityDkimAttributesRequest {}
export interface PutEmailIdentityDkimAttributesCommandOutput
  extends PutEmailIdentityDkimAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Used to enable or disable DKIM authentication for an email identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutEmailIdentityDkimAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutEmailIdentityDkimAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutEmailIdentityDkimAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEmailIdentityDkimAttributesCommandInput} for command's `input` shape.
 * @see {@link PutEmailIdentityDkimAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 */
export class PutEmailIdentityDkimAttributesCommand extends $Command<
  PutEmailIdentityDkimAttributesCommandInput,
  PutEmailIdentityDkimAttributesCommandOutput,
  SESv2ClientResolvedConfig
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

  constructor(readonly input: PutEmailIdentityDkimAttributesCommandInput) {
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
  ): Handler<PutEmailIdentityDkimAttributesCommandInput, PutEmailIdentityDkimAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutEmailIdentityDkimAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "PutEmailIdentityDkimAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutEmailIdentityDkimAttributesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutEmailIdentityDkimAttributesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutEmailIdentityDkimAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutEmailIdentityDkimAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutEmailIdentityDkimAttributesCommandOutput> {
    return deserializeAws_restJson1PutEmailIdentityDkimAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
