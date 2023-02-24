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
  PutConfigurationSetReputationOptionsRequest,
  PutConfigurationSetReputationOptionsRequestFilterSensitiveLog,
  PutConfigurationSetReputationOptionsResponse,
  PutConfigurationSetReputationOptionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutConfigurationSetReputationOptionsCommand,
  serializeAws_restJson1PutConfigurationSetReputationOptionsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

export interface PutConfigurationSetReputationOptionsCommandInput extends PutConfigurationSetReputationOptionsRequest {}
export interface PutConfigurationSetReputationOptionsCommandOutput
  extends PutConfigurationSetReputationOptionsResponse,
    __MetadataBearer {}

/**
 * <p>Enable or disable collection of reputation metrics for emails that you send using a
 *             particular configuration set in a specific Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutConfigurationSetReputationOptionsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutConfigurationSetReputationOptionsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutConfigurationSetReputationOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConfigurationSetReputationOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetReputationOptionsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 */
export class PutConfigurationSetReputationOptionsCommand extends $Command<
  PutConfigurationSetReputationOptionsCommandInput,
  PutConfigurationSetReputationOptionsCommandOutput,
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

  constructor(readonly input: PutConfigurationSetReputationOptionsCommandInput) {
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
  ): Handler<PutConfigurationSetReputationOptionsCommandInput, PutConfigurationSetReputationOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutConfigurationSetReputationOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "PutConfigurationSetReputationOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutConfigurationSetReputationOptionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutConfigurationSetReputationOptionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutConfigurationSetReputationOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutConfigurationSetReputationOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutConfigurationSetReputationOptionsCommandOutput> {
    return deserializeAws_restJson1PutConfigurationSetReputationOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
