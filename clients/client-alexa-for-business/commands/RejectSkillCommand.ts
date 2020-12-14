import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { RejectSkillRequest, RejectSkillResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RejectSkillCommand,
  serializeAws_json1_1RejectSkillCommand,
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

export type RejectSkillCommandInput = RejectSkillRequest;
export type RejectSkillCommandOutput = RejectSkillResponse & __MetadataBearer;

/**
 * <p>Disassociates a skill from the organization under a user's AWS account. If the skill
 *          is a private skill, it moves to an AcceptStatus of PENDING. Any private or public skill
 *          that is rejected can be added later by calling the ApproveSkill API. </p>
 */
export class RejectSkillCommand extends $Command<
  RejectSkillCommandInput,
  RejectSkillCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RejectSkillCommandInput) {
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
  ): Handler<RejectSkillCommandInput, RejectSkillCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "RejectSkillCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectSkillRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RejectSkillResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RejectSkillCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RejectSkillCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RejectSkillCommandOutput> {
    return deserializeAws_json1_1RejectSkillCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
