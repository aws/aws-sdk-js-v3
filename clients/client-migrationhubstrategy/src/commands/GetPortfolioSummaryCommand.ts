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
  GetPortfolioSummaryRequest,
  GetPortfolioSummaryRequestFilterSensitiveLog,
  GetPortfolioSummaryResponse,
  GetPortfolioSummaryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetPortfolioSummaryCommand,
  serializeAws_restJson1GetPortfolioSummaryCommand,
} from "../protocols/Aws_restJson1";

export interface GetPortfolioSummaryCommandInput extends GetPortfolioSummaryRequest {}
export interface GetPortfolioSummaryCommandOutput extends GetPortfolioSummaryResponse, __MetadataBearer {}

/**
 * <p> Retrieves overall summary including the number of servers to rehost and the overall
 *       number of anti-patterns. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetPortfolioSummaryCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetPortfolioSummaryCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const command = new GetPortfolioSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPortfolioSummaryCommandInput} for command's `input` shape.
 * @see {@link GetPortfolioSummaryCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 */
export class GetPortfolioSummaryCommand extends $Command<
  GetPortfolioSummaryCommandInput,
  GetPortfolioSummaryCommandOutput,
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

  constructor(readonly input: GetPortfolioSummaryCommandInput) {
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
  ): Handler<GetPortfolioSummaryCommandInput, GetPortfolioSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPortfolioSummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "GetPortfolioSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPortfolioSummaryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetPortfolioSummaryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPortfolioSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPortfolioSummaryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPortfolioSummaryCommandOutput> {
    return deserializeAws_restJson1GetPortfolioSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
