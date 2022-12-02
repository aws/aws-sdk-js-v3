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

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  DescribeGameSessionPlacementInput,
  DescribeGameSessionPlacementInputFilterSensitiveLog,
  DescribeGameSessionPlacementOutput,
  DescribeGameSessionPlacementOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeGameSessionPlacementCommand,
  serializeAws_json1_1DescribeGameSessionPlacementCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeGameSessionPlacementCommandInput extends DescribeGameSessionPlacementInput {}
export interface DescribeGameSessionPlacementCommandOutput
  extends DescribeGameSessionPlacementOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves information, including current status, about a game session placement
 *             request. </p>
 *         <p>To get game session placement details, specify the placement ID.</p>
 *         <p>This operation is not designed to be continually called to track game session status.
 *             This practice can cause you to exceed your API limit, which results in errors. Instead,
 *             you must configure configure an Amazon Simple Notification Service (SNS) topic to receive notifications from
 *             FlexMatch or queues. Continuously polling with <code>DescribeGameSessionPlacement</code>
 *             should only be used for games in development with low game session usage. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeGameSessionPlacementCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeGameSessionPlacementCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeGameSessionPlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGameSessionPlacementCommandInput} for command's `input` shape.
 * @see {@link DescribeGameSessionPlacementCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class DescribeGameSessionPlacementCommand extends $Command<
  DescribeGameSessionPlacementCommandInput,
  DescribeGameSessionPlacementCommandOutput,
  GameLiftClientResolvedConfig
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

  constructor(readonly input: DescribeGameSessionPlacementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeGameSessionPlacementCommandInput, DescribeGameSessionPlacementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeGameSessionPlacementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeGameSessionPlacementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGameSessionPlacementInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeGameSessionPlacementOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeGameSessionPlacementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeGameSessionPlacementCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeGameSessionPlacementCommandOutput> {
    return deserializeAws_json1_1DescribeGameSessionPlacementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
