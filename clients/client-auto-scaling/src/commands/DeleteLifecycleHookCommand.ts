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

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import {
  DeleteLifecycleHookAnswer,
  DeleteLifecycleHookAnswerFilterSensitiveLog,
  DeleteLifecycleHookType,
  DeleteLifecycleHookTypeFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeleteLifecycleHookCommand,
  serializeAws_queryDeleteLifecycleHookCommand,
} from "../protocols/Aws_query";

export interface DeleteLifecycleHookCommandInput extends DeleteLifecycleHookType {}
export interface DeleteLifecycleHookCommandOutput extends DeleteLifecycleHookAnswer, __MetadataBearer {}

/**
 * <p>Deletes the specified lifecycle hook.</p>
 *          <p>If there are any outstanding lifecycle actions, they are completed first
 *                 (<code>ABANDON</code> for launching instances, <code>CONTINUE</code> for terminating
 *             instances).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DeleteLifecycleHookCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DeleteLifecycleHookCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DeleteLifecycleHookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLifecycleHookCommandInput} for command's `input` shape.
 * @see {@link DeleteLifecycleHookCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 */
export class DeleteLifecycleHookCommand extends $Command<
  DeleteLifecycleHookCommandInput,
  DeleteLifecycleHookCommandOutput,
  AutoScalingClientResolvedConfig
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

  constructor(readonly input: DeleteLifecycleHookCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLifecycleHookCommandInput, DeleteLifecycleHookCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteLifecycleHookCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DeleteLifecycleHookCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLifecycleHookTypeFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteLifecycleHookAnswerFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLifecycleHookCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteLifecycleHookCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLifecycleHookCommandOutput> {
    return deserializeAws_queryDeleteLifecycleHookCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
