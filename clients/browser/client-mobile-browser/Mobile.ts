import { MobileClient } from "./MobileClient";
import { AccountActionRequiredException } from "./types/AccountActionRequiredException";
import { BadRequestException } from "./types/BadRequestException";
import { CreateProjectInput } from "./types/CreateProjectInput";
import { CreateProjectOutput } from "./types/CreateProjectOutput";
import { DeleteProjectInput } from "./types/DeleteProjectInput";
import { DeleteProjectOutput } from "./types/DeleteProjectOutput";
import { DescribeBundleInput } from "./types/DescribeBundleInput";
import { DescribeBundleOutput } from "./types/DescribeBundleOutput";
import { DescribeProjectInput } from "./types/DescribeProjectInput";
import { DescribeProjectOutput } from "./types/DescribeProjectOutput";
import { ExportBundleInput } from "./types/ExportBundleInput";
import { ExportBundleOutput } from "./types/ExportBundleOutput";
import { ExportProjectInput } from "./types/ExportProjectInput";
import { ExportProjectOutput } from "./types/ExportProjectOutput";
import { InternalFailureException } from "./types/InternalFailureException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListBundlesInput } from "./types/ListBundlesInput";
import { ListBundlesOutput } from "./types/ListBundlesOutput";
import { ListProjectsInput } from "./types/ListProjectsInput";
import { ListProjectsOutput } from "./types/ListProjectsOutput";
import { NotFoundException } from "./types/NotFoundException";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UnauthorizedException } from "./types/UnauthorizedException";
import { UpdateProjectInput } from "./types/UpdateProjectInput";
import { UpdateProjectOutput } from "./types/UpdateProjectOutput";
import { CreateProjectCommand } from "./commands/CreateProjectCommand";
import { DeleteProjectCommand } from "./commands/DeleteProjectCommand";
import { DescribeBundleCommand } from "./commands/DescribeBundleCommand";
import { DescribeProjectCommand } from "./commands/DescribeProjectCommand";
import { ExportBundleCommand } from "./commands/ExportBundleCommand";
import { ExportProjectCommand } from "./commands/ExportProjectCommand";
import { ListBundlesCommand } from "./commands/ListBundlesCommand";
import { ListProjectsCommand } from "./commands/ListProjectsCommand";
import { UpdateProjectCommand } from "./commands/UpdateProjectCommand";

export class Mobile extends MobileClient {
  /**
   * <p> Creates an AWS Mobile Hub project. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p> The service has encountered an unexpected error condition which prevents it from servicing the request. </p>
   *   - {ServiceUnavailableException} <p> The service is temporarily unavailable. The request should be retried after some time delay. </p>
   *   - {UnauthorizedException} <p> Credentials of the caller are insufficient to authorize the request. </p>
   *   - {TooManyRequestsException} <p> Too many requests have been received for this AWS account in too short a time. The request should be retried after some time delay. </p>
   *   - {BadRequestException} <p> The request cannot be processed because some parameter is not valid or the project state prevents the operation from being performed. </p>
   *   - {NotFoundException} <p> No entity can be found with the specified identifier. </p>
   *   - {LimitExceededException} <p> There are too many AWS Mobile Hub projects in the account or the account has exceeded the maximum number of resources in some AWS service. You should create another sub-account using AWS Organizations or remove some resources and retry your request. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createProject(args: CreateProjectInput): Promise<CreateProjectOutput>;
  public createProject(
    args: CreateProjectInput,
    cb: (err: any, data?: CreateProjectOutput) => void
  ): void;
  public createProject(
    args: CreateProjectInput,
    cb?: (err: any, data?: CreateProjectOutput) => void
  ): Promise<CreateProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Delets a project in AWS Mobile Hub. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p> The service has encountered an unexpected error condition which prevents it from servicing the request. </p>
   *   - {ServiceUnavailableException} <p> The service is temporarily unavailable. The request should be retried after some time delay. </p>
   *   - {UnauthorizedException} <p> Credentials of the caller are insufficient to authorize the request. </p>
   *   - {TooManyRequestsException} <p> Too many requests have been received for this AWS account in too short a time. The request should be retried after some time delay. </p>
   *   - {NotFoundException} <p> No entity can be found with the specified identifier. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteProject(args: DeleteProjectInput): Promise<DeleteProjectOutput>;
  public deleteProject(
    args: DeleteProjectInput,
    cb: (err: any, data?: DeleteProjectOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectInput,
    cb?: (err: any, data?: DeleteProjectOutput) => void
  ): Promise<DeleteProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Get the bundle details for the requested bundle id. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p> The service has encountered an unexpected error condition which prevents it from servicing the request. </p>
   *   - {ServiceUnavailableException} <p> The service is temporarily unavailable. The request should be retried after some time delay. </p>
   *   - {UnauthorizedException} <p> Credentials of the caller are insufficient to authorize the request. </p>
   *   - {TooManyRequestsException} <p> Too many requests have been received for this AWS account in too short a time. The request should be retried after some time delay. </p>
   *   - {BadRequestException} <p> The request cannot be processed because some parameter is not valid or the project state prevents the operation from being performed. </p>
   *   - {NotFoundException} <p> No entity can be found with the specified identifier. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeBundle(
    args: DescribeBundleInput
  ): Promise<DescribeBundleOutput>;
  public describeBundle(
    args: DescribeBundleInput,
    cb: (err: any, data?: DescribeBundleOutput) => void
  ): void;
  public describeBundle(
    args: DescribeBundleInput,
    cb?: (err: any, data?: DescribeBundleOutput) => void
  ): Promise<DescribeBundleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeBundleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Gets details about a project in AWS Mobile Hub. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p> The service has encountered an unexpected error condition which prevents it from servicing the request. </p>
   *   - {ServiceUnavailableException} <p> The service is temporarily unavailable. The request should be retried after some time delay. </p>
   *   - {UnauthorizedException} <p> Credentials of the caller are insufficient to authorize the request. </p>
   *   - {TooManyRequestsException} <p> Too many requests have been received for this AWS account in too short a time. The request should be retried after some time delay. </p>
   *   - {BadRequestException} <p> The request cannot be processed because some parameter is not valid or the project state prevents the operation from being performed. </p>
   *   - {NotFoundException} <p> No entity can be found with the specified identifier. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeProject(
    args: DescribeProjectInput
  ): Promise<DescribeProjectOutput>;
  public describeProject(
    args: DescribeProjectInput,
    cb: (err: any, data?: DescribeProjectOutput) => void
  ): void;
  public describeProject(
    args: DescribeProjectInput,
    cb?: (err: any, data?: DescribeProjectOutput) => void
  ): Promise<DescribeProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Generates customized software development kit (SDK) and or tool packages used to integrate mobile web or mobile app clients with backend AWS resources. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p> The service has encountered an unexpected error condition which prevents it from servicing the request. </p>
   *   - {ServiceUnavailableException} <p> The service is temporarily unavailable. The request should be retried after some time delay. </p>
   *   - {UnauthorizedException} <p> Credentials of the caller are insufficient to authorize the request. </p>
   *   - {TooManyRequestsException} <p> Too many requests have been received for this AWS account in too short a time. The request should be retried after some time delay. </p>
   *   - {BadRequestException} <p> The request cannot be processed because some parameter is not valid or the project state prevents the operation from being performed. </p>
   *   - {NotFoundException} <p> No entity can be found with the specified identifier. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public exportBundle(args: ExportBundleInput): Promise<ExportBundleOutput>;
  public exportBundle(
    args: ExportBundleInput,
    cb: (err: any, data?: ExportBundleOutput) => void
  ): void;
  public exportBundle(
    args: ExportBundleInput,
    cb?: (err: any, data?: ExportBundleOutput) => void
  ): Promise<ExportBundleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ExportBundleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Exports project configuration to a snapshot which can be downloaded and shared. Note that mobile app push credentials are encrypted in exported projects, so they can only be shared successfully within the same AWS account. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p> The service has encountered an unexpected error condition which prevents it from servicing the request. </p>
   *   - {ServiceUnavailableException} <p> The service is temporarily unavailable. The request should be retried after some time delay. </p>
   *   - {UnauthorizedException} <p> Credentials of the caller are insufficient to authorize the request. </p>
   *   - {TooManyRequestsException} <p> Too many requests have been received for this AWS account in too short a time. The request should be retried after some time delay. </p>
   *   - {BadRequestException} <p> The request cannot be processed because some parameter is not valid or the project state prevents the operation from being performed. </p>
   *   - {NotFoundException} <p> No entity can be found with the specified identifier. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public exportProject(args: ExportProjectInput): Promise<ExportProjectOutput>;
  public exportProject(
    args: ExportProjectInput,
    cb: (err: any, data?: ExportProjectOutput) => void
  ): void;
  public exportProject(
    args: ExportProjectInput,
    cb?: (err: any, data?: ExportProjectOutput) => void
  ): Promise<ExportProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ExportProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> List all available bundles. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p> The service has encountered an unexpected error condition which prevents it from servicing the request. </p>
   *   - {ServiceUnavailableException} <p> The service is temporarily unavailable. The request should be retried after some time delay. </p>
   *   - {UnauthorizedException} <p> Credentials of the caller are insufficient to authorize the request. </p>
   *   - {TooManyRequestsException} <p> Too many requests have been received for this AWS account in too short a time. The request should be retried after some time delay. </p>
   *   - {BadRequestException} <p> The request cannot be processed because some parameter is not valid or the project state prevents the operation from being performed. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBundles(args: ListBundlesInput): Promise<ListBundlesOutput>;
  public listBundles(
    args: ListBundlesInput,
    cb: (err: any, data?: ListBundlesOutput) => void
  ): void;
  public listBundles(
    args: ListBundlesInput,
    cb?: (err: any, data?: ListBundlesOutput) => void
  ): Promise<ListBundlesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBundlesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Lists projects in AWS Mobile Hub. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p> The service has encountered an unexpected error condition which prevents it from servicing the request. </p>
   *   - {ServiceUnavailableException} <p> The service is temporarily unavailable. The request should be retried after some time delay. </p>
   *   - {UnauthorizedException} <p> Credentials of the caller are insufficient to authorize the request. </p>
   *   - {TooManyRequestsException} <p> Too many requests have been received for this AWS account in too short a time. The request should be retried after some time delay. </p>
   *   - {BadRequestException} <p> The request cannot be processed because some parameter is not valid or the project state prevents the operation from being performed. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listProjects(args: ListProjectsInput): Promise<ListProjectsOutput>;
  public listProjects(
    args: ListProjectsInput,
    cb: (err: any, data?: ListProjectsOutput) => void
  ): void;
  public listProjects(
    args: ListProjectsInput,
    cb?: (err: any, data?: ListProjectsOutput) => void
  ): Promise<ListProjectsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListProjectsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Update an existing project. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p> The service has encountered an unexpected error condition which prevents it from servicing the request. </p>
   *   - {ServiceUnavailableException} <p> The service is temporarily unavailable. The request should be retried after some time delay. </p>
   *   - {UnauthorizedException} <p> Credentials of the caller are insufficient to authorize the request. </p>
   *   - {TooManyRequestsException} <p> Too many requests have been received for this AWS account in too short a time. The request should be retried after some time delay. </p>
   *   - {BadRequestException} <p> The request cannot be processed because some parameter is not valid or the project state prevents the operation from being performed. </p>
   *   - {NotFoundException} <p> No entity can be found with the specified identifier. </p>
   *   - {AccountActionRequiredException} <p> Account Action is required in order to continue the request. </p>
   *   - {LimitExceededException} <p> There are too many AWS Mobile Hub projects in the account or the account has exceeded the maximum number of resources in some AWS service. You should create another sub-account using AWS Organizations or remove some resources and retry your request. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateProject(args: UpdateProjectInput): Promise<UpdateProjectOutput>;
  public updateProject(
    args: UpdateProjectInput,
    cb: (err: any, data?: UpdateProjectOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectInput,
    cb?: (err: any, data?: UpdateProjectOutput) => void
  ): Promise<UpdateProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
