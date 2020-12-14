import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetProtectionStatusRequest, GetProtectionStatusResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetProtectionStatusCommand,
  serializeAws_json1_1GetProtectionStatusCommand,
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

export type GetProtectionStatusCommandInput = GetProtectionStatusRequest;
export type GetProtectionStatusCommandOutput = GetProtectionStatusResponse & __MetadataBearer;

/**
 * <p>If you created a Shield Advanced policy, returns policy-level attack summary information
 *          in the event of a potential DDoS attack. Other policy types are currently unsupported.</p>
 */
export class GetProtectionStatusCommand extends $Command<
  GetProtectionStatusCommandInput,
  GetProtectionStatusCommandOutput,
  FMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetProtectionStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetProtectionStatusCommandInput, GetProtectionStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "GetProtectionStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetProtectionStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetProtectionStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetProtectionStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetProtectionStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetProtectionStatusCommandOutput> {
    return deserializeAws_json1_1GetProtectionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
