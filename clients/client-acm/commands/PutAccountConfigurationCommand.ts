import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { PutAccountConfigurationRequest } from "../models/models_0";
import {
  deserializeAws_json1_1PutAccountConfigurationCommand,
  serializeAws_json1_1PutAccountConfigurationCommand,
} from "../protocols/Aws_json1_1";
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

export interface PutAccountConfigurationCommandInput extends PutAccountConfigurationRequest {}
export interface PutAccountConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds or modifies
 *       account-level configurations in ACM.
 *       </p>
 *          <p>The
 *       supported configuration option is <code>DaysBeforeExpiry</code>. This option specifies the
 *       number of days prior to certificate expiration when ACM starts generating
 *         <code>EventBridge</code> events. ACM sends one event per day per certificate until the
 *       certificate expires. By default, accounts receive events starting 45 days before certificate
 *       expiration.</p>
 */
export class PutAccountConfigurationCommand extends $Command<
  PutAccountConfigurationCommandInput,
  PutAccountConfigurationCommandOutput,
  ACMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAccountConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAccountConfigurationCommandInput, PutAccountConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "PutAccountConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAccountConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAccountConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutAccountConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAccountConfigurationCommandOutput> {
    return deserializeAws_json1_1PutAccountConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
