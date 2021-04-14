import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { SetIpAddressTypeRequest, SetIpAddressTypeResult } from "../models/models_1";
import {
  deserializeAws_json1_1SetIpAddressTypeCommand,
  serializeAws_json1_1SetIpAddressTypeCommand,
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

export type SetIpAddressTypeCommandInput = SetIpAddressTypeRequest;
export type SetIpAddressTypeCommandOutput = SetIpAddressTypeResult & __MetadataBearer;

/**
 * <p>Sets the IP address type for an Amazon Lightsail resource.</p>
 *
 *          <p>Use this action to enable dual-stack for a resource, which enables IPv4 and IPv6 for the
 *       specified resource. Alternately, you can use this action to disable dual-stack, and enable
 *       IPv4 only.</p>
 */
export class SetIpAddressTypeCommand extends $Command<
  SetIpAddressTypeCommandInput,
  SetIpAddressTypeCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetIpAddressTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetIpAddressTypeCommandInput, SetIpAddressTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "SetIpAddressTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetIpAddressTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SetIpAddressTypeResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetIpAddressTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SetIpAddressTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetIpAddressTypeCommandOutput> {
    return deserializeAws_json1_1SetIpAddressTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
