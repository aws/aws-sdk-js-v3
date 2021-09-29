import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyAuthenticationProfileMessage, ModifyAuthenticationProfileResult } from "../models/models_1";
import {
  deserializeAws_queryModifyAuthenticationProfileCommand,
  serializeAws_queryModifyAuthenticationProfileCommand,
} from "../protocols/Aws_query";
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

export interface ModifyAuthenticationProfileCommandInput extends ModifyAuthenticationProfileMessage {}
export interface ModifyAuthenticationProfileCommandOutput extends ModifyAuthenticationProfileResult, __MetadataBearer {}

/**
 * <p>Modifies an authentication profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyAuthenticationProfileCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyAuthenticationProfileCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyAuthenticationProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyAuthenticationProfileCommandInput} for command's `input` shape.
 * @see {@link ModifyAuthenticationProfileCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ModifyAuthenticationProfileCommand extends $Command<
  ModifyAuthenticationProfileCommandInput,
  ModifyAuthenticationProfileCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyAuthenticationProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyAuthenticationProfileCommandInput, ModifyAuthenticationProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ModifyAuthenticationProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyAuthenticationProfileMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyAuthenticationProfileResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyAuthenticationProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyAuthenticationProfileCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyAuthenticationProfileCommandOutput> {
    return deserializeAws_queryModifyAuthenticationProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
