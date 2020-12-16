import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { UpdateWorkGroupInput, UpdateWorkGroupOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateWorkGroupCommand,
  serializeAws_json1_1UpdateWorkGroupCommand,
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

export type UpdateWorkGroupCommandInput = UpdateWorkGroupInput;
export type UpdateWorkGroupCommandOutput = UpdateWorkGroupOutput & __MetadataBearer;

/**
 * <p>Updates the workgroup with the specified name. The workgroup's name cannot be
 *             changed.</p>
 */
export class UpdateWorkGroupCommand extends $Command<
  UpdateWorkGroupCommandInput,
  UpdateWorkGroupCommandOutput,
  AthenaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateWorkGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateWorkGroupCommandInput, UpdateWorkGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "UpdateWorkGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateWorkGroupInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateWorkGroupOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateWorkGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateWorkGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateWorkGroupCommandOutput> {
    return deserializeAws_json1_1UpdateWorkGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
