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
  PutConfigurationSetSuppressionOptionsRequest,
  PutConfigurationSetSuppressionOptionsRequestFilterSensitiveLog,
  PutConfigurationSetSuppressionOptionsResponse,
  PutConfigurationSetSuppressionOptionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand,
  serializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

export interface PutConfigurationSetSuppressionOptionsCommandInput
  extends PutConfigurationSetSuppressionOptionsRequest {}
export interface PutConfigurationSetSuppressionOptionsCommandOutput
  extends PutConfigurationSetSuppressionOptionsResponse,
    __MetadataBearer {}

/**
 * <p>Specify the account suppression list preferences for a configuration set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutConfigurationSetSuppressionOptionsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutConfigurationSetSuppressionOptionsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutConfigurationSetSuppressionOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConfigurationSetSuppressionOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetSuppressionOptionsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 */
export class PutConfigurationSetSuppressionOptionsCommand extends $Command<
  PutConfigurationSetSuppressionOptionsCommandInput,
  PutConfigurationSetSuppressionOptionsCommandOutput,
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

  constructor(readonly input: PutConfigurationSetSuppressionOptionsCommandInput) {
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
  ): Handler<PutConfigurationSetSuppressionOptionsCommandInput, PutConfigurationSetSuppressionOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutConfigurationSetSuppressionOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "PutConfigurationSetSuppressionOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutConfigurationSetSuppressionOptionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutConfigurationSetSuppressionOptionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutConfigurationSetSuppressionOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutConfigurationSetSuppressionOptionsCommandOutput> {
    return deserializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
