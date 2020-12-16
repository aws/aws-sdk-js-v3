import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { PutSkillAuthorizationRequest, PutSkillAuthorizationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutSkillAuthorizationCommand,
  serializeAws_json1_1PutSkillAuthorizationCommand,
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

export type PutSkillAuthorizationCommandInput = PutSkillAuthorizationRequest;
export type PutSkillAuthorizationCommandOutput = PutSkillAuthorizationResponse & __MetadataBearer;

/**
 * <p>Links a user's account to a third-party skill provider. If this API operation is
 *          called by an assumed IAM role, the skill being linked must be a private skill. Also, the
 *          skill must be owned by the AWS account that assumed the IAM role.</p>
 */
export class PutSkillAuthorizationCommand extends $Command<
  PutSkillAuthorizationCommandInput,
  PutSkillAuthorizationCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutSkillAuthorizationCommandInput) {
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
  ): Handler<PutSkillAuthorizationCommandInput, PutSkillAuthorizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "PutSkillAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutSkillAuthorizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutSkillAuthorizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutSkillAuthorizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutSkillAuthorizationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutSkillAuthorizationCommandOutput> {
    return deserializeAws_json1_1PutSkillAuthorizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
