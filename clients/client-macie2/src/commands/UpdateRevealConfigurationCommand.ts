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

import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { UpdateRevealConfigurationRequest, UpdateRevealConfigurationResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateRevealConfigurationCommand,
  serializeAws_restJson1UpdateRevealConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateRevealConfigurationCommand}.
 */
export interface UpdateRevealConfigurationCommandInput extends UpdateRevealConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRevealConfigurationCommand}.
 */
export interface UpdateRevealConfigurationCommandOutput extends UpdateRevealConfigurationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the status and configuration settings for retrieving occurrences of sensitive data reported by findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, UpdateRevealConfigurationCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, UpdateRevealConfigurationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new UpdateRevealConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateRevealConfigurationCommandInput - {@link UpdateRevealConfigurationCommandInput}
 * @returns {@link UpdateRevealConfigurationCommandOutput}
 * @see {@link UpdateRevealConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateRevealConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 *
 */
export class UpdateRevealConfigurationCommand extends $Command<
  UpdateRevealConfigurationCommandInput,
  UpdateRevealConfigurationCommandOutput,
  Macie2ClientResolvedConfig
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
  constructor(readonly input: UpdateRevealConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRevealConfigurationCommandInput, UpdateRevealConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRevealConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "UpdateRevealConfigurationCommand";
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
  private serialize(input: UpdateRevealConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateRevealConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateRevealConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateRevealConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
