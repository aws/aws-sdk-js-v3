import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { StartInstanceRequest, StartInstanceResult } from "../models/models_1";
import {
  deserializeAws_json1_1StartInstanceCommand,
  serializeAws_json1_1StartInstanceCommand,
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

export type StartInstanceCommandInput = StartInstanceRequest;
export type StartInstanceCommandOutput = StartInstanceResult & __MetadataBearer;

/**
 * <p>Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance,
 *       use the <code>reboot instance</code> operation.</p>
 *          <note>
 *             <p>When you start a stopped instance, Lightsail assigns a new public IP address to the
 *         instance. To use the same IP address after stopping and starting an instance, create a
 *         static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/lightsail-create-static-ip">Lightsail Dev Guide</a>.</p>
 *          </note>
 *          <p>The <code>start instance</code> operation supports tag-based access control via resource
 *       tags applied to the resource identified by <code>instance name</code>. For more information,
 *       see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 */
export class StartInstanceCommand extends $Command<
  StartInstanceCommandInput,
  StartInstanceCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartInstanceCommandInput) {
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
  ): Handler<StartInstanceCommandInput, StartInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "StartInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartInstanceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartInstanceCommandOutput> {
    return deserializeAws_json1_1StartInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
