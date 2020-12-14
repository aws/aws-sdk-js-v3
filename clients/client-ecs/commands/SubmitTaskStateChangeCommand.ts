import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { SubmitTaskStateChangeRequest, SubmitTaskStateChangeResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SubmitTaskStateChangeCommand,
  serializeAws_json1_1SubmitTaskStateChangeCommand,
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

export type SubmitTaskStateChangeCommandInput = SubmitTaskStateChangeRequest;
export type SubmitTaskStateChangeCommandOutput = SubmitTaskStateChangeResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Sent to acknowledge
 * 			that a task changed states.</p>
 */
export class SubmitTaskStateChangeCommand extends $Command<
  SubmitTaskStateChangeCommandInput,
  SubmitTaskStateChangeCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SubmitTaskStateChangeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SubmitTaskStateChangeCommandInput, SubmitTaskStateChangeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "SubmitTaskStateChangeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SubmitTaskStateChangeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SubmitTaskStateChangeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SubmitTaskStateChangeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SubmitTaskStateChangeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SubmitTaskStateChangeCommandOutput> {
    return deserializeAws_json1_1SubmitTaskStateChangeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
