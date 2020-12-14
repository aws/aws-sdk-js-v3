import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import {
  DescribeReplicationTaskIndividualAssessmentsMessage,
  DescribeReplicationTaskIndividualAssessmentsResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand,
  serializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand,
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

export type DescribeReplicationTaskIndividualAssessmentsCommandInput = DescribeReplicationTaskIndividualAssessmentsMessage;
export type DescribeReplicationTaskIndividualAssessmentsCommandOutput = DescribeReplicationTaskIndividualAssessmentsResponse &
  __MetadataBearer;

/**
 * <p>Returns a paginated list of individual assessments based on filter settings.</p>
 *          <p>These filter settings can specify a combination of premigration assessment runs,
 *          migration tasks, and assessment status values.</p>
 */
export class DescribeReplicationTaskIndividualAssessmentsCommand extends $Command<
  DescribeReplicationTaskIndividualAssessmentsCommandInput,
  DescribeReplicationTaskIndividualAssessmentsCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeReplicationTaskIndividualAssessmentsCommandInput) {
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
    DescribeReplicationTaskIndividualAssessmentsCommandInput,
    DescribeReplicationTaskIndividualAssessmentsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeReplicationTaskIndividualAssessmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReplicationTaskIndividualAssessmentsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeReplicationTaskIndividualAssessmentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeReplicationTaskIndividualAssessmentsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReplicationTaskIndividualAssessmentsCommandOutput> {
    return deserializeAws_json1_1DescribeReplicationTaskIndividualAssessmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
