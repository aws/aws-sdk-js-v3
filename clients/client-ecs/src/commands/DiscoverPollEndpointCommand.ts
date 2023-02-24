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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import {
  DiscoverPollEndpointRequest,
  DiscoverPollEndpointRequestFilterSensitiveLog,
  DiscoverPollEndpointResponse,
  DiscoverPollEndpointResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DiscoverPollEndpointCommand,
  serializeAws_json1_1DiscoverPollEndpointCommand,
} from "../protocols/Aws_json1_1";

export interface DiscoverPollEndpointCommandInput extends DiscoverPollEndpointRequest {}
export interface DiscoverPollEndpointCommandOutput extends DiscoverPollEndpointResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Returns an endpoint for the Amazon ECS agent to poll for updates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DiscoverPollEndpointCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DiscoverPollEndpointCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DiscoverPollEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DiscoverPollEndpointCommandInput} for command's `input` shape.
 * @see {@link DiscoverPollEndpointCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 */
export class DiscoverPollEndpointCommand extends $Command<
  DiscoverPollEndpointCommandInput,
  DiscoverPollEndpointCommandOutput,
  ECSClientResolvedConfig
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

  constructor(readonly input: DiscoverPollEndpointCommandInput) {
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
  ): Handler<DiscoverPollEndpointCommandInput, DiscoverPollEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DiscoverPollEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DiscoverPollEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DiscoverPollEndpointRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DiscoverPollEndpointResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DiscoverPollEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DiscoverPollEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DiscoverPollEndpointCommandOutput> {
    return deserializeAws_json1_1DiscoverPollEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
