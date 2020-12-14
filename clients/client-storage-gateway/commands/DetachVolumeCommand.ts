import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DetachVolumeInput, DetachVolumeOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DetachVolumeCommand,
  serializeAws_json1_1DetachVolumeCommand,
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

export type DetachVolumeCommandInput = DetachVolumeInput;
export type DetachVolumeCommandOutput = DetachVolumeOutput & __MetadataBearer;

/**
 * <p>Disconnects a volume from an iSCSI connection and then detaches the volume from the
 *          specified gateway. Detaching and attaching a volume enables you to recover your data from
 *          one gateway to a different gateway without creating a snapshot. It also makes it easier to
 *          move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2
 *          instance. This operation is only supported in the volume gateway type.</p>
 */
export class DetachVolumeCommand extends $Command<
  DetachVolumeCommandInput,
  DetachVolumeCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetachVolumeCommandInput) {
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
  ): Handler<DetachVolumeCommandInput, DetachVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DetachVolumeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetachVolumeInput.filterSensitiveLog,
      outputFilterSensitiveLog: DetachVolumeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetachVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DetachVolumeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetachVolumeCommandOutput> {
    return deserializeAws_json1_1DetachVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
