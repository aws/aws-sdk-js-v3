import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVolumeAttributeRequest } from "../models/models_4";
import {
  deserializeAws_ec2ModifyVolumeAttributeCommand,
  serializeAws_ec2ModifyVolumeAttributeCommand,
} from "../protocols/Aws_ec2";
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

export type ModifyVolumeAttributeCommandInput = ModifyVolumeAttributeRequest;
export type ModifyVolumeAttributeCommandOutput = __MetadataBearer;

/**
 * <p>Modifies a volume attribute.</p>
 *          <p>By default, all I/O operations for the volume are suspended when the data on the volume is
 *       determined to be potentially inconsistent, to prevent undetectable, latent data corruption.
 *       The I/O access to the volume can be resumed by first enabling I/O access and then checking the
 *       data consistency on your volume.</p>
 *          <p>You can change the default behavior to resume I/O operations. We recommend that you change
 *       this only for boot volumes or for volumes that are stateless or disposable.</p>
 */
export class ModifyVolumeAttributeCommand extends $Command<
  ModifyVolumeAttributeCommandInput,
  ModifyVolumeAttributeCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyVolumeAttributeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyVolumeAttributeCommandInput, ModifyVolumeAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVolumeAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyVolumeAttributeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyVolumeAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVolumeAttributeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyVolumeAttributeCommandOutput> {
    return deserializeAws_ec2ModifyVolumeAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
