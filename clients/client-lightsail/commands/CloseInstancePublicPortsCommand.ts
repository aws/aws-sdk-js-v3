import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CloseInstancePublicPortsRequest, CloseInstancePublicPortsResult } from "../models/models_0";
import {
  deserializeAws_json1_1CloseInstancePublicPortsCommand,
  serializeAws_json1_1CloseInstancePublicPortsCommand,
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

export type CloseInstancePublicPortsCommandInput = CloseInstancePublicPortsRequest;
export type CloseInstancePublicPortsCommandOutput = CloseInstancePublicPortsResult & __MetadataBearer;

/**
 * <p>Closes ports for a specific Amazon Lightsail instance.</p>
 *          <p>The <code>CloseInstancePublicPorts</code> action supports tag-based access control via
 *       resource tags applied to the resource identified by <code>instanceName</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 */
export class CloseInstancePublicPortsCommand extends $Command<
  CloseInstancePublicPortsCommandInput,
  CloseInstancePublicPortsCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CloseInstancePublicPortsCommandInput) {
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
  ): Handler<CloseInstancePublicPortsCommandInput, CloseInstancePublicPortsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CloseInstancePublicPortsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CloseInstancePublicPortsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CloseInstancePublicPortsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CloseInstancePublicPortsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CloseInstancePublicPortsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CloseInstancePublicPortsCommandOutput> {
    return deserializeAws_json1_1CloseInstancePublicPortsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
