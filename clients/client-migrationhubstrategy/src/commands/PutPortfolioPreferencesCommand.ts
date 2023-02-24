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
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import {
  PutPortfolioPreferencesRequest,
  PutPortfolioPreferencesRequestFilterSensitiveLog,
  PutPortfolioPreferencesResponse,
  PutPortfolioPreferencesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutPortfolioPreferencesCommand,
  serializeAws_restJson1PutPortfolioPreferencesCommand,
} from "../protocols/Aws_restJson1";

export interface PutPortfolioPreferencesCommandInput extends PutPortfolioPreferencesRequest {}
export interface PutPortfolioPreferencesCommandOutput extends PutPortfolioPreferencesResponse, __MetadataBearer {}

/**
 * <p> Saves the specified migration and modernization preferences. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, PutPortfolioPreferencesCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, PutPortfolioPreferencesCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const command = new PutPortfolioPreferencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPortfolioPreferencesCommandInput} for command's `input` shape.
 * @see {@link PutPortfolioPreferencesCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 */
export class PutPortfolioPreferencesCommand extends $Command<
  PutPortfolioPreferencesCommandInput,
  PutPortfolioPreferencesCommandOutput,
  MigrationHubStrategyClientResolvedConfig
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

  constructor(readonly input: PutPortfolioPreferencesCommandInput) {
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
  ): Handler<PutPortfolioPreferencesCommandInput, PutPortfolioPreferencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutPortfolioPreferencesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "PutPortfolioPreferencesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutPortfolioPreferencesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutPortfolioPreferencesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutPortfolioPreferencesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutPortfolioPreferencesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPortfolioPreferencesCommandOutput> {
    return deserializeAws_restJson1PutPortfolioPreferencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
