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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  ListAppInstanceAdminsRequest,
  ListAppInstanceAdminsRequestFilterSensitiveLog,
  ListAppInstanceAdminsResponse,
  ListAppInstanceAdminsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListAppInstanceAdminsCommand,
  serializeAws_restJson1ListAppInstanceAdminsCommand,
} from "../protocols/Aws_restJson1";

export interface ListAppInstanceAdminsCommandInput extends ListAppInstanceAdminsRequest {}
export interface ListAppInstanceAdminsCommandOutput extends ListAppInstanceAdminsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the administrators in the <code>AppInstance</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListAppInstanceAdminsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListAppInstanceAdminsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListAppInstanceAdminsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAppInstanceAdminsCommandInput} for command's `input` shape.
 * @see {@link ListAppInstanceAdminsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class ListAppInstanceAdminsCommand extends $Command<
  ListAppInstanceAdminsCommandInput,
  ListAppInstanceAdminsCommandOutput,
  ChimeClientResolvedConfig
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

  constructor(readonly input: ListAppInstanceAdminsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAppInstanceAdminsCommandInput, ListAppInstanceAdminsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAppInstanceAdminsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListAppInstanceAdminsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAppInstanceAdminsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAppInstanceAdminsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAppInstanceAdminsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAppInstanceAdminsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAppInstanceAdminsCommandOutput> {
    return deserializeAws_restJson1ListAppInstanceAdminsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
