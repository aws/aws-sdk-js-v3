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
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { PutPortfolioPreferencesRequest, PutPortfolioPreferencesResponse } from "../models/models_0";
import { de_PutPortfolioPreferencesCommand, se_PutPortfolioPreferencesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutPortfolioPreferencesCommand}.
 */
export interface PutPortfolioPreferencesCommandInput extends PutPortfolioPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link PutPortfolioPreferencesCommand}.
 */
export interface PutPortfolioPreferencesCommandOutput extends PutPortfolioPreferencesResponse, __MetadataBearer {}

/**
 * @public
 * <p> Saves the specified migration and modernization preferences. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, PutPortfolioPreferencesCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, PutPortfolioPreferencesCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // PutPortfolioPreferencesRequest
 *   prioritizeBusinessGoals: { // PrioritizeBusinessGoals
 *     businessGoals: { // BusinessGoals
 *       speedOfMigration: Number("int"),
 *       reduceOperationalOverheadWithManagedServices: Number("int"),
 *       modernizeInfrastructureWithCloudNativeTechnologies: Number("int"),
 *       licenseCostReduction: Number("int"),
 *     },
 *   },
 *   applicationPreferences: { // ApplicationPreferences
 *     managementPreference: { // ManagementPreference Union: only one key present
 *       awsManagedResources: { // AwsManagedResources
 *         targetDestination: [ // AwsManagedTargetDestinations // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       selfManageResources: { // SelfManageResources
 *         targetDestination: [ // SelfManageTargetDestinations // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       noPreference: { // NoManagementPreference
 *         targetDestination: [ // NoPreferenceTargetDestinations // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   databasePreferences: { // DatabasePreferences
 *     databaseManagementPreference: "STRING_VALUE",
 *     databaseMigrationPreference: { // DatabaseMigrationPreference Union: only one key present
 *       heterogeneous: { // Heterogeneous
 *         targetDatabaseEngine: [ // HeterogeneousTargetDatabaseEngines // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       homogeneous: { // Homogeneous
 *         targetDatabaseEngine: [ // HomogeneousTargetDatabaseEngines
 *           "STRING_VALUE",
 *         ],
 *       },
 *       noPreference: { // NoDatabaseMigrationPreference
 *         targetDatabaseEngine: [ // TargetDatabaseEngines // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   applicationMode: "STRING_VALUE",
 * };
 * const command = new PutPortfolioPreferencesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutPortfolioPreferencesCommandInput - {@link PutPortfolioPreferencesCommandInput}
 * @returns {@link PutPortfolioPreferencesCommandOutput}
 * @see {@link PutPortfolioPreferencesCommandInput} for command's `input` shape.
 * @see {@link PutPortfolioPreferencesCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> Exception to indicate that there is an ongoing task when a new task is created. Return
 *       when once the existing tasks are complete. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request body isn't valid. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSMigrationHubStrategyRecommendation",
        operation: "PutPortfolioPreferences",
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
  private serialize(input: PutPortfolioPreferencesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutPortfolioPreferencesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPortfolioPreferencesCommandOutput> {
    return de_PutPortfolioPreferencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
