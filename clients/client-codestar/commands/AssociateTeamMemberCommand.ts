import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { AssociateTeamMemberRequest, AssociateTeamMemberResult } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateTeamMemberCommand,
  serializeAws_json1_1AssociateTeamMemberCommand,
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

export type AssociateTeamMemberCommandInput = AssociateTeamMemberRequest;
export type AssociateTeamMemberCommandOutput = AssociateTeamMemberResult & __MetadataBearer;

/**
 * <p>Adds an IAM user to the team for an AWS CodeStar project.</p>
 */
export class AssociateTeamMemberCommand extends $Command<
  AssociateTeamMemberCommandInput,
  AssociateTeamMemberCommandOutput,
  CodeStarClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateTeamMemberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateTeamMemberCommandInput, AssociateTeamMemberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarClient";
    const commandName = "AssociateTeamMemberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateTeamMemberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateTeamMemberResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateTeamMemberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateTeamMemberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateTeamMemberCommandOutput> {
    return deserializeAws_json1_1AssociateTeamMemberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
