import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CreateCachediSCSIVolumeInput, CreateCachediSCSIVolumeOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateCachediSCSIVolumeCommand,
  serializeAws_json1_1CreateCachediSCSIVolumeCommand,
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

export type CreateCachediSCSIVolumeCommandInput = CreateCachediSCSIVolumeInput;
export type CreateCachediSCSIVolumeCommandOutput = CreateCachediSCSIVolumeOutput & __MetadataBearer;

/**
 * <p>Creates a cached volume on a specified cached volume gateway. This operation is only
 *          supported in the cached volume gateway type.</p>
 *
 *          <note>
 *             <p>Cache storage must be allocated to the gateway before you can create a cached volume.
 *             Use the <a>AddCache</a> operation to add cache storage to a gateway.</p>
 *          </note>
 *
 *          <p>In the request, you must specify the gateway, size of the volume in bytes, the iSCSI
 *          target name, an IP address on which to expose the target, and a unique client token. In
 *          response, the gateway creates the volume and returns information about it. This information
 *          includes the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that
 *          initiators can use to connect to the volume target.</p>
 *
 *          <p>Optionally, you can provide the ARN for an existing volume as the
 *             <code>SourceVolumeARN</code> for this cached volume, which creates an exact copy of the
 *          existing volume’s latest recovery point. The <code>VolumeSizeInBytes</code> value must be
 *          equal to or larger than the size of the copied volume, in bytes.</p>
 */
export class CreateCachediSCSIVolumeCommand extends $Command<
  CreateCachediSCSIVolumeCommandInput,
  CreateCachediSCSIVolumeCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCachediSCSIVolumeCommandInput) {
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
  ): Handler<CreateCachediSCSIVolumeCommandInput, CreateCachediSCSIVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "CreateCachediSCSIVolumeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCachediSCSIVolumeInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCachediSCSIVolumeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCachediSCSIVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCachediSCSIVolumeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCachediSCSIVolumeCommandOutput> {
    return deserializeAws_json1_1CreateCachediSCSIVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
