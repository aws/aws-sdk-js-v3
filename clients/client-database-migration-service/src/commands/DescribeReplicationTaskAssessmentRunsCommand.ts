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
import {
  DescribeReplicationTaskAssessmentRunsMessage,
  DescribeReplicationTaskAssessmentRunsResponse,
} from "../models/models_0";
import {
  de_DescribeReplicationTaskAssessmentRunsCommand,
  se_DescribeReplicationTaskAssessmentRunsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplicationTaskAssessmentRunsCommand}.
 */
export interface DescribeReplicationTaskAssessmentRunsCommandInput
  extends DescribeReplicationTaskAssessmentRunsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationTaskAssessmentRunsCommand}.
 */
export interface DescribeReplicationTaskAssessmentRunsCommandOutput
  extends DescribeReplicationTaskAssessmentRunsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a paginated list of premigration assessment runs based on filter
 *          settings.</p>
 *          <p>These filter settings can specify a combination of premigration assessment runs,
 *          migration tasks, replication instances, and assessment run status values.</p>
 *          <note>
 *             <p>This operation doesn't return information about individual assessments. For this
 *             information, see the <code>DescribeReplicationTaskIndividualAssessments</code>
 *             operation. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationTaskAssessmentRunsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationTaskAssessmentRunsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeReplicationTaskAssessmentRunsMessage
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeReplicationTaskAssessmentRunsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplicationTaskAssessmentRunsResponse
 * //   Marker: "STRING_VALUE",
 * //   ReplicationTaskAssessmentRuns: [ // ReplicationTaskAssessmentRunList
 * //     { // ReplicationTaskAssessmentRun
 * //       ReplicationTaskAssessmentRunArn: "STRING_VALUE",
 * //       ReplicationTaskArn: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       ReplicationTaskAssessmentRunCreationDate: new Date("TIMESTAMP"),
 * //       AssessmentProgress: { // ReplicationTaskAssessmentRunProgress
 * //         IndividualAssessmentCount: Number("int"),
 * //         IndividualAssessmentCompletedCount: Number("int"),
 * //       },
 * //       LastFailureMessage: "STRING_VALUE",
 * //       ServiceAccessRoleArn: "STRING_VALUE",
 * //       ResultLocationBucket: "STRING_VALUE",
 * //       ResultLocationFolder: "STRING_VALUE",
 * //       ResultEncryptionMode: "STRING_VALUE",
 * //       ResultKmsKeyArn: "STRING_VALUE",
 * //       AssessmentRunName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReplicationTaskAssessmentRunsCommandInput - {@link DescribeReplicationTaskAssessmentRunsCommandInput}
 * @returns {@link DescribeReplicationTaskAssessmentRunsCommandOutput}
 * @see {@link DescribeReplicationTaskAssessmentRunsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationTaskAssessmentRunsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 */
export class DescribeReplicationTaskAssessmentRunsCommand extends $Command<
  DescribeReplicationTaskAssessmentRunsCommandInput,
  DescribeReplicationTaskAssessmentRunsCommandOutput,
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
  constructor(readonly input: DescribeReplicationTaskAssessmentRunsCommandInput) {
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
  ): Handler<DescribeReplicationTaskAssessmentRunsCommandInput, DescribeReplicationTaskAssessmentRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReplicationTaskAssessmentRunsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeReplicationTaskAssessmentRunsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DescribeReplicationTaskAssessmentRuns",
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
    input: DescribeReplicationTaskAssessmentRunsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeReplicationTaskAssessmentRunsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReplicationTaskAssessmentRunsCommandOutput> {
    return de_DescribeReplicationTaskAssessmentRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
