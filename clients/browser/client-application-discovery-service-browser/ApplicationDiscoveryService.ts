import { ApplicationDiscoveryServiceClient } from "./ApplicationDiscoveryServiceClient";
import { AssociateConfigurationItemsToApplicationInput } from "./types/AssociateConfigurationItemsToApplicationInput";
import { AssociateConfigurationItemsToApplicationOutput } from "./types/AssociateConfigurationItemsToApplicationOutput";
import { AuthorizationErrorException } from "./types/AuthorizationErrorException";
import { BatchDeleteImportDataInput } from "./types/BatchDeleteImportDataInput";
import { BatchDeleteImportDataOutput } from "./types/BatchDeleteImportDataOutput";
import { ConflictErrorException } from "./types/ConflictErrorException";
import { CreateApplicationInput } from "./types/CreateApplicationInput";
import { CreateApplicationOutput } from "./types/CreateApplicationOutput";
import { CreateTagsInput } from "./types/CreateTagsInput";
import { CreateTagsOutput } from "./types/CreateTagsOutput";
import { DeleteApplicationsInput } from "./types/DeleteApplicationsInput";
import { DeleteApplicationsOutput } from "./types/DeleteApplicationsOutput";
import { DeleteTagsInput } from "./types/DeleteTagsInput";
import { DeleteTagsOutput } from "./types/DeleteTagsOutput";
import { DescribeAgentsInput } from "./types/DescribeAgentsInput";
import { DescribeAgentsOutput } from "./types/DescribeAgentsOutput";
import { DescribeConfigurationsInput } from "./types/DescribeConfigurationsInput";
import { DescribeConfigurationsOutput } from "./types/DescribeConfigurationsOutput";
import { DescribeContinuousExportsInput } from "./types/DescribeContinuousExportsInput";
import { DescribeContinuousExportsOutput } from "./types/DescribeContinuousExportsOutput";
import { DescribeExportConfigurationsInput } from "./types/DescribeExportConfigurationsInput";
import { DescribeExportConfigurationsOutput } from "./types/DescribeExportConfigurationsOutput";
import { DescribeExportTasksInput } from "./types/DescribeExportTasksInput";
import { DescribeExportTasksOutput } from "./types/DescribeExportTasksOutput";
import { DescribeImportTasksInput } from "./types/DescribeImportTasksInput";
import { DescribeImportTasksOutput } from "./types/DescribeImportTasksOutput";
import { DescribeTagsInput } from "./types/DescribeTagsInput";
import { DescribeTagsOutput } from "./types/DescribeTagsOutput";
import { DisassociateConfigurationItemsFromApplicationInput } from "./types/DisassociateConfigurationItemsFromApplicationInput";
import { DisassociateConfigurationItemsFromApplicationOutput } from "./types/DisassociateConfigurationItemsFromApplicationOutput";
import { ExportConfigurationsInput } from "./types/ExportConfigurationsInput";
import { ExportConfigurationsOutput } from "./types/ExportConfigurationsOutput";
import { GetDiscoverySummaryInput } from "./types/GetDiscoverySummaryInput";
import { GetDiscoverySummaryOutput } from "./types/GetDiscoverySummaryOutput";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { InvalidParameterValueException } from "./types/InvalidParameterValueException";
import { ListConfigurationsInput } from "./types/ListConfigurationsInput";
import { ListConfigurationsOutput } from "./types/ListConfigurationsOutput";
import { ListServerNeighborsInput } from "./types/ListServerNeighborsInput";
import { ListServerNeighborsOutput } from "./types/ListServerNeighborsOutput";
import { OperationNotPermittedException } from "./types/OperationNotPermittedException";
import { ResourceInUseException } from "./types/ResourceInUseException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { ServerInternalErrorException } from "./types/ServerInternalErrorException";
import { StartContinuousExportInput } from "./types/StartContinuousExportInput";
import { StartContinuousExportOutput } from "./types/StartContinuousExportOutput";
import { StartDataCollectionByAgentIdsInput } from "./types/StartDataCollectionByAgentIdsInput";
import { StartDataCollectionByAgentIdsOutput } from "./types/StartDataCollectionByAgentIdsOutput";
import { StartExportTaskInput } from "./types/StartExportTaskInput";
import { StartExportTaskOutput } from "./types/StartExportTaskOutput";
import { StartImportTaskInput } from "./types/StartImportTaskInput";
import { StartImportTaskOutput } from "./types/StartImportTaskOutput";
import { StopContinuousExportInput } from "./types/StopContinuousExportInput";
import { StopContinuousExportOutput } from "./types/StopContinuousExportOutput";
import { StopDataCollectionByAgentIdsInput } from "./types/StopDataCollectionByAgentIdsInput";
import { StopDataCollectionByAgentIdsOutput } from "./types/StopDataCollectionByAgentIdsOutput";
import { UpdateApplicationInput } from "./types/UpdateApplicationInput";
import { UpdateApplicationOutput } from "./types/UpdateApplicationOutput";
import { AssociateConfigurationItemsToApplicationCommand } from "./commands/AssociateConfigurationItemsToApplicationCommand";
import { BatchDeleteImportDataCommand } from "./commands/BatchDeleteImportDataCommand";
import { CreateApplicationCommand } from "./commands/CreateApplicationCommand";
import { CreateTagsCommand } from "./commands/CreateTagsCommand";
import { DeleteApplicationsCommand } from "./commands/DeleteApplicationsCommand";
import { DeleteTagsCommand } from "./commands/DeleteTagsCommand";
import { DescribeAgentsCommand } from "./commands/DescribeAgentsCommand";
import { DescribeConfigurationsCommand } from "./commands/DescribeConfigurationsCommand";
import { DescribeContinuousExportsCommand } from "./commands/DescribeContinuousExportsCommand";
import { DescribeExportConfigurationsCommand } from "./commands/DescribeExportConfigurationsCommand";
import { DescribeExportTasksCommand } from "./commands/DescribeExportTasksCommand";
import { DescribeImportTasksCommand } from "./commands/DescribeImportTasksCommand";
import { DescribeTagsCommand } from "./commands/DescribeTagsCommand";
import { DisassociateConfigurationItemsFromApplicationCommand } from "./commands/DisassociateConfigurationItemsFromApplicationCommand";
import { ExportConfigurationsCommand } from "./commands/ExportConfigurationsCommand";
import { GetDiscoverySummaryCommand } from "./commands/GetDiscoverySummaryCommand";
import { ListConfigurationsCommand } from "./commands/ListConfigurationsCommand";
import { ListServerNeighborsCommand } from "./commands/ListServerNeighborsCommand";
import { StartContinuousExportCommand } from "./commands/StartContinuousExportCommand";
import { StartDataCollectionByAgentIdsCommand } from "./commands/StartDataCollectionByAgentIdsCommand";
import { StartExportTaskCommand } from "./commands/StartExportTaskCommand";
import { StartImportTaskCommand } from "./commands/StartImportTaskCommand";
import { StopContinuousExportCommand } from "./commands/StopContinuousExportCommand";
import { StopDataCollectionByAgentIdsCommand } from "./commands/StopDataCollectionByAgentIdsCommand";
import { UpdateApplicationCommand } from "./commands/UpdateApplicationCommand";

export class ApplicationDiscoveryService extends ApplicationDiscoveryServiceClient {
  /**
   * <p>Associates one or more configuration items with an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateConfigurationItemsToApplication(
    args: AssociateConfigurationItemsToApplicationInput
  ): Promise<AssociateConfigurationItemsToApplicationOutput>;
  public associateConfigurationItemsToApplication(
    args: AssociateConfigurationItemsToApplicationInput,
    cb: (
      err: any,
      data?: AssociateConfigurationItemsToApplicationOutput
    ) => void
  ): void;
  public associateConfigurationItemsToApplication(
    args: AssociateConfigurationItemsToApplicationInput,
    cb?: (
      err: any,
      data?: AssociateConfigurationItemsToApplicationOutput
    ) => void
  ): Promise<AssociateConfigurationItemsToApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateConfigurationItemsToApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes one or more import tasks, each identified by their import ID. Each import task has a number of records that can identify servers or applications. </p> <p>AWS Application Discovery Service has built-in matching logic that will identify when discovered servers match existing entries that you've previously discovered, the information for the already-existing discovered server is updated. When you delete an import task that contains records that were used to match, the information in those matched records that comes from the deleted records will also be deleted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchDeleteImportData(
    args: BatchDeleteImportDataInput
  ): Promise<BatchDeleteImportDataOutput>;
  public batchDeleteImportData(
    args: BatchDeleteImportDataInput,
    cb: (err: any, data?: BatchDeleteImportDataOutput) => void
  ): void;
  public batchDeleteImportData(
    args: BatchDeleteImportDataInput,
    cb?: (err: any, data?: BatchDeleteImportDataOutput) => void
  ): Promise<BatchDeleteImportDataOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchDeleteImportDataCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an application with the given name and description.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createApplication(
    args: CreateApplicationInput
  ): Promise<CreateApplicationOutput>;
  public createApplication(
    args: CreateApplicationInput,
    cb: (err: any, data?: CreateApplicationOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationInput,
    cb?: (err: any, data?: CreateApplicationOutput) => void
  ): Promise<CreateApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {ResourceNotFoundException} <p>The specified configuration ID was not located. Verify the configuration ID and try again.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTags(args: CreateTagsInput): Promise<CreateTagsOutput>;
  public createTags(
    args: CreateTagsInput,
    cb: (err: any, data?: CreateTagsOutput) => void
  ): void;
  public createTags(
    args: CreateTagsInput,
    cb?: (err: any, data?: CreateTagsOutput) => void
  ): Promise<CreateTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a list of applications and their associations with configuration items.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApplications(
    args: DeleteApplicationsInput
  ): Promise<DeleteApplicationsOutput>;
  public deleteApplications(
    args: DeleteApplicationsInput,
    cb: (err: any, data?: DeleteApplicationsOutput) => void
  ): void;
  public deleteApplications(
    args: DeleteApplicationsInput,
    cb?: (err: any, data?: DeleteApplicationsOutput) => void
  ): Promise<DeleteApplicationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteApplicationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {ResourceNotFoundException} <p>The specified configuration ID was not located. Verify the configuration ID and try again.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTags(args: DeleteTagsInput): Promise<DeleteTagsOutput>;
  public deleteTags(
    args: DeleteTagsInput,
    cb: (err: any, data?: DeleteTagsOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsInput,
    cb?: (err: any, data?: DeleteTagsOutput) => void
  ): Promise<DeleteTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists agents or connectors as specified by ID or other filters. All agents/connectors associated with your user account can be listed if you call <code>DescribeAgents</code> as is without passing any parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAgents(
    args: DescribeAgentsInput
  ): Promise<DescribeAgentsOutput>;
  public describeAgents(
    args: DescribeAgentsInput,
    cb: (err: any, data?: DescribeAgentsOutput) => void
  ): void;
  public describeAgents(
    args: DescribeAgentsInput,
    cb?: (err: any, data?: DescribeAgentsOutput) => void
  ): Promise<DescribeAgentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAgentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves attributes for a list of configuration item IDs.</p> <note> <p>All of the supplied IDs must be for the same asset type from one of the following:</p> <ul> <li> <p>server</p> </li> <li> <p>application</p> </li> <li> <p>process</p> </li> <li> <p>connection</p> </li> </ul> <p>Output fields are specific to the asset type specified. For example, the output for a <i>server</i> configuration item includes a list of attributes about the server, such as host name, operating system, number of network cards, etc.</p> <p>For a complete list of outputs for each asset type, see <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/discovery-api-queries.html#DescribeConfigurations">Using the DescribeConfigurations Action</a>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeConfigurations(
    args: DescribeConfigurationsInput
  ): Promise<DescribeConfigurationsOutput>;
  public describeConfigurations(
    args: DescribeConfigurationsInput,
    cb: (err: any, data?: DescribeConfigurationsOutput) => void
  ): void;
  public describeConfigurations(
    args: DescribeConfigurationsInput,
    cb?: (err: any, data?: DescribeConfigurationsOutput) => void
  ): Promise<DescribeConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists exports as specified by ID. All continuous exports associated with your user account can be listed if you call <code>DescribeContinuousExports</code> as is without passing any parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {OperationNotPermittedException} <p>This operation is not permitted.</p>
   *   - {ResourceNotFoundException} <p>The specified configuration ID was not located. Verify the configuration ID and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeContinuousExports(
    args: DescribeContinuousExportsInput
  ): Promise<DescribeContinuousExportsOutput>;
  public describeContinuousExports(
    args: DescribeContinuousExportsInput,
    cb: (err: any, data?: DescribeContinuousExportsOutput) => void
  ): void;
  public describeContinuousExports(
    args: DescribeContinuousExportsInput,
    cb?: (err: any, data?: DescribeContinuousExportsOutput) => void
  ): Promise<DescribeContinuousExportsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeContinuousExportsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> <code>DescribeExportConfigurations</code> is deprecated. Use <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeImportTasks</a>, instead.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {ResourceNotFoundException} <p>The specified configuration ID was not located. Verify the configuration ID and try again.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeExportConfigurations(
    args: DescribeExportConfigurationsInput
  ): Promise<DescribeExportConfigurationsOutput>;
  public describeExportConfigurations(
    args: DescribeExportConfigurationsInput,
    cb: (err: any, data?: DescribeExportConfigurationsOutput) => void
  ): void;
  public describeExportConfigurations(
    args: DescribeExportConfigurationsInput,
    cb?: (err: any, data?: DescribeExportConfigurationsOutput) => void
  ): Promise<DescribeExportConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeExportConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
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
   * <p>Returns an array of import tasks for your account, including status information, times, IDs, the Amazon S3 Object URL for the import file, and more.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeImportTasks(
    args: DescribeImportTasksInput
  ): Promise<DescribeImportTasksOutput>;
  public describeImportTasks(
    args: DescribeImportTasksInput,
    cb: (err: any, data?: DescribeImportTasksOutput) => void
  ): void;
  public describeImportTasks(
    args: DescribeImportTasksInput,
    cb?: (err: any, data?: DescribeImportTasksOutput) => void
  ): Promise<DescribeImportTasksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeImportTasksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of configuration items that have tags as specified by the key-value pairs, name and value, passed to the optional parameter <code>filters</code>.</p> <p>There are three valid tag filter names:</p> <ul> <li> <p>tagKey</p> </li> <li> <p>tagValue</p> </li> <li> <p>configurationId</p> </li> </ul> <p>Also, all configuration items associated with your user account that have tags can be listed if you call <code>DescribeTags</code> as is without passing any parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {ResourceNotFoundException} <p>The specified configuration ID was not located. Verify the configuration ID and try again.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTags(args: DescribeTagsInput): Promise<DescribeTagsOutput>;
  public describeTags(
    args: DescribeTagsInput,
    cb: (err: any, data?: DescribeTagsOutput) => void
  ): void;
  public describeTags(
    args: DescribeTagsInput,
    cb?: (err: any, data?: DescribeTagsOutput) => void
  ): Promise<DescribeTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates one or more configuration items from an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateConfigurationItemsFromApplication(
    args: DisassociateConfigurationItemsFromApplicationInput
  ): Promise<DisassociateConfigurationItemsFromApplicationOutput>;
  public disassociateConfigurationItemsFromApplication(
    args: DisassociateConfigurationItemsFromApplicationInput,
    cb: (
      err: any,
      data?: DisassociateConfigurationItemsFromApplicationOutput
    ) => void
  ): void;
  public disassociateConfigurationItemsFromApplication(
    args: DisassociateConfigurationItemsFromApplicationInput,
    cb?: (
      err: any,
      data?: DisassociateConfigurationItemsFromApplicationOutput
    ) => void
  ): Promise<DisassociateConfigurationItemsFromApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateConfigurationItemsFromApplicationCommand(
      args
    );
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deprecated. Use <code>StartExportTask</code> instead.</p> <p>Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance. This API returns an export ID that you can query using the <i>DescribeExportConfigurations</i> API. The system imposes a limit of two configuration exports in six hours.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {OperationNotPermittedException} <p>This operation is not permitted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public exportConfigurations(
    args: ExportConfigurationsInput
  ): Promise<ExportConfigurationsOutput>;
  public exportConfigurations(
    args: ExportConfigurationsInput,
    cb: (err: any, data?: ExportConfigurationsOutput) => void
  ): void;
  public exportConfigurations(
    args: ExportConfigurationsInput,
    cb?: (err: any, data?: ExportConfigurationsOutput) => void
  ): Promise<ExportConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ExportConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a short summary of discovered assets.</p> <p>This API operation takes no request parameters and is called as is at the command prompt as shown in the example.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDiscoverySummary(
    args: GetDiscoverySummaryInput
  ): Promise<GetDiscoverySummaryOutput>;
  public getDiscoverySummary(
    args: GetDiscoverySummaryInput,
    cb: (err: any, data?: GetDiscoverySummaryOutput) => void
  ): void;
  public getDiscoverySummary(
    args: GetDiscoverySummaryInput,
    cb?: (err: any, data?: GetDiscoverySummaryOutput) => void
  ): Promise<GetDiscoverySummaryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDiscoverySummaryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of configuration items as specified by the value passed to the required paramater <code>configurationType</code>. Optional filtering may be applied to refine search results.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {ResourceNotFoundException} <p>The specified configuration ID was not located. Verify the configuration ID and try again.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listConfigurations(
    args: ListConfigurationsInput
  ): Promise<ListConfigurationsOutput>;
  public listConfigurations(
    args: ListConfigurationsInput,
    cb: (err: any, data?: ListConfigurationsOutput) => void
  ): void;
  public listConfigurations(
    args: ListConfigurationsInput,
    cb?: (err: any, data?: ListConfigurationsOutput) => void
  ): Promise<ListConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of servers that are one network hop away from a specified server.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listServerNeighbors(
    args: ListServerNeighborsInput
  ): Promise<ListServerNeighborsOutput>;
  public listServerNeighbors(
    args: ListServerNeighborsInput,
    cb: (err: any, data?: ListServerNeighborsOutput) => void
  ): void;
  public listServerNeighbors(
    args: ListServerNeighborsInput,
    cb?: (err: any, data?: ListServerNeighborsOutput) => void
  ): Promise<ListServerNeighborsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListServerNeighborsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Start the continuous flow of agent's discovered data into Amazon Athena.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConflictErrorException} <p/>
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {OperationNotPermittedException} <p>This operation is not permitted.</p>
   *   - {ResourceInUseException} <p>This issue occurs when the same <code>clientRequestToken</code> is used with the <code>StartImportTask</code> action, but with different parameters. For example, you use the same request token but have two different import URLs, you can encounter this issue. If the import tasks are meant to be different, use a different <code>clientRequestToken</code>, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startContinuousExport(
    args: StartContinuousExportInput
  ): Promise<StartContinuousExportOutput>;
  public startContinuousExport(
    args: StartContinuousExportInput,
    cb: (err: any, data?: StartContinuousExportOutput) => void
  ): void;
  public startContinuousExport(
    args: StartContinuousExportInput,
    cb?: (err: any, data?: StartContinuousExportOutput) => void
  ): Promise<StartContinuousExportOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartContinuousExportCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Instructs the specified agents or connectors to start collecting data.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startDataCollectionByAgentIds(
    args: StartDataCollectionByAgentIdsInput
  ): Promise<StartDataCollectionByAgentIdsOutput>;
  public startDataCollectionByAgentIds(
    args: StartDataCollectionByAgentIdsInput,
    cb: (err: any, data?: StartDataCollectionByAgentIdsOutput) => void
  ): void;
  public startDataCollectionByAgentIds(
    args: StartDataCollectionByAgentIdsInput,
    cb?: (err: any, data?: StartDataCollectionByAgentIdsOutput) => void
  ): Promise<StartDataCollectionByAgentIdsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartDataCollectionByAgentIdsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Begins the export of discovered data to an S3 bucket.</p> <p> If you specify <code>agentIds</code> in a filter, the task exports up to 72 hours of detailed data collected by the identified Application Discovery Agent, including network, process, and performance details. A time range for exported agent data may be set by using <code>startTime</code> and <code>endTime</code>. Export of detailed agent data is limited to five concurrently running exports. </p> <p> If you do not include an <code>agentIds</code> filter, summary data is exported that includes both AWS Agentless Discovery Connector data and summary data from AWS Discovery Agents. Export of summary data is limited to two exports per day. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {OperationNotPermittedException} <p>This operation is not permitted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startExportTask(
    args: StartExportTaskInput
  ): Promise<StartExportTaskOutput>;
  public startExportTask(
    args: StartExportTaskInput,
    cb: (err: any, data?: StartExportTaskOutput) => void
  ): void;
  public startExportTask(
    args: StartExportTaskInput,
    cb?: (err: any, data?: StartExportTaskOutput) => void
  ): Promise<StartExportTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartExportTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts an import task, which allows you to import details of your on-premises environment directly into AWS without having to use the Application Discovery Service (ADS) tools such as the Discovery Connector or Discovery Agent. This gives you the option to perform migration assessment and planning directly from your imported data, including the ability to group your devices as applications and track their migration status.</p> <p>To start an import request, do this:</p> <ol> <li> <p>Download the specially formatted comma separated value (CSV) import template, which you can find here: <a href="https://s3-us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv">https://s3-us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv</a>.</p> </li> <li> <p>Fill out the template with your server and application data.</p> </li> <li> <p>Upload your import file to an Amazon S3 bucket, and make a note of it's Object URL. Your import file must be in the CSV format.</p> </li> <li> <p>Use the console or the <code>StartImportTask</code> command with the AWS CLI or one of the AWS SDKs to import the records from your file.</p> </li> </ol> <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html">Migration Hub Import</a> in the <i>AWS Application Discovery Service User Guide</i>.</p> <note> <p>There are limits to the number of import tasks you can create (and delete) in an AWS account. For more information, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/ads_service_limits.html">AWS Application Discovery Service Limits</a> in the <i>AWS Application Discovery Service User Guide</i>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>This issue occurs when the same <code>clientRequestToken</code> is used with the <code>StartImportTask</code> action, but with different parameters. For example, you use the same request token but have two different import URLs, you can encounter this issue. If the import tasks are meant to be different, use a different <code>clientRequestToken</code>, and try again.</p>
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startImportTask(
    args: StartImportTaskInput
  ): Promise<StartImportTaskOutput>;
  public startImportTask(
    args: StartImportTaskInput,
    cb: (err: any, data?: StartImportTaskOutput) => void
  ): void;
  public startImportTask(
    args: StartImportTaskInput,
    cb?: (err: any, data?: StartImportTaskOutput) => void
  ): Promise<StartImportTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartImportTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stop the continuous flow of agent's discovered data into Amazon Athena.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {OperationNotPermittedException} <p>This operation is not permitted.</p>
   *   - {ResourceNotFoundException} <p>The specified configuration ID was not located. Verify the configuration ID and try again.</p>
   *   - {ResourceInUseException} <p>This issue occurs when the same <code>clientRequestToken</code> is used with the <code>StartImportTask</code> action, but with different parameters. For example, you use the same request token but have two different import URLs, you can encounter this issue. If the import tasks are meant to be different, use a different <code>clientRequestToken</code>, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopContinuousExport(
    args: StopContinuousExportInput
  ): Promise<StopContinuousExportOutput>;
  public stopContinuousExport(
    args: StopContinuousExportInput,
    cb: (err: any, data?: StopContinuousExportOutput) => void
  ): void;
  public stopContinuousExport(
    args: StopContinuousExportInput,
    cb?: (err: any, data?: StopContinuousExportOutput) => void
  ): Promise<StopContinuousExportOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopContinuousExportCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Instructs the specified agents or connectors to stop collecting data.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopDataCollectionByAgentIds(
    args: StopDataCollectionByAgentIdsInput
  ): Promise<StopDataCollectionByAgentIdsOutput>;
  public stopDataCollectionByAgentIds(
    args: StopDataCollectionByAgentIdsInput,
    cb: (err: any, data?: StopDataCollectionByAgentIdsOutput) => void
  ): void;
  public stopDataCollectionByAgentIds(
    args: StopDataCollectionByAgentIdsInput,
    cb?: (err: any, data?: StopDataCollectionByAgentIdsOutput) => void
  ): Promise<StopDataCollectionByAgentIdsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopDataCollectionByAgentIdsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates metadata about an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthorizationErrorException} <p>The AWS user account does not have permission to perform the action. Check the IAM policy associated with this account.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid. Verify the parameters and try again.</p>
   *   - {InvalidParameterValueException} <p>The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.</p>
   *   - {ServerInternalErrorException} <p>The server experienced an internal error. Try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateApplication(
    args: UpdateApplicationInput
  ): Promise<UpdateApplicationOutput>;
  public updateApplication(
    args: UpdateApplicationInput,
    cb: (err: any, data?: UpdateApplicationOutput) => void
  ): void;
  public updateApplication(
    args: UpdateApplicationInput,
    cb?: (err: any, data?: UpdateApplicationOutput) => void
  ): Promise<UpdateApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
