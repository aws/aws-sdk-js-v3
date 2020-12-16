import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { SubmitContainerStateChangeRequest, SubmitContainerStateChangeResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SubmitContainerStateChangeCommand,
  serializeAws_json1_1SubmitContainerStateChangeCommand,
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

export type SubmitContainerStateChangeCommandInput = SubmitContainerStateChangeRequest;
export type SubmitContainerStateChangeCommandOutput = SubmitContainerStateChangeResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Sent to
 * 			acknowledge that a container changed states.</p>
 */
export class SubmitContainerStateChangeCommand extends $Command<
  SubmitContainerStateChangeCommandInput,
  SubmitContainerStateChangeCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SubmitContainerStateChangeCommandInput) {
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
  ): Handler<SubmitContainerStateChangeCommandInput, SubmitContainerStateChangeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "SubmitContainerStateChangeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SubmitContainerStateChangeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SubmitContainerStateChangeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SubmitContainerStateChangeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SubmitContainerStateChangeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SubmitContainerStateChangeCommandOutput> {
    return deserializeAws_json1_1SubmitContainerStateChangeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
