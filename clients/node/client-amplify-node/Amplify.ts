import { AmplifyClient } from "./AmplifyClient";
import { BadRequestException } from "./types/BadRequestException";
import { CreateAppInput } from "./types/CreateAppInput";
import { CreateAppOutput } from "./types/CreateAppOutput";
import { CreateBranchInput } from "./types/CreateBranchInput";
import { CreateBranchOutput } from "./types/CreateBranchOutput";
import { CreateDeploymentInput } from "./types/CreateDeploymentInput";
import { CreateDeploymentOutput } from "./types/CreateDeploymentOutput";
import { CreateDomainAssociationInput } from "./types/CreateDomainAssociationInput";
import { CreateDomainAssociationOutput } from "./types/CreateDomainAssociationOutput";
import { CreateWebhookInput } from "./types/CreateWebhookInput";
import { CreateWebhookOutput } from "./types/CreateWebhookOutput";
import { DeleteAppInput } from "./types/DeleteAppInput";
import { DeleteAppOutput } from "./types/DeleteAppOutput";
import { DeleteBranchInput } from "./types/DeleteBranchInput";
import { DeleteBranchOutput } from "./types/DeleteBranchOutput";
import { DeleteDomainAssociationInput } from "./types/DeleteDomainAssociationInput";
import { DeleteDomainAssociationOutput } from "./types/DeleteDomainAssociationOutput";
import { DeleteJobInput } from "./types/DeleteJobInput";
import { DeleteJobOutput } from "./types/DeleteJobOutput";
import { DeleteWebhookInput } from "./types/DeleteWebhookInput";
import { DeleteWebhookOutput } from "./types/DeleteWebhookOutput";
import { DependentServiceFailureException } from "./types/DependentServiceFailureException";
import { GetAppInput } from "./types/GetAppInput";
import { GetAppOutput } from "./types/GetAppOutput";
import { GetBranchInput } from "./types/GetBranchInput";
import { GetBranchOutput } from "./types/GetBranchOutput";
import { GetDomainAssociationInput } from "./types/GetDomainAssociationInput";
import { GetDomainAssociationOutput } from "./types/GetDomainAssociationOutput";
import { GetJobInput } from "./types/GetJobInput";
import { GetJobOutput } from "./types/GetJobOutput";
import { GetWebhookInput } from "./types/GetWebhookInput";
import { GetWebhookOutput } from "./types/GetWebhookOutput";
import { InternalFailureException } from "./types/InternalFailureException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListAppsInput } from "./types/ListAppsInput";
import { ListAppsOutput } from "./types/ListAppsOutput";
import { ListBranchesInput } from "./types/ListBranchesInput";
import { ListBranchesOutput } from "./types/ListBranchesOutput";
import { ListDomainAssociationsInput } from "./types/ListDomainAssociationsInput";
import { ListDomainAssociationsOutput } from "./types/ListDomainAssociationsOutput";
import { ListJobsInput } from "./types/ListJobsInput";
import { ListJobsOutput } from "./types/ListJobsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ListWebhooksInput } from "./types/ListWebhooksInput";
import { ListWebhooksOutput } from "./types/ListWebhooksOutput";
import { NotFoundException } from "./types/NotFoundException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { StartDeploymentInput } from "./types/StartDeploymentInput";
import { StartDeploymentOutput } from "./types/StartDeploymentOutput";
import { StartJobInput } from "./types/StartJobInput";
import { StartJobOutput } from "./types/StartJobOutput";
import { StopJobInput } from "./types/StopJobInput";
import { StopJobOutput } from "./types/StopJobOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UnauthorizedException } from "./types/UnauthorizedException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateAppInput } from "./types/UpdateAppInput";
import { UpdateAppOutput } from "./types/UpdateAppOutput";
import { UpdateBranchInput } from "./types/UpdateBranchInput";
import { UpdateBranchOutput } from "./types/UpdateBranchOutput";
import { UpdateDomainAssociationInput } from "./types/UpdateDomainAssociationInput";
import { UpdateDomainAssociationOutput } from "./types/UpdateDomainAssociationOutput";
import { UpdateWebhookInput } from "./types/UpdateWebhookInput";
import { UpdateWebhookOutput } from "./types/UpdateWebhookOutput";
import { CreateAppCommand } from "./commands/CreateAppCommand";
import { CreateBranchCommand } from "./commands/CreateBranchCommand";
import { CreateDeploymentCommand } from "./commands/CreateDeploymentCommand";
import { CreateDomainAssociationCommand } from "./commands/CreateDomainAssociationCommand";
import { CreateWebhookCommand } from "./commands/CreateWebhookCommand";
import { DeleteAppCommand } from "./commands/DeleteAppCommand";
import { DeleteBranchCommand } from "./commands/DeleteBranchCommand";
import { DeleteDomainAssociationCommand } from "./commands/DeleteDomainAssociationCommand";
import { DeleteJobCommand } from "./commands/DeleteJobCommand";
import { DeleteWebhookCommand } from "./commands/DeleteWebhookCommand";
import { GetAppCommand } from "./commands/GetAppCommand";
import { GetBranchCommand } from "./commands/GetBranchCommand";
import { GetDomainAssociationCommand } from "./commands/GetDomainAssociationCommand";
import { GetJobCommand } from "./commands/GetJobCommand";
import { GetWebhookCommand } from "./commands/GetWebhookCommand";
import { ListAppsCommand } from "./commands/ListAppsCommand";
import { ListBranchesCommand } from "./commands/ListBranchesCommand";
import { ListDomainAssociationsCommand } from "./commands/ListDomainAssociationsCommand";
import { ListJobsCommand } from "./commands/ListJobsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListWebhooksCommand } from "./commands/ListWebhooksCommand";
import { StartDeploymentCommand } from "./commands/StartDeploymentCommand";
import { StartJobCommand } from "./commands/StartJobCommand";
import { StopJobCommand } from "./commands/StopJobCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateAppCommand } from "./commands/UpdateAppCommand";
import { UpdateBranchCommand } from "./commands/UpdateBranchCommand";
import { UpdateDomainAssociationCommand } from "./commands/UpdateDomainAssociationCommand";
import { UpdateWebhookCommand } from "./commands/UpdateWebhookCommand";

export class Amplify extends AmplifyClient {
  /**
   * <p> Creates a new Amplify App. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {LimitExceededException} <p> Exception thrown when a resource could not be created because of service limits. </p>
   *   - {DependentServiceFailureException} <p> Exception thrown when an operation fails due to a dependent service throwing an exception. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createApp(args: CreateAppInput): Promise<CreateAppOutput>;
  public createApp(
    args: CreateAppInput,
    cb: (err: any, data?: CreateAppOutput) => void
  ): void;
  public createApp(
    args: CreateAppInput,
    cb?: (err: any, data?: CreateAppOutput) => void
  ): Promise<CreateAppOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAppCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Creates a new Branch for an Amplify App. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {NotFoundException} <p> Exception thrown when an entity has not been found during an operation. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {LimitExceededException} <p> Exception thrown when a resource could not be created because of service limits. </p>
   *   - {DependentServiceFailureException} <p> Exception thrown when an operation fails due to a dependent service throwing an exception. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createBranch(args: CreateBranchInput): Promise<CreateBranchOutput>;
  public createBranch(
    args: CreateBranchInput,
    cb: (err: any, data?: CreateBranchOutput) => void
  ): void;
  public createBranch(
    args: CreateBranchInput,
    cb?: (err: any, data?: CreateBranchOutput) => void
  ): Promise<CreateBranchOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateBranchCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Create a deployment for manual deploy apps. (Apps are not connected to repository) </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {LimitExceededException} <p> Exception thrown when a resource could not be created because of service limits. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDeployment(
    args: CreateDeploymentInput
  ): Promise<CreateDeploymentOutput>;
  public createDeployment(
    args: CreateDeploymentInput,
    cb: (err: any, data?: CreateDeploymentOutput) => void
  ): void;
  public createDeployment(
    args: CreateDeploymentInput,
    cb?: (err: any, data?: CreateDeploymentOutput) => void
  ): Promise<CreateDeploymentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDeploymentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Create a new DomainAssociation on an App </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {NotFoundException} <p> Exception thrown when an entity has not been found during an operation. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {LimitExceededException} <p> Exception thrown when a resource could not be created because of service limits. </p>
   *   - {DependentServiceFailureException} <p> Exception thrown when an operation fails due to a dependent service throwing an exception. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDomainAssociation(
    args: CreateDomainAssociationInput
  ): Promise<CreateDomainAssociationOutput>;
  public createDomainAssociation(
    args: CreateDomainAssociationInput,
    cb: (err: any, data?: CreateDomainAssociationOutput) => void
  ): void;
  public createDomainAssociation(
    args: CreateDomainAssociationInput,
    cb?: (err: any, data?: CreateDomainAssociationOutput) => void
  ): Promise<CreateDomainAssociationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDomainAssociationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Create a new webhook on an App. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {NotFoundException} <p> Exception thrown when an entity has not been found during an operation. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {LimitExceededException} <p> Exception thrown when a resource could not be created because of service limits. </p>
   *   - {DependentServiceFailureException} <p> Exception thrown when an operation fails due to a dependent service throwing an exception. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createWebhook(args: CreateWebhookInput): Promise<CreateWebhookOutput>;
  public createWebhook(
    args: CreateWebhookInput,
    cb: (err: any, data?: CreateWebhookOutput) => void
  ): void;
  public createWebhook(
    args: CreateWebhookInput,
    cb?: (err: any, data?: CreateWebhookOutput) => void
  ): Promise<CreateWebhookOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateWebhookCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Delete an existing Amplify App by appId. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {NotFoundException} <p> Exception thrown when an entity has not been found during an operation. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {DependentServiceFailureException} <p> Exception thrown when an operation fails due to a dependent service throwing an exception. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApp(args: DeleteAppInput): Promise<DeleteAppOutput>;
  public deleteApp(
    args: DeleteAppInput,
    cb: (err: any, data?: DeleteAppOutput) => void
  ): void;
  public deleteApp(
    args: DeleteAppInput,
    cb?: (err: any, data?: DeleteAppOutput) => void
  ): Promise<DeleteAppOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAppCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Deletes a branch for an Amplify App. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {NotFoundException} <p> Exception thrown when an entity has not been found during an operation. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {DependentServiceFailureException} <p> Exception thrown when an operation fails due to a dependent service throwing an exception. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBranch(args: DeleteBranchInput): Promise<DeleteBranchOutput>;
  public deleteBranch(
    args: DeleteBranchInput,
    cb: (err: any, data?: DeleteBranchOutput) => void
  ): void;
  public deleteBranch(
    args: DeleteBranchInput,
    cb?: (err: any, data?: DeleteBranchOutput) => void
  ): Promise<DeleteBranchOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBranchCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Deletes a DomainAssociation. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {NotFoundException} <p> Exception thrown when an entity has not been found during an operation. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {DependentServiceFailureException} <p> Exception thrown when an operation fails due to a dependent service throwing an exception. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDomainAssociation(
    args: DeleteDomainAssociationInput
  ): Promise<DeleteDomainAssociationOutput>;
  public deleteDomainAssociation(
    args: DeleteDomainAssociationInput,
    cb: (err: any, data?: DeleteDomainAssociationOutput) => void
  ): void;
  public deleteDomainAssociation(
    args: DeleteDomainAssociationInput,
    cb?: (err: any, data?: DeleteDomainAssociationOutput) => void
  ): Promise<DeleteDomainAssociationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDomainAssociationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Delete a job, for an Amplify branch, part of Amplify App. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {NotFoundException} <p> Exception thrown when an entity has not been found during an operation. </p>
   *   - {LimitExceededException} <p> Exception thrown when a resource could not be created because of service limits. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteJob(args: DeleteJobInput): Promise<DeleteJobOutput>;
  public deleteJob(
    args: DeleteJobInput,
    cb: (err: any, data?: DeleteJobOutput) => void
  ): void;
  public deleteJob(
    args: DeleteJobInput,
    cb?: (err: any, data?: DeleteJobOutput) => void
  ): Promise<DeleteJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Deletes a webhook. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {NotFoundException} <p> Exception thrown when an entity has not been found during an operation. </p>
   *   - {LimitExceededException} <p> Exception thrown when a resource could not be created because of service limits. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteWebhook(args: DeleteWebhookInput): Promise<DeleteWebhookOutput>;
  public deleteWebhook(
    args: DeleteWebhookInput,
    cb: (err: any, data?: DeleteWebhookOutput) => void
  ): void;
  public deleteWebhook(
    args: DeleteWebhookInput,
    cb?: (err: any, data?: DeleteWebhookOutput) => void
  ): Promise<DeleteWebhookOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteWebhookCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Retrieves an existing Amplify App by appId. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {NotFoundException} <p> Exception thrown when an entity has not been found during an operation. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getApp(args: GetAppInput): Promise<GetAppOutput>;
  public getApp(
    args: GetAppInput,
    cb: (err: any, data?: GetAppOutput) => void
  ): void;
  public getApp(
    args: GetAppInput,
    cb?: (err: any, data?: GetAppOutput) => void
  ): Promise<GetAppOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAppCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Retrieves a branch for an Amplify App. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {NotFoundException} <p> Exception thrown when an entity has not been found during an operation. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBranch(args: GetBranchInput): Promise<GetBranchOutput>;
  public getBranch(
    args: GetBranchInput,
    cb: (err: any, data?: GetBranchOutput) => void
  ): void;
  public getBranch(
    args: GetBranchInput,
    cb?: (err: any, data?: GetBranchOutput) => void
  ): Promise<GetBranchOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBranchCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Retrieves domain info that corresponds to an appId and domainName. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {NotFoundException} <p> Exception thrown when an entity has not been found during an operation. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDomainAssociation(
    args: GetDomainAssociationInput
  ): Promise<GetDomainAssociationOutput>;
  public getDomainAssociation(
    args: GetDomainAssociationInput,
    cb: (err: any, data?: GetDomainAssociationOutput) => void
  ): void;
  public getDomainAssociation(
    args: GetDomainAssociationInput,
    cb?: (err: any, data?: GetDomainAssociationOutput) => void
  ): Promise<GetDomainAssociationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDomainAssociationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Get a job for a branch, part of an Amplify App. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {NotFoundException} <p> Exception thrown when an entity has not been found during an operation. </p>
   *   - {LimitExceededException} <p> Exception thrown when a resource could not be created because of service limits. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getJob(args: GetJobInput): Promise<GetJobOutput>;
  public getJob(
    args: GetJobInput,
    cb: (err: any, data?: GetJobOutput) => void
  ): void;
  public getJob(
    args: GetJobInput,
    cb?: (err: any, data?: GetJobOutput) => void
  ): Promise<GetJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Retrieves webhook info that corresponds to a webhookId. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {NotFoundException} <p> Exception thrown when an entity has not been found during an operation. </p>
   *   - {LimitExceededException} <p> Exception thrown when a resource could not be created because of service limits. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getWebhook(args: GetWebhookInput): Promise<GetWebhookOutput>;
  public getWebhook(
    args: GetWebhookInput,
    cb: (err: any, data?: GetWebhookOutput) => void
  ): void;
  public getWebhook(
    args: GetWebhookInput,
    cb?: (err: any, data?: GetWebhookOutput) => void
  ): Promise<GetWebhookOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetWebhookCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Lists existing Amplify Apps. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listApps(args: ListAppsInput): Promise<ListAppsOutput>;
  public listApps(
    args: ListAppsInput,
    cb: (err: any, data?: ListAppsOutput) => void
  ): void;
  public listApps(
    args: ListAppsInput,
    cb?: (err: any, data?: ListAppsOutput) => void
  ): Promise<ListAppsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAppsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Lists branches for an Amplify App. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBranches(args: ListBranchesInput): Promise<ListBranchesOutput>;
  public listBranches(
    args: ListBranchesInput,
    cb: (err: any, data?: ListBranchesOutput) => void
  ): void;
  public listBranches(
    args: ListBranchesInput,
    cb?: (err: any, data?: ListBranchesOutput) => void
  ): Promise<ListBranchesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBranchesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> List domains with an app </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDomainAssociations(
    args: ListDomainAssociationsInput
  ): Promise<ListDomainAssociationsOutput>;
  public listDomainAssociations(
    args: ListDomainAssociationsInput,
    cb: (err: any, data?: ListDomainAssociationsOutput) => void
  ): void;
  public listDomainAssociations(
    args: ListDomainAssociationsInput,
    cb?: (err: any, data?: ListDomainAssociationsOutput) => void
  ): Promise<ListDomainAssociationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDomainAssociationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> List Jobs for a branch, part of an Amplify App. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {LimitExceededException} <p> Exception thrown when a resource could not be created because of service limits. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listJobs(args: ListJobsInput): Promise<ListJobsOutput>;
  public listJobs(
    args: ListJobsInput,
    cb: (err: any, data?: ListJobsOutput) => void
  ): void;
  public listJobs(
    args: ListJobsInput,
    cb?: (err: any, data?: ListJobsOutput) => void
  ): Promise<ListJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> List tags for resource. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {ResourceNotFoundException} <p> Exception thrown when an operation fails due to non-existent resource. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> List webhooks with an app. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {LimitExceededException} <p> Exception thrown when a resource could not be created because of service limits. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listWebhooks(args: ListWebhooksInput): Promise<ListWebhooksOutput>;
  public listWebhooks(
    args: ListWebhooksInput,
    cb: (err: any, data?: ListWebhooksOutput) => void
  ): void;
  public listWebhooks(
    args: ListWebhooksInput,
    cb?: (err: any, data?: ListWebhooksOutput) => void
  ): Promise<ListWebhooksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListWebhooksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Start a deployment for manual deploy apps. (Apps are not connected to repository) </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {NotFoundException} <p> Exception thrown when an entity has not been found during an operation. </p>
   *   - {LimitExceededException} <p> Exception thrown when a resource could not be created because of service limits. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startDeployment(
    args: StartDeploymentInput
  ): Promise<StartDeploymentOutput>;
  public startDeployment(
    args: StartDeploymentInput,
    cb: (err: any, data?: StartDeploymentOutput) => void
  ): void;
  public startDeployment(
    args: StartDeploymentInput,
    cb?: (err: any, data?: StartDeploymentOutput) => void
  ): Promise<StartDeploymentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartDeploymentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Starts a new job for a branch, part of an Amplify App. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {NotFoundException} <p> Exception thrown when an entity has not been found during an operation. </p>
   *   - {LimitExceededException} <p> Exception thrown when a resource could not be created because of service limits. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startJob(args: StartJobInput): Promise<StartJobOutput>;
  public startJob(
    args: StartJobInput,
    cb: (err: any, data?: StartJobOutput) => void
  ): void;
  public startJob(
    args: StartJobInput,
    cb?: (err: any, data?: StartJobOutput) => void
  ): Promise<StartJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Stop a job that is in progress, for an Amplify branch, part of Amplify App. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {NotFoundException} <p> Exception thrown when an entity has not been found during an operation. </p>
   *   - {LimitExceededException} <p> Exception thrown when a resource could not be created because of service limits. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopJob(args: StopJobInput): Promise<StopJobOutput>;
  public stopJob(
    args: StopJobInput,
    cb: (err: any, data?: StopJobOutput) => void
  ): void;
  public stopJob(
    args: StopJobInput,
    cb?: (err: any, data?: StopJobOutput) => void
  ): Promise<StopJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Tag resource with tag key and value. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {ResourceNotFoundException} <p> Exception thrown when an operation fails due to non-existent resource. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Untag resource with resourceArn. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {ResourceNotFoundException} <p> Exception thrown when an operation fails due to non-existent resource. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Updates an existing Amplify App. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {NotFoundException} <p> Exception thrown when an entity has not been found during an operation. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateApp(args: UpdateAppInput): Promise<UpdateAppOutput>;
  public updateApp(
    args: UpdateAppInput,
    cb: (err: any, data?: UpdateAppOutput) => void
  ): void;
  public updateApp(
    args: UpdateAppInput,
    cb?: (err: any, data?: UpdateAppOutput) => void
  ): Promise<UpdateAppOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAppCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Updates a branch for an Amplify App. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {NotFoundException} <p> Exception thrown when an entity has not been found during an operation. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {DependentServiceFailureException} <p> Exception thrown when an operation fails due to a dependent service throwing an exception. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateBranch(args: UpdateBranchInput): Promise<UpdateBranchOutput>;
  public updateBranch(
    args: UpdateBranchInput,
    cb: (err: any, data?: UpdateBranchOutput) => void
  ): void;
  public updateBranch(
    args: UpdateBranchInput,
    cb?: (err: any, data?: UpdateBranchOutput) => void
  ): Promise<UpdateBranchOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateBranchCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Create a new DomainAssociation on an App </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {NotFoundException} <p> Exception thrown when an entity has not been found during an operation. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {DependentServiceFailureException} <p> Exception thrown when an operation fails due to a dependent service throwing an exception. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDomainAssociation(
    args: UpdateDomainAssociationInput
  ): Promise<UpdateDomainAssociationOutput>;
  public updateDomainAssociation(
    args: UpdateDomainAssociationInput,
    cb: (err: any, data?: UpdateDomainAssociationOutput) => void
  ): void;
  public updateDomainAssociation(
    args: UpdateDomainAssociationInput,
    cb?: (err: any, data?: UpdateDomainAssociationOutput) => void
  ): Promise<UpdateDomainAssociationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDomainAssociationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Update a webhook. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p> Exception thrown when a request contains unexpected data. </p>
   *   - {UnauthorizedException} <p> Exception thrown when an operation fails due to a lack of access. </p>
   *   - {NotFoundException} <p> Exception thrown when an entity has not been found during an operation. </p>
   *   - {InternalFailureException} <p> Exception thrown when the service fails to perform an operation due to an internal issue. </p>
   *   - {DependentServiceFailureException} <p> Exception thrown when an operation fails due to a dependent service throwing an exception. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateWebhook(args: UpdateWebhookInput): Promise<UpdateWebhookOutput>;
  public updateWebhook(
    args: UpdateWebhookInput,
    cb: (err: any, data?: UpdateWebhookOutput) => void
  ): void;
  public updateWebhook(
    args: UpdateWebhookInput,
    cb?: (err: any, data?: UpdateWebhookOutput) => void
  ): Promise<UpdateWebhookOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateWebhookCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
