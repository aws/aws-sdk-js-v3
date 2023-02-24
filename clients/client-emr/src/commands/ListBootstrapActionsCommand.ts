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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import {
  ListBootstrapActionsInput,
  ListBootstrapActionsInputFilterSensitiveLog,
  ListBootstrapActionsOutput,
  ListBootstrapActionsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListBootstrapActionsCommand,
  serializeAws_json1_1ListBootstrapActionsCommand,
} from "../protocols/Aws_json1_1";

export interface ListBootstrapActionsCommandInput extends ListBootstrapActionsInput {}
export interface ListBootstrapActionsCommandOutput extends ListBootstrapActionsOutput, __MetadataBearer {}

/**
 * <p>Provides information about the bootstrap actions associated with a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListBootstrapActionsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListBootstrapActionsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListBootstrapActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBootstrapActionsCommandInput} for command's `input` shape.
 * @see {@link ListBootstrapActionsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 */
export class ListBootstrapActionsCommand extends $Command<
  ListBootstrapActionsCommandInput,
  ListBootstrapActionsCommandOutput,
  EMRClientResolvedConfig
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

  constructor(readonly input: ListBootstrapActionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBootstrapActionsCommandInput, ListBootstrapActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBootstrapActionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListBootstrapActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBootstrapActionsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListBootstrapActionsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBootstrapActionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListBootstrapActionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBootstrapActionsCommandOutput> {
    return deserializeAws_json1_1ListBootstrapActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
