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
  deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand,
  serializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DescribeReplicationTaskAssessmentRunsCommandInput = DescribeReplicationTaskAssessmentRunsMessage;
export type DescribeReplicationTaskAssessmentRunsCommandOutput = DescribeReplicationTaskAssessmentRunsResponse &
  __MetadataBearer;

/**
 * <p>Returns a paginated list of premigration assessment runs based on filter
 *          settings.</p>
 *          <p>These filter settings can specify a combination of premigration assessment runs,
 *          migration tasks, replication instances, and assessment run status values.</p>
 *          <note>
 *             <p>This operation doesn't return information about individual assessments. For this
 *             information, see the <code>DescribeReplicationTaskIndividualAssessments</code>
 *             operation. </p>
 *          </note>
 */
export class DescribeReplicationTaskAssessmentRunsCommand extends $Command<
  DescribeReplicationTaskAssessmentRunsCommandInput,
  DescribeReplicationTaskAssessmentRunsCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeReplicationTaskAssessmentRunsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReplicationTaskAssessmentRunsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeReplicationTaskAssessmentRunsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeReplicationTaskAssessmentRunsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReplicationTaskAssessmentRunsCommandOutput> {
    return deserializeAws_json1_1DescribeReplicationTaskAssessmentRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
