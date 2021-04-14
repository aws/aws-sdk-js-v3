import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  ListDetectMitigationActionsExecutionsRequest,
  ListDetectMitigationActionsExecutionsResponse,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListDetectMitigationActionsExecutionsCommand,
  serializeAws_restJson1ListDetectMitigationActionsExecutionsCommand,
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

export type ListDetectMitigationActionsExecutionsCommandInput = ListDetectMitigationActionsExecutionsRequest;
export type ListDetectMitigationActionsExecutionsCommandOutput = ListDetectMitigationActionsExecutionsResponse &
  __MetadataBearer;

/**
 * <p>
 *       Lists mitigation actions executions for a Device Defender ML Detect Security Profile.
 *     </p>
 */
export class ListDetectMitigationActionsExecutionsCommand extends $Command<
  ListDetectMitigationActionsExecutionsCommandInput,
  ListDetectMitigationActionsExecutionsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDetectMitigationActionsExecutionsCommandInput) {
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
  ): Handler<ListDetectMitigationActionsExecutionsCommandInput, ListDetectMitigationActionsExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListDetectMitigationActionsExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDetectMitigationActionsExecutionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDetectMitigationActionsExecutionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListDetectMitigationActionsExecutionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDetectMitigationActionsExecutionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDetectMitigationActionsExecutionsCommandOutput> {
    return deserializeAws_restJson1ListDetectMitigationActionsExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
