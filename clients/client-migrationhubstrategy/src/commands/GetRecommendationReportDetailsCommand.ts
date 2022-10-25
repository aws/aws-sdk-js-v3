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
  GetRecommendationReportDetailsRequest,
  GetRecommendationReportDetailsRequestFilterSensitiveLog,
  GetRecommendationReportDetailsResponse,
  GetRecommendationReportDetailsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetRecommendationReportDetailsCommand,
  serializeAws_restJson1GetRecommendationReportDetailsCommand,
} from "../protocols/Aws_restJson1";

export interface GetRecommendationReportDetailsCommandInput extends GetRecommendationReportDetailsRequest {}
export interface GetRecommendationReportDetailsCommandOutput
  extends GetRecommendationReportDetailsResponse,
    __MetadataBearer {}

/**
 * <p> Retrieves detailed information about the specified recommendation report. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetRecommendationReportDetailsCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetRecommendationReportDetailsCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const command = new GetRecommendationReportDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRecommendationReportDetailsCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationReportDetailsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 */
export class GetRecommendationReportDetailsCommand extends $Command<
  GetRecommendationReportDetailsCommandInput,
  GetRecommendationReportDetailsCommandOutput,
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

  constructor(readonly input: GetRecommendationReportDetailsCommandInput) {
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
  ): Handler<GetRecommendationReportDetailsCommandInput, GetRecommendationReportDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRecommendationReportDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "GetRecommendationReportDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRecommendationReportDetailsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetRecommendationReportDetailsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetRecommendationReportDetailsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRecommendationReportDetailsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRecommendationReportDetailsCommandOutput> {
    return deserializeAws_restJson1GetRecommendationReportDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
