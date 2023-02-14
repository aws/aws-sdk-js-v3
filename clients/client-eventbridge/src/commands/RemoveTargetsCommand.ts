// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import {
  RemoveTargetsRequest,
  RemoveTargetsRequestFilterSensitiveLog,
  RemoveTargetsResponse,
  RemoveTargetsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RemoveTargetsCommand,
  serializeAws_json1_1RemoveTargetsCommand,
} from "../protocols/Aws_json1_1";

export interface RemoveTargetsCommandInput extends RemoveTargetsRequest {}
export interface RemoveTargetsCommandOutput extends RemoveTargetsResponse, __MetadataBearer {}

/**
 * <p>Removes the specified targets from the specified rule. When the rule is triggered, those
 *       targets are no longer be invoked.</p>
 *          <note>
 *             <p>A successful execution of <code>RemoveTargets</code> doesn't guarantee all targets are removed from the rule, it means that the target(s) listed in the request are removed.</p>
 *          </note>
 *          <p>When you remove a target, when the associated rule triggers, removed targets might
 *       continue to be invoked. Allow a short period of time for changes to take effect.</p>
 *          <p>This action can partially fail if too many requests are made at the same time. If that
 *       happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in
 *         <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, RemoveTargetsCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, RemoveTargetsCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new RemoveTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveTargetsCommandInput} for command's `input` shape.
 * @see {@link RemoveTargetsCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 */
export class RemoveTargetsCommand extends $Command<
  RemoveTargetsCommandInput,
  RemoveTargetsCommandOutput,
  EventBridgeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveTargetsCommandInput, RemoveTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RemoveTargetsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "RemoveTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveTargetsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RemoveTargetsResponseFilterSensitiveLog,
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
