import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { UpdateVirtualNodeInput, UpdateVirtualNodeOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateVirtualNodeCommand,
  serializeAws_restJson1UpdateVirtualNodeCommand,
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

export type UpdateVirtualNodeCommandInput = UpdateVirtualNodeInput;
export type UpdateVirtualNodeCommandOutput = UpdateVirtualNodeOutput & __MetadataBearer;

/**
 * <p>Updates an existing virtual node in a specified service mesh.</p>
 */
export class UpdateVirtualNodeCommand extends $Command<
  UpdateVirtualNodeCommandInput,
  UpdateVirtualNodeCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateVirtualNodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateVirtualNodeCommandInput, UpdateVirtualNodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "UpdateVirtualNodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateVirtualNodeInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateVirtualNodeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateVirtualNodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateVirtualNodeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateVirtualNodeCommandOutput> {
    return deserializeAws_restJson1UpdateVirtualNodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
