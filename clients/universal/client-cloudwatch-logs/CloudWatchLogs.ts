import { CloudWatchLogsClient } from "./CloudWatchLogsClient";
import { AssociateKmsKeyInput } from "./types/AssociateKmsKeyInput";
import { AssociateKmsKeyOutput } from "./types/AssociateKmsKeyOutput";
import { CancelExportTaskInput } from "./types/CancelExportTaskInput";
import { CancelExportTaskOutput } from "./types/CancelExportTaskOutput";
import { CreateExportTaskInput } from "./types/CreateExportTaskInput";
import { CreateExportTaskOutput } from "./types/CreateExportTaskOutput";
import { CreateLogGroupInput } from "./types/CreateLogGroupInput";
import { CreateLogGroupOutput } from "./types/CreateLogGroupOutput";
import { CreateLogStreamInput } from "./types/CreateLogStreamInput";
import { CreateLogStreamOutput } from "./types/CreateLogStreamOutput";
import { DataAlreadyAcceptedException } from "./types/DataAlreadyAcceptedException";
import { DeleteDestinationInput } from "./types/DeleteDestinationInput";
import { DeleteDestinationOutput } from "./types/DeleteDestinationOutput";
import { DeleteLogGroupInput } from "./types/DeleteLogGroupInput";
import { DeleteLogGroupOutput } from "./types/DeleteLogGroupOutput";
import { DeleteLogStreamInput } from "./types/DeleteLogStreamInput";
import { DeleteLogStreamOutput } from "./types/DeleteLogStreamOutput";
import { DeleteMetricFilterInput } from "./types/DeleteMetricFilterInput";
import { DeleteMetricFilterOutput } from "./types/DeleteMetricFilterOutput";
import { DeleteResourcePolicyInput } from "./types/DeleteResourcePolicyInput";
import { DeleteResourcePolicyOutput } from "./types/DeleteResourcePolicyOutput";
import { DeleteRetentionPolicyInput } from "./types/DeleteRetentionPolicyInput";
import { DeleteRetentionPolicyOutput } from "./types/DeleteRetentionPolicyOutput";
import { DeleteSubscriptionFilterInput } from "./types/DeleteSubscriptionFilterInput";
import { DeleteSubscriptionFilterOutput } from "./types/DeleteSubscriptionFilterOutput";
import { DescribeDestinationsInput } from "./types/DescribeDestinationsInput";
import { DescribeDestinationsOutput } from "./types/DescribeDestinationsOutput";
import { DescribeExportTasksInput } from "./types/DescribeExportTasksInput";
import { DescribeExportTasksOutput } from "./types/DescribeExportTasksOutput";
import { DescribeLogGroupsInput } from "./types/DescribeLogGroupsInput";
import { DescribeLogGroupsOutput } from "./types/DescribeLogGroupsOutput";
import { DescribeLogStreamsInput } from "./types/DescribeLogStreamsInput";
import { DescribeLogStreamsOutput } from "./types/DescribeLogStreamsOutput";
import { DescribeMetricFiltersInput } from "./types/DescribeMetricFiltersInput";
import { DescribeMetricFiltersOutput } from "./types/DescribeMetricFiltersOutput";
import { DescribeQueriesInput } from "./types/DescribeQueriesInput";
import { DescribeQueriesOutput } from "./types/DescribeQueriesOutput";
import { DescribeResourcePoliciesInput } from "./types/DescribeResourcePoliciesInput";
import { DescribeResourcePoliciesOutput } from "./types/DescribeResourcePoliciesOutput";
import { DescribeSubscriptionFiltersInput } from "./types/DescribeSubscriptionFiltersInput";
import { DescribeSubscriptionFiltersOutput } from "./types/DescribeSubscriptionFiltersOutput";
import { DisassociateKmsKeyInput } from "./types/DisassociateKmsKeyInput";
import { DisassociateKmsKeyOutput } from "./types/DisassociateKmsKeyOutput";
import { FilterLogEventsInput } from "./types/FilterLogEventsInput";
import { FilterLogEventsOutput } from "./types/FilterLogEventsOutput";
import { GetLogEventsInput } from "./types/GetLogEventsInput";
import { GetLogEventsOutput } from "./types/GetLogEventsOutput";
import { GetLogGroupFieldsInput } from "./types/GetLogGroupFieldsInput";
import { GetLogGroupFieldsOutput } from "./types/GetLogGroupFieldsOutput";
import { GetLogRecordInput } from "./types/GetLogRecordInput";
import { GetLogRecordOutput } from "./types/GetLogRecordOutput";
import { GetQueryResultsInput } from "./types/GetQueryResultsInput";
import { GetQueryResultsOutput } from "./types/GetQueryResultsOutput";
import { InvalidOperationException } from "./types/InvalidOperationException";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { InvalidSequenceTokenException } from "./types/InvalidSequenceTokenException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListTagsLogGroupInput } from "./types/ListTagsLogGroupInput";
import { ListTagsLogGroupOutput } from "./types/ListTagsLogGroupOutput";
import { MalformedQueryException } from "./types/MalformedQueryException";
import { OperationAbortedException } from "./types/OperationAbortedException";
import { PutDestinationInput } from "./types/PutDestinationInput";
import { PutDestinationOutput } from "./types/PutDestinationOutput";
import { PutDestinationPolicyInput } from "./types/PutDestinationPolicyInput";
import { PutDestinationPolicyOutput } from "./types/PutDestinationPolicyOutput";
import { PutLogEventsInput } from "./types/PutLogEventsInput";
import { PutLogEventsOutput } from "./types/PutLogEventsOutput";
import { PutMetricFilterInput } from "./types/PutMetricFilterInput";
import { PutMetricFilterOutput } from "./types/PutMetricFilterOutput";
import { PutResourcePolicyInput } from "./types/PutResourcePolicyInput";
import { PutResourcePolicyOutput } from "./types/PutResourcePolicyOutput";
import { PutRetentionPolicyInput } from "./types/PutRetentionPolicyInput";
import { PutRetentionPolicyOutput } from "./types/PutRetentionPolicyOutput";
import { PutSubscriptionFilterInput } from "./types/PutSubscriptionFilterInput";
import { PutSubscriptionFilterOutput } from "./types/PutSubscriptionFilterOutput";
import { ResourceAlreadyExistsException } from "./types/ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { StartQueryInput } from "./types/StartQueryInput";
import { StartQueryOutput } from "./types/StartQueryOutput";
import { StopQueryInput } from "./types/StopQueryInput";
import { StopQueryOutput } from "./types/StopQueryOutput";
import { TagLogGroupInput } from "./types/TagLogGroupInput";
import { TagLogGroupOutput } from "./types/TagLogGroupOutput";
import { TestMetricFilterInput } from "./types/TestMetricFilterInput";
import { TestMetricFilterOutput } from "./types/TestMetricFilterOutput";
import { UnrecognizedClientException } from "./types/UnrecognizedClientException";
import { UntagLogGroupInput } from "./types/UntagLogGroupInput";
import { UntagLogGroupOutput } from "./types/UntagLogGroupOutput";
import { AssociateKmsKeyCommand } from "./commands/AssociateKmsKeyCommand";
import { CancelExportTaskCommand } from "./commands/CancelExportTaskCommand";
import { CreateExportTaskCommand } from "./commands/CreateExportTaskCommand";
import { CreateLogGroupCommand } from "./commands/CreateLogGroupCommand";
import { CreateLogStreamCommand } from "./commands/CreateLogStreamCommand";
import { DeleteDestinationCommand } from "./commands/DeleteDestinationCommand";
import { DeleteLogGroupCommand } from "./commands/DeleteLogGroupCommand";
import { DeleteLogStreamCommand } from "./commands/DeleteLogStreamCommand";
import { DeleteMetricFilterCommand } from "./commands/DeleteMetricFilterCommand";
import { DeleteResourcePolicyCommand } from "./commands/DeleteResourcePolicyCommand";
import { DeleteRetentionPolicyCommand } from "./commands/DeleteRetentionPolicyCommand";
import { DeleteSubscriptionFilterCommand } from "./commands/DeleteSubscriptionFilterCommand";
import { DescribeDestinationsCommand } from "./commands/DescribeDestinationsCommand";
import { DescribeExportTasksCommand } from "./commands/DescribeExportTasksCommand";
import { DescribeLogGroupsCommand } from "./commands/DescribeLogGroupsCommand";
import { DescribeLogStreamsCommand } from "./commands/DescribeLogStreamsCommand";
import { DescribeMetricFiltersCommand } from "./commands/DescribeMetricFiltersCommand";
import { DescribeQueriesCommand } from "./commands/DescribeQueriesCommand";
import { DescribeResourcePoliciesCommand } from "./commands/DescribeResourcePoliciesCommand";
import { DescribeSubscriptionFiltersCommand } from "./commands/DescribeSubscriptionFiltersCommand";
import { DisassociateKmsKeyCommand } from "./commands/DisassociateKmsKeyCommand";
import { FilterLogEventsCommand } from "./commands/FilterLogEventsCommand";
import { GetLogEventsCommand } from "./commands/GetLogEventsCommand";
import { GetLogGroupFieldsCommand } from "./commands/GetLogGroupFieldsCommand";
import { GetLogRecordCommand } from "./commands/GetLogRecordCommand";
import { GetQueryResultsCommand } from "./commands/GetQueryResultsCommand";
import { ListTagsLogGroupCommand } from "./commands/ListTagsLogGroupCommand";
import { PutDestinationCommand } from "./commands/PutDestinationCommand";
import { PutDestinationPolicyCommand } from "./commands/PutDestinationPolicyCommand";
import { PutLogEventsCommand } from "./commands/PutLogEventsCommand";
import { PutMetricFilterCommand } from "./commands/PutMetricFilterCommand";
import { PutResourcePolicyCommand } from "./commands/PutResourcePolicyCommand";
import { PutRetentionPolicyCommand } from "./commands/PutRetentionPolicyCommand";
import { PutSubscriptionFilterCommand } from "./commands/PutSubscriptionFilterCommand";
import { StartQueryCommand } from "./commands/StartQueryCommand";
import { StopQueryCommand } from "./commands/StopQueryCommand";
import { TagLogGroupCommand } from "./commands/TagLogGroupCommand";
import { TestMetricFilterCommand } from "./commands/TestMetricFilterCommand";
import { UntagLogGroupCommand } from "./commands/UntagLogGroupCommand";

export class CloudWatchLogs extends CloudWatchLogsClient {
  /**
   * <p>Associates the specified AWS Key Management Service (AWS KMS) customer master key (CMK) with the specified log group.</p> <p>Associating an AWS KMS CMK with a log group overrides any existing associations between the log group and a CMK. After a CMK is associated with a log group, all newly ingested data for the log group is encrypted using the CMK. This association is stored as long as the data encrypted with the CMK is still within Amazon CloudWatch Logs. This enables Amazon CloudWatch Logs to decrypt this data whenever it is requested.</p> <p>Note that it can take up to 5 minutes for this operation to take effect.</p> <p>If you attempt to associate a CMK with a log group but the CMK does not exist or the CMK is disabled, you will receive an <code>InvalidParameterException</code> error. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {OperationAbortedException} <p>Multiple requests to update the same resource were in conflict.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateKmsKey(
    args: AssociateKmsKeyInput
  ): Promise<AssociateKmsKeyOutput>;
  public associateKmsKey(
    args: AssociateKmsKeyInput,
    cb: (err: any, data?: AssociateKmsKeyOutput) => void
  ): void;
  public associateKmsKey(
    args: AssociateKmsKeyInput,
    cb?: (err: any, data?: AssociateKmsKeyOutput) => void
  ): Promise<AssociateKmsKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateKmsKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels the specified export task.</p> <p>The task must be in the <code>PENDING</code> or <code>RUNNING</code> state.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidOperationException} <p>The operation is not valid on the specified resource.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelExportTask(
    args: CancelExportTaskInput
  ): Promise<CancelExportTaskOutput>;
  public cancelExportTask(
    args: CancelExportTaskInput,
    cb: (err: any, data?: CancelExportTaskOutput) => void
  ): void;
  public cancelExportTask(
    args: CancelExportTaskInput,
    cb?: (err: any, data?: CancelExportTaskOutput) => void
  ): Promise<CancelExportTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelExportTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an export task, which allows you to efficiently export data from a log group to an Amazon S3 bucket.</p> <p>This is an asynchronous call. If all the required information is provided, this operation initiates an export task and responds with the ID of the task. After the task has started, you can use <a>DescribeExportTasks</a> to get the status of the export task. Each account can only have one active (<code>RUNNING</code> or <code>PENDING</code>) export task at a time. To cancel an export task, use <a>CancelExportTask</a>.</p> <p>You can export logs from multiple log groups or multiple time ranges to the same S3 bucket. To separate out log data for each export task, you can specify a prefix to be used as the Amazon S3 key prefix for all exported objects.</p> <p>Exporting to S3 buckets that are encrypted with AES-256 is supported. Exporting to S3 buckets encrypted with SSE-KMS is not supported. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {LimitExceededException} <p>You have reached the maximum number of resources that can be created.</p>
   *   - {OperationAbortedException} <p>Multiple requests to update the same resource were in conflict.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createExportTask(
    args: CreateExportTaskInput
  ): Promise<CreateExportTaskOutput>;
  public createExportTask(
    args: CreateExportTaskInput,
    cb: (err: any, data?: CreateExportTaskOutput) => void
  ): void;
  public createExportTask(
    args: CreateExportTaskInput,
    cb?: (err: any, data?: CreateExportTaskOutput) => void
  ): Promise<CreateExportTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateExportTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a log group with the specified name.</p> <p>You can create up to 5000 log groups per account.</p> <p>You must use the following guidelines when naming a log group:</p> <ul> <li> <p>Log group names must be unique within a region for an AWS account.</p> </li> <li> <p>Log group names can be between 1 and 512 characters long.</p> </li> <li> <p>Log group names consist of the following characters: a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), and '.' (period).</p> </li> </ul> <p>If you associate a AWS Key Management Service (AWS KMS) customer master key (CMK) with the log group, ingested data is encrypted using the CMK. This association is stored as long as the data encrypted with the CMK is still within Amazon CloudWatch Logs. This enables Amazon CloudWatch Logs to decrypt this data whenever it is requested.</p> <p>If you attempt to associate a CMK with the log group but the CMK does not exist or the CMK is disabled, you will receive an <code>InvalidParameterException</code> error. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {LimitExceededException} <p>You have reached the maximum number of resources that can be created.</p>
   *   - {OperationAbortedException} <p>Multiple requests to update the same resource were in conflict.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLogGroup(
    args: CreateLogGroupInput
  ): Promise<CreateLogGroupOutput>;
  public createLogGroup(
    args: CreateLogGroupInput,
    cb: (err: any, data?: CreateLogGroupOutput) => void
  ): void;
  public createLogGroup(
    args: CreateLogGroupInput,
    cb?: (err: any, data?: CreateLogGroupOutput) => void
  ): Promise<CreateLogGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLogGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a log stream for the specified log group.</p> <p>There is no limit on the number of log streams that you can create for a log group.</p> <p>You must use the following guidelines when naming a log stream:</p> <ul> <li> <p>Log stream names must be unique within the log group.</p> </li> <li> <p>Log stream names can be between 1 and 512 characters long.</p> </li> <li> <p>The ':' (colon) and '*' (asterisk) characters are not allowed.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLogStream(
    args: CreateLogStreamInput
  ): Promise<CreateLogStreamOutput>;
  public createLogStream(
    args: CreateLogStreamInput,
    cb: (err: any, data?: CreateLogStreamOutput) => void
  ): void;
  public createLogStream(
    args: CreateLogStreamInput,
    cb?: (err: any, data?: CreateLogStreamOutput) => void
  ): Promise<CreateLogStreamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLogStreamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified destination, and eventually disables all the subscription filters that publish to it. This operation does not delete the physical resource encapsulated by the destination.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {OperationAbortedException} <p>Multiple requests to update the same resource were in conflict.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDestination(
    args: DeleteDestinationInput
  ): Promise<DeleteDestinationOutput>;
  public deleteDestination(
    args: DeleteDestinationInput,
    cb: (err: any, data?: DeleteDestinationOutput) => void
  ): void;
  public deleteDestination(
    args: DeleteDestinationInput,
    cb?: (err: any, data?: DeleteDestinationOutput) => void
  ): Promise<DeleteDestinationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDestinationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified log group and permanently deletes all the archived log events associated with the log group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {OperationAbortedException} <p>Multiple requests to update the same resource were in conflict.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLogGroup(
    args: DeleteLogGroupInput
  ): Promise<DeleteLogGroupOutput>;
  public deleteLogGroup(
    args: DeleteLogGroupInput,
    cb: (err: any, data?: DeleteLogGroupOutput) => void
  ): void;
  public deleteLogGroup(
    args: DeleteLogGroupInput,
    cb?: (err: any, data?: DeleteLogGroupOutput) => void
  ): Promise<DeleteLogGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLogGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified log stream and permanently deletes all the archived log events associated with the log stream.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {OperationAbortedException} <p>Multiple requests to update the same resource were in conflict.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLogStream(
    args: DeleteLogStreamInput
  ): Promise<DeleteLogStreamOutput>;
  public deleteLogStream(
    args: DeleteLogStreamInput,
    cb: (err: any, data?: DeleteLogStreamOutput) => void
  ): void;
  public deleteLogStream(
    args: DeleteLogStreamInput,
    cb?: (err: any, data?: DeleteLogStreamOutput) => void
  ): Promise<DeleteLogStreamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLogStreamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified metric filter.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {OperationAbortedException} <p>Multiple requests to update the same resource were in conflict.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteMetricFilter(
    args: DeleteMetricFilterInput
  ): Promise<DeleteMetricFilterOutput>;
  public deleteMetricFilter(
    args: DeleteMetricFilterInput,
    cb: (err: any, data?: DeleteMetricFilterOutput) => void
  ): void;
  public deleteMetricFilter(
    args: DeleteMetricFilterInput,
    cb?: (err: any, data?: DeleteMetricFilterOutput) => void
  ): Promise<DeleteMetricFilterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteMetricFilterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a resource policy from this account. This revokes the access of the identities in that policy to put log events to this account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteResourcePolicy(
    args: DeleteResourcePolicyInput
  ): Promise<DeleteResourcePolicyOutput>;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyInput,
    cb: (err: any, data?: DeleteResourcePolicyOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyInput,
    cb?: (err: any, data?: DeleteResourcePolicyOutput) => void
  ): Promise<DeleteResourcePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteResourcePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified retention policy.</p> <p>Log events do not expire if they belong to log groups without a retention policy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {OperationAbortedException} <p>Multiple requests to update the same resource were in conflict.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRetentionPolicy(
    args: DeleteRetentionPolicyInput
  ): Promise<DeleteRetentionPolicyOutput>;
  public deleteRetentionPolicy(
    args: DeleteRetentionPolicyInput,
    cb: (err: any, data?: DeleteRetentionPolicyOutput) => void
  ): void;
  public deleteRetentionPolicy(
    args: DeleteRetentionPolicyInput,
    cb?: (err: any, data?: DeleteRetentionPolicyOutput) => void
  ): Promise<DeleteRetentionPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRetentionPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified subscription filter.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {OperationAbortedException} <p>Multiple requests to update the same resource were in conflict.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSubscriptionFilter(
    args: DeleteSubscriptionFilterInput
  ): Promise<DeleteSubscriptionFilterOutput>;
  public deleteSubscriptionFilter(
    args: DeleteSubscriptionFilterInput,
    cb: (err: any, data?: DeleteSubscriptionFilterOutput) => void
  ): void;
  public deleteSubscriptionFilter(
    args: DeleteSubscriptionFilterInput,
    cb?: (err: any, data?: DeleteSubscriptionFilterOutput) => void
  ): Promise<DeleteSubscriptionFilterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSubscriptionFilterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all your destinations. The results are ASCII-sorted by destination name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDestinations(
    args: DescribeDestinationsInput
  ): Promise<DescribeDestinationsOutput>;
  public describeDestinations(
    args: DescribeDestinationsInput,
    cb: (err: any, data?: DescribeDestinationsOutput) => void
  ): void;
  public describeDestinations(
    args: DescribeDestinationsInput,
    cb?: (err: any, data?: DescribeDestinationsOutput) => void
  ): Promise<DescribeDestinationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDestinationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the specified export tasks. You can list all your export tasks or filter the results based on task ID or task status.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeExportTasks(
    args: DescribeExportTasksInput
  ): Promise<DescribeExportTasksOutput>;
  public describeExportTasks(
    args: DescribeExportTasksInput,
    cb: (err: any, data?: DescribeExportTasksOutput) => void
  ): void;
  public describeExportTasks(
    args: DescribeExportTasksInput,
    cb?: (err: any, data?: DescribeExportTasksOutput) => void
  ): Promise<DescribeExportTasksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeExportTasksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the specified log groups. You can list all your log groups or filter the results by prefix. The results are ASCII-sorted by log group name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLogGroups(
    args: DescribeLogGroupsInput
  ): Promise<DescribeLogGroupsOutput>;
  public describeLogGroups(
    args: DescribeLogGroupsInput,
    cb: (err: any, data?: DescribeLogGroupsOutput) => void
  ): void;
  public describeLogGroups(
    args: DescribeLogGroupsInput,
    cb?: (err: any, data?: DescribeLogGroupsOutput) => void
  ): Promise<DescribeLogGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLogGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the log streams for the specified log group. You can list all the log streams or filter the results by prefix. You can also control how the results are ordered.</p> <p>This operation has a limit of five transactions per second, after which transactions are throttled.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeLogStreams(
    args: DescribeLogStreamsInput
  ): Promise<DescribeLogStreamsOutput>;
  public describeLogStreams(
    args: DescribeLogStreamsInput,
    cb: (err: any, data?: DescribeLogStreamsOutput) => void
  ): void;
  public describeLogStreams(
    args: DescribeLogStreamsInput,
    cb?: (err: any, data?: DescribeLogStreamsOutput) => void
  ): Promise<DescribeLogStreamsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeLogStreamsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the specified metric filters. You can list all the metric filters or filter the results by log name, prefix, metric name, or metric namespace. The results are ASCII-sorted by filter name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeMetricFilters(
    args: DescribeMetricFiltersInput
  ): Promise<DescribeMetricFiltersOutput>;
  public describeMetricFilters(
    args: DescribeMetricFiltersInput,
    cb: (err: any, data?: DescribeMetricFiltersOutput) => void
  ): void;
  public describeMetricFilters(
    args: DescribeMetricFiltersInput,
    cb?: (err: any, data?: DescribeMetricFiltersOutput) => void
  ): Promise<DescribeMetricFiltersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeMetricFiltersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of CloudWatch Logs Insights queries that are scheduled, executing, or have been executed recently in this account. You can request all queries, or limit it to queries of a specific log group or queries with a certain status.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeQueries(
    args: DescribeQueriesInput
  ): Promise<DescribeQueriesOutput>;
  public describeQueries(
    args: DescribeQueriesInput,
    cb: (err: any, data?: DescribeQueriesOutput) => void
  ): void;
  public describeQueries(
    args: DescribeQueriesInput,
    cb?: (err: any, data?: DescribeQueriesOutput) => void
  ): Promise<DescribeQueriesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeQueriesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the resource policies in this account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeResourcePolicies(
    args: DescribeResourcePoliciesInput
  ): Promise<DescribeResourcePoliciesOutput>;
  public describeResourcePolicies(
    args: DescribeResourcePoliciesInput,
    cb: (err: any, data?: DescribeResourcePoliciesOutput) => void
  ): void;
  public describeResourcePolicies(
    args: DescribeResourcePoliciesInput,
    cb?: (err: any, data?: DescribeResourcePoliciesOutput) => void
  ): Promise<DescribeResourcePoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeResourcePoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the subscription filters for the specified log group. You can list all the subscription filters or filter the results by prefix. The results are ASCII-sorted by filter name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSubscriptionFilters(
    args: DescribeSubscriptionFiltersInput
  ): Promise<DescribeSubscriptionFiltersOutput>;
  public describeSubscriptionFilters(
    args: DescribeSubscriptionFiltersInput,
    cb: (err: any, data?: DescribeSubscriptionFiltersOutput) => void
  ): void;
  public describeSubscriptionFilters(
    args: DescribeSubscriptionFiltersInput,
    cb?: (err: any, data?: DescribeSubscriptionFiltersOutput) => void
  ): Promise<DescribeSubscriptionFiltersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSubscriptionFiltersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates the associated AWS Key Management Service (AWS KMS) customer master key (CMK) from the specified log group.</p> <p>After the AWS KMS CMK is disassociated from the log group, AWS CloudWatch Logs stops encrypting newly ingested data for the log group. All previously ingested data remains encrypted, and AWS CloudWatch Logs requires permissions for the CMK whenever the encrypted data is requested.</p> <p>Note that it can take up to 5 minutes for this operation to take effect.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {OperationAbortedException} <p>Multiple requests to update the same resource were in conflict.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateKmsKey(
    args: DisassociateKmsKeyInput
  ): Promise<DisassociateKmsKeyOutput>;
  public disassociateKmsKey(
    args: DisassociateKmsKeyInput,
    cb: (err: any, data?: DisassociateKmsKeyOutput) => void
  ): void;
  public disassociateKmsKey(
    args: DisassociateKmsKeyInput,
    cb?: (err: any, data?: DisassociateKmsKeyOutput) => void
  ): Promise<DisassociateKmsKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateKmsKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists log events from the specified log group. You can list all the log events or filter the results using a filter pattern, a time range, and the name of the log stream.</p> <p>By default, this operation returns as many log events as can fit in 1 MB (up to 10,000 log events), or all the events found within the time range that you specify. If the results include a token, then there are more log events available, and you can get additional results by specifying the token in a subsequent call.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public filterLogEvents(
    args: FilterLogEventsInput
  ): Promise<FilterLogEventsOutput>;
  public filterLogEvents(
    args: FilterLogEventsInput,
    cb: (err: any, data?: FilterLogEventsOutput) => void
  ): void;
  public filterLogEvents(
    args: FilterLogEventsInput,
    cb?: (err: any, data?: FilterLogEventsOutput) => void
  ): Promise<FilterLogEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new FilterLogEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists log events from the specified log stream. You can list all the log events or filter using a time range.</p> <p>By default, this operation returns as many log events as can fit in a response size of 1MB (up to 10,000 log events). You can get additional log events by specifying one of the tokens in a subsequent call.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLogEvents(args: GetLogEventsInput): Promise<GetLogEventsOutput>;
  public getLogEvents(
    args: GetLogEventsInput,
    cb: (err: any, data?: GetLogEventsOutput) => void
  ): void;
  public getLogEvents(
    args: GetLogEventsInput,
    cb?: (err: any, data?: GetLogEventsOutput) => void
  ): Promise<GetLogEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLogEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of the fields that are included in log events in the specified log group, along with the percentage of log events that contain each field. The search is limited to a time period that you specify.</p> <p>In the results, fields that start with @ are fields generated by CloudWatch Logs. For example, <code>@timestamp</code> is the timestamp of each log event.</p> <p>The response results are sorted by the frequency percentage, starting with the highest percentage.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {LimitExceededException} <p>You have reached the maximum number of resources that can be created.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLogGroupFields(
    args: GetLogGroupFieldsInput
  ): Promise<GetLogGroupFieldsOutput>;
  public getLogGroupFields(
    args: GetLogGroupFieldsInput,
    cb: (err: any, data?: GetLogGroupFieldsOutput) => void
  ): void;
  public getLogGroupFields(
    args: GetLogGroupFieldsInput,
    cb?: (err: any, data?: GetLogGroupFieldsOutput) => void
  ): Promise<GetLogGroupFieldsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLogGroupFieldsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves all the fields and values of a single log event. All fields are retrieved, even if the original query that produced the <code>logRecordPointer</code> retrieved only a subset of fields. Fields are returned as field name/field value pairs.</p> <p>Additionally, the entire unparsed log event is returned within <code>@message</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {LimitExceededException} <p>You have reached the maximum number of resources that can be created.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLogRecord(args: GetLogRecordInput): Promise<GetLogRecordOutput>;
  public getLogRecord(
    args: GetLogRecordInput,
    cb: (err: any, data?: GetLogRecordOutput) => void
  ): void;
  public getLogRecord(
    args: GetLogRecordInput,
    cb?: (err: any, data?: GetLogRecordOutput) => void
  ): Promise<GetLogRecordOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLogRecordCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the results from the specified query.</p> <p>Only the fields requested in the query are returned, along with a <code>@ptr</code> field which is the identifier for the log record. You can use the value of <code>@ptr</code> in a operation to get the full log record.</p> <p> <code>GetQueryResults</code> does not start a query execution. To run a query, use .</p> <p>If the value of the <code>Status</code> field in the output is <code>Running</code>, this operation returns only partial results. If you see a value of <code>Scheduled</code> or <code>Running</code> for the status, you can retry the operation later to see the final results. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getQueryResults(
    args: GetQueryResultsInput
  ): Promise<GetQueryResultsOutput>;
  public getQueryResults(
    args: GetQueryResultsInput,
    cb: (err: any, data?: GetQueryResultsOutput) => void
  ): void;
  public getQueryResults(
    args: GetQueryResultsInput,
    cb?: (err: any, data?: GetQueryResultsOutput) => void
  ): Promise<GetQueryResultsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetQueryResultsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the tags for the specified log group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsLogGroup(
    args: ListTagsLogGroupInput
  ): Promise<ListTagsLogGroupOutput>;
  public listTagsLogGroup(
    args: ListTagsLogGroupInput,
    cb: (err: any, data?: ListTagsLogGroupOutput) => void
  ): void;
  public listTagsLogGroup(
    args: ListTagsLogGroupInput,
    cb?: (err: any, data?: ListTagsLogGroupOutput) => void
  ): Promise<ListTagsLogGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsLogGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates or updates a destination. A destination encapsulates a physical resource (such as an Amazon Kinesis stream) and enables you to subscribe to a real-time stream of log events for a different account, ingested using <a>PutLogEvents</a>. A destination can be an Amazon Kinesis stream, Amazon Kinesis Data Firehose strea, or an AWS Lambda function.</p> <p>Through an access policy, a destination controls what is written to it. By default, <code>PutDestination</code> does not set any access policy with the destination, which means a cross-account user cannot call <a>PutSubscriptionFilter</a> against this destination. To enable this, the destination owner must call <a>PutDestinationPolicy</a> after <code>PutDestination</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {OperationAbortedException} <p>Multiple requests to update the same resource were in conflict.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putDestination(
    args: PutDestinationInput
  ): Promise<PutDestinationOutput>;
  public putDestination(
    args: PutDestinationInput,
    cb: (err: any, data?: PutDestinationOutput) => void
  ): void;
  public putDestination(
    args: PutDestinationInput,
    cb?: (err: any, data?: PutDestinationOutput) => void
  ): Promise<PutDestinationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutDestinationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates or updates an access policy associated with an existing destination. An access policy is an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies_overview.html">IAM policy document</a> that is used to authorize claims to register a subscription filter against a given destination.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {OperationAbortedException} <p>Multiple requests to update the same resource were in conflict.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putDestinationPolicy(
    args: PutDestinationPolicyInput
  ): Promise<PutDestinationPolicyOutput>;
  public putDestinationPolicy(
    args: PutDestinationPolicyInput,
    cb: (err: any, data?: PutDestinationPolicyOutput) => void
  ): void;
  public putDestinationPolicy(
    args: PutDestinationPolicyInput,
    cb?: (err: any, data?: PutDestinationPolicyOutput) => void
  ): Promise<PutDestinationPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutDestinationPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Uploads a batch of log events to the specified log stream.</p> <p>You must include the sequence token obtained from the response of the previous call. An upload in a newly created log stream does not require a sequence token. You can also get the sequence token using <a>DescribeLogStreams</a>. If you call <code>PutLogEvents</code> twice within a narrow time period using the same value for <code>sequenceToken</code>, both calls may be successful, or one may be rejected.</p> <p>The batch of events must satisfy the following constraints:</p> <ul> <li> <p>The maximum batch size is 1,048,576 bytes, and this size is calculated as the sum of all event messages in UTF-8, plus 26 bytes for each log event.</p> </li> <li> <p>None of the log events in the batch can be more than 2 hours in the future.</p> </li> <li> <p>None of the log events in the batch can be older than 14 days or older than the retention period of the log group.</p> </li> <li> <p>The log events in the batch must be in chronological ordered by their timestamp. The timestamp is the time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. (In AWS Tools for PowerShell and the AWS SDK for .NET, the timestamp is specified in .NET format: yyyy-mm-ddThh:mm:ss. For example, 2017-09-15T13:45:30.) </p> </li> <li> <p>The maximum number of log events in a batch is 10,000.</p> </li> <li> <p>A batch of log events in a single request cannot span more than 24 hours. Otherwise, the operation fails.</p> </li> </ul> <p>If a call to PutLogEvents returns "UnrecognizedClientException" the most likely cause is an invalid AWS access key ID or secret key. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {InvalidSequenceTokenException} <p>The sequence token is not valid.</p>
   *   - {DataAlreadyAcceptedException} <p>The event was already logged.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {UnrecognizedClientException} <p>The most likely cause is an invalid AWS access key ID or secret key.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putLogEvents(args: PutLogEventsInput): Promise<PutLogEventsOutput>;
  public putLogEvents(
    args: PutLogEventsInput,
    cb: (err: any, data?: PutLogEventsOutput) => void
  ): void;
  public putLogEvents(
    args: PutLogEventsInput,
    cb?: (err: any, data?: PutLogEventsOutput) => void
  ): Promise<PutLogEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutLogEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates or updates a metric filter and associates it with the specified log group. Metric filters allow you to configure rules to extract metric data from log events ingested through <a>PutLogEvents</a>.</p> <p>The maximum number of metric filters that can be associated with a log group is 100.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {OperationAbortedException} <p>Multiple requests to update the same resource were in conflict.</p>
   *   - {LimitExceededException} <p>You have reached the maximum number of resources that can be created.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putMetricFilter(
    args: PutMetricFilterInput
  ): Promise<PutMetricFilterOutput>;
  public putMetricFilter(
    args: PutMetricFilterInput,
    cb: (err: any, data?: PutMetricFilterOutput) => void
  ): void;
  public putMetricFilter(
    args: PutMetricFilterInput,
    cb?: (err: any, data?: PutMetricFilterOutput) => void
  ): Promise<PutMetricFilterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutMetricFilterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates or updates a resource policy allowing other AWS services to put log events to this account, such as Amazon Route 53. An account can have up to 10 resource policies per region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {LimitExceededException} <p>You have reached the maximum number of resources that can be created.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putResourcePolicy(
    args: PutResourcePolicyInput
  ): Promise<PutResourcePolicyOutput>;
  public putResourcePolicy(
    args: PutResourcePolicyInput,
    cb: (err: any, data?: PutResourcePolicyOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyInput,
    cb?: (err: any, data?: PutResourcePolicyOutput) => void
  ): Promise<PutResourcePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutResourcePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the retention of the specified log group. A retention policy allows you to configure the number of days for which to retain log events in the specified log group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {OperationAbortedException} <p>Multiple requests to update the same resource were in conflict.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putRetentionPolicy(
    args: PutRetentionPolicyInput
  ): Promise<PutRetentionPolicyOutput>;
  public putRetentionPolicy(
    args: PutRetentionPolicyInput,
    cb: (err: any, data?: PutRetentionPolicyOutput) => void
  ): void;
  public putRetentionPolicy(
    args: PutRetentionPolicyInput,
    cb?: (err: any, data?: PutRetentionPolicyOutput) => void
  ): Promise<PutRetentionPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutRetentionPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates or updates a subscription filter and associates it with the specified log group. Subscription filters allow you to subscribe to a real-time stream of log events ingested through <a>PutLogEvents</a> and have them delivered to a specific destination. Currently, the supported destinations are:</p> <ul> <li> <p>An Amazon Kinesis stream belonging to the same account as the subscription filter, for same-account delivery.</p> </li> <li> <p>A logical destination that belongs to a different account, for cross-account delivery.</p> </li> <li> <p>An Amazon Kinesis Firehose delivery stream that belongs to the same account as the subscription filter, for same-account delivery.</p> </li> <li> <p>An AWS Lambda function that belongs to the same account as the subscription filter, for same-account delivery.</p> </li> </ul> <p>There can only be one subscription filter associated with a log group. If you are updating an existing filter, you must specify the correct name in <code>filterName</code>. Otherwise, the call fails because you cannot associate a second filter with a log group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {OperationAbortedException} <p>Multiple requests to update the same resource were in conflict.</p>
   *   - {LimitExceededException} <p>You have reached the maximum number of resources that can be created.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putSubscriptionFilter(
    args: PutSubscriptionFilterInput
  ): Promise<PutSubscriptionFilterOutput>;
  public putSubscriptionFilter(
    args: PutSubscriptionFilterInput,
    cb: (err: any, data?: PutSubscriptionFilterOutput) => void
  ): void;
  public putSubscriptionFilter(
    args: PutSubscriptionFilterInput,
    cb?: (err: any, data?: PutSubscriptionFilterOutput) => void
  ): Promise<PutSubscriptionFilterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutSubscriptionFilterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Schedules a query of a log group using CloudWatch Logs Insights. You specify the log group and time range to query, and the query string to use.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p> <p>Queries time out after 15 minutes of execution. If your queries are timing out, reduce the time range being searched, or partition your query into a number of queries.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {MalformedQueryException} <p>The query string is not valid. Details about this error are displayed in a <code>QueryCompileError</code> object. For more information, see .</p> <p>For more information about valid query syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p>
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {LimitExceededException} <p>You have reached the maximum number of resources that can be created.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startQuery(args: StartQueryInput): Promise<StartQueryOutput>;
  public startQuery(
    args: StartQueryInput,
    cb: (err: any, data?: StartQueryOutput) => void
  ): void;
  public startQuery(
    args: StartQueryInput,
    cb?: (err: any, data?: StartQueryOutput) => void
  ): Promise<StartQueryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartQueryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops a CloudWatch Logs Insights query that is in progress. If the query has already ended, the operation returns an error indicating that the specified query is not running.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopQuery(args: StopQueryInput): Promise<StopQueryOutput>;
  public stopQuery(
    args: StopQueryInput,
    cb: (err: any, data?: StopQueryOutput) => void
  ): void;
  public stopQuery(
    args: StopQueryInput,
    cb?: (err: any, data?: StopQueryOutput) => void
  ): Promise<StopQueryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopQueryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or updates the specified tags for the specified log group.</p> <p>To list the tags for a log group, use <a>ListTagsLogGroup</a>. To remove tags, use <a>UntagLogGroup</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/log-group-tagging.html">Tag Log Groups in Amazon CloudWatch Logs</a> in the <i>Amazon CloudWatch Logs User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagLogGroup(args: TagLogGroupInput): Promise<TagLogGroupOutput>;
  public tagLogGroup(
    args: TagLogGroupInput,
    cb: (err: any, data?: TagLogGroupOutput) => void
  ): void;
  public tagLogGroup(
    args: TagLogGroupInput,
    cb?: (err: any, data?: TagLogGroupOutput) => void
  ): Promise<TagLogGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagLogGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Tests the filter pattern of a metric filter against a sample of log event messages. You can use this operation to validate the correctness of a metric filter pattern.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A parameter is specified incorrectly.</p>
   *   - {ServiceUnavailableException} <p>The service cannot complete the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public testMetricFilter(
    args: TestMetricFilterInput
  ): Promise<TestMetricFilterOutput>;
  public testMetricFilter(
    args: TestMetricFilterInput,
    cb: (err: any, data?: TestMetricFilterOutput) => void
  ): void;
  public testMetricFilter(
    args: TestMetricFilterInput,
    cb?: (err: any, data?: TestMetricFilterOutput) => void
  ): Promise<TestMetricFilterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TestMetricFilterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified tags from the specified log group.</p> <p>To list the tags for a log group, use <a>ListTagsLogGroup</a>. To add tags, use <a>UntagLogGroup</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagLogGroup(args: UntagLogGroupInput): Promise<UntagLogGroupOutput>;
  public untagLogGroup(
    args: UntagLogGroupInput,
    cb: (err: any, data?: UntagLogGroupOutput) => void
  ): void;
  public untagLogGroup(
    args: UntagLogGroupInput,
    cb?: (err: any, data?: UntagLogGroupOutput) => void
  ): Promise<UntagLogGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagLogGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
