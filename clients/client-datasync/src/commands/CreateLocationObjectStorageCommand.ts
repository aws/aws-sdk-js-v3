import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CreateLocationObjectStorageRequest, CreateLocationObjectStorageResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateLocationObjectStorageCommand,
  serializeAws_json1_1CreateLocationObjectStorageCommand,
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

export interface CreateLocationObjectStorageCommandInput extends CreateLocationObjectStorageRequest {}
export interface CreateLocationObjectStorageCommandOutput
  extends CreateLocationObjectStorageResponse,
    __MetadataBearer {}

/**
 * <p>Creates an endpoint for a self-managed object storage bucket. For more information
 *       about self-managed object storage locations, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationObjectStorageCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationObjectStorageCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateLocationObjectStorageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocationObjectStorageCommandInput} for command's `input` shape.
 * @see {@link CreateLocationObjectStorageCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateLocationObjectStorageCommand extends $Command<
  CreateLocationObjectStorageCommandInput,
  CreateLocationObjectStorageCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLocationObjectStorageCommandInput) {
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
  ): Handler<CreateLocationObjectStorageCommandInput, CreateLocationObjectStorageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "CreateLocationObjectStorageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLocationObjectStorageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateLocationObjectStorageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLocationObjectStorageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLocationObjectStorageCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateLocationObjectStorageCommandOutput> {
    return deserializeAws_json1_1CreateLocationObjectStorageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
