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
import { GetPortfolioPreferencesRequest, GetPortfolioPreferencesResponse } from "../models/models_0";
import { de_GetPortfolioPreferencesCommand, se_GetPortfolioPreferencesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPortfolioPreferencesCommand}.
 */
export interface GetPortfolioPreferencesCommandInput extends GetPortfolioPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link GetPortfolioPreferencesCommand}.
 */
export interface GetPortfolioPreferencesCommandOutput extends GetPortfolioPreferencesResponse, __MetadataBearer {}

/**
 * @public
 * <p> Retrieves your migration and modernization preferences. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetPortfolioPreferencesCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetPortfolioPreferencesCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = {};
 * const command = new GetPortfolioPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // GetPortfolioPreferencesResponse
 * //   prioritizeBusinessGoals: { // PrioritizeBusinessGoals
 * //     businessGoals: { // BusinessGoals
 * //       speedOfMigration: Number("int"),
 * //       reduceOperationalOverheadWithManagedServices: Number("int"),
 * //       modernizeInfrastructureWithCloudNativeTechnologies: Number("int"),
 * //       licenseCostReduction: Number("int"),
 * //     },
 * //   },
 * //   applicationPreferences: { // ApplicationPreferences
 * //     managementPreference: { // ManagementPreference Union: only one key present
 * //       awsManagedResources: { // AwsManagedResources
 * //         targetDestination: [ // AwsManagedTargetDestinations // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       selfManageResources: { // SelfManageResources
 * //         targetDestination: [ // SelfManageTargetDestinations // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       noPreference: { // NoManagementPreference
 * //         targetDestination: [ // NoPreferenceTargetDestinations // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   databasePreferences: { // DatabasePreferences
 * //     databaseManagementPreference: "STRING_VALUE",
 * //     databaseMigrationPreference: { // DatabaseMigrationPreference Union: only one key present
 * //       heterogeneous: { // Heterogeneous
 * //         targetDatabaseEngine: [ // HeterogeneousTargetDatabaseEngines // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       homogeneous: { // Homogeneous
 * //         targetDatabaseEngine: [ // HomogeneousTargetDatabaseEngines
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       noPreference: { // NoDatabaseMigrationPreference
 * //         targetDatabaseEngine: [ // TargetDatabaseEngines // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   applicationMode: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPortfolioPreferencesCommandInput - {@link GetPortfolioPreferencesCommandInput}
 * @returns {@link GetPortfolioPreferencesCommandOutput}
 * @see {@link GetPortfolioPreferencesCommandInput} for command's `input` shape.
 * @see {@link GetPortfolioPreferencesCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ID in the request is not found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 */
export class GetPortfolioPreferencesCommand extends $Command<
  GetPortfolioPreferencesCommandInput,
  GetPortfolioPreferencesCommandOutput,
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
  constructor(readonly input: GetPortfolioPreferencesCommandInput) {
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
  ): Handler<GetPortfolioPreferencesCommandInput, GetPortfolioPreferencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPortfolioPreferencesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "GetPortfolioPreferencesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSMigrationHubStrategyRecommendation",
        operation: "GetPortfolioPreferences",
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
  private serialize(input: GetPortfolioPreferencesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPortfolioPreferencesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPortfolioPreferencesCommandOutput> {
    return de_GetPortfolioPreferencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
