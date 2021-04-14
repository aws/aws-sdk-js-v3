import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { GetMobileDeviceAccessEffectRequest, GetMobileDeviceAccessEffectResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetMobileDeviceAccessEffectCommand,
  serializeAws_json1_1GetMobileDeviceAccessEffectCommand,
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

export type GetMobileDeviceAccessEffectCommandInput = GetMobileDeviceAccessEffectRequest;
export type GetMobileDeviceAccessEffectCommandOutput = GetMobileDeviceAccessEffectResponse & __MetadataBearer;

/**
 * <p>Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access
 *          rules for the Amazon WorkMail organization for a particular user's attributes.</p>
 */
export class GetMobileDeviceAccessEffectCommand extends $Command<
  GetMobileDeviceAccessEffectCommandInput,
  GetMobileDeviceAccessEffectCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMobileDeviceAccessEffectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMobileDeviceAccessEffectCommandInput, GetMobileDeviceAccessEffectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "GetMobileDeviceAccessEffectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMobileDeviceAccessEffectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMobileDeviceAccessEffectResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMobileDeviceAccessEffectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMobileDeviceAccessEffectCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMobileDeviceAccessEffectCommandOutput> {
    return deserializeAws_json1_1GetMobileDeviceAccessEffectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
