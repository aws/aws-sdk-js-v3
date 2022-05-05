// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import {
  CreateApplicationVersionCommand,
  CreateApplicationVersionCommandInput,
  CreateApplicationVersionCommandOutput,
} from "./commands/CreateApplicationVersionCommand";
import {
  CreateCloudFormationChangeSetCommand,
  CreateCloudFormationChangeSetCommandInput,
  CreateCloudFormationChangeSetCommandOutput,
} from "./commands/CreateCloudFormationChangeSetCommand";
import {
  CreateCloudFormationTemplateCommand,
  CreateCloudFormationTemplateCommandInput,
  CreateCloudFormationTemplateCommandOutput,
} from "./commands/CreateCloudFormationTemplateCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import {
  GetApplicationCommand,
  GetApplicationCommandInput,
  GetApplicationCommandOutput,
} from "./commands/GetApplicationCommand";
import {
  GetApplicationPolicyCommand,
  GetApplicationPolicyCommandInput,
  GetApplicationPolicyCommandOutput,
} from "./commands/GetApplicationPolicyCommand";
import {
  GetCloudFormationTemplateCommand,
  GetCloudFormationTemplateCommandInput,
  GetCloudFormationTemplateCommandOutput,
} from "./commands/GetCloudFormationTemplateCommand";
import {
  ListApplicationDependenciesCommand,
  ListApplicationDependenciesCommandInput,
  ListApplicationDependenciesCommandOutput,
} from "./commands/ListApplicationDependenciesCommand";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "./commands/ListApplicationsCommand";
import {
  ListApplicationVersionsCommand,
  ListApplicationVersionsCommandInput,
  ListApplicationVersionsCommandOutput,
} from "./commands/ListApplicationVersionsCommand";
import {
  PutApplicationPolicyCommand,
  PutApplicationPolicyCommandInput,
  PutApplicationPolicyCommandOutput,
} from "./commands/PutApplicationPolicyCommand";
import {
  UnshareApplicationCommand,
  UnshareApplicationCommandInput,
  UnshareApplicationCommandOutput,
} from "./commands/UnshareApplicationCommand";
import {
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import { ServerlessApplicationRepositoryClient } from "./ServerlessApplicationRepositoryClient";

/**
 * <p>The AWS Serverless Application Repository makes it easy for developers and enterprises to quickly find
 *  and deploy serverless applications in the AWS Cloud. For more information about serverless applications,
 *  see Serverless Computing and Applications on the AWS website.</p><p>The AWS Serverless Application Repository is deeply integrated with the AWS Lambda console, so that developers of
 *  all levels can get started with serverless computing without needing to learn anything new. You can use category
 *  keywords to browse for applications such as web and mobile backends, data processing applications, or chatbots.
 *  You can also search for applications by name, publisher, or event source. To use an application, you simply choose it,
 *  configure any required fields, and deploy it with a few clicks. </p><p>You can also easily publish applications, sharing them publicly with the community at large, or privately
 *  within your team or across your organization. To publish a serverless application (or app), you can use the
 *  AWS Management Console, AWS Command Line Interface (AWS CLI), or AWS SDKs to upload the code. Along with the
 *  code, you upload a simple manifest file, also known as the AWS Serverless Application Model (AWS SAM) template.
 *  For more information about AWS SAM, see AWS Serverless Application Model (AWS SAM) on the AWS Labs
 *  GitHub repository.</p><p>The AWS Serverless Application Repository Developer Guide contains more information about the two developer
 *  experiences available:</p><ul>
 *  <li>
 *  <p>Consuming Applications – Browse for applications and view information about them, including
 *  source code and readme files. Also install, configure, and deploy applications of your choosing. </p>
 *  <p>Publishing Applications – Configure and upload applications to make them available to other
 *  developers, and publish new versions of applications. </p>
 *  </li>
 *  </ul>
 */
export class ServerlessApplicationRepository extends ServerlessApplicationRepositoryClient {
  /**
   * <p>Creates an application, optionally including an AWS SAM file to create the first application version in the same call.</p>
   */
  public createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  public createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateApplicationCommandOutput) => void),
    cb?: (err: any, data?: CreateApplicationCommandOutput) => void
  ): Promise<CreateApplicationCommandOutput> | void {
    const command = new CreateApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an application version.</p>
   */
  public createApplicationVersion(
    args: CreateApplicationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationVersionCommandOutput>;
  public createApplicationVersion(
    args: CreateApplicationVersionCommandInput,
    cb: (err: any, data?: CreateApplicationVersionCommandOutput) => void
  ): void;
  public createApplicationVersion(
    args: CreateApplicationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationVersionCommandOutput) => void
  ): void;
  public createApplicationVersion(
    args: CreateApplicationVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateApplicationVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateApplicationVersionCommandOutput) => void
  ): Promise<CreateApplicationVersionCommandOutput> | void {
    const command = new CreateApplicationVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an AWS CloudFormation change set for the given application.</p>
   */
  public createCloudFormationChangeSet(
    args: CreateCloudFormationChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCloudFormationChangeSetCommandOutput>;
  public createCloudFormationChangeSet(
    args: CreateCloudFormationChangeSetCommandInput,
    cb: (err: any, data?: CreateCloudFormationChangeSetCommandOutput) => void
  ): void;
  public createCloudFormationChangeSet(
    args: CreateCloudFormationChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCloudFormationChangeSetCommandOutput) => void
  ): void;
  public createCloudFormationChangeSet(
    args: CreateCloudFormationChangeSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCloudFormationChangeSetCommandOutput) => void),
    cb?: (err: any, data?: CreateCloudFormationChangeSetCommandOutput) => void
  ): Promise<CreateCloudFormationChangeSetCommandOutput> | void {
    const command = new CreateCloudFormationChangeSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an AWS CloudFormation template.</p>
   */
  public createCloudFormationTemplate(
    args: CreateCloudFormationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCloudFormationTemplateCommandOutput>;
  public createCloudFormationTemplate(
    args: CreateCloudFormationTemplateCommandInput,
    cb: (err: any, data?: CreateCloudFormationTemplateCommandOutput) => void
  ): void;
  public createCloudFormationTemplate(
    args: CreateCloudFormationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCloudFormationTemplateCommandOutput) => void
  ): void;
  public createCloudFormationTemplate(
    args: CreateCloudFormationTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCloudFormationTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateCloudFormationTemplateCommandOutput) => void
  ): Promise<CreateCloudFormationTemplateCommandOutput> | void {
    const command = new CreateCloudFormationTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified application.</p>
   */
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteApplicationCommandOutput) => void),
    cb?: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): Promise<DeleteApplicationCommandOutput> | void {
    const command = new DeleteApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the specified application.</p>
   */
  public getApplication(
    args: GetApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationCommandOutput>;
  public getApplication(
    args: GetApplicationCommandInput,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;
  public getApplication(
    args: GetApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;
  public getApplication(
    args: GetApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetApplicationCommandOutput) => void),
    cb?: (err: any, data?: GetApplicationCommandOutput) => void
  ): Promise<GetApplicationCommandOutput> | void {
    const command = new GetApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the policy for the application.</p>
   */
  public getApplicationPolicy(
    args: GetApplicationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationPolicyCommandOutput>;
  public getApplicationPolicy(
    args: GetApplicationPolicyCommandInput,
    cb: (err: any, data?: GetApplicationPolicyCommandOutput) => void
  ): void;
  public getApplicationPolicy(
    args: GetApplicationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationPolicyCommandOutput) => void
  ): void;
  public getApplicationPolicy(
    args: GetApplicationPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetApplicationPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetApplicationPolicyCommandOutput) => void
  ): Promise<GetApplicationPolicyCommandOutput> | void {
    const command = new GetApplicationPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the specified AWS CloudFormation template.</p>
   */
  public getCloudFormationTemplate(
    args: GetCloudFormationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCloudFormationTemplateCommandOutput>;
  public getCloudFormationTemplate(
    args: GetCloudFormationTemplateCommandInput,
    cb: (err: any, data?: GetCloudFormationTemplateCommandOutput) => void
  ): void;
  public getCloudFormationTemplate(
    args: GetCloudFormationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCloudFormationTemplateCommandOutput) => void
  ): void;
  public getCloudFormationTemplate(
    args: GetCloudFormationTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCloudFormationTemplateCommandOutput) => void),
    cb?: (err: any, data?: GetCloudFormationTemplateCommandOutput) => void
  ): Promise<GetCloudFormationTemplateCommandOutput> | void {
    const command = new GetCloudFormationTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the list of applications nested in the containing application.</p>
   */
  public listApplicationDependencies(
    args: ListApplicationDependenciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationDependenciesCommandOutput>;
  public listApplicationDependencies(
    args: ListApplicationDependenciesCommandInput,
    cb: (err: any, data?: ListApplicationDependenciesCommandOutput) => void
  ): void;
  public listApplicationDependencies(
    args: ListApplicationDependenciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationDependenciesCommandOutput) => void
  ): void;
  public listApplicationDependencies(
    args: ListApplicationDependenciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApplicationDependenciesCommandOutput) => void),
    cb?: (err: any, data?: ListApplicationDependenciesCommandOutput) => void
  ): Promise<ListApplicationDependenciesCommandOutput> | void {
    const command = new ListApplicationDependenciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists applications owned by the requester.</p>
   */
  public listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  public listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  public listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  public listApplications(
    args: ListApplicationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApplicationsCommandOutput) => void),
    cb?: (err: any, data?: ListApplicationsCommandOutput) => void
  ): Promise<ListApplicationsCommandOutput> | void {
    const command = new ListApplicationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists versions for the specified application.</p>
   */
  public listApplicationVersions(
    args: ListApplicationVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationVersionsCommandOutput>;
  public listApplicationVersions(
    args: ListApplicationVersionsCommandInput,
    cb: (err: any, data?: ListApplicationVersionsCommandOutput) => void
  ): void;
  public listApplicationVersions(
    args: ListApplicationVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationVersionsCommandOutput) => void
  ): void;
  public listApplicationVersions(
    args: ListApplicationVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApplicationVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListApplicationVersionsCommandOutput) => void
  ): Promise<ListApplicationVersionsCommandOutput> | void {
    const command = new ListApplicationVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the permission policy for an application. For the list of actions supported for this operation, see
   *  <a href="https://docs.aws.amazon.com/serverlessrepo/latest/devguide/access-control-resource-based.html#application-permissions">Application
   *  Permissions</a>
   *  .</p>
   */
  public putApplicationPolicy(
    args: PutApplicationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutApplicationPolicyCommandOutput>;
  public putApplicationPolicy(
    args: PutApplicationPolicyCommandInput,
    cb: (err: any, data?: PutApplicationPolicyCommandOutput) => void
  ): void;
  public putApplicationPolicy(
    args: PutApplicationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutApplicationPolicyCommandOutput) => void
  ): void;
  public putApplicationPolicy(
    args: PutApplicationPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutApplicationPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutApplicationPolicyCommandOutput) => void
  ): Promise<PutApplicationPolicyCommandOutput> | void {
    const command = new PutApplicationPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Unshares an application from an AWS Organization.</p><p>This operation can be called only from the organization's master account.</p>
   */
  public unshareApplication(
    args: UnshareApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnshareApplicationCommandOutput>;
  public unshareApplication(
    args: UnshareApplicationCommandInput,
    cb: (err: any, data?: UnshareApplicationCommandOutput) => void
  ): void;
  public unshareApplication(
    args: UnshareApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnshareApplicationCommandOutput) => void
  ): void;
  public unshareApplication(
    args: UnshareApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UnshareApplicationCommandOutput) => void),
    cb?: (err: any, data?: UnshareApplicationCommandOutput) => void
  ): Promise<UnshareApplicationCommandOutput> | void {
    const command = new UnshareApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the specified application.</p>
   */
  public updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateApplicationCommandOutput) => void),
    cb?: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): Promise<UpdateApplicationCommandOutput> | void {
    const command = new UpdateApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
