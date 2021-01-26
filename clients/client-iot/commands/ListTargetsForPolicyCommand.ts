import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListTargetsForPolicyRequest, ListTargetsForPolicyResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListTargetsForPolicyCommand,
  serializeAws_restJson1ListTargetsForPolicyCommand,
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

export type ListTargetsForPolicyCommandInput = ListTargetsForPolicyRequest;
export type ListTargetsForPolicyCommandOutput = ListTargetsForPolicyResponse & __MetadataBearer;

/**
 * <p>List targets for the specified policy.</p>
 */
export class ListTargetsForPolicyCommand extends $Command<
  ListTargetsForPolicyCommandInput,
  ListTargetsForPolicyCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTargetsForPolicyCommandInput) {
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
  ): Handler<ListTargetsForPolicyCommandInput, ListTargetsForPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListTargetsForPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTargetsForPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTargetsForPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTargetsForPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTargetsForPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTargetsForPolicyCommandOutput> {
    return deserializeAws_restJson1ListTargetsForPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
