// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { GetMigrationsRequest, GetMigrationsResponse } from "../models/models_0";
import { de_GetMigrationsCommand, se_GetMigrationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMigrationsCommand}.
 */
export interface GetMigrationsCommandInput extends GetMigrationsRequest {}
/**
 * @public
 *
 * The output of {@link GetMigrationsCommand}.
 */
export interface GetMigrationsCommandOutput extends GetMigrationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of migrations between Amazon Lex V1 and Amazon Lex V2.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetMigrationsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetMigrationsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetMigrationsRequest
 *   sortByAttribute: "V1_BOT_NAME" || "MIGRATION_DATE_TIME",
 *   sortByOrder: "ASCENDING" || "DESCENDING",
 *   v1BotNameContains: "STRING_VALUE",
 *   migrationStatusEquals: "IN_PROGRESS" || "COMPLETED" || "FAILED",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetMigrationsCommand(input);
 * const response = await client.send(command);
 * // { // GetMigrationsResponse
 * //   migrationSummaries: [ // MigrationSummaryList
 * //     { // MigrationSummary
 * //       migrationId: "STRING_VALUE",
 * //       v1BotName: "STRING_VALUE",
 * //       v1BotVersion: "STRING_VALUE",
 * //       v1BotLocale: "de-DE" || "en-AU" || "en-GB" || "en-IN" || "en-US" || "es-419" || "es-ES" || "es-US" || "fr-FR" || "fr-CA" || "it-IT" || "ja-JP" || "ko-KR",
 * //       v2BotId: "STRING_VALUE",
 * //       v2BotRole: "STRING_VALUE",
 * //       migrationStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED",
 * //       migrationStrategy: "CREATE_NEW" || "UPDATE_EXISTING",
 * //       migrationTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMigrationsCommandInput - {@link GetMigrationsCommandInput}
 * @returns {@link GetMigrationsCommandOutput}
 * @see {@link GetMigrationsCommandInput} for command's `input` shape.
 * @see {@link GetMigrationsCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal Amazon Lex error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 */
export class GetMigrationsCommand extends $Command<
  GetMigrationsCommandInput,
  GetMigrationsCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: GetMigrationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMigrationsCommandInput, GetMigrationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetMigrationsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetMigrationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDeepSenseModelBuildingService",
        operation: "GetMigrations",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetMigrationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMigrationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMigrationsCommandOutput> {
    return de_GetMigrationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
