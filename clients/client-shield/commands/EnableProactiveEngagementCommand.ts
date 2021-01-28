import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { EnableProactiveEngagementRequest, EnableProactiveEngagementResponse } from "../models/models_0";
import {
  deserializeAws_json1_1EnableProactiveEngagementCommand,
  serializeAws_json1_1EnableProactiveEngagementCommand,
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

export type EnableProactiveEngagementCommandInput = EnableProactiveEngagementRequest;
export type EnableProactiveEngagementCommandOutput = EnableProactiveEngagementResponse & __MetadataBearer;

/**
 * <p>Authorizes the DDoS Response Team (DRT) to use email and phone to notify contacts about escalations to the DRT and to initiate proactive customer support.</p>
 */
export class EnableProactiveEngagementCommand extends $Command<
  EnableProactiveEngagementCommandInput,
  EnableProactiveEngagementCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableProactiveEngagementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableProactiveEngagementCommandInput, EnableProactiveEngagementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "EnableProactiveEngagementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableProactiveEngagementRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableProactiveEngagementResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableProactiveEngagementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableProactiveEngagementCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableProactiveEngagementCommandOutput> {
    return deserializeAws_json1_1EnableProactiveEngagementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
