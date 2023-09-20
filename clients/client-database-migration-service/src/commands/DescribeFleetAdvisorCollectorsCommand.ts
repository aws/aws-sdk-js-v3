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
import { DescribeFleetAdvisorCollectorsRequest, DescribeFleetAdvisorCollectorsResponse } from "../models/models_0";
import {
  de_DescribeFleetAdvisorCollectorsCommand,
  se_DescribeFleetAdvisorCollectorsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetAdvisorCollectorsCommand}.
 */
export interface DescribeFleetAdvisorCollectorsCommandInput extends DescribeFleetAdvisorCollectorsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFleetAdvisorCollectorsCommand}.
 */
export interface DescribeFleetAdvisorCollectorsCommandOutput
  extends DescribeFleetAdvisorCollectorsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the Fleet Advisor collectors in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeFleetAdvisorCollectorsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeFleetAdvisorCollectorsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeFleetAdvisorCollectorsRequest
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
 * const command = new DescribeFleetAdvisorCollectorsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetAdvisorCollectorsResponse
 * //   Collectors: [ // CollectorResponses
 * //     { // CollectorResponse
 * //       CollectorReferencedId: "STRING_VALUE",
 * //       CollectorName: "STRING_VALUE",
 * //       CollectorVersion: "STRING_VALUE",
 * //       VersionStatus: "UP_TO_DATE" || "OUTDATED" || "UNSUPPORTED",
 * //       Description: "STRING_VALUE",
 * //       S3BucketName: "STRING_VALUE",
 * //       ServiceAccessRoleArn: "STRING_VALUE",
 * //       CollectorHealthCheck: { // CollectorHealthCheck
 * //         CollectorStatus: "UNREGISTERED" || "ACTIVE",
 * //         LocalCollectorS3Access: true || false,
 * //         WebCollectorS3Access: true || false,
 * //         WebCollectorGrantedRoleBasedAccess: true || false,
 * //       },
 * //       LastDataReceived: "STRING_VALUE",
 * //       RegisteredDate: "STRING_VALUE",
 * //       CreatedDate: "STRING_VALUE",
 * //       ModifiedDate: "STRING_VALUE",
 * //       InventoryData: { // InventoryData
 * //         NumberOfDatabases: Number("int"),
 * //         NumberOfSchemas: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFleetAdvisorCollectorsCommandInput - {@link DescribeFleetAdvisorCollectorsCommandInput}
 * @returns {@link DescribeFleetAdvisorCollectorsCommandOutput}
 * @see {@link DescribeFleetAdvisorCollectorsCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetAdvisorCollectorsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 */
export class DescribeFleetAdvisorCollectorsCommand extends $Command<
  DescribeFleetAdvisorCollectorsCommandInput,
  DescribeFleetAdvisorCollectorsCommandOutput,
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
  constructor(readonly input: DescribeFleetAdvisorCollectorsCommandInput) {
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
  ): Handler<DescribeFleetAdvisorCollectorsCommandInput, DescribeFleetAdvisorCollectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFleetAdvisorCollectorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeFleetAdvisorCollectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DescribeFleetAdvisorCollectors",
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
  private serialize(
    input: DescribeFleetAdvisorCollectorsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeFleetAdvisorCollectorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFleetAdvisorCollectorsCommandOutput> {
    return de_DescribeFleetAdvisorCollectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
