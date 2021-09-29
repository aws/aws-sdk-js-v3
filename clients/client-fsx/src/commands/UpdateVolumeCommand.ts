import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { UpdateVolumeRequest, UpdateVolumeResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateVolumeCommand,
  serializeAws_json1_1UpdateVolumeCommand,
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

export interface UpdateVolumeCommandInput extends UpdateVolumeRequest {}
export interface UpdateVolumeCommandOutput extends UpdateVolumeResponse, __MetadataBearer {}

/**
 * <p>Updates an Amazon FSx for NetApp ONTAP volume's configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, UpdateVolumeCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, UpdateVolumeCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new UpdateVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVolumeCommandInput} for command's `input` shape.
 * @see {@link UpdateVolumeCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateVolumeCommand extends $Command<
  UpdateVolumeCommandInput,
  UpdateVolumeCommandOutput,
  FSxClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateVolumeCommandInput) {
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
  ): Handler<UpdateVolumeCommandInput, UpdateVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "UpdateVolumeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateVolumeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateVolumeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateVolumeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateVolumeCommandOutput> {
    return deserializeAws_json1_1UpdateVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
