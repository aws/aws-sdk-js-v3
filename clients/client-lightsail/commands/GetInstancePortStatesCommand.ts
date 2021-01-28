import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetInstancePortStatesRequest, GetInstancePortStatesResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetInstancePortStatesCommand,
  serializeAws_json1_1GetInstancePortStatesCommand,
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

export type GetInstancePortStatesCommandInput = GetInstancePortStatesRequest;
export type GetInstancePortStatesCommandOutput = GetInstancePortStatesResult & __MetadataBearer;

/**
 * <p>Returns the firewall port states for a specific Amazon Lightsail instance, the IP addresses
 *       allowed to connect to the instance through the ports, and the protocol.</p>
 */
export class GetInstancePortStatesCommand extends $Command<
  GetInstancePortStatesCommandInput,
  GetInstancePortStatesCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetInstancePortStatesCommandInput) {
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
  ): Handler<GetInstancePortStatesCommandInput, GetInstancePortStatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetInstancePortStatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInstancePortStatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetInstancePortStatesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInstancePortStatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetInstancePortStatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInstancePortStatesCommandOutput> {
    return deserializeAws_json1_1GetInstancePortStatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
