import { ElasticsearchServiceClient } from "./ElasticsearchServiceClient";
import { AddTagsInput } from "./types/AddTagsInput";
import { AddTagsOutput } from "./types/AddTagsOutput";
import { BaseException } from "./types/BaseException";
import { CancelElasticsearchServiceSoftwareUpdateInput } from "./types/CancelElasticsearchServiceSoftwareUpdateInput";
import { CancelElasticsearchServiceSoftwareUpdateOutput } from "./types/CancelElasticsearchServiceSoftwareUpdateOutput";
import { CreateElasticsearchDomainInput } from "./types/CreateElasticsearchDomainInput";
import { CreateElasticsearchDomainOutput } from "./types/CreateElasticsearchDomainOutput";
import { DeleteElasticsearchDomainInput } from "./types/DeleteElasticsearchDomainInput";
import { DeleteElasticsearchDomainOutput } from "./types/DeleteElasticsearchDomainOutput";
import { DeleteElasticsearchServiceRoleInput } from "./types/DeleteElasticsearchServiceRoleInput";
import { DeleteElasticsearchServiceRoleOutput } from "./types/DeleteElasticsearchServiceRoleOutput";
import { DescribeElasticsearchDomainConfigInput } from "./types/DescribeElasticsearchDomainConfigInput";
import { DescribeElasticsearchDomainConfigOutput } from "./types/DescribeElasticsearchDomainConfigOutput";
import { DescribeElasticsearchDomainInput } from "./types/DescribeElasticsearchDomainInput";
import { DescribeElasticsearchDomainOutput } from "./types/DescribeElasticsearchDomainOutput";
import { DescribeElasticsearchDomainsInput } from "./types/DescribeElasticsearchDomainsInput";
import { DescribeElasticsearchDomainsOutput } from "./types/DescribeElasticsearchDomainsOutput";
import { DescribeElasticsearchInstanceTypeLimitsInput } from "./types/DescribeElasticsearchInstanceTypeLimitsInput";
import { DescribeElasticsearchInstanceTypeLimitsOutput } from "./types/DescribeElasticsearchInstanceTypeLimitsOutput";
import { DescribeReservedElasticsearchInstanceOfferingsInput } from "./types/DescribeReservedElasticsearchInstanceOfferingsInput";
import { DescribeReservedElasticsearchInstanceOfferingsOutput } from "./types/DescribeReservedElasticsearchInstanceOfferingsOutput";
import { DescribeReservedElasticsearchInstancesInput } from "./types/DescribeReservedElasticsearchInstancesInput";
import { DescribeReservedElasticsearchInstancesOutput } from "./types/DescribeReservedElasticsearchInstancesOutput";
import { DisabledOperationException } from "./types/DisabledOperationException";
import { GetCompatibleElasticsearchVersionsInput } from "./types/GetCompatibleElasticsearchVersionsInput";
import { GetCompatibleElasticsearchVersionsOutput } from "./types/GetCompatibleElasticsearchVersionsOutput";
import { GetUpgradeHistoryInput } from "./types/GetUpgradeHistoryInput";
import { GetUpgradeHistoryOutput } from "./types/GetUpgradeHistoryOutput";
import { GetUpgradeStatusInput } from "./types/GetUpgradeStatusInput";
import { GetUpgradeStatusOutput } from "./types/GetUpgradeStatusOutput";
import { InternalException } from "./types/InternalException";
import { InvalidTypeException } from "./types/InvalidTypeException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListDomainNamesInput } from "./types/ListDomainNamesInput";
import { ListDomainNamesOutput } from "./types/ListDomainNamesOutput";
import { ListElasticsearchInstanceTypesInput } from "./types/ListElasticsearchInstanceTypesInput";
import { ListElasticsearchInstanceTypesOutput } from "./types/ListElasticsearchInstanceTypesOutput";
import { ListElasticsearchVersionsInput } from "./types/ListElasticsearchVersionsInput";
import { ListElasticsearchVersionsOutput } from "./types/ListElasticsearchVersionsOutput";
import { ListTagsInput } from "./types/ListTagsInput";
import { ListTagsOutput } from "./types/ListTagsOutput";
import { PurchaseReservedElasticsearchInstanceOfferingInput } from "./types/PurchaseReservedElasticsearchInstanceOfferingInput";
import { PurchaseReservedElasticsearchInstanceOfferingOutput } from "./types/PurchaseReservedElasticsearchInstanceOfferingOutput";
import { RemoveTagsInput } from "./types/RemoveTagsInput";
import { RemoveTagsOutput } from "./types/RemoveTagsOutput";
import { ResourceAlreadyExistsException } from "./types/ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { StartElasticsearchServiceSoftwareUpdateInput } from "./types/StartElasticsearchServiceSoftwareUpdateInput";
import { StartElasticsearchServiceSoftwareUpdateOutput } from "./types/StartElasticsearchServiceSoftwareUpdateOutput";
import { UpdateElasticsearchDomainConfigInput } from "./types/UpdateElasticsearchDomainConfigInput";
import { UpdateElasticsearchDomainConfigOutput } from "./types/UpdateElasticsearchDomainConfigOutput";
import { UpgradeElasticsearchDomainInput } from "./types/UpgradeElasticsearchDomainInput";
import { UpgradeElasticsearchDomainOutput } from "./types/UpgradeElasticsearchDomainOutput";
import { ValidationException } from "./types/ValidationException";
import { AddTagsCommand } from "./commands/AddTagsCommand";
import { CancelElasticsearchServiceSoftwareUpdateCommand } from "./commands/CancelElasticsearchServiceSoftwareUpdateCommand";
import { CreateElasticsearchDomainCommand } from "./commands/CreateElasticsearchDomainCommand";
import { DeleteElasticsearchDomainCommand } from "./commands/DeleteElasticsearchDomainCommand";
import { DeleteElasticsearchServiceRoleCommand } from "./commands/DeleteElasticsearchServiceRoleCommand";
import { DescribeElasticsearchDomainCommand } from "./commands/DescribeElasticsearchDomainCommand";
import { DescribeElasticsearchDomainConfigCommand } from "./commands/DescribeElasticsearchDomainConfigCommand";
import { DescribeElasticsearchDomainsCommand } from "./commands/DescribeElasticsearchDomainsCommand";
import { DescribeElasticsearchInstanceTypeLimitsCommand } from "./commands/DescribeElasticsearchInstanceTypeLimitsCommand";
import { DescribeReservedElasticsearchInstanceOfferingsCommand } from "./commands/DescribeReservedElasticsearchInstanceOfferingsCommand";
import { DescribeReservedElasticsearchInstancesCommand } from "./commands/DescribeReservedElasticsearchInstancesCommand";
import { GetCompatibleElasticsearchVersionsCommand } from "./commands/GetCompatibleElasticsearchVersionsCommand";
import { GetUpgradeHistoryCommand } from "./commands/GetUpgradeHistoryCommand";
import { GetUpgradeStatusCommand } from "./commands/GetUpgradeStatusCommand";
import { ListDomainNamesCommand } from "./commands/ListDomainNamesCommand";
import { ListElasticsearchInstanceTypesCommand } from "./commands/ListElasticsearchInstanceTypesCommand";
import { ListElasticsearchVersionsCommand } from "./commands/ListElasticsearchVersionsCommand";
import { ListTagsCommand } from "./commands/ListTagsCommand";
import { PurchaseReservedElasticsearchInstanceOfferingCommand } from "./commands/PurchaseReservedElasticsearchInstanceOfferingCommand";
import { RemoveTagsCommand } from "./commands/RemoveTagsCommand";
import { StartElasticsearchServiceSoftwareUpdateCommand } from "./commands/StartElasticsearchServiceSoftwareUpdateCommand";
import { UpdateElasticsearchDomainConfigCommand } from "./commands/UpdateElasticsearchDomainConfigCommand";
import { UpgradeElasticsearchDomainCommand } from "./commands/UpgradeElasticsearchDomainCommand";

export class ElasticsearchService extends ElasticsearchServiceClient {
  /**
   * <p>Attaches tags to an existing Elasticsearch domain. Tags are a set of case-sensitive key value pairs. An Elasticsearch domain may have up to 10 tags. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-awsresorcetagging" target="_blank"> Tagging Amazon Elasticsearch Service Domains for more information.</a></p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {LimitExceededException} <p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addTags(args: AddTagsInput): Promise<AddTagsOutput>;
  public addTags(
    args: AddTagsInput,
    cb: (err: any, data?: AddTagsOutput) => void
  ): void;
  public addTags(
    args: AddTagsInput,
    cb?: (err: any, data?: AddTagsOutput) => void
  ): Promise<AddTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels a scheduled service software update for an Amazon ES domain. You can only perform this operation before the <code>AutomatedUpdateDate</code> and when the <code>UpdateStatus</code> is in the <code>PENDING_UPDATE</code> state.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {ResourceNotFoundException} <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelElasticsearchServiceSoftwareUpdate(
    args: CancelElasticsearchServiceSoftwareUpdateInput
  ): Promise<CancelElasticsearchServiceSoftwareUpdateOutput>;
  public cancelElasticsearchServiceSoftwareUpdate(
    args: CancelElasticsearchServiceSoftwareUpdateInput,
    cb: (
      err: any,
      data?: CancelElasticsearchServiceSoftwareUpdateOutput
    ) => void
  ): void;
  public cancelElasticsearchServiceSoftwareUpdate(
    args: CancelElasticsearchServiceSoftwareUpdateInput,
    cb?: (
      err: any,
      data?: CancelElasticsearchServiceSoftwareUpdateOutput
    ) => void
  ): Promise<CancelElasticsearchServiceSoftwareUpdateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelElasticsearchServiceSoftwareUpdateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new Elasticsearch domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {DisabledOperationException} <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {InvalidTypeException} <p>An exception for trying to create or access sub-resource that is either invalid or not supported. Gives http status code of 409.</p>
   *   - {LimitExceededException} <p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.</p>
   *   - {ResourceAlreadyExistsException} <p>An exception for creating a resource that already exists. Gives http status code of 400.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createElasticsearchDomain(
    args: CreateElasticsearchDomainInput
  ): Promise<CreateElasticsearchDomainOutput>;
  public createElasticsearchDomain(
    args: CreateElasticsearchDomainInput,
    cb: (err: any, data?: CreateElasticsearchDomainOutput) => void
  ): void;
  public createElasticsearchDomain(
    args: CreateElasticsearchDomainInput,
    cb?: (err: any, data?: CreateElasticsearchDomainOutput) => void
  ): Promise<CreateElasticsearchDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateElasticsearchDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Permanently deletes the specified Elasticsearch domain and all of its data. Once a domain is deleted, it cannot be recovered.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {ResourceNotFoundException} <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteElasticsearchDomain(
    args: DeleteElasticsearchDomainInput
  ): Promise<DeleteElasticsearchDomainOutput>;
  public deleteElasticsearchDomain(
    args: DeleteElasticsearchDomainInput,
    cb: (err: any, data?: DeleteElasticsearchDomainOutput) => void
  ): void;
  public deleteElasticsearchDomain(
    args: DeleteElasticsearchDomainInput,
    cb?: (err: any, data?: DeleteElasticsearchDomainOutput) => void
  ): Promise<DeleteElasticsearchDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteElasticsearchDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the service-linked role that Elasticsearch Service uses to manage and maintain VPC domains. Role deletion will fail if any existing VPC domains use the role. You must delete any such Elasticsearch domains before deleting the role. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-enabling-slr" target="_blank">Deleting Elasticsearch Service Role</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteElasticsearchServiceRole(
    args: DeleteElasticsearchServiceRoleInput
  ): Promise<DeleteElasticsearchServiceRoleOutput>;
  public deleteElasticsearchServiceRole(
    args: DeleteElasticsearchServiceRoleInput,
    cb: (err: any, data?: DeleteElasticsearchServiceRoleOutput) => void
  ): void;
  public deleteElasticsearchServiceRole(
    args: DeleteElasticsearchServiceRoleInput,
    cb?: (err: any, data?: DeleteElasticsearchServiceRoleOutput) => void
  ): Promise<DeleteElasticsearchServiceRoleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteElasticsearchServiceRoleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns domain configuration information about the specified Elasticsearch domain, including the domain ID, domain endpoint, and domain ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {ResourceNotFoundException} <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeElasticsearchDomain(
    args: DescribeElasticsearchDomainInput
  ): Promise<DescribeElasticsearchDomainOutput>;
  public describeElasticsearchDomain(
    args: DescribeElasticsearchDomainInput,
    cb: (err: any, data?: DescribeElasticsearchDomainOutput) => void
  ): void;
  public describeElasticsearchDomain(
    args: DescribeElasticsearchDomainInput,
    cb?: (err: any, data?: DescribeElasticsearchDomainOutput) => void
  ): Promise<DescribeElasticsearchDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeElasticsearchDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides cluster configuration information about the specified Elasticsearch domain, such as the state, creation date, update version, and update date for cluster options.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {ResourceNotFoundException} <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeElasticsearchDomainConfig(
    args: DescribeElasticsearchDomainConfigInput
  ): Promise<DescribeElasticsearchDomainConfigOutput>;
  public describeElasticsearchDomainConfig(
    args: DescribeElasticsearchDomainConfigInput,
    cb: (err: any, data?: DescribeElasticsearchDomainConfigOutput) => void
  ): void;
  public describeElasticsearchDomainConfig(
    args: DescribeElasticsearchDomainConfigInput,
    cb?: (err: any, data?: DescribeElasticsearchDomainConfigOutput) => void
  ): Promise<DescribeElasticsearchDomainConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeElasticsearchDomainConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns domain configuration information about the specified Elasticsearch domains, including the domain ID, domain endpoint, and domain ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeElasticsearchDomains(
    args: DescribeElasticsearchDomainsInput
  ): Promise<DescribeElasticsearchDomainsOutput>;
  public describeElasticsearchDomains(
    args: DescribeElasticsearchDomainsInput,
    cb: (err: any, data?: DescribeElasticsearchDomainsOutput) => void
  ): void;
  public describeElasticsearchDomains(
    args: DescribeElasticsearchDomainsInput,
    cb?: (err: any, data?: DescribeElasticsearchDomainsOutput) => void
  ): Promise<DescribeElasticsearchDomainsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeElasticsearchDomainsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Describe Elasticsearch Limits for a given InstanceType and ElasticsearchVersion. When modifying existing Domain, specify the <code> <a>DomainName</a> </code> to know what Limits are supported for modifying. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {InvalidTypeException} <p>An exception for trying to create or access sub-resource that is either invalid or not supported. Gives http status code of 409.</p>
   *   - {LimitExceededException} <p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.</p>
   *   - {ResourceNotFoundException} <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeElasticsearchInstanceTypeLimits(
    args: DescribeElasticsearchInstanceTypeLimitsInput
  ): Promise<DescribeElasticsearchInstanceTypeLimitsOutput>;
  public describeElasticsearchInstanceTypeLimits(
    args: DescribeElasticsearchInstanceTypeLimitsInput,
    cb: (err: any, data?: DescribeElasticsearchInstanceTypeLimitsOutput) => void
  ): void;
  public describeElasticsearchInstanceTypeLimits(
    args: DescribeElasticsearchInstanceTypeLimitsInput,
    cb?: (
      err: any,
      data?: DescribeElasticsearchInstanceTypeLimitsOutput
    ) => void
  ): Promise<DescribeElasticsearchInstanceTypeLimitsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeElasticsearchInstanceTypeLimitsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists available reserved Elasticsearch instance offerings.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {DisabledOperationException} <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReservedElasticsearchInstanceOfferings(
    args: DescribeReservedElasticsearchInstanceOfferingsInput
  ): Promise<DescribeReservedElasticsearchInstanceOfferingsOutput>;
  public describeReservedElasticsearchInstanceOfferings(
    args: DescribeReservedElasticsearchInstanceOfferingsInput,
    cb: (
      err: any,
      data?: DescribeReservedElasticsearchInstanceOfferingsOutput
    ) => void
  ): void;
  public describeReservedElasticsearchInstanceOfferings(
    args: DescribeReservedElasticsearchInstanceOfferingsInput,
    cb?: (
      err: any,
      data?: DescribeReservedElasticsearchInstanceOfferingsOutput
    ) => void
  ): Promise<DescribeReservedElasticsearchInstanceOfferingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReservedElasticsearchInstanceOfferingsCommand(
      args
    );
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about reserved Elasticsearch instances for this account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {DisabledOperationException} <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReservedElasticsearchInstances(
    args: DescribeReservedElasticsearchInstancesInput
  ): Promise<DescribeReservedElasticsearchInstancesOutput>;
  public describeReservedElasticsearchInstances(
    args: DescribeReservedElasticsearchInstancesInput,
    cb: (err: any, data?: DescribeReservedElasticsearchInstancesOutput) => void
  ): void;
  public describeReservedElasticsearchInstances(
    args: DescribeReservedElasticsearchInstancesInput,
    cb?: (err: any, data?: DescribeReservedElasticsearchInstancesOutput) => void
  ): Promise<DescribeReservedElasticsearchInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReservedElasticsearchInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Returns a list of upgrade compatible Elastisearch versions. You can optionally pass a <code> <a>DomainName</a> </code> to get all upgrade compatible Elasticsearch versions for that specific domain. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {ResourceNotFoundException} <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
   *   - {DisabledOperationException} <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCompatibleElasticsearchVersions(
    args: GetCompatibleElasticsearchVersionsInput
  ): Promise<GetCompatibleElasticsearchVersionsOutput>;
  public getCompatibleElasticsearchVersions(
    args: GetCompatibleElasticsearchVersionsInput,
    cb: (err: any, data?: GetCompatibleElasticsearchVersionsOutput) => void
  ): void;
  public getCompatibleElasticsearchVersions(
    args: GetCompatibleElasticsearchVersionsInput,
    cb?: (err: any, data?: GetCompatibleElasticsearchVersionsOutput) => void
  ): Promise<GetCompatibleElasticsearchVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCompatibleElasticsearchVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the complete history of the last 10 upgrades that were performed on the domain.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {ResourceNotFoundException} <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
   *   - {DisabledOperationException} <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUpgradeHistory(
    args: GetUpgradeHistoryInput
  ): Promise<GetUpgradeHistoryOutput>;
  public getUpgradeHistory(
    args: GetUpgradeHistoryInput,
    cb: (err: any, data?: GetUpgradeHistoryOutput) => void
  ): void;
  public getUpgradeHistory(
    args: GetUpgradeHistoryInput,
    cb?: (err: any, data?: GetUpgradeHistoryOutput) => void
  ): Promise<GetUpgradeHistoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUpgradeHistoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the latest status of the last upgrade or upgrade eligibility check that was performed on the domain.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {ResourceNotFoundException} <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
   *   - {DisabledOperationException} <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUpgradeStatus(
    args: GetUpgradeStatusInput
  ): Promise<GetUpgradeStatusOutput>;
  public getUpgradeStatus(
    args: GetUpgradeStatusInput,
    cb: (err: any, data?: GetUpgradeStatusOutput) => void
  ): void;
  public getUpgradeStatus(
    args: GetUpgradeStatusInput,
    cb?: (err: any, data?: GetUpgradeStatusOutput) => void
  ): Promise<GetUpgradeStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUpgradeStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the name of all Elasticsearch domains owned by the current user's account. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDomainNames(
    args: ListDomainNamesInput
  ): Promise<ListDomainNamesOutput>;
  public listDomainNames(
    args: ListDomainNamesInput,
    cb: (err: any, data?: ListDomainNamesOutput) => void
  ): void;
  public listDomainNames(
    args: ListDomainNamesInput,
    cb?: (err: any, data?: ListDomainNamesOutput) => void
  ): Promise<ListDomainNamesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDomainNamesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List all Elasticsearch instance types that are supported for given ElasticsearchVersion</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {ResourceNotFoundException} <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listElasticsearchInstanceTypes(
    args: ListElasticsearchInstanceTypesInput
  ): Promise<ListElasticsearchInstanceTypesOutput>;
  public listElasticsearchInstanceTypes(
    args: ListElasticsearchInstanceTypesInput,
    cb: (err: any, data?: ListElasticsearchInstanceTypesOutput) => void
  ): void;
  public listElasticsearchInstanceTypes(
    args: ListElasticsearchInstanceTypesInput,
    cb?: (err: any, data?: ListElasticsearchInstanceTypesOutput) => void
  ): Promise<ListElasticsearchInstanceTypesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListElasticsearchInstanceTypesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List all supported Elasticsearch versions</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {ResourceNotFoundException} <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listElasticsearchVersions(
    args: ListElasticsearchVersionsInput
  ): Promise<ListElasticsearchVersionsOutput>;
  public listElasticsearchVersions(
    args: ListElasticsearchVersionsInput,
    cb: (err: any, data?: ListElasticsearchVersionsOutput) => void
  ): void;
  public listElasticsearchVersions(
    args: ListElasticsearchVersionsInput,
    cb?: (err: any, data?: ListElasticsearchVersionsOutput) => void
  ): Promise<ListElasticsearchVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListElasticsearchVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns all tags for the given Elasticsearch domain.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {ResourceNotFoundException} <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTags(args: ListTagsInput): Promise<ListTagsOutput>;
  public listTags(
    args: ListTagsInput,
    cb: (err: any, data?: ListTagsOutput) => void
  ): void;
  public listTags(
    args: ListTagsInput,
    cb?: (err: any, data?: ListTagsOutput) => void
  ): Promise<ListTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Allows you to purchase reserved Elasticsearch instances.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
   *   - {ResourceAlreadyExistsException} <p>An exception for creating a resource that already exists. Gives http status code of 400.</p>
   *   - {LimitExceededException} <p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.</p>
   *   - {DisabledOperationException} <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public purchaseReservedElasticsearchInstanceOffering(
    args: PurchaseReservedElasticsearchInstanceOfferingInput
  ): Promise<PurchaseReservedElasticsearchInstanceOfferingOutput>;
  public purchaseReservedElasticsearchInstanceOffering(
    args: PurchaseReservedElasticsearchInstanceOfferingInput,
    cb: (
      err: any,
      data?: PurchaseReservedElasticsearchInstanceOfferingOutput
    ) => void
  ): void;
  public purchaseReservedElasticsearchInstanceOffering(
    args: PurchaseReservedElasticsearchInstanceOfferingInput,
    cb?: (
      err: any,
      data?: PurchaseReservedElasticsearchInstanceOfferingOutput
    ) => void
  ): Promise<PurchaseReservedElasticsearchInstanceOfferingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PurchaseReservedElasticsearchInstanceOfferingCommand(
      args
    );
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified set of tags from the specified Elasticsearch domain.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeTags(args: RemoveTagsInput): Promise<RemoveTagsOutput>;
  public removeTags(
    args: RemoveTagsInput,
    cb: (err: any, data?: RemoveTagsOutput) => void
  ): void;
  public removeTags(
    args: RemoveTagsInput,
    cb?: (err: any, data?: RemoveTagsOutput) => void
  ): Promise<RemoveTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Schedules a service software update for an Amazon ES domain.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {ResourceNotFoundException} <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startElasticsearchServiceSoftwareUpdate(
    args: StartElasticsearchServiceSoftwareUpdateInput
  ): Promise<StartElasticsearchServiceSoftwareUpdateOutput>;
  public startElasticsearchServiceSoftwareUpdate(
    args: StartElasticsearchServiceSoftwareUpdateInput,
    cb: (err: any, data?: StartElasticsearchServiceSoftwareUpdateOutput) => void
  ): void;
  public startElasticsearchServiceSoftwareUpdate(
    args: StartElasticsearchServiceSoftwareUpdateInput,
    cb?: (
      err: any,
      data?: StartElasticsearchServiceSoftwareUpdateOutput
    ) => void
  ): Promise<StartElasticsearchServiceSoftwareUpdateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartElasticsearchServiceSoftwareUpdateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modifies the cluster configuration of the specified Elasticsearch domain, setting as setting the instance type and the number of instances. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {InvalidTypeException} <p>An exception for trying to create or access sub-resource that is either invalid or not supported. Gives http status code of 409.</p>
   *   - {LimitExceededException} <p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.</p>
   *   - {ResourceNotFoundException} <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateElasticsearchDomainConfig(
    args: UpdateElasticsearchDomainConfigInput
  ): Promise<UpdateElasticsearchDomainConfigOutput>;
  public updateElasticsearchDomainConfig(
    args: UpdateElasticsearchDomainConfigInput,
    cb: (err: any, data?: UpdateElasticsearchDomainConfigOutput) => void
  ): void;
  public updateElasticsearchDomainConfig(
    args: UpdateElasticsearchDomainConfigInput,
    cb?: (err: any, data?: UpdateElasticsearchDomainConfigOutput) => void
  ): Promise<UpdateElasticsearchDomainConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateElasticsearchDomainConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Allows you to either upgrade your domain or perform an Upgrade eligibility check to a compatible Elasticsearch version.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {ResourceNotFoundException} <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
   *   - {ResourceAlreadyExistsException} <p>An exception for creating a resource that already exists. Gives http status code of 400.</p>
   *   - {DisabledOperationException} <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
   *   - {ValidationException} <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
   *   - {InternalException} <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public upgradeElasticsearchDomain(
    args: UpgradeElasticsearchDomainInput
  ): Promise<UpgradeElasticsearchDomainOutput>;
  public upgradeElasticsearchDomain(
    args: UpgradeElasticsearchDomainInput,
    cb: (err: any, data?: UpgradeElasticsearchDomainOutput) => void
  ): void;
  public upgradeElasticsearchDomain(
    args: UpgradeElasticsearchDomainInput,
    cb?: (err: any, data?: UpgradeElasticsearchDomainOutput) => void
  ): Promise<UpgradeElasticsearchDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpgradeElasticsearchDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
