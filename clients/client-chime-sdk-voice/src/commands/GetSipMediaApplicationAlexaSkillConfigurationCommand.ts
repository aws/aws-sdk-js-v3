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
  GetSipMediaApplicationAlexaSkillConfigurationRequest,
  GetSipMediaApplicationAlexaSkillConfigurationRequestFilterSensitiveLog,
  GetSipMediaApplicationAlexaSkillConfigurationResponse,
  GetSipMediaApplicationAlexaSkillConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetSipMediaApplicationAlexaSkillConfigurationCommand,
  serializeAws_restJson1GetSipMediaApplicationAlexaSkillConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface GetSipMediaApplicationAlexaSkillConfigurationCommandInput
  extends GetSipMediaApplicationAlexaSkillConfigurationRequest {}
export interface GetSipMediaApplicationAlexaSkillConfigurationCommandOutput
  extends GetSipMediaApplicationAlexaSkillConfigurationResponse,
    __MetadataBearer {}

export class GetSipMediaApplicationAlexaSkillConfigurationCommand extends $Command<
  GetSipMediaApplicationAlexaSkillConfigurationCommandInput,
  GetSipMediaApplicationAlexaSkillConfigurationCommandOutput,
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

  constructor(readonly input: GetSipMediaApplicationAlexaSkillConfigurationCommandInput) {
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
  ): Handler<
    GetSipMediaApplicationAlexaSkillConfigurationCommandInput,
    GetSipMediaApplicationAlexaSkillConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetSipMediaApplicationAlexaSkillConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "GetSipMediaApplicationAlexaSkillConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSipMediaApplicationAlexaSkillConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSipMediaApplicationAlexaSkillConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetSipMediaApplicationAlexaSkillConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSipMediaApplicationAlexaSkillConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSipMediaApplicationAlexaSkillConfigurationCommandOutput> {
    return deserializeAws_restJson1GetSipMediaApplicationAlexaSkillConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
