import { CognitoSyncClient } from "./CognitoSyncClient";
import { AlreadyStreamedException } from "./types/AlreadyStreamedException";
import { BulkPublishInput } from "./types/BulkPublishInput";
import { BulkPublishOutput } from "./types/BulkPublishOutput";
import { ConcurrentModificationException } from "./types/ConcurrentModificationException";
import { DeleteDatasetInput } from "./types/DeleteDatasetInput";
import { DeleteDatasetOutput } from "./types/DeleteDatasetOutput";
import { DescribeDatasetInput } from "./types/DescribeDatasetInput";
import { DescribeDatasetOutput } from "./types/DescribeDatasetOutput";
import { DescribeIdentityPoolUsageInput } from "./types/DescribeIdentityPoolUsageInput";
import { DescribeIdentityPoolUsageOutput } from "./types/DescribeIdentityPoolUsageOutput";
import { DescribeIdentityUsageInput } from "./types/DescribeIdentityUsageInput";
import { DescribeIdentityUsageOutput } from "./types/DescribeIdentityUsageOutput";
import { DuplicateRequestException } from "./types/DuplicateRequestException";
import { GetBulkPublishDetailsInput } from "./types/GetBulkPublishDetailsInput";
import { GetBulkPublishDetailsOutput } from "./types/GetBulkPublishDetailsOutput";
import { GetCognitoEventsInput } from "./types/GetCognitoEventsInput";
import { GetCognitoEventsOutput } from "./types/GetCognitoEventsOutput";
import { GetIdentityPoolConfigurationInput } from "./types/GetIdentityPoolConfigurationInput";
import { GetIdentityPoolConfigurationOutput } from "./types/GetIdentityPoolConfigurationOutput";
import { InternalErrorException } from "./types/InternalErrorException";
import { InvalidConfigurationException } from "./types/InvalidConfigurationException";
import { InvalidLambdaFunctionOutputException } from "./types/InvalidLambdaFunctionOutputException";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { LambdaThrottledException } from "./types/LambdaThrottledException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListDatasetsInput } from "./types/ListDatasetsInput";
import { ListDatasetsOutput } from "./types/ListDatasetsOutput";
import { ListIdentityPoolUsageInput } from "./types/ListIdentityPoolUsageInput";
import { ListIdentityPoolUsageOutput } from "./types/ListIdentityPoolUsageOutput";
import { ListRecordsInput } from "./types/ListRecordsInput";
import { ListRecordsOutput } from "./types/ListRecordsOutput";
import { NotAuthorizedException } from "./types/NotAuthorizedException";
import { RegisterDeviceInput } from "./types/RegisterDeviceInput";
import { RegisterDeviceOutput } from "./types/RegisterDeviceOutput";
import { ResourceConflictException } from "./types/ResourceConflictException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { SetCognitoEventsInput } from "./types/SetCognitoEventsInput";
import { SetCognitoEventsOutput } from "./types/SetCognitoEventsOutput";
import { SetIdentityPoolConfigurationInput } from "./types/SetIdentityPoolConfigurationInput";
import { SetIdentityPoolConfigurationOutput } from "./types/SetIdentityPoolConfigurationOutput";
import { SubscribeToDatasetInput } from "./types/SubscribeToDatasetInput";
import { SubscribeToDatasetOutput } from "./types/SubscribeToDatasetOutput";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UnsubscribeFromDatasetInput } from "./types/UnsubscribeFromDatasetInput";
import { UnsubscribeFromDatasetOutput } from "./types/UnsubscribeFromDatasetOutput";
import { UpdateRecordsInput } from "./types/UpdateRecordsInput";
import { UpdateRecordsOutput } from "./types/UpdateRecordsOutput";
import { BulkPublishCommand } from "./commands/BulkPublishCommand";
import { DeleteDatasetCommand } from "./commands/DeleteDatasetCommand";
import { DescribeDatasetCommand } from "./commands/DescribeDatasetCommand";
import { DescribeIdentityPoolUsageCommand } from "./commands/DescribeIdentityPoolUsageCommand";
import { DescribeIdentityUsageCommand } from "./commands/DescribeIdentityUsageCommand";
import { GetBulkPublishDetailsCommand } from "./commands/GetBulkPublishDetailsCommand";
import { GetCognitoEventsCommand } from "./commands/GetCognitoEventsCommand";
import { GetIdentityPoolConfigurationCommand } from "./commands/GetIdentityPoolConfigurationCommand";
import { ListDatasetsCommand } from "./commands/ListDatasetsCommand";
import { ListIdentityPoolUsageCommand } from "./commands/ListIdentityPoolUsageCommand";
import { ListRecordsCommand } from "./commands/ListRecordsCommand";
import { RegisterDeviceCommand } from "./commands/RegisterDeviceCommand";
import { SetCognitoEventsCommand } from "./commands/SetCognitoEventsCommand";
import { SetIdentityPoolConfigurationCommand } from "./commands/SetIdentityPoolConfigurationCommand";
import { SubscribeToDatasetCommand } from "./commands/SubscribeToDatasetCommand";
import { UnsubscribeFromDatasetCommand } from "./commands/UnsubscribeFromDatasetCommand";
import { UpdateRecordsCommand } from "./commands/UpdateRecordsCommand";

export class CognitoSync extends CognitoSyncClient {
  /**
   * <p>Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotAuthorizedException} Thrown when a user is not authorized to access the requested resource.
   *   - {InvalidParameterException} Thrown when a request parameter does not comply with the associated constraints.
   *   - {ResourceNotFoundException} Thrown if the resource doesn't exist.
   *   - {InternalErrorException} Indicates an internal service error.
   *   - {DuplicateRequestException} An exception thrown when there is an IN_PROGRESS bulk publish operation for the given identity pool.
   *   - {AlreadyStreamedException} An exception thrown when a bulk publish operation is requested less than 24 hours after a previous bulk publish operation completed successfully.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public bulkPublish(args: BulkPublishInput): Promise<BulkPublishOutput>;
  public bulkPublish(
    args: BulkPublishInput,
    cb: (err: any, data?: BulkPublishOutput) => void
  ): void;
  public bulkPublish(
    args: BulkPublishInput,
    cb?: (err: any, data?: BulkPublishOutput) => void
  ): Promise<BulkPublishOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BulkPublishCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specific dataset. The dataset will be deleted permanently, and the action can't be undone. Datasets that this dataset was merged with will no longer report the merge. Any subsequent operation on this dataset will result in a ResourceNotFoundException.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotAuthorizedException} Thrown when a user is not authorized to access the requested resource.
   *   - {InvalidParameterException} Thrown when a request parameter does not comply with the associated constraints.
   *   - {ResourceNotFoundException} Thrown if the resource doesn't exist.
   *   - {InternalErrorException} Indicates an internal service error.
   *   - {TooManyRequestsException} Thrown if the request is throttled.
   *   - {ResourceConflictException} Thrown if an update can't be applied because the resource was changed by another call and this would result in a conflict.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDataset(args: DeleteDatasetInput): Promise<DeleteDatasetOutput>;
  public deleteDataset(
    args: DeleteDatasetInput,
    cb: (err: any, data?: DeleteDatasetOutput) => void
  ): void;
  public deleteDataset(
    args: DeleteDatasetInput,
    cb?: (err: any, data?: DeleteDatasetOutput) => void
  ): Promise<DeleteDatasetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDatasetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets meta data about a dataset by identity and dataset name. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotAuthorizedException} Thrown when a user is not authorized to access the requested resource.
   *   - {InvalidParameterException} Thrown when a request parameter does not comply with the associated constraints.
   *   - {ResourceNotFoundException} Thrown if the resource doesn't exist.
   *   - {InternalErrorException} Indicates an internal service error.
   *   - {TooManyRequestsException} Thrown if the request is throttled.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDataset(
    args: DescribeDatasetInput
  ): Promise<DescribeDatasetOutput>;
  public describeDataset(
    args: DescribeDatasetInput,
    cb: (err: any, data?: DescribeDatasetOutput) => void
  ): void;
  public describeDataset(
    args: DescribeDatasetInput,
    cb?: (err: any, data?: DescribeDatasetOutput) => void
  ): Promise<DescribeDatasetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDatasetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets usage details (for example, data storage) about a particular identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotAuthorizedException} Thrown when a user is not authorized to access the requested resource.
   *   - {InvalidParameterException} Thrown when a request parameter does not comply with the associated constraints.
   *   - {ResourceNotFoundException} Thrown if the resource doesn't exist.
   *   - {InternalErrorException} Indicates an internal service error.
   *   - {TooManyRequestsException} Thrown if the request is throttled.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeIdentityPoolUsage(
    args: DescribeIdentityPoolUsageInput
  ): Promise<DescribeIdentityPoolUsageOutput>;
  public describeIdentityPoolUsage(
    args: DescribeIdentityPoolUsageInput,
    cb: (err: any, data?: DescribeIdentityPoolUsageOutput) => void
  ): void;
  public describeIdentityPoolUsage(
    args: DescribeIdentityPoolUsageInput,
    cb?: (err: any, data?: DescribeIdentityPoolUsageOutput) => void
  ): Promise<DescribeIdentityPoolUsageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeIdentityPoolUsageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets usage information for an identity, including number of datasets and data usage.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotAuthorizedException} Thrown when a user is not authorized to access the requested resource.
   *   - {InvalidParameterException} Thrown when a request parameter does not comply with the associated constraints.
   *   - {ResourceNotFoundException} Thrown if the resource doesn't exist.
   *   - {InternalErrorException} Indicates an internal service error.
   *   - {TooManyRequestsException} Thrown if the request is throttled.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeIdentityUsage(
    args: DescribeIdentityUsageInput
  ): Promise<DescribeIdentityUsageOutput>;
  public describeIdentityUsage(
    args: DescribeIdentityUsageInput,
    cb: (err: any, data?: DescribeIdentityUsageOutput) => void
  ): void;
  public describeIdentityUsage(
    args: DescribeIdentityUsageInput,
    cb?: (err: any, data?: DescribeIdentityUsageOutput) => void
  ): Promise<DescribeIdentityUsageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeIdentityUsageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get the status of the last BulkPublish operation for an identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotAuthorizedException} Thrown when a user is not authorized to access the requested resource.
   *   - {InvalidParameterException} Thrown when a request parameter does not comply with the associated constraints.
   *   - {ResourceNotFoundException} Thrown if the resource doesn't exist.
   *   - {InternalErrorException} Indicates an internal service error.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBulkPublishDetails(
    args: GetBulkPublishDetailsInput
  ): Promise<GetBulkPublishDetailsOutput>;
  public getBulkPublishDetails(
    args: GetBulkPublishDetailsInput,
    cb: (err: any, data?: GetBulkPublishDetailsOutput) => void
  ): void;
  public getBulkPublishDetails(
    args: GetBulkPublishDetailsInput,
    cb?: (err: any, data?: GetBulkPublishDetailsOutput) => void
  ): Promise<GetBulkPublishDetailsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBulkPublishDetailsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the events and the corresponding Lambda functions associated with an identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} Thrown when a request parameter does not comply with the associated constraints.
   *   - {ResourceNotFoundException} Thrown if the resource doesn't exist.
   *   - {NotAuthorizedException} Thrown when a user is not authorized to access the requested resource.
   *   - {InternalErrorException} Indicates an internal service error.
   *   - {TooManyRequestsException} Thrown if the request is throttled.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCognitoEvents(
    args: GetCognitoEventsInput
  ): Promise<GetCognitoEventsOutput>;
  public getCognitoEvents(
    args: GetCognitoEventsInput,
    cb: (err: any, data?: GetCognitoEventsOutput) => void
  ): void;
  public getCognitoEvents(
    args: GetCognitoEventsInput,
    cb?: (err: any, data?: GetCognitoEventsOutput) => void
  ): Promise<GetCognitoEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCognitoEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the configuration settings of an identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotAuthorizedException} Thrown when a user is not authorized to access the requested resource.
   *   - {InvalidParameterException} Thrown when a request parameter does not comply with the associated constraints.
   *   - {ResourceNotFoundException} Thrown if the resource doesn't exist.
   *   - {InternalErrorException} Indicates an internal service error.
   *   - {TooManyRequestsException} Thrown if the request is throttled.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getIdentityPoolConfiguration(
    args: GetIdentityPoolConfigurationInput
  ): Promise<GetIdentityPoolConfigurationOutput>;
  public getIdentityPoolConfiguration(
    args: GetIdentityPoolConfigurationInput,
    cb: (err: any, data?: GetIdentityPoolConfigurationOutput) => void
  ): void;
  public getIdentityPoolConfiguration(
    args: GetIdentityPoolConfigurationInput,
    cb?: (err: any, data?: GetIdentityPoolConfigurationOutput) => void
  ): Promise<GetIdentityPoolConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetIdentityPoolConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListDatasets can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use the Cognito Identity credentials to make this API call.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotAuthorizedException} Thrown when a user is not authorized to access the requested resource.
   *   - {InvalidParameterException} Thrown when a request parameter does not comply with the associated constraints.
   *   - {InternalErrorException} Indicates an internal service error.
   *   - {TooManyRequestsException} Thrown if the request is throttled.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDatasets(args: ListDatasetsInput): Promise<ListDatasetsOutput>;
  public listDatasets(
    args: ListDatasetsInput,
    cb: (err: any, data?: ListDatasetsOutput) => void
  ): void;
  public listDatasets(
    args: ListDatasetsInput,
    cb?: (err: any, data?: ListDatasetsOutput) => void
  ): Promise<ListDatasetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDatasetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of identity pools registered with Cognito.</p> <p>ListIdentityPoolUsage can only be called with developer credentials. You cannot make this API call with the temporary user credentials provided by Cognito Identity.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotAuthorizedException} Thrown when a user is not authorized to access the requested resource.
   *   - {InvalidParameterException} Thrown when a request parameter does not comply with the associated constraints.
   *   - {InternalErrorException} Indicates an internal service error.
   *   - {TooManyRequestsException} Thrown if the request is throttled.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listIdentityPoolUsage(
    args: ListIdentityPoolUsageInput
  ): Promise<ListIdentityPoolUsageOutput>;
  public listIdentityPoolUsage(
    args: ListIdentityPoolUsageInput,
    cb: (err: any, data?: ListIdentityPoolUsageOutput) => void
  ): void;
  public listIdentityPoolUsage(
    args: ListIdentityPoolUsageInput,
    cb?: (err: any, data?: ListIdentityPoolUsageOutput) => void
  ): Promise<ListIdentityPoolUsageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListIdentityPoolUsageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets paginated records, optionally changed after a particular sync count for a dataset and identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListRecords can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} Thrown when a request parameter does not comply with the associated constraints.
   *   - {NotAuthorizedException} Thrown when a user is not authorized to access the requested resource.
   *   - {TooManyRequestsException} Thrown if the request is throttled.
   *   - {InternalErrorException} Indicates an internal service error.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRecords(args: ListRecordsInput): Promise<ListRecordsOutput>;
  public listRecords(
    args: ListRecordsInput,
    cb: (err: any, data?: ListRecordsOutput) => void
  ): void;
  public listRecords(
    args: ListRecordsInput,
    cb?: (err: any, data?: ListRecordsOutput) => void
  ): Promise<ListRecordsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRecordsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers a device to receive push sync notifications.</p> <p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotAuthorizedException} Thrown when a user is not authorized to access the requested resource.
   *   - {InvalidParameterException} Thrown when a request parameter does not comply with the associated constraints.
   *   - {ResourceNotFoundException} Thrown if the resource doesn't exist.
   *   - {InternalErrorException} Indicates an internal service error.
   *   - {InvalidConfigurationException} InvalidConfigurationException shape
   *   - {TooManyRequestsException} Thrown if the request is throttled.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerDevice(
    args: RegisterDeviceInput
  ): Promise<RegisterDeviceOutput>;
  public registerDevice(
    args: RegisterDeviceInput,
    cb: (err: any, data?: RegisterDeviceOutput) => void
  ): void;
  public registerDevice(
    args: RegisterDeviceInput,
    cb?: (err: any, data?: RegisterDeviceOutput) => void
  ): Promise<RegisterDeviceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterDeviceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} Thrown when a request parameter does not comply with the associated constraints.
   *   - {ResourceNotFoundException} Thrown if the resource doesn't exist.
   *   - {NotAuthorizedException} Thrown when a user is not authorized to access the requested resource.
   *   - {InternalErrorException} Indicates an internal service error.
   *   - {TooManyRequestsException} Thrown if the request is throttled.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setCognitoEvents(
    args: SetCognitoEventsInput
  ): Promise<SetCognitoEventsOutput>;
  public setCognitoEvents(
    args: SetCognitoEventsInput,
    cb: (err: any, data?: SetCognitoEventsOutput) => void
  ): void;
  public setCognitoEvents(
    args: SetCognitoEventsInput,
    cb?: (err: any, data?: SetCognitoEventsOutput) => void
  ): Promise<SetCognitoEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetCognitoEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the necessary configuration for push sync.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotAuthorizedException} Thrown when a user is not authorized to access the requested resource.
   *   - {InvalidParameterException} Thrown when a request parameter does not comply with the associated constraints.
   *   - {ResourceNotFoundException} Thrown if the resource doesn't exist.
   *   - {InternalErrorException} Indicates an internal service error.
   *   - {TooManyRequestsException} Thrown if the request is throttled.
   *   - {ConcurrentModificationException} <p>Thrown if there are parallel requests to modify a resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setIdentityPoolConfiguration(
    args: SetIdentityPoolConfigurationInput
  ): Promise<SetIdentityPoolConfigurationOutput>;
  public setIdentityPoolConfiguration(
    args: SetIdentityPoolConfigurationInput,
    cb: (err: any, data?: SetIdentityPoolConfigurationOutput) => void
  ): void;
  public setIdentityPoolConfiguration(
    args: SetIdentityPoolConfigurationInput,
    cb?: (err: any, data?: SetIdentityPoolConfigurationOutput) => void
  ): Promise<SetIdentityPoolConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetIdentityPoolConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Subscribes to receive notifications when a dataset is modified by another device.</p> <p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotAuthorizedException} Thrown when a user is not authorized to access the requested resource.
   *   - {InvalidParameterException} Thrown when a request parameter does not comply with the associated constraints.
   *   - {ResourceNotFoundException} Thrown if the resource doesn't exist.
   *   - {InternalErrorException} Indicates an internal service error.
   *   - {InvalidConfigurationException} InvalidConfigurationException shape
   *   - {TooManyRequestsException} Thrown if the request is throttled.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public subscribeToDataset(
    args: SubscribeToDatasetInput
  ): Promise<SubscribeToDatasetOutput>;
  public subscribeToDataset(
    args: SubscribeToDatasetInput,
    cb: (err: any, data?: SubscribeToDatasetOutput) => void
  ): void;
  public subscribeToDataset(
    args: SubscribeToDatasetInput,
    cb?: (err: any, data?: SubscribeToDatasetOutput) => void
  ): Promise<SubscribeToDatasetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SubscribeToDatasetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Unsubscribes from receiving notifications when a dataset is modified by another device.</p> <p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotAuthorizedException} Thrown when a user is not authorized to access the requested resource.
   *   - {InvalidParameterException} Thrown when a request parameter does not comply with the associated constraints.
   *   - {ResourceNotFoundException} Thrown if the resource doesn't exist.
   *   - {InternalErrorException} Indicates an internal service error.
   *   - {InvalidConfigurationException} InvalidConfigurationException shape
   *   - {TooManyRequestsException} Thrown if the request is throttled.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public unsubscribeFromDataset(
    args: UnsubscribeFromDatasetInput
  ): Promise<UnsubscribeFromDatasetOutput>;
  public unsubscribeFromDataset(
    args: UnsubscribeFromDatasetInput,
    cb: (err: any, data?: UnsubscribeFromDatasetOutput) => void
  ): void;
  public unsubscribeFromDataset(
    args: UnsubscribeFromDatasetInput,
    cb?: (err: any, data?: UnsubscribeFromDatasetOutput) => void
  ): Promise<UnsubscribeFromDatasetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UnsubscribeFromDatasetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Posts updates to records and adds and deletes records for a dataset and user.</p> <p>The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count.</p> <p>For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} Thrown when a request parameter does not comply with the associated constraints.
   *   - {LimitExceededException} Thrown when the limit on the number of objects or operations has been exceeded.
   *   - {NotAuthorizedException} Thrown when a user is not authorized to access the requested resource.
   *   - {ResourceNotFoundException} Thrown if the resource doesn't exist.
   *   - {ResourceConflictException} Thrown if an update can't be applied because the resource was changed by another call and this would result in a conflict.
   *   - {InvalidLambdaFunctionOutputException} <p>The AWS Lambda function returned invalid output or an exception.</p>
   *   - {LambdaThrottledException} <p>AWS Lambda throttled your account, please contact AWS Support</p>
   *   - {TooManyRequestsException} Thrown if the request is throttled.
   *   - {InternalErrorException} Indicates an internal service error.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRecords(args: UpdateRecordsInput): Promise<UpdateRecordsOutput>;
  public updateRecords(
    args: UpdateRecordsInput,
    cb: (err: any, data?: UpdateRecordsOutput) => void
  ): void;
  public updateRecords(
    args: UpdateRecordsInput,
    cb?: (err: any, data?: UpdateRecordsOutput) => void
  ): Promise<UpdateRecordsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRecordsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
