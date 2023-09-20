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
  DescribeReplicationTaskAssessmentResultsMessage,
  DescribeReplicationTaskAssessmentResultsResponse,
} from "../models/models_0";
import {
  de_DescribeReplicationTaskAssessmentResultsCommand,
  se_DescribeReplicationTaskAssessmentResultsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplicationTaskAssessmentResultsCommand}.
 */
export interface DescribeReplicationTaskAssessmentResultsCommandInput
  extends DescribeReplicationTaskAssessmentResultsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationTaskAssessmentResultsCommand}.
 */
export interface DescribeReplicationTaskAssessmentResultsCommandOutput
  extends DescribeReplicationTaskAssessmentResultsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the task assessment results from the Amazon S3 bucket that DMS creates in your
 *           Amazon Web Services account.  This action always returns the
 *          latest results.</p>
 *          <p>For more information about DMS task assessments, see
 *            <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a>
 *            in the <i>Database Migration Service User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationTaskAssessmentResultsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationTaskAssessmentResultsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeReplicationTaskAssessmentResultsMessage
 *   ReplicationTaskArn: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeReplicationTaskAssessmentResultsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplicationTaskAssessmentResultsResponse
 * //   Marker: "STRING_VALUE",
 * //   BucketName: "STRING_VALUE",
 * //   ReplicationTaskAssessmentResults: [ // ReplicationTaskAssessmentResultList
 * //     { // ReplicationTaskAssessmentResult
 * //       ReplicationTaskIdentifier: "STRING_VALUE",
 * //       ReplicationTaskArn: "STRING_VALUE",
 * //       ReplicationTaskLastAssessmentDate: new Date("TIMESTAMP"),
 * //       AssessmentStatus: "STRING_VALUE",
 * //       AssessmentResultsFile: "STRING_VALUE",
 * //       AssessmentResults: "STRING_VALUE",
 * //       S3ObjectUrl: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReplicationTaskAssessmentResultsCommandInput - {@link DescribeReplicationTaskAssessmentResultsCommandInput}
 * @returns {@link DescribeReplicationTaskAssessmentResultsCommandOutput}
 * @see {@link DescribeReplicationTaskAssessmentResultsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationTaskAssessmentResultsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 */
export class DescribeReplicationTaskAssessmentResultsCommand extends $Command<
  DescribeReplicationTaskAssessmentResultsCommandInput,
  DescribeReplicationTaskAssessmentResultsCommandOutput,
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
  constructor(readonly input: DescribeReplicationTaskAssessmentResultsCommandInput) {
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
  ): Handler<
    DescribeReplicationTaskAssessmentResultsCommandInput,
    DescribeReplicationTaskAssessmentResultsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeReplicationTaskAssessmentResultsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeReplicationTaskAssessmentResultsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DescribeReplicationTaskAssessmentResults",
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
    input: DescribeReplicationTaskAssessmentResultsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeReplicationTaskAssessmentResultsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReplicationTaskAssessmentResultsCommandOutput> {
    return de_DescribeReplicationTaskAssessmentResultsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
