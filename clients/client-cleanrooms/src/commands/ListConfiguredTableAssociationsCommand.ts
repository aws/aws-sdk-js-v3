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

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import {
  ListConfiguredTableAssociationsInput,
  ListConfiguredTableAssociationsInputFilterSensitiveLog,
  ListConfiguredTableAssociationsOutput,
  ListConfiguredTableAssociationsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListConfiguredTableAssociationsCommand,
  serializeAws_restJson1ListConfiguredTableAssociationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link ListConfiguredTableAssociationsCommand}.
 */
export interface ListConfiguredTableAssociationsCommandInput extends ListConfiguredTableAssociationsInput {}
/**
 * The output of {@link ListConfiguredTableAssociationsCommand}.
 */
export interface ListConfiguredTableAssociationsCommandOutput
  extends ListConfiguredTableAssociationsOutput,
    __MetadataBearer {}

/**
 * <p>Lists configured table associations for a membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListConfiguredTableAssociationsCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListConfiguredTableAssociationsCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const command = new ListConfiguredTableAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConfiguredTableAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListConfiguredTableAssociationsCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 */
export class ListConfiguredTableAssociationsCommand extends $Command<
  ListConfiguredTableAssociationsCommandInput,
  ListConfiguredTableAssociationsCommandOutput,
  CleanRoomsClientResolvedConfig
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

  constructor(readonly input: ListConfiguredTableAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListConfiguredTableAssociationsCommandInput, ListConfiguredTableAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListConfiguredTableAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "ListConfiguredTableAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListConfiguredTableAssociationsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListConfiguredTableAssociationsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListConfiguredTableAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListConfiguredTableAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListConfiguredTableAssociationsCommandOutput> {
    return deserializeAws_restJson1ListConfiguredTableAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
