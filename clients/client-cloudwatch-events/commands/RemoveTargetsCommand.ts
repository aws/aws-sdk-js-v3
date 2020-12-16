import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { RemoveTargetsRequest, RemoveTargetsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RemoveTargetsCommand,
  serializeAws_json1_1RemoveTargetsCommand,
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

export type RemoveTargetsCommandInput = RemoveTargetsRequest;
export type RemoveTargetsCommandOutput = RemoveTargetsResponse & __MetadataBearer;

/**
 * <p>Removes the specified targets from the specified rule. When the rule is triggered,
 *             those targets are no longer be invoked.</p>
 *
 *         <p>When you remove a target, when the associated rule triggers, removed targets might
 *             continue to be invoked. Allow a short period of time for changes to take
 *             effect.</p>
 *
 *         <p>This action can partially fail if too many requests are made at the same time. If
 *             that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry
 *             in <code>FailedEntries</code> provides the ID of the failed target and the error
 *             code.</p>
 */
export class RemoveTargetsCommand extends $Command<
  RemoveTargetsCommandInput,
  RemoveTargetsCommandOutput,
  CloudWatchEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveTargetsCommandInput, RemoveTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "RemoveTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveTargetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveTargetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RemoveTargetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveTargetsCommandOutput> {
    return deserializeAws_json1_1RemoveTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
