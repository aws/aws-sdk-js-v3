import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { AttachVolumeInput, AttachVolumeOutput } from "../models/models_0";
import {
  deserializeAws_json1_1AttachVolumeCommand,
  serializeAws_json1_1AttachVolumeCommand,
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

export type AttachVolumeCommandInput = AttachVolumeInput;
export type AttachVolumeCommandOutput = AttachVolumeOutput & __MetadataBearer;

/**
 * <p>Connects a volume to an iSCSI connection and then attaches the volume to the specified
 *          gateway. Detaching and attaching a volume enables you to recover your data from one gateway
 *          to a different gateway without creating a snapshot. It also makes it easier to move your
 *          volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance.</p>
 */
export class AttachVolumeCommand extends $Command<
  AttachVolumeCommandInput,
  AttachVolumeCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachVolumeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AttachVolumeCommandInput, AttachVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "AttachVolumeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachVolumeInput.filterSensitiveLog,
      outputFilterSensitiveLog: AttachVolumeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AttachVolumeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachVolumeCommandOutput> {
    return deserializeAws_json1_1AttachVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
