// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import {
  UpdateLocationNfsRequest,
  UpdateLocationNfsRequestFilterSensitiveLog,
  UpdateLocationNfsResponse,
  UpdateLocationNfsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateLocationNfsCommand,
  serializeAws_json1_1UpdateLocationNfsCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateLocationNfsCommandInput extends UpdateLocationNfsRequest {}
export interface UpdateLocationNfsCommandOutput extends UpdateLocationNfsResponse, __MetadataBearer {}

/**
 * <p>Updates some of the parameters of a previously created location for Network File System (NFS) access.
 *       For information about creating an NFS location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html">Creating a location for NFS</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationNfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationNfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new UpdateLocationNfsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLocationNfsCommandInput} for command's `input` shape.
 * @see {@link UpdateLocationNfsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 */
export class UpdateLocationNfsCommand extends $Command<
  UpdateLocationNfsCommandInput,
  UpdateLocationNfsCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateLocationNfsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "UpdateLocationNfsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateLocationNfsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateLocationNfsResponseFilterSensitiveLog,
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
