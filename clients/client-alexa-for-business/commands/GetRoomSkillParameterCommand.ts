import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetRoomSkillParameterRequest, GetRoomSkillParameterResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetRoomSkillParameterCommand,
  serializeAws_json1_1GetRoomSkillParameterCommand,
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

export type GetRoomSkillParameterCommandInput = GetRoomSkillParameterRequest;
export type GetRoomSkillParameterCommandOutput = GetRoomSkillParameterResponse & __MetadataBearer;

/**
 * <p>Gets room skill parameter details by room, skill, and parameter key ARN.</p>
 */
export class GetRoomSkillParameterCommand extends $Command<
  GetRoomSkillParameterCommandInput,
  GetRoomSkillParameterCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRoomSkillParameterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRoomSkillParameterCommandInput, GetRoomSkillParameterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "GetRoomSkillParameterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRoomSkillParameterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRoomSkillParameterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRoomSkillParameterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRoomSkillParameterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRoomSkillParameterCommandOutput> {
    return deserializeAws_json1_1GetRoomSkillParameterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
