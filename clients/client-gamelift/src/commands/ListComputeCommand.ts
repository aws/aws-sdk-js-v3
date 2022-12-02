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
  ListComputeInput,
  ListComputeInputFilterSensitiveLog,
  ListComputeOutput,
  ListComputeOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListComputeCommand,
  serializeAws_json1_1ListComputeCommand,
} from "../protocols/Aws_json1_1";

export interface ListComputeCommandInput extends ListComputeInput {}
export interface ListComputeCommandOutput extends ListComputeOutput, __MetadataBearer {}

/**
 * <p>Retrieves all compute resources registered to a fleet in your Amazon Web Services account. You can filter the result set by location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, ListComputeCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ListComputeCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new ListComputeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListComputeCommandInput} for command's `input` shape.
 * @see {@link ListComputeCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class ListComputeCommand extends $Command<
  ListComputeCommandInput,
  ListComputeCommandOutput,
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

  constructor(readonly input: ListComputeCommandInput) {
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
  ): Handler<ListComputeCommandInput, ListComputeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListComputeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "ListComputeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListComputeInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListComputeOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListComputeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListComputeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListComputeCommandOutput> {
    return deserializeAws_json1_1ListComputeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
