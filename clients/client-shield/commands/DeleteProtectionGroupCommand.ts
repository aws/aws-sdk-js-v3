import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DeleteProtectionGroupRequest, DeleteProtectionGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteProtectionGroupCommand,
  serializeAws_json1_1DeleteProtectionGroupCommand,
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

export type DeleteProtectionGroupCommandInput = DeleteProtectionGroupRequest;
export type DeleteProtectionGroupCommandOutput = DeleteProtectionGroupResponse & __MetadataBearer;

/**
 * <p>Removes the specified protection group.</p>
 */
export class DeleteProtectionGroupCommand extends $Command<
  DeleteProtectionGroupCommandInput,
  DeleteProtectionGroupCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteProtectionGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteProtectionGroupCommandInput, DeleteProtectionGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "DeleteProtectionGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteProtectionGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteProtectionGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteProtectionGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteProtectionGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteProtectionGroupCommandOutput> {
    return deserializeAws_json1_1DeleteProtectionGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
