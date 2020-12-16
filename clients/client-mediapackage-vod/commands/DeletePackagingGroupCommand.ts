import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import { DeletePackagingGroupRequest, DeletePackagingGroupResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeletePackagingGroupCommand,
  serializeAws_restJson1DeletePackagingGroupCommand,
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

export type DeletePackagingGroupCommandInput = DeletePackagingGroupRequest;
export type DeletePackagingGroupCommandOutput = DeletePackagingGroupResponse & __MetadataBearer;

/**
 * Deletes a MediaPackage VOD PackagingGroup resource.
 */
export class DeletePackagingGroupCommand extends $Command<
  DeletePackagingGroupCommandInput,
  DeletePackagingGroupCommandOutput,
  MediaPackageVodClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePackagingGroupCommandInput) {
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
  ): Handler<DeletePackagingGroupCommandInput, DeletePackagingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageVodClient";
    const commandName = "DeletePackagingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePackagingGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeletePackagingGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePackagingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeletePackagingGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePackagingGroupCommandOutput> {
    return deserializeAws_restJson1DeletePackagingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
