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

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import {
  ListEnabledControlsInput,
  ListEnabledControlsInputFilterSensitiveLog,
  ListEnabledControlsOutput,
  ListEnabledControlsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListEnabledControlsCommand,
  serializeAws_restJson1ListEnabledControlsCommand,
} from "../protocols/Aws_restJson1";

export interface ListEnabledControlsCommandInput extends ListEnabledControlsInput {}
export interface ListEnabledControlsCommandOutput extends ListEnabledControlsOutput, __MetadataBearer {}

/**
 * <p>Lists the controls enabled by AWS Control Tower on the specified organizational unit and
 *       the accounts it contains.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, ListEnabledControlsCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, ListEnabledControlsCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * const client = new ControlTowerClient(config);
 * const command = new ListEnabledControlsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEnabledControlsCommandInput} for command's `input` shape.
 * @see {@link ListEnabledControlsCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 */
export class ListEnabledControlsCommand extends $Command<
  ListEnabledControlsCommandInput,
  ListEnabledControlsCommandOutput,
  ControlTowerClientResolvedConfig
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

  constructor(readonly input: ListEnabledControlsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ControlTowerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEnabledControlsCommandInput, ListEnabledControlsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEnabledControlsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ControlTowerClient";
    const commandName = "ListEnabledControlsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEnabledControlsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListEnabledControlsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEnabledControlsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListEnabledControlsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEnabledControlsCommandOutput> {
    return deserializeAws_restJson1ListEnabledControlsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
