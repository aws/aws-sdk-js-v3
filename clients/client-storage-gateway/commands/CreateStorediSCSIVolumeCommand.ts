import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CreateStorediSCSIVolumeInput, CreateStorediSCSIVolumeOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateStorediSCSIVolumeCommand,
  serializeAws_json1_1CreateStorediSCSIVolumeCommand,
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

export type CreateStorediSCSIVolumeCommandInput = CreateStorediSCSIVolumeInput;
export type CreateStorediSCSIVolumeCommandOutput = CreateStorediSCSIVolumeOutput & __MetadataBearer;

/**
 * <p>Creates a volume on a specified gateway. This operation is only supported in the stored
 *          volume gateway type.</p>
 *
 *          <p>The size of the volume to create is inferred from the disk size. You can choose to
 *          preserve existing data on the disk, create volume from an existing snapshot, or create an
 *          empty volume. If you choose to create an empty gateway volume, then any existing data on
 *          the disk is erased.</p>
 *
 *          <p>In the request, you must specify the gateway and the disk information on which you are
 *          creating the volume. In response, the gateway creates the volume and returns volume
 *          information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target
 *          ARN that initiators can use to connect to the volume target.</p>
 */
export class CreateStorediSCSIVolumeCommand extends $Command<
  CreateStorediSCSIVolumeCommandInput,
  CreateStorediSCSIVolumeCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateStorediSCSIVolumeCommandInput) {
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
  ): Handler<CreateStorediSCSIVolumeCommandInput, CreateStorediSCSIVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "CreateStorediSCSIVolumeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStorediSCSIVolumeInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateStorediSCSIVolumeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateStorediSCSIVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateStorediSCSIVolumeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateStorediSCSIVolumeCommandOutput> {
    return deserializeAws_json1_1CreateStorediSCSIVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
