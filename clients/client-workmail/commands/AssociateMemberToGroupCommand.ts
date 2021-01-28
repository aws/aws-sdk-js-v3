import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { AssociateMemberToGroupRequest, AssociateMemberToGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateMemberToGroupCommand,
  serializeAws_json1_1AssociateMemberToGroupCommand,
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

export type AssociateMemberToGroupCommandInput = AssociateMemberToGroupRequest;
export type AssociateMemberToGroupCommandOutput = AssociateMemberToGroupResponse & __MetadataBearer;

/**
 * <p>Adds a member (user or group) to the group's set.</p>
 */
export class AssociateMemberToGroupCommand extends $Command<
  AssociateMemberToGroupCommandInput,
  AssociateMemberToGroupCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateMemberToGroupCommandInput) {
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
  ): Handler<AssociateMemberToGroupCommandInput, AssociateMemberToGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "AssociateMemberToGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateMemberToGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateMemberToGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateMemberToGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateMemberToGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateMemberToGroupCommandOutput> {
    return deserializeAws_json1_1AssociateMemberToGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
