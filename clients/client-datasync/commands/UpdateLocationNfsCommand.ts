import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { UpdateLocationNfsRequest, UpdateLocationNfsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateLocationNfsCommand,
  serializeAws_json1_1UpdateLocationNfsCommand,
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

export type UpdateLocationNfsCommandInput = UpdateLocationNfsRequest;
export type UpdateLocationNfsCommandOutput = UpdateLocationNfsResponse & __MetadataBearer;

/**
 * <p>Updates some of the parameters of a previously created location for Network File System (NFS) access.
 *       For information about creating an NFS location, see <a>create-nfs-location</a>.</p>
 */
export class UpdateLocationNfsCommand extends $Command<
  UpdateLocationNfsCommandInput,
  UpdateLocationNfsCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateLocationNfsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateLocationNfsCommandInput, UpdateLocationNfsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "UpdateLocationNfsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateLocationNfsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateLocationNfsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateLocationNfsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateLocationNfsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateLocationNfsCommandOutput> {
    return deserializeAws_json1_1UpdateLocationNfsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
