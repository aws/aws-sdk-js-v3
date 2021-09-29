import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { CreateVolumeFromBackupRequest, CreateVolumeFromBackupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateVolumeFromBackupCommand,
  serializeAws_json1_1CreateVolumeFromBackupCommand,
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

export interface CreateVolumeFromBackupCommandInput extends CreateVolumeFromBackupRequest {}
export interface CreateVolumeFromBackupCommandOutput extends CreateVolumeFromBackupResponse, __MetadataBearer {}

/**
 * <p>Creates a new Amazon FSx for NetApp ONTAP volume from an
 *             existing Amazon FSx volume backup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateVolumeFromBackupCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateVolumeFromBackupCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CreateVolumeFromBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVolumeFromBackupCommandInput} for command's `input` shape.
 * @see {@link CreateVolumeFromBackupCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateVolumeFromBackupCommand extends $Command<
  CreateVolumeFromBackupCommandInput,
  CreateVolumeFromBackupCommandOutput,
  FSxClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVolumeFromBackupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateVolumeFromBackupCommandInput, CreateVolumeFromBackupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CreateVolumeFromBackupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVolumeFromBackupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVolumeFromBackupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVolumeFromBackupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateVolumeFromBackupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVolumeFromBackupCommandOutput> {
    return deserializeAws_json1_1CreateVolumeFromBackupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
