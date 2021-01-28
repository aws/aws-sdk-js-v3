import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { PutInstancePublicPortsRequest, PutInstancePublicPortsResult } from "../models/models_1";
import {
  deserializeAws_json1_1PutInstancePublicPortsCommand,
  serializeAws_json1_1PutInstancePublicPortsCommand,
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

export type PutInstancePublicPortsCommandInput = PutInstancePublicPortsRequest;
export type PutInstancePublicPortsCommandOutput = PutInstancePublicPortsResult & __MetadataBearer;

/**
 * <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses
 *       allowed to connect to the instance through the ports, and the protocol. This action also
 *       closes all currently open ports that are not included in the request. Include all of the ports
 *       and the protocols you want to open in your <code>PutInstancePublicPorts</code>request. Or use
 *       the <code>OpenInstancePublicPorts</code> action to open ports without closing currently open
 *       ports.</p>
 *          <p>The <code>PutInstancePublicPorts</code> action supports tag-based access control via
 *       resource tags applied to the resource identified by <code>instanceName</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 */
export class PutInstancePublicPortsCommand extends $Command<
  PutInstancePublicPortsCommandInput,
  PutInstancePublicPortsCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutInstancePublicPortsCommandInput) {
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
  ): Handler<PutInstancePublicPortsCommandInput, PutInstancePublicPortsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "PutInstancePublicPortsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutInstancePublicPortsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutInstancePublicPortsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutInstancePublicPortsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutInstancePublicPortsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutInstancePublicPortsCommandOutput> {
    return deserializeAws_json1_1PutInstancePublicPortsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
