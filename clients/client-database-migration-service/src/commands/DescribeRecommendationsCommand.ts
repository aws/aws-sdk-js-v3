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
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { DescribeRecommendationsRequest, DescribeRecommendationsResponse } from "../models/models_0";
import { de_DescribeRecommendationsCommand, se_DescribeRecommendationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRecommendationsCommand}.
 */
export interface DescribeRecommendationsCommandInput extends DescribeRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRecommendationsCommand}.
 */
export interface DescribeRecommendationsCommandOutput extends DescribeRecommendationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a paginated list of target engine recommendations for your source
 *             databases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeRecommendationsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeRecommendationsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeRecommendationsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRecommendationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Recommendations: [ // RecommendationList
 * //     { // Recommendation
 * //       DatabaseId: "STRING_VALUE",
 * //       EngineName: "STRING_VALUE",
 * //       CreatedDate: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       Preferred: true || false,
 * //       Settings: { // RecommendationSettings
 * //         InstanceSizingType: "STRING_VALUE", // required
 * //         WorkloadType: "STRING_VALUE", // required
 * //       },
 * //       Data: { // RecommendationData
 * //         RdsEngine: { // RdsRecommendation
 * //           RequirementsToTarget: { // RdsRequirements
 * //             EngineEdition: "STRING_VALUE",
 * //             InstanceVcpu: Number("double"),
 * //             InstanceMemory: Number("double"),
 * //             StorageSize: Number("int"),
 * //             StorageIops: Number("int"),
 * //             DeploymentOption: "STRING_VALUE",
 * //             EngineVersion: "STRING_VALUE",
 * //           },
 * //           TargetConfiguration: { // RdsConfiguration
 * //             EngineEdition: "STRING_VALUE",
 * //             InstanceType: "STRING_VALUE",
 * //             InstanceVcpu: Number("double"),
 * //             InstanceMemory: Number("double"),
 * //             StorageType: "STRING_VALUE",
 * //             StorageSize: Number("int"),
 * //             StorageIops: Number("int"),
 * //             DeploymentOption: "STRING_VALUE",
 * //             EngineVersion: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeRecommendationsCommandInput - {@link DescribeRecommendationsCommandInput}
 * @returns {@link DescribeRecommendationsCommandOutput}
 * @see {@link DescribeRecommendationsCommandInput} for command's `input` shape.
 * @see {@link DescribeRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 */
export class DescribeRecommendationsCommand extends $Command<
  DescribeRecommendationsCommandInput,
  DescribeRecommendationsCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
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
  constructor(readonly input: DescribeRecommendationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRecommendationsCommandInput, DescribeRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRecommendationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DescribeRecommendations",
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
  private serialize(input: DescribeRecommendationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRecommendationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRecommendationsCommandOutput> {
    return de_DescribeRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
