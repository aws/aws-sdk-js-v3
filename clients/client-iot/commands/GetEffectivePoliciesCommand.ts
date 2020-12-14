import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetEffectivePoliciesRequest, GetEffectivePoliciesResponse } from "../models/models_1";
import {
  deserializeAws_restJson1GetEffectivePoliciesCommand,
  serializeAws_restJson1GetEffectivePoliciesCommand,
} from "../protocols/Aws_restJson1";
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

export type GetEffectivePoliciesCommandInput = GetEffectivePoliciesRequest;
export type GetEffectivePoliciesCommandOutput = GetEffectivePoliciesResponse & __MetadataBearer;

/**
 * <p>Gets a list of the policies that have an effect on the authorization behavior of the
 *          specified device when it connects to the AWS IoT device gateway.</p>
 */
export class GetEffectivePoliciesCommand extends $Command<
  GetEffectivePoliciesCommandInput,
  GetEffectivePoliciesCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEffectivePoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEffectivePoliciesCommandInput, GetEffectivePoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "GetEffectivePoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEffectivePoliciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEffectivePoliciesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEffectivePoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetEffectivePoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEffectivePoliciesCommandOutput> {
    return deserializeAws_restJson1GetEffectivePoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
