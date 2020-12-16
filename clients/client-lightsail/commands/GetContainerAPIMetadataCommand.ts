import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetContainerAPIMetadataRequest, GetContainerAPIMetadataResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetContainerAPIMetadataCommand,
  serializeAws_json1_1GetContainerAPIMetadataCommand,
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

export type GetContainerAPIMetadataCommandInput = GetContainerAPIMetadataRequest;
export type GetContainerAPIMetadataCommandOutput = GetContainerAPIMetadataResult & __MetadataBearer;

/**
 * <p>Returns information about Amazon Lightsail containers, such as the current version of the
 *       Lightsail Control (lightsailctl) plugin.</p>
 */
export class GetContainerAPIMetadataCommand extends $Command<
  GetContainerAPIMetadataCommandInput,
  GetContainerAPIMetadataCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetContainerAPIMetadataCommandInput) {
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
  ): Handler<GetContainerAPIMetadataCommandInput, GetContainerAPIMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetContainerAPIMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContainerAPIMetadataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetContainerAPIMetadataResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetContainerAPIMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetContainerAPIMetadataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetContainerAPIMetadataCommandOutput> {
    return deserializeAws_json1_1GetContainerAPIMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
