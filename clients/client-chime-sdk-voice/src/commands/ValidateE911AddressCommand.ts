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

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import {
  ValidateE911AddressRequest,
  ValidateE911AddressRequestFilterSensitiveLog,
  ValidateE911AddressResponse,
  ValidateE911AddressResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ValidateE911AddressCommand,
  serializeAws_restJson1ValidateE911AddressCommand,
} from "../protocols/Aws_restJson1";

export interface ValidateE911AddressCommandInput extends ValidateE911AddressRequest {}
export interface ValidateE911AddressCommandOutput extends ValidateE911AddressResponse, __MetadataBearer {}

export class ValidateE911AddressCommand extends $Command<
  ValidateE911AddressCommandInput,
  ValidateE911AddressCommandOutput,
  ChimeSDKVoiceClientResolvedConfig
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

  constructor(readonly input: ValidateE911AddressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKVoiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ValidateE911AddressCommandInput, ValidateE911AddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ValidateE911AddressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "ValidateE911AddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ValidateE911AddressRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ValidateE911AddressResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ValidateE911AddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ValidateE911AddressCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ValidateE911AddressCommandOutput> {
    return deserializeAws_restJson1ValidateE911AddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
