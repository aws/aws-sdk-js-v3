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
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import {
  DescribeReplicationTaskAssessmentResultsMessage,
  DescribeReplicationTaskAssessmentResultsMessageFilterSensitiveLog,
  DescribeReplicationTaskAssessmentResultsResponse,
  DescribeReplicationTaskAssessmentResultsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand,
  serializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeReplicationTaskAssessmentResultsCommandInput
  extends DescribeReplicationTaskAssessmentResultsMessage {}
export interface DescribeReplicationTaskAssessmentResultsCommandOutput
  extends DescribeReplicationTaskAssessmentResultsResponse,
    __MetadataBearer {}

/**
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
 * const command = new DescribeReplicationTaskAssessmentResultsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplicationTaskAssessmentResultsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationTaskAssessmentResultsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
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
      inputFilterSensitiveLog: DescribeReplicationTaskAssessmentResultsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeReplicationTaskAssessmentResultsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeReplicationTaskAssessmentResultsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReplicationTaskAssessmentResultsCommandOutput> {
    return deserializeAws_json1_1DescribeReplicationTaskAssessmentResultsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
