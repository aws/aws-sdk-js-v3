// smithy-typescript generated code
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
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { ListServersRequest, ListServersResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListServersCommand,
  serializeAws_restJson1ListServersCommand,
} from "../protocols/Aws_restJson1";

export interface ListServersCommandInput extends ListServersRequest {}
export interface ListServersCommandOutput extends ListServersResponse, __MetadataBearer {}

/**
 * <p> Returns a list of all the servers. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, ListServersCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, ListServersCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const command = new ListServersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServersCommandInput} for command's `input` shape.
 * @see {@link ListServersCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 */
export class ListServersCommand extends $Command<
  ListServersCommandInput,
  ListServersCommandOutput,
  MigrationHubStrategyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListServersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubStrategyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListServersCommandInput, ListServersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "ListServersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListServersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListServersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListServersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListServersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListServersCommandOutput> {
    return deserializeAws_restJson1ListServersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
