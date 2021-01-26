import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { AssociateSkillWithSkillGroupRequest, AssociateSkillWithSkillGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateSkillWithSkillGroupCommand,
  serializeAws_json1_1AssociateSkillWithSkillGroupCommand,
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

export type AssociateSkillWithSkillGroupCommandInput = AssociateSkillWithSkillGroupRequest;
export type AssociateSkillWithSkillGroupCommandOutput = AssociateSkillWithSkillGroupResponse & __MetadataBearer;

/**
 * <p>Associates a skill with a skill group.</p>
 */
export class AssociateSkillWithSkillGroupCommand extends $Command<
  AssociateSkillWithSkillGroupCommandInput,
  AssociateSkillWithSkillGroupCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateSkillWithSkillGroupCommandInput) {
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
  ): Handler<AssociateSkillWithSkillGroupCommandInput, AssociateSkillWithSkillGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "AssociateSkillWithSkillGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateSkillWithSkillGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateSkillWithSkillGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateSkillWithSkillGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateSkillWithSkillGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateSkillWithSkillGroupCommandOutput> {
    return deserializeAws_json1_1AssociateSkillWithSkillGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
