import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DetachDiskRequest, DetachDiskResult } from "../models/models_0";
import {
  deserializeAws_json1_1DetachDiskCommand,
  serializeAws_json1_1DetachDiskCommand,
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

export type DetachDiskCommandInput = DetachDiskRequest;
export type DetachDiskCommandOutput = DetachDiskResult & __MetadataBearer;

/**
 * <p>Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount
 *       any file systems on the device within your operating system before stopping the instance and
 *       detaching the disk.</p>
 *          <p>The <code>detach disk</code> operation supports tag-based access control via resource tags
 *       applied to the resource identified by <code>disk name</code>. For more information, see the
 *         <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 */
export class DetachDiskCommand extends $Command<
  DetachDiskCommandInput,
  DetachDiskCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetachDiskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetachDiskCommandInput, DetachDiskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DetachDiskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetachDiskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetachDiskResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetachDiskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DetachDiskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetachDiskCommandOutput> {
    return deserializeAws_json1_1DetachDiskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
