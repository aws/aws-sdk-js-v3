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
import { GetMigrationRequest, GetMigrationResponse } from "../models/models_0";
import { de_GetMigrationCommand, se_GetMigrationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMigrationCommand}.
 */
export interface GetMigrationCommandInput extends GetMigrationRequest {}
/**
 * @public
 *
 * The output of {@link GetMigrationCommand}.
 */
export interface GetMigrationCommandOutput extends GetMigrationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides details about an ongoing or complete migration from an
 *       Amazon Lex V1 bot to an Amazon Lex V2 bot. Use this operation to view the migration
 *       alerts and warnings related to the migration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetMigrationCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetMigrationCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetMigrationRequest
 *   migrationId: "STRING_VALUE", // required
 * };
 * const command = new GetMigrationCommand(input);
 * const response = await client.send(command);
 * // { // GetMigrationResponse
 * //   migrationId: "STRING_VALUE",
 * //   v1BotName: "STRING_VALUE",
 * //   v1BotVersion: "STRING_VALUE",
 * //   v1BotLocale: "de-DE" || "en-AU" || "en-GB" || "en-IN" || "en-US" || "es-419" || "es-ES" || "es-US" || "fr-FR" || "fr-CA" || "it-IT" || "ja-JP" || "ko-KR",
 * //   v2BotId: "STRING_VALUE",
 * //   v2BotRole: "STRING_VALUE",
 * //   migrationStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED",
 * //   migrationStrategy: "CREATE_NEW" || "UPDATE_EXISTING",
 * //   migrationTimestamp: new Date("TIMESTAMP"),
 * //   alerts: [ // MigrationAlerts
 * //     { // MigrationAlert
 * //       type: "ERROR" || "WARN",
 * //       message: "STRING_VALUE",
 * //       details: [ // MigrationAlertDetails
 * //         "STRING_VALUE",
 * //       ],
 * //       referenceURLs: [ // MigrationAlertReferenceURLs
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMigrationCommandInput - {@link GetMigrationCommandInput}
 * @returns {@link GetMigrationCommandOutput}
 * @see {@link GetMigrationCommandInput} for command's `input` shape.
 * @see {@link GetMigrationCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the
 *       resource and try again.</p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 */
export class GetMigrationCommand extends $Command<
  GetMigrationCommandInput,
  GetMigrationCommandOutput,
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
  constructor(readonly input: GetMigrationCommandInput) {
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
  ): Handler<GetMigrationCommandInput, GetMigrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetMigrationCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetMigrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDeepSenseModelBuildingService",
        operation: "GetMigration",
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
  private serialize(input: GetMigrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMigrationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMigrationCommandOutput> {
    return de_GetMigrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
