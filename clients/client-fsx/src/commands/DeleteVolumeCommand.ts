import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DeleteVolumeRequest, DeleteVolumeResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteVolumeCommand,
  serializeAws_json1_1DeleteVolumeCommand,
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

export interface DeleteVolumeCommandInput extends DeleteVolumeRequest {}
export interface DeleteVolumeCommandOutput extends DeleteVolumeResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon FSx for NetApp ONTAP volume. When deleting a volume,
 *         you have the option of creating a final backup. If you create a final backup, you have the option to
 *         apply Tags to the backup. You need to have <code>fsx:TagResource</code>
 *             permission in order to apply tags to the backup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DeleteVolumeCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DeleteVolumeCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new DeleteVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVolumeCommandInput} for command's `input` shape.
 * @see {@link DeleteVolumeCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteVolumeCommand extends $Command<
  DeleteVolumeCommandInput,
  DeleteVolumeCommandOutput,
  FSxClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteVolumeCommandInput) {
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
  ): Handler<DeleteVolumeCommandInput, DeleteVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DeleteVolumeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVolumeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteVolumeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteVolumeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteVolumeCommandOutput> {
    return deserializeAws_json1_1DeleteVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
