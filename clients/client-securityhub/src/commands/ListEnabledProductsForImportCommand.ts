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
  ListEnabledProductsForImportRequest,
  ListEnabledProductsForImportRequestFilterSensitiveLog,
  ListEnabledProductsForImportResponse,
  ListEnabledProductsForImportResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1ListEnabledProductsForImportCommand,
  serializeAws_restJson1ListEnabledProductsForImportCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

export interface ListEnabledProductsForImportCommandInput extends ListEnabledProductsForImportRequest {}
export interface ListEnabledProductsForImportCommandOutput
  extends ListEnabledProductsForImportResponse,
    __MetadataBearer {}

/**
 * <p>Lists all findings-generating solutions (products) that you are subscribed to receive
 *          findings from in Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListEnabledProductsForImportCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListEnabledProductsForImportCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new ListEnabledProductsForImportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEnabledProductsForImportCommandInput} for command's `input` shape.
 * @see {@link ListEnabledProductsForImportCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 */
export class ListEnabledProductsForImportCommand extends $Command<
  ListEnabledProductsForImportCommandInput,
  ListEnabledProductsForImportCommandOutput,
  SecurityHubClientResolvedConfig
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

  constructor(readonly input: ListEnabledProductsForImportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEnabledProductsForImportCommandInput, ListEnabledProductsForImportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEnabledProductsForImportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "ListEnabledProductsForImportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEnabledProductsForImportRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListEnabledProductsForImportResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEnabledProductsForImportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListEnabledProductsForImportCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListEnabledProductsForImportCommandOutput> {
    return deserializeAws_restJson1ListEnabledProductsForImportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
