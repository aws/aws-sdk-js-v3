import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { DeleteLaunchProfileMemberRequest, DeleteLaunchProfileMemberResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteLaunchProfileMemberCommand,
  serializeAws_restJson1DeleteLaunchProfileMemberCommand,
} from "../protocols/Aws_restJson1";
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

export interface DeleteLaunchProfileMemberCommandInput extends DeleteLaunchProfileMemberRequest {}
export interface DeleteLaunchProfileMemberCommandOutput extends DeleteLaunchProfileMemberResponse, __MetadataBearer {}

/**
 * <p>Delete a user from launch profile membership.</p>
 */
export class DeleteLaunchProfileMemberCommand extends $Command<
  DeleteLaunchProfileMemberCommandInput,
  DeleteLaunchProfileMemberCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteLaunchProfileMemberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLaunchProfileMemberCommandInput, DeleteLaunchProfileMemberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "DeleteLaunchProfileMemberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLaunchProfileMemberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteLaunchProfileMemberResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLaunchProfileMemberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteLaunchProfileMemberCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteLaunchProfileMemberCommandOutput> {
    return deserializeAws_restJson1DeleteLaunchProfileMemberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
