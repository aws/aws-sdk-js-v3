import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import { UpdatePackagingGroupRequest, UpdatePackagingGroupResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdatePackagingGroupCommand,
  serializeAws_restJson1UpdatePackagingGroupCommand,
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

export type UpdatePackagingGroupCommandInput = UpdatePackagingGroupRequest;
export type UpdatePackagingGroupCommandOutput = UpdatePackagingGroupResponse & __MetadataBearer;

/**
 * Updates a specific packaging group. You can't change the id attribute or any other system-generated attributes.
 */
export class UpdatePackagingGroupCommand extends $Command<
  UpdatePackagingGroupCommandInput,
  UpdatePackagingGroupCommandOutput,
  MediaPackageVodClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePackagingGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageVodClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePackagingGroupCommandInput, UpdatePackagingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageVodClient";
    const commandName = "UpdatePackagingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePackagingGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePackagingGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePackagingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdatePackagingGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePackagingGroupCommandOutput> {
    return deserializeAws_restJson1UpdatePackagingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
