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

import {
  ListConfigurationRevisionsRequest,
  ListConfigurationRevisionsRequestFilterSensitiveLog,
  ListConfigurationRevisionsResponse,
  ListConfigurationRevisionsResponseFilterSensitiveLog,
} from "../models/models_0";
import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import {
  deserializeAws_restJson1ListConfigurationRevisionsCommand,
  serializeAws_restJson1ListConfigurationRevisionsCommand,
} from "../protocols/Aws_restJson1";

export interface ListConfigurationRevisionsCommandInput extends ListConfigurationRevisionsRequest {}
export interface ListConfigurationRevisionsCommandOutput extends ListConfigurationRevisionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all revisions for the specified configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, ListConfigurationRevisionsCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, ListConfigurationRevisionsCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new ListConfigurationRevisionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConfigurationRevisionsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationRevisionsCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
 *
 */
export class ListConfigurationRevisionsCommand extends $Command<
  ListConfigurationRevisionsCommandInput,
  ListConfigurationRevisionsCommandOutput,
  MqClientResolvedConfig
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

  constructor(readonly input: ListConfigurationRevisionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MqClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListConfigurationRevisionsCommandInput, ListConfigurationRevisionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListConfigurationRevisionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MqClient";
    const commandName = "ListConfigurationRevisionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListConfigurationRevisionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListConfigurationRevisionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListConfigurationRevisionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListConfigurationRevisionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListConfigurationRevisionsCommandOutput> {
    return deserializeAws_restJson1ListConfigurationRevisionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
