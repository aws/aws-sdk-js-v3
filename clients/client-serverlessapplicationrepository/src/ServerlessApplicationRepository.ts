// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import {
  ServerlessApplicationRepositoryClient,
  ServerlessApplicationRepositoryClientConfig,
} from "./ServerlessApplicationRepositoryClient";

const commands = {
  CreateApplicationCommand,
  CreateApplicationVersionCommand,
  CreateCloudFormationChangeSetCommand,
  CreateCloudFormationTemplateCommand,
  DeleteApplicationCommand,
  GetApplicationCommand,
  GetApplicationPolicyCommand,
  GetCloudFormationTemplateCommand,
  ListApplicationDependenciesCommand,
  ListApplicationsCommand,
  ListApplicationVersionsCommand,
  PutApplicationPolicyCommand,
  UnshareApplicationCommand,
  UpdateApplicationCommand,
};

export interface ServerlessApplicationRepository {
  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationVersionCommand}
   */
  createApplicationVersion(
    args: CreateApplicationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationVersionCommandOutput>;
  createApplicationVersion(
    args: CreateApplicationVersionCommandInput,
    cb: (err: any, data?: CreateApplicationVersionCommandOutput) => void
  ): void;
  createApplicationVersion(
    args: CreateApplicationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCloudFormationChangeSetCommand}
   */
  createCloudFormationChangeSet(
    args: CreateCloudFormationChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCloudFormationChangeSetCommandOutput>;
  createCloudFormationChangeSet(
    args: CreateCloudFormationChangeSetCommandInput,
    cb: (err: any, data?: CreateCloudFormationChangeSetCommandOutput) => void
  ): void;
  createCloudFormationChangeSet(
    args: CreateCloudFormationChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCloudFormationChangeSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCloudFormationTemplateCommand}
   */
  createCloudFormationTemplate(
    args: CreateCloudFormationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCloudFormationTemplateCommandOutput>;
  createCloudFormationTemplate(
    args: CreateCloudFormationTemplateCommandInput,
    cb: (err: any, data?: CreateCloudFormationTemplateCommandOutput) => void
  ): void;
  createCloudFormationTemplate(
    args: CreateCloudFormationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCloudFormationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationCommand}
   */
  getApplication(
    args: GetApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationCommandOutput>;
  getApplication(args: GetApplicationCommandInput, cb: (err: any, data?: GetApplicationCommandOutput) => void): void;
  getApplication(
    args: GetApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationPolicyCommand}
   */
  getApplicationPolicy(
    args: GetApplicationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationPolicyCommandOutput>;
  getApplicationPolicy(
    args: GetApplicationPolicyCommandInput,
    cb: (err: any, data?: GetApplicationPolicyCommandOutput) => void
  ): void;
  getApplicationPolicy(
    args: GetApplicationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCloudFormationTemplateCommand}
   */
  getCloudFormationTemplate(
    args: GetCloudFormationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCloudFormationTemplateCommandOutput>;
  getCloudFormationTemplate(
    args: GetCloudFormationTemplateCommandInput,
    cb: (err: any, data?: GetCloudFormationTemplateCommandOutput) => void
  ): void;
  getCloudFormationTemplate(
    args: GetCloudFormationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCloudFormationTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationDependenciesCommand}
   */
  listApplicationDependencies(
    args: ListApplicationDependenciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationDependenciesCommandOutput>;
  listApplicationDependencies(
    args: ListApplicationDependenciesCommandInput,
    cb: (err: any, data?: ListApplicationDependenciesCommandOutput) => void
  ): void;
  listApplicationDependencies(
    args: ListApplicationDependenciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationDependenciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   */
  listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationVersionsCommand}
   */
  listApplicationVersions(
    args: ListApplicationVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationVersionsCommandOutput>;
  listApplicationVersions(
    args: ListApplicationVersionsCommandInput,
    cb: (err: any, data?: ListApplicationVersionsCommandOutput) => void
  ): void;
  listApplicationVersions(
    args: ListApplicationVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutApplicationPolicyCommand}
   */
  putApplicationPolicy(
    args: PutApplicationPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutApplicationPolicyCommandOutput>;
  putApplicationPolicy(
    args: PutApplicationPolicyCommandInput,
    cb: (err: any, data?: PutApplicationPolicyCommandOutput) => void
  ): void;
  putApplicationPolicy(
    args: PutApplicationPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutApplicationPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UnshareApplicationCommand}
   */
  unshareApplication(
    args: UnshareApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnshareApplicationCommandOutput>;
  unshareApplication(
    args: UnshareApplicationCommandInput,
    cb: (err: any, data?: UnshareApplicationCommandOutput) => void
  ): void;
  unshareApplication(
    args: UnshareApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnshareApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
}

/**
 * @public
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
export class ServerlessApplicationRepository
  extends ServerlessApplicationRepositoryClient
  implements ServerlessApplicationRepository {}
createAggregatedClient(commands, ServerlessApplicationRepository);
