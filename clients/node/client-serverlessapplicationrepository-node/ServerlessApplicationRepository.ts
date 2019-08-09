import { ServerlessApplicationRepositoryClient } from "./ServerlessApplicationRepositoryClient";
import { BadRequestException } from "./types/BadRequestException";
import { ConflictException } from "./types/ConflictException";
import { CreateApplicationInput } from "./types/CreateApplicationInput";
import { CreateApplicationOutput } from "./types/CreateApplicationOutput";
import { CreateApplicationVersionInput } from "./types/CreateApplicationVersionInput";
import { CreateApplicationVersionOutput } from "./types/CreateApplicationVersionOutput";
import { CreateCloudFormationChangeSetInput } from "./types/CreateCloudFormationChangeSetInput";
import { CreateCloudFormationChangeSetOutput } from "./types/CreateCloudFormationChangeSetOutput";
import { CreateCloudFormationTemplateInput } from "./types/CreateCloudFormationTemplateInput";
import { CreateCloudFormationTemplateOutput } from "./types/CreateCloudFormationTemplateOutput";
import { DeleteApplicationInput } from "./types/DeleteApplicationInput";
import { DeleteApplicationOutput } from "./types/DeleteApplicationOutput";
import { ForbiddenException } from "./types/ForbiddenException";
import { GetApplicationInput } from "./types/GetApplicationInput";
import { GetApplicationOutput } from "./types/GetApplicationOutput";
import { GetApplicationPolicyInput } from "./types/GetApplicationPolicyInput";
import { GetApplicationPolicyOutput } from "./types/GetApplicationPolicyOutput";
import { GetCloudFormationTemplateInput } from "./types/GetCloudFormationTemplateInput";
import { GetCloudFormationTemplateOutput } from "./types/GetCloudFormationTemplateOutput";
import { InternalServerErrorException } from "./types/InternalServerErrorException";
import { ListApplicationDependenciesInput } from "./types/ListApplicationDependenciesInput";
import { ListApplicationDependenciesOutput } from "./types/ListApplicationDependenciesOutput";
import { ListApplicationVersionsInput } from "./types/ListApplicationVersionsInput";
import { ListApplicationVersionsOutput } from "./types/ListApplicationVersionsOutput";
import { ListApplicationsInput } from "./types/ListApplicationsInput";
import { ListApplicationsOutput } from "./types/ListApplicationsOutput";
import { NotFoundException } from "./types/NotFoundException";
import { PutApplicationPolicyInput } from "./types/PutApplicationPolicyInput";
import { PutApplicationPolicyOutput } from "./types/PutApplicationPolicyOutput";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UpdateApplicationInput } from "./types/UpdateApplicationInput";
import { UpdateApplicationOutput } from "./types/UpdateApplicationOutput";
import { CreateApplicationCommand } from "./commands/CreateApplicationCommand";
import { CreateApplicationVersionCommand } from "./commands/CreateApplicationVersionCommand";
import { CreateCloudFormationChangeSetCommand } from "./commands/CreateCloudFormationChangeSetCommand";
import { CreateCloudFormationTemplateCommand } from "./commands/CreateCloudFormationTemplateCommand";
import { DeleteApplicationCommand } from "./commands/DeleteApplicationCommand";
import { GetApplicationCommand } from "./commands/GetApplicationCommand";
import { GetApplicationPolicyCommand } from "./commands/GetApplicationPolicyCommand";
import { GetCloudFormationTemplateCommand } from "./commands/GetCloudFormationTemplateCommand";
import { ListApplicationDependenciesCommand } from "./commands/ListApplicationDependenciesCommand";
import { ListApplicationVersionsCommand } from "./commands/ListApplicationVersionsCommand";
import { ListApplicationsCommand } from "./commands/ListApplicationsCommand";
import { PutApplicationPolicyCommand } from "./commands/PutApplicationPolicyCommand";
import { UpdateApplicationCommand } from "./commands/UpdateApplicationCommand";

export class ServerlessApplicationRepository extends ServerlessApplicationRepositoryClient {
  /**
   * <p>Creates an application, optionally including an AWS SAM file to create the first application version in the same call.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} <p>The client is sending more than the allowed number of requests per unit of time.</p>
   *   - {BadRequestException} <p>One of the parameters in the request is invalid.</p>
   *   - {InternalServerErrorException} <p>The AWS Serverless Application Repository service encountered an internal error.</p>
   *   - {ConflictException} <p>The resource already exists.</p>
   *   - {ForbiddenException} <p>The client is not authenticated.</p>
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
   * <p>Creates an application version.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} <p>The client is sending more than the allowed number of requests per unit of time.</p>
   *   - {BadRequestException} <p>One of the parameters in the request is invalid.</p>
   *   - {InternalServerErrorException} <p>The AWS Serverless Application Repository service encountered an internal error.</p>
   *   - {ConflictException} <p>The resource already exists.</p>
   *   - {ForbiddenException} <p>The client is not authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createApplicationVersion(
    args: CreateApplicationVersionInput
  ): Promise<CreateApplicationVersionOutput>;
  public createApplicationVersion(
    args: CreateApplicationVersionInput,
    cb: (err: any, data?: CreateApplicationVersionOutput) => void
  ): void;
  public createApplicationVersion(
    args: CreateApplicationVersionInput,
    cb?: (err: any, data?: CreateApplicationVersionOutput) => void
  ): Promise<CreateApplicationVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateApplicationVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an AWS CloudFormation change set for the given application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} <p>The client is sending more than the allowed number of requests per unit of time.</p>
   *   - {BadRequestException} <p>One of the parameters in the request is invalid.</p>
   *   - {InternalServerErrorException} <p>The AWS Serverless Application Repository service encountered an internal error.</p>
   *   - {ForbiddenException} <p>The client is not authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCloudFormationChangeSet(
    args: CreateCloudFormationChangeSetInput
  ): Promise<CreateCloudFormationChangeSetOutput>;
  public createCloudFormationChangeSet(
    args: CreateCloudFormationChangeSetInput,
    cb: (err: any, data?: CreateCloudFormationChangeSetOutput) => void
  ): void;
  public createCloudFormationChangeSet(
    args: CreateCloudFormationChangeSetInput,
    cb?: (err: any, data?: CreateCloudFormationChangeSetOutput) => void
  ): Promise<CreateCloudFormationChangeSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCloudFormationChangeSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an AWS CloudFormation template.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource (for example, an access policy statement) specified in the request doesn't exist.</p>
   *   - {TooManyRequestsException} <p>The client is sending more than the allowed number of requests per unit of time.</p>
   *   - {BadRequestException} <p>One of the parameters in the request is invalid.</p>
   *   - {InternalServerErrorException} <p>The AWS Serverless Application Repository service encountered an internal error.</p>
   *   - {ForbiddenException} <p>The client is not authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCloudFormationTemplate(
    args: CreateCloudFormationTemplateInput
  ): Promise<CreateCloudFormationTemplateOutput>;
  public createCloudFormationTemplate(
    args: CreateCloudFormationTemplateInput,
    cb: (err: any, data?: CreateCloudFormationTemplateOutput) => void
  ): void;
  public createCloudFormationTemplate(
    args: CreateCloudFormationTemplateInput,
    cb?: (err: any, data?: CreateCloudFormationTemplateOutput) => void
  ): Promise<CreateCloudFormationTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCloudFormationTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>One of the parameters in the request is invalid.</p>
   *   - {InternalServerErrorException} <p>The AWS Serverless Application Repository service encountered an internal error.</p>
   *   - {ForbiddenException} <p>The client is not authenticated.</p>
   *   - {NotFoundException} <p>The resource (for example, an access policy statement) specified in the request doesn't exist.</p>
   *   - {TooManyRequestsException} <p>The client is sending more than the allowed number of requests per unit of time.</p>
   *   - {ConflictException} <p>The resource already exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApplication(
    args: DeleteApplicationInput
  ): Promise<DeleteApplicationOutput>;
  public deleteApplication(
    args: DeleteApplicationInput,
    cb: (err: any, data?: DeleteApplicationOutput) => void
  ): void;
  public deleteApplication(
    args: DeleteApplicationInput,
    cb?: (err: any, data?: DeleteApplicationOutput) => void
  ): Promise<DeleteApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the specified application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource (for example, an access policy statement) specified in the request doesn't exist.</p>
   *   - {TooManyRequestsException} <p>The client is sending more than the allowed number of requests per unit of time.</p>
   *   - {BadRequestException} <p>One of the parameters in the request is invalid.</p>
   *   - {InternalServerErrorException} <p>The AWS Serverless Application Repository service encountered an internal error.</p>
   *   - {ForbiddenException} <p>The client is not authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getApplication(
    args: GetApplicationInput
  ): Promise<GetApplicationOutput>;
  public getApplication(
    args: GetApplicationInput,
    cb: (err: any, data?: GetApplicationOutput) => void
  ): void;
  public getApplication(
    args: GetApplicationInput,
    cb?: (err: any, data?: GetApplicationOutput) => void
  ): Promise<GetApplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetApplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the policy for the application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource (for example, an access policy statement) specified in the request doesn't exist.</p>
   *   - {TooManyRequestsException} <p>The client is sending more than the allowed number of requests per unit of time.</p>
   *   - {BadRequestException} <p>One of the parameters in the request is invalid.</p>
   *   - {InternalServerErrorException} <p>The AWS Serverless Application Repository service encountered an internal error.</p>
   *   - {ForbiddenException} <p>The client is not authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getApplicationPolicy(
    args: GetApplicationPolicyInput
  ): Promise<GetApplicationPolicyOutput>;
  public getApplicationPolicy(
    args: GetApplicationPolicyInput,
    cb: (err: any, data?: GetApplicationPolicyOutput) => void
  ): void;
  public getApplicationPolicy(
    args: GetApplicationPolicyInput,
    cb?: (err: any, data?: GetApplicationPolicyOutput) => void
  ): Promise<GetApplicationPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetApplicationPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the specified AWS CloudFormation template.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource (for example, an access policy statement) specified in the request doesn't exist.</p>
   *   - {TooManyRequestsException} <p>The client is sending more than the allowed number of requests per unit of time.</p>
   *   - {BadRequestException} <p>One of the parameters in the request is invalid.</p>
   *   - {InternalServerErrorException} <p>The AWS Serverless Application Repository service encountered an internal error.</p>
   *   - {ForbiddenException} <p>The client is not authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCloudFormationTemplate(
    args: GetCloudFormationTemplateInput
  ): Promise<GetCloudFormationTemplateOutput>;
  public getCloudFormationTemplate(
    args: GetCloudFormationTemplateInput,
    cb: (err: any, data?: GetCloudFormationTemplateOutput) => void
  ): void;
  public getCloudFormationTemplate(
    args: GetCloudFormationTemplateInput,
    cb?: (err: any, data?: GetCloudFormationTemplateOutput) => void
  ): Promise<GetCloudFormationTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCloudFormationTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the list of applications nested in the containing application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource (for example, an access policy statement) specified in the request doesn't exist.</p>
   *   - {TooManyRequestsException} <p>The client is sending more than the allowed number of requests per unit of time.</p>
   *   - {BadRequestException} <p>One of the parameters in the request is invalid.</p>
   *   - {InternalServerErrorException} <p>The AWS Serverless Application Repository service encountered an internal error.</p>
   *   - {ForbiddenException} <p>The client is not authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listApplicationDependencies(
    args: ListApplicationDependenciesInput
  ): Promise<ListApplicationDependenciesOutput>;
  public listApplicationDependencies(
    args: ListApplicationDependenciesInput,
    cb: (err: any, data?: ListApplicationDependenciesOutput) => void
  ): void;
  public listApplicationDependencies(
    args: ListApplicationDependenciesInput,
    cb?: (err: any, data?: ListApplicationDependenciesOutput) => void
  ): Promise<ListApplicationDependenciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListApplicationDependenciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists versions for the specified application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource (for example, an access policy statement) specified in the request doesn't exist.</p>
   *   - {TooManyRequestsException} <p>The client is sending more than the allowed number of requests per unit of time.</p>
   *   - {BadRequestException} <p>One of the parameters in the request is invalid.</p>
   *   - {InternalServerErrorException} <p>The AWS Serverless Application Repository service encountered an internal error.</p>
   *   - {ForbiddenException} <p>The client is not authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listApplicationVersions(
    args: ListApplicationVersionsInput
  ): Promise<ListApplicationVersionsOutput>;
  public listApplicationVersions(
    args: ListApplicationVersionsInput,
    cb: (err: any, data?: ListApplicationVersionsOutput) => void
  ): void;
  public listApplicationVersions(
    args: ListApplicationVersionsInput,
    cb?: (err: any, data?: ListApplicationVersionsOutput) => void
  ): Promise<ListApplicationVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListApplicationVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists applications owned by the requester.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource (for example, an access policy statement) specified in the request doesn't exist.</p>
   *   - {BadRequestException} <p>One of the parameters in the request is invalid.</p>
   *   - {InternalServerErrorException} <p>The AWS Serverless Application Repository service encountered an internal error.</p>
   *   - {ForbiddenException} <p>The client is not authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listApplications(
    args: ListApplicationsInput
  ): Promise<ListApplicationsOutput>;
  public listApplications(
    args: ListApplicationsInput,
    cb: (err: any, data?: ListApplicationsOutput) => void
  ): void;
  public listApplications(
    args: ListApplicationsInput,
    cb?: (err: any, data?: ListApplicationsOutput) => void
  ): Promise<ListApplicationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListApplicationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the permission policy for an application. For the list of actions supported for this operation, see
   <a href="https://docs.aws.amazon.com/serverlessrepo/latest/devguide/access-control-resource-based.html#application-permissions">Application
   Permissions</a>
   .</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource (for example, an access policy statement) specified in the request doesn't exist.</p>
   *   - {TooManyRequestsException} <p>The client is sending more than the allowed number of requests per unit of time.</p>
   *   - {BadRequestException} <p>One of the parameters in the request is invalid.</p>
   *   - {InternalServerErrorException} <p>The AWS Serverless Application Repository service encountered an internal error.</p>
   *   - {ForbiddenException} <p>The client is not authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putApplicationPolicy(
    args: PutApplicationPolicyInput
  ): Promise<PutApplicationPolicyOutput>;
  public putApplicationPolicy(
    args: PutApplicationPolicyInput,
    cb: (err: any, data?: PutApplicationPolicyOutput) => void
  ): void;
  public putApplicationPolicy(
    args: PutApplicationPolicyInput,
    cb?: (err: any, data?: PutApplicationPolicyOutput) => void
  ): Promise<PutApplicationPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutApplicationPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>One of the parameters in the request is invalid.</p>
   *   - {InternalServerErrorException} <p>The AWS Serverless Application Repository service encountered an internal error.</p>
   *   - {ForbiddenException} <p>The client is not authenticated.</p>
   *   - {NotFoundException} <p>The resource (for example, an access policy statement) specified in the request doesn't exist.</p>
   *   - {TooManyRequestsException} <p>The client is sending more than the allowed number of requests per unit of time.</p>
   *   - {ConflictException} <p>The resource already exists.</p>
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
