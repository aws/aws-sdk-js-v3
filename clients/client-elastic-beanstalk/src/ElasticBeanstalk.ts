// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AbortEnvironmentUpdateCommand,
  AbortEnvironmentUpdateCommandInput,
  AbortEnvironmentUpdateCommandOutput,
} from "./commands/AbortEnvironmentUpdateCommand";
import {
  ApplyEnvironmentManagedActionCommand,
  ApplyEnvironmentManagedActionCommandInput,
  ApplyEnvironmentManagedActionCommandOutput,
} from "./commands/ApplyEnvironmentManagedActionCommand";
import {
  AssociateEnvironmentOperationsRoleCommand,
  AssociateEnvironmentOperationsRoleCommandInput,
  AssociateEnvironmentOperationsRoleCommandOutput,
} from "./commands/AssociateEnvironmentOperationsRoleCommand";
import {
  CheckDNSAvailabilityCommand,
  CheckDNSAvailabilityCommandInput,
  CheckDNSAvailabilityCommandOutput,
} from "./commands/CheckDNSAvailabilityCommand";
import {
  ComposeEnvironmentsCommand,
  ComposeEnvironmentsCommandInput,
  ComposeEnvironmentsCommandOutput,
} from "./commands/ComposeEnvironmentsCommand";
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
  CreateConfigurationTemplateCommand,
  CreateConfigurationTemplateCommandInput,
  CreateConfigurationTemplateCommandOutput,
} from "./commands/CreateConfigurationTemplateCommand";
import {
  CreateEnvironmentCommand,
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,
} from "./commands/CreateEnvironmentCommand";
import {
  CreatePlatformVersionCommand,
  CreatePlatformVersionCommandInput,
  CreatePlatformVersionCommandOutput,
} from "./commands/CreatePlatformVersionCommand";
import {
  CreateStorageLocationCommand,
  CreateStorageLocationCommandInput,
  CreateStorageLocationCommandOutput,
} from "./commands/CreateStorageLocationCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import {
  DeleteApplicationVersionCommand,
  DeleteApplicationVersionCommandInput,
  DeleteApplicationVersionCommandOutput,
} from "./commands/DeleteApplicationVersionCommand";
import {
  DeleteConfigurationTemplateCommand,
  DeleteConfigurationTemplateCommandInput,
  DeleteConfigurationTemplateCommandOutput,
} from "./commands/DeleteConfigurationTemplateCommand";
import {
  DeleteEnvironmentConfigurationCommand,
  DeleteEnvironmentConfigurationCommandInput,
  DeleteEnvironmentConfigurationCommandOutput,
} from "./commands/DeleteEnvironmentConfigurationCommand";
import {
  DeletePlatformVersionCommand,
  DeletePlatformVersionCommandInput,
  DeletePlatformVersionCommandOutput,
} from "./commands/DeletePlatformVersionCommand";
import {
  DescribeAccountAttributesCommand,
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand";
import {
  DescribeApplicationsCommand,
  DescribeApplicationsCommandInput,
  DescribeApplicationsCommandOutput,
} from "./commands/DescribeApplicationsCommand";
import {
  DescribeApplicationVersionsCommand,
  DescribeApplicationVersionsCommandInput,
  DescribeApplicationVersionsCommandOutput,
} from "./commands/DescribeApplicationVersionsCommand";
import {
  DescribeConfigurationOptionsCommand,
  DescribeConfigurationOptionsCommandInput,
  DescribeConfigurationOptionsCommandOutput,
} from "./commands/DescribeConfigurationOptionsCommand";
import {
  DescribeConfigurationSettingsCommand,
  DescribeConfigurationSettingsCommandInput,
  DescribeConfigurationSettingsCommandOutput,
} from "./commands/DescribeConfigurationSettingsCommand";
import {
  DescribeEnvironmentHealthCommand,
  DescribeEnvironmentHealthCommandInput,
  DescribeEnvironmentHealthCommandOutput,
} from "./commands/DescribeEnvironmentHealthCommand";
import {
  DescribeEnvironmentManagedActionHistoryCommand,
  DescribeEnvironmentManagedActionHistoryCommandInput,
  DescribeEnvironmentManagedActionHistoryCommandOutput,
} from "./commands/DescribeEnvironmentManagedActionHistoryCommand";
import {
  DescribeEnvironmentManagedActionsCommand,
  DescribeEnvironmentManagedActionsCommandInput,
  DescribeEnvironmentManagedActionsCommandOutput,
} from "./commands/DescribeEnvironmentManagedActionsCommand";
import {
  DescribeEnvironmentResourcesCommand,
  DescribeEnvironmentResourcesCommandInput,
  DescribeEnvironmentResourcesCommandOutput,
} from "./commands/DescribeEnvironmentResourcesCommand";
import {
  DescribeEnvironmentsCommand,
  DescribeEnvironmentsCommandInput,
  DescribeEnvironmentsCommandOutput,
} from "./commands/DescribeEnvironmentsCommand";
import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "./commands/DescribeEventsCommand";
import {
  DescribeInstancesHealthCommand,
  DescribeInstancesHealthCommandInput,
  DescribeInstancesHealthCommandOutput,
} from "./commands/DescribeInstancesHealthCommand";
import {
  DescribePlatformVersionCommand,
  DescribePlatformVersionCommandInput,
  DescribePlatformVersionCommandOutput,
} from "./commands/DescribePlatformVersionCommand";
import {
  DisassociateEnvironmentOperationsRoleCommand,
  DisassociateEnvironmentOperationsRoleCommandInput,
  DisassociateEnvironmentOperationsRoleCommandOutput,
} from "./commands/DisassociateEnvironmentOperationsRoleCommand";
import {
  ListAvailableSolutionStacksCommand,
  ListAvailableSolutionStacksCommandInput,
  ListAvailableSolutionStacksCommandOutput,
} from "./commands/ListAvailableSolutionStacksCommand";
import {
  ListPlatformBranchesCommand,
  ListPlatformBranchesCommandInput,
  ListPlatformBranchesCommandOutput,
} from "./commands/ListPlatformBranchesCommand";
import {
  ListPlatformVersionsCommand,
  ListPlatformVersionsCommandInput,
  ListPlatformVersionsCommandOutput,
} from "./commands/ListPlatformVersionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RebuildEnvironmentCommand,
  RebuildEnvironmentCommandInput,
  RebuildEnvironmentCommandOutput,
} from "./commands/RebuildEnvironmentCommand";
import {
  RequestEnvironmentInfoCommand,
  RequestEnvironmentInfoCommandInput,
  RequestEnvironmentInfoCommandOutput,
} from "./commands/RequestEnvironmentInfoCommand";
import {
  RestartAppServerCommand,
  RestartAppServerCommandInput,
  RestartAppServerCommandOutput,
} from "./commands/RestartAppServerCommand";
import {
  RetrieveEnvironmentInfoCommand,
  RetrieveEnvironmentInfoCommandInput,
  RetrieveEnvironmentInfoCommandOutput,
} from "./commands/RetrieveEnvironmentInfoCommand";
import {
  SwapEnvironmentCNAMEsCommand,
  SwapEnvironmentCNAMEsCommandInput,
  SwapEnvironmentCNAMEsCommandOutput,
} from "./commands/SwapEnvironmentCNAMEsCommand";
import {
  TerminateEnvironmentCommand,
  TerminateEnvironmentCommandInput,
  TerminateEnvironmentCommandOutput,
} from "./commands/TerminateEnvironmentCommand";
import {
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import {
  UpdateApplicationResourceLifecycleCommand,
  UpdateApplicationResourceLifecycleCommandInput,
  UpdateApplicationResourceLifecycleCommandOutput,
} from "./commands/UpdateApplicationResourceLifecycleCommand";
import {
  UpdateApplicationVersionCommand,
  UpdateApplicationVersionCommandInput,
  UpdateApplicationVersionCommandOutput,
} from "./commands/UpdateApplicationVersionCommand";
import {
  UpdateConfigurationTemplateCommand,
  UpdateConfigurationTemplateCommandInput,
  UpdateConfigurationTemplateCommandOutput,
} from "./commands/UpdateConfigurationTemplateCommand";
import {
  UpdateEnvironmentCommand,
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput,
} from "./commands/UpdateEnvironmentCommand";
import {
  UpdateTagsForResourceCommand,
  UpdateTagsForResourceCommandInput,
  UpdateTagsForResourceCommandOutput,
} from "./commands/UpdateTagsForResourceCommand";
import {
  ValidateConfigurationSettingsCommand,
  ValidateConfigurationSettingsCommandInput,
  ValidateConfigurationSettingsCommandOutput,
} from "./commands/ValidateConfigurationSettingsCommand";
import { ElasticBeanstalkClient } from "./ElasticBeanstalkClient";

/**
 * <fullname>AWS Elastic Beanstalk</fullname>
 *          <p>AWS Elastic Beanstalk makes it easy for you to create, deploy, and manage scalable,
 *       fault-tolerant applications running on the Amazon Web Services cloud.</p>
 *          <p>For more information about this product, go to the <a href="http://aws.amazon.com/elasticbeanstalk/">AWS Elastic Beanstalk</a> details page. The location of the
 *       latest AWS Elastic Beanstalk WSDL is <a href="https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl">https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl</a>.
 *       To install the Software Development Kits (SDKs), Integrated Development Environment (IDE)
 *       Toolkits, and command line tools that enable you to access the API, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>For a list of region-specific endpoints that AWS Elastic Beanstalk supports, go to
 *         <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#elasticbeanstalk_region">Regions and Endpoints</a> in the <i>Amazon Web Services
 *       Glossary</i>.</p>
 */
export class ElasticBeanstalk extends ElasticBeanstalkClient {
  /**
   * <p>Cancels in-progress environment configuration update or application version
   *       deployment.</p>
   */
  public abortEnvironmentUpdate(
    args: AbortEnvironmentUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AbortEnvironmentUpdateCommandOutput>;
  public abortEnvironmentUpdate(
    args: AbortEnvironmentUpdateCommandInput,
    cb: (err: any, data?: AbortEnvironmentUpdateCommandOutput) => void
  ): void;
  public abortEnvironmentUpdate(
    args: AbortEnvironmentUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AbortEnvironmentUpdateCommandOutput) => void
  ): void;
  public abortEnvironmentUpdate(
    args: AbortEnvironmentUpdateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AbortEnvironmentUpdateCommandOutput) => void),
    cb?: (err: any, data?: AbortEnvironmentUpdateCommandOutput) => void
  ): Promise<AbortEnvironmentUpdateCommandOutput> | void {
    const command = new AbortEnvironmentUpdateCommand(args);
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
   * <p>Applies a scheduled managed action immediately. A managed action can be applied only if
   *       its status is <code>Scheduled</code>. Get the status and action ID of a managed action with
   *         <a>DescribeEnvironmentManagedActions</a>.</p>
   */
  public applyEnvironmentManagedAction(
    args: ApplyEnvironmentManagedActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ApplyEnvironmentManagedActionCommandOutput>;
  public applyEnvironmentManagedAction(
    args: ApplyEnvironmentManagedActionCommandInput,
    cb: (err: any, data?: ApplyEnvironmentManagedActionCommandOutput) => void
  ): void;
  public applyEnvironmentManagedAction(
    args: ApplyEnvironmentManagedActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApplyEnvironmentManagedActionCommandOutput) => void
  ): void;
  public applyEnvironmentManagedAction(
    args: ApplyEnvironmentManagedActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ApplyEnvironmentManagedActionCommandOutput) => void),
    cb?: (err: any, data?: ApplyEnvironmentManagedActionCommandOutput) => void
  ): Promise<ApplyEnvironmentManagedActionCommandOutput> | void {
    const command = new ApplyEnvironmentManagedActionCommand(args);
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
   * <p>Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk
   *       uses the associated operations role for permissions to downstream services during subsequent
   *       calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the
   *         <i>AWS Elastic Beanstalk Developer Guide</i>.</p>
   */
  public associateEnvironmentOperationsRole(
    args: AssociateEnvironmentOperationsRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateEnvironmentOperationsRoleCommandOutput>;
  public associateEnvironmentOperationsRole(
    args: AssociateEnvironmentOperationsRoleCommandInput,
    cb: (err: any, data?: AssociateEnvironmentOperationsRoleCommandOutput) => void
  ): void;
  public associateEnvironmentOperationsRole(
    args: AssociateEnvironmentOperationsRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateEnvironmentOperationsRoleCommandOutput) => void
  ): void;
  public associateEnvironmentOperationsRole(
    args: AssociateEnvironmentOperationsRoleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateEnvironmentOperationsRoleCommandOutput) => void),
    cb?: (err: any, data?: AssociateEnvironmentOperationsRoleCommandOutput) => void
  ): Promise<AssociateEnvironmentOperationsRoleCommandOutput> | void {
    const command = new AssociateEnvironmentOperationsRoleCommand(args);
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
   * <p>Checks if the specified CNAME is available.</p>
   */
  public checkDNSAvailability(
    args: CheckDNSAvailabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CheckDNSAvailabilityCommandOutput>;
  public checkDNSAvailability(
    args: CheckDNSAvailabilityCommandInput,
    cb: (err: any, data?: CheckDNSAvailabilityCommandOutput) => void
  ): void;
  public checkDNSAvailability(
    args: CheckDNSAvailabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CheckDNSAvailabilityCommandOutput) => void
  ): void;
  public checkDNSAvailability(
    args: CheckDNSAvailabilityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CheckDNSAvailabilityCommandOutput) => void),
    cb?: (err: any, data?: CheckDNSAvailabilityCommandOutput) => void
  ): Promise<CheckDNSAvailabilityCommandOutput> | void {
    const command = new CheckDNSAvailabilityCommand(args);
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
   * <p>Create or update a group of environments that each run a separate component of a single
   *       application. Takes a list of version labels that specify application source bundles for each
   *       of the environments to create or update. The name of each environment and other required
   *       information must be included in the source bundles in an environment manifest named
   *       <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a>
   *       for details.</p>
   */
  public composeEnvironments(
    args: ComposeEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ComposeEnvironmentsCommandOutput>;
  public composeEnvironments(
    args: ComposeEnvironmentsCommandInput,
    cb: (err: any, data?: ComposeEnvironmentsCommandOutput) => void
  ): void;
  public composeEnvironments(
    args: ComposeEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ComposeEnvironmentsCommandOutput) => void
  ): void;
  public composeEnvironments(
    args: ComposeEnvironmentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ComposeEnvironmentsCommandOutput) => void),
    cb?: (err: any, data?: ComposeEnvironmentsCommandOutput) => void
  ): Promise<ComposeEnvironmentsCommandOutput> | void {
    const command = new ComposeEnvironmentsCommand(args);
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
   * <p>Creates an application that has one configuration template named <code>default</code>
   *       and no application versions.</p>
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
   * <p>Creates an application version for the specified application. You can create an
   *       application version from a source bundle in Amazon S3, a commit in AWS CodeCommit, or the
   *       output of an AWS CodeBuild build as follows:</p>
   *          <p>Specify a commit in an AWS CodeCommit repository with
   *         <code>SourceBuildInformation</code>.</p>
   *          <p>Specify a build in an AWS CodeBuild with <code>SourceBuildInformation</code> and
   *         <code>BuildConfiguration</code>.</p>
   *          <p>Specify a source bundle in S3 with <code>SourceBundle</code>
   *          </p>
   *          <p>Omit both <code>SourceBuildInformation</code> and <code>SourceBundle</code> to use the
   *       default sample application.</p>
   *          <note>
   *             <p>After you create an application version with a specified Amazon S3 bucket and key
   *         location, you can't change that Amazon S3 location. If you change the Amazon S3 location,
   *         you receive an exception when you attempt to launch an environment from the application
   *         version.</p>
   *          </note>
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
   * <p>Creates an AWS Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk
   *       application. You define application configuration settings in a configuration template. You
   *       can then use the configuration template to deploy different versions of the application with
   *       the same configuration settings.</p>
   *          <p>Templates aren't associated with any environment. The <code>EnvironmentName</code>
   *       response element is always <code>null</code>.</p>
   *          <p>Related Topics</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>DescribeConfigurationOptions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeConfigurationSettings</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListAvailableSolutionStacks</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createConfigurationTemplate(
    args: CreateConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationTemplateCommandOutput>;
  public createConfigurationTemplate(
    args: CreateConfigurationTemplateCommandInput,
    cb: (err: any, data?: CreateConfigurationTemplateCommandOutput) => void
  ): void;
  public createConfigurationTemplate(
    args: CreateConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationTemplateCommandOutput) => void
  ): void;
  public createConfigurationTemplate(
    args: CreateConfigurationTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConfigurationTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateConfigurationTemplateCommandOutput) => void
  ): Promise<CreateConfigurationTemplateCommandOutput> | void {
    const command = new CreateConfigurationTemplateCommand(args);
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
   * <p>Launches an AWS Elastic Beanstalk environment for the specified application using the specified
   *       configuration.</p>
   */
  public createEnvironment(
    args: CreateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentCommandOutput>;
  public createEnvironment(
    args: CreateEnvironmentCommandInput,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;
  public createEnvironment(
    args: CreateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;
  public createEnvironment(
    args: CreateEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): Promise<CreateEnvironmentCommandOutput> | void {
    const command = new CreateEnvironmentCommand(args);
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
   * <p>Create a new version of your custom platform.</p>
   */
  public createPlatformVersion(
    args: CreatePlatformVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePlatformVersionCommandOutput>;
  public createPlatformVersion(
    args: CreatePlatformVersionCommandInput,
    cb: (err: any, data?: CreatePlatformVersionCommandOutput) => void
  ): void;
  public createPlatformVersion(
    args: CreatePlatformVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePlatformVersionCommandOutput) => void
  ): void;
  public createPlatformVersion(
    args: CreatePlatformVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePlatformVersionCommandOutput) => void),
    cb?: (err: any, data?: CreatePlatformVersionCommandOutput) => void
  ): Promise<CreatePlatformVersionCommandOutput> | void {
    const command = new CreatePlatformVersionCommand(args);
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
   * <p>Creates a bucket in Amazon S3 to store application versions, logs, and other files used
   *       by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the
   *       first time you create an environment in a region. If the storage location already exists,
   *         <code>CreateStorageLocation</code> still returns the bucket name but does not create a new
   *       bucket.</p>
   */
  public createStorageLocation(
    args: CreateStorageLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStorageLocationCommandOutput>;
  public createStorageLocation(
    args: CreateStorageLocationCommandInput,
    cb: (err: any, data?: CreateStorageLocationCommandOutput) => void
  ): void;
  public createStorageLocation(
    args: CreateStorageLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStorageLocationCommandOutput) => void
  ): void;
  public createStorageLocation(
    args: CreateStorageLocationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStorageLocationCommandOutput) => void),
    cb?: (err: any, data?: CreateStorageLocationCommandOutput) => void
  ): Promise<CreateStorageLocationCommandOutput> | void {
    const command = new CreateStorageLocationCommand(args);
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
   * <p>Deletes the specified application along with all associated versions and
   *       configurations. The application versions will not be deleted from your Amazon S3
   *       bucket.</p>
   *          <note>
   *             <p>You cannot delete an application that has a running environment.</p>
   *          </note>
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
   * <p>Deletes the specified version from the specified application.</p>
   *          <note>
   *             <p>You cannot delete an application version that is associated with a running
   *         environment.</p>
   *          </note>
   */
  public deleteApplicationVersion(
    args: DeleteApplicationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationVersionCommandOutput>;
  public deleteApplicationVersion(
    args: DeleteApplicationVersionCommandInput,
    cb: (err: any, data?: DeleteApplicationVersionCommandOutput) => void
  ): void;
  public deleteApplicationVersion(
    args: DeleteApplicationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationVersionCommandOutput) => void
  ): void;
  public deleteApplicationVersion(
    args: DeleteApplicationVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteApplicationVersionCommandOutput) => void),
    cb?: (err: any, data?: DeleteApplicationVersionCommandOutput) => void
  ): Promise<DeleteApplicationVersionCommandOutput> | void {
    const command = new DeleteApplicationVersionCommand(args);
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
   * <p>Deletes the specified configuration template.</p>
   *          <note>
   *             <p>When you launch an environment using a configuration template, the environment gets a
   *         copy of the template. You can delete or modify the environment's copy of the template
   *         without affecting the running environment.</p>
   *          </note>
   */
  public deleteConfigurationTemplate(
    args: DeleteConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationTemplateCommandOutput>;
  public deleteConfigurationTemplate(
    args: DeleteConfigurationTemplateCommandInput,
    cb: (err: any, data?: DeleteConfigurationTemplateCommandOutput) => void
  ): void;
  public deleteConfigurationTemplate(
    args: DeleteConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationTemplateCommandOutput) => void
  ): void;
  public deleteConfigurationTemplate(
    args: DeleteConfigurationTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConfigurationTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteConfigurationTemplateCommandOutput) => void
  ): Promise<DeleteConfigurationTemplateCommandOutput> | void {
    const command = new DeleteConfigurationTemplateCommand(args);
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
   * <p>Deletes the draft configuration associated with the running environment.</p>
   *          <p>Updating a running environment with any configuration changes creates a draft
   *       configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update
   *       fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the
   *       deployment is in process or has failed. The draft configuration remains in existence until it
   *       is deleted with this action.</p>
   */
  public deleteEnvironmentConfiguration(
    args: DeleteEnvironmentConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentConfigurationCommandOutput>;
  public deleteEnvironmentConfiguration(
    args: DeleteEnvironmentConfigurationCommandInput,
    cb: (err: any, data?: DeleteEnvironmentConfigurationCommandOutput) => void
  ): void;
  public deleteEnvironmentConfiguration(
    args: DeleteEnvironmentConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentConfigurationCommandOutput) => void
  ): void;
  public deleteEnvironmentConfiguration(
    args: DeleteEnvironmentConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEnvironmentConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteEnvironmentConfigurationCommandOutput) => void
  ): Promise<DeleteEnvironmentConfigurationCommandOutput> | void {
    const command = new DeleteEnvironmentConfigurationCommand(args);
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
   * <p>Deletes the specified version of a custom platform.</p>
   */
  public deletePlatformVersion(
    args: DeletePlatformVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePlatformVersionCommandOutput>;
  public deletePlatformVersion(
    args: DeletePlatformVersionCommandInput,
    cb: (err: any, data?: DeletePlatformVersionCommandOutput) => void
  ): void;
  public deletePlatformVersion(
    args: DeletePlatformVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePlatformVersionCommandOutput) => void
  ): void;
  public deletePlatformVersion(
    args: DeletePlatformVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePlatformVersionCommandOutput) => void),
    cb?: (err: any, data?: DeletePlatformVersionCommandOutput) => void
  ): Promise<DeletePlatformVersionCommandOutput> | void {
    const command = new DeletePlatformVersionCommand(args);
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
   * <p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS
   *       account.</p>
   *          <p>The result currently has one set of attributes—resource quotas.</p>
   */
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountAttributesCommandOutput>;
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): void;
  public describeAccountAttributes(
    args: DescribeAccountAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAccountAttributesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountAttributesCommandOutput) => void
  ): Promise<DescribeAccountAttributesCommandOutput> | void {
    const command = new DescribeAccountAttributesCommand(args);
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
   * <p>Returns the descriptions of existing applications.</p>
   */
  public describeApplications(
    args: DescribeApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationsCommandOutput>;
  public describeApplications(
    args: DescribeApplicationsCommandInput,
    cb: (err: any, data?: DescribeApplicationsCommandOutput) => void
  ): void;
  public describeApplications(
    args: DescribeApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationsCommandOutput) => void
  ): void;
  public describeApplications(
    args: DescribeApplicationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeApplicationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeApplicationsCommandOutput) => void
  ): Promise<DescribeApplicationsCommandOutput> | void {
    const command = new DescribeApplicationsCommand(args);
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
   * <p>Retrieve a list of application versions.</p>
   */
  public describeApplicationVersions(
    args: DescribeApplicationVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationVersionsCommandOutput>;
  public describeApplicationVersions(
    args: DescribeApplicationVersionsCommandInput,
    cb: (err: any, data?: DescribeApplicationVersionsCommandOutput) => void
  ): void;
  public describeApplicationVersions(
    args: DescribeApplicationVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationVersionsCommandOutput) => void
  ): void;
  public describeApplicationVersions(
    args: DescribeApplicationVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeApplicationVersionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeApplicationVersionsCommandOutput) => void
  ): Promise<DescribeApplicationVersionsCommandOutput> | void {
    const command = new DescribeApplicationVersionsCommand(args);
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
   * <p>Describes the configuration options that are used in a particular configuration
   *       template or environment, or that a specified solution stack defines. The description includes
   *       the values the options, their default values, and an indication of the required action on a
   *       running environment if an option value is changed.</p>
   */
  public describeConfigurationOptions(
    args: DescribeConfigurationOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationOptionsCommandOutput>;
  public describeConfigurationOptions(
    args: DescribeConfigurationOptionsCommandInput,
    cb: (err: any, data?: DescribeConfigurationOptionsCommandOutput) => void
  ): void;
  public describeConfigurationOptions(
    args: DescribeConfigurationOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationOptionsCommandOutput) => void
  ): void;
  public describeConfigurationOptions(
    args: DescribeConfigurationOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConfigurationOptionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeConfigurationOptionsCommandOutput) => void
  ): Promise<DescribeConfigurationOptionsCommandOutput> | void {
    const command = new DescribeConfigurationOptionsCommand(args);
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
   * <p>Returns a description of the settings for the specified configuration set, that is,
   *       either a configuration template or the configuration set associated with a running
   *       environment.</p>
   *          <p>When describing the settings for the configuration set associated with a running
   *       environment, it is possible to receive two sets of setting descriptions. One is the deployed
   *       configuration set, and the other is a draft configuration of an environment that is either in
   *       the process of deployment or that failed to deploy.</p>
   *          <p>Related Topics</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>DeleteEnvironmentConfiguration</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public describeConfigurationSettings(
    args: DescribeConfigurationSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConfigurationSettingsCommandOutput>;
  public describeConfigurationSettings(
    args: DescribeConfigurationSettingsCommandInput,
    cb: (err: any, data?: DescribeConfigurationSettingsCommandOutput) => void
  ): void;
  public describeConfigurationSettings(
    args: DescribeConfigurationSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConfigurationSettingsCommandOutput) => void
  ): void;
  public describeConfigurationSettings(
    args: DescribeConfigurationSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConfigurationSettingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeConfigurationSettingsCommandOutput) => void
  ): Promise<DescribeConfigurationSettingsCommandOutput> | void {
    const command = new DescribeConfigurationSettingsCommand(args);
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
   * <p>Returns information about the overall health of the specified environment. The
   *         <b>DescribeEnvironmentHealth</b> operation is only available with
   *       AWS Elastic Beanstalk Enhanced Health.</p>
   */
  public describeEnvironmentHealth(
    args: DescribeEnvironmentHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEnvironmentHealthCommandOutput>;
  public describeEnvironmentHealth(
    args: DescribeEnvironmentHealthCommandInput,
    cb: (err: any, data?: DescribeEnvironmentHealthCommandOutput) => void
  ): void;
  public describeEnvironmentHealth(
    args: DescribeEnvironmentHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEnvironmentHealthCommandOutput) => void
  ): void;
  public describeEnvironmentHealth(
    args: DescribeEnvironmentHealthCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEnvironmentHealthCommandOutput) => void),
    cb?: (err: any, data?: DescribeEnvironmentHealthCommandOutput) => void
  ): Promise<DescribeEnvironmentHealthCommandOutput> | void {
    const command = new DescribeEnvironmentHealthCommand(args);
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
   * <p>Lists an environment's completed and failed managed actions.</p>
   */
  public describeEnvironmentManagedActionHistory(
    args: DescribeEnvironmentManagedActionHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEnvironmentManagedActionHistoryCommandOutput>;
  public describeEnvironmentManagedActionHistory(
    args: DescribeEnvironmentManagedActionHistoryCommandInput,
    cb: (err: any, data?: DescribeEnvironmentManagedActionHistoryCommandOutput) => void
  ): void;
  public describeEnvironmentManagedActionHistory(
    args: DescribeEnvironmentManagedActionHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEnvironmentManagedActionHistoryCommandOutput) => void
  ): void;
  public describeEnvironmentManagedActionHistory(
    args: DescribeEnvironmentManagedActionHistoryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeEnvironmentManagedActionHistoryCommandOutput) => void),
    cb?: (err: any, data?: DescribeEnvironmentManagedActionHistoryCommandOutput) => void
  ): Promise<DescribeEnvironmentManagedActionHistoryCommandOutput> | void {
    const command = new DescribeEnvironmentManagedActionHistoryCommand(args);
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
   * <p>Lists an environment's upcoming and in-progress managed actions.</p>
   */
  public describeEnvironmentManagedActions(
    args: DescribeEnvironmentManagedActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEnvironmentManagedActionsCommandOutput>;
  public describeEnvironmentManagedActions(
    args: DescribeEnvironmentManagedActionsCommandInput,
    cb: (err: any, data?: DescribeEnvironmentManagedActionsCommandOutput) => void
  ): void;
  public describeEnvironmentManagedActions(
    args: DescribeEnvironmentManagedActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEnvironmentManagedActionsCommandOutput) => void
  ): void;
  public describeEnvironmentManagedActions(
    args: DescribeEnvironmentManagedActionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEnvironmentManagedActionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEnvironmentManagedActionsCommandOutput) => void
  ): Promise<DescribeEnvironmentManagedActionsCommandOutput> | void {
    const command = new DescribeEnvironmentManagedActionsCommand(args);
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
   * <p>Returns AWS resources for this environment.</p>
   */
  public describeEnvironmentResources(
    args: DescribeEnvironmentResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEnvironmentResourcesCommandOutput>;
  public describeEnvironmentResources(
    args: DescribeEnvironmentResourcesCommandInput,
    cb: (err: any, data?: DescribeEnvironmentResourcesCommandOutput) => void
  ): void;
  public describeEnvironmentResources(
    args: DescribeEnvironmentResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEnvironmentResourcesCommandOutput) => void
  ): void;
  public describeEnvironmentResources(
    args: DescribeEnvironmentResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEnvironmentResourcesCommandOutput) => void),
    cb?: (err: any, data?: DescribeEnvironmentResourcesCommandOutput) => void
  ): Promise<DescribeEnvironmentResourcesCommandOutput> | void {
    const command = new DescribeEnvironmentResourcesCommand(args);
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
   * <p>Returns descriptions for existing environments.</p>
   */
  public describeEnvironments(
    args: DescribeEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEnvironmentsCommandOutput>;
  public describeEnvironments(
    args: DescribeEnvironmentsCommandInput,
    cb: (err: any, data?: DescribeEnvironmentsCommandOutput) => void
  ): void;
  public describeEnvironments(
    args: DescribeEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEnvironmentsCommandOutput) => void
  ): void;
  public describeEnvironments(
    args: DescribeEnvironmentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEnvironmentsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEnvironmentsCommandOutput) => void
  ): Promise<DescribeEnvironmentsCommandOutput> | void {
    const command = new DescribeEnvironmentsCommand(args);
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
   * <p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p>
   *          <note>
   *             <p>This action returns the most recent 1,000 events from the specified
   *           <code>NextToken</code>.</p>
   *          </note>
   */
  public describeEvents(
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsCommandOutput>;
  public describeEvents(
    args: DescribeEventsCommandInput,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventsCommandOutput) => void
  ): Promise<DescribeEventsCommandOutput> | void {
    const command = new DescribeEventsCommand(args);
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
   * <p>Retrieves detailed information about the health of instances in your AWS Elastic
   *       Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health
   *       reporting</a>.</p>
   */
  public describeInstancesHealth(
    args: DescribeInstancesHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstancesHealthCommandOutput>;
  public describeInstancesHealth(
    args: DescribeInstancesHealthCommandInput,
    cb: (err: any, data?: DescribeInstancesHealthCommandOutput) => void
  ): void;
  public describeInstancesHealth(
    args: DescribeInstancesHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstancesHealthCommandOutput) => void
  ): void;
  public describeInstancesHealth(
    args: DescribeInstancesHealthCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInstancesHealthCommandOutput) => void),
    cb?: (err: any, data?: DescribeInstancesHealthCommandOutput) => void
  ): Promise<DescribeInstancesHealthCommandOutput> | void {
    const command = new DescribeInstancesHealthCommand(args);
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
   * <p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of
   *       platform versions.</p>
   *          <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk
   *         Platforms Glossary</a>.</p>
   */
  public describePlatformVersion(
    args: DescribePlatformVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePlatformVersionCommandOutput>;
  public describePlatformVersion(
    args: DescribePlatformVersionCommandInput,
    cb: (err: any, data?: DescribePlatformVersionCommandOutput) => void
  ): void;
  public describePlatformVersion(
    args: DescribePlatformVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePlatformVersionCommandOutput) => void
  ): void;
  public describePlatformVersion(
    args: DescribePlatformVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePlatformVersionCommandOutput) => void),
    cb?: (err: any, data?: DescribePlatformVersionCommandOutput) => void
  ): Promise<DescribePlatformVersionCommandOutput> | void {
    const command = new DescribePlatformVersionCommand(args);
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
   * <p>Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses
   *       the caller's permissions for permissions to downstream services during subsequent calls acting
   *       on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the
   *         <i>AWS Elastic Beanstalk Developer Guide</i>.</p>
   */
  public disassociateEnvironmentOperationsRole(
    args: DisassociateEnvironmentOperationsRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateEnvironmentOperationsRoleCommandOutput>;
  public disassociateEnvironmentOperationsRole(
    args: DisassociateEnvironmentOperationsRoleCommandInput,
    cb: (err: any, data?: DisassociateEnvironmentOperationsRoleCommandOutput) => void
  ): void;
  public disassociateEnvironmentOperationsRole(
    args: DisassociateEnvironmentOperationsRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateEnvironmentOperationsRoleCommandOutput) => void
  ): void;
  public disassociateEnvironmentOperationsRole(
    args: DisassociateEnvironmentOperationsRoleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateEnvironmentOperationsRoleCommandOutput) => void),
    cb?: (err: any, data?: DisassociateEnvironmentOperationsRoleCommandOutput) => void
  ): Promise<DisassociateEnvironmentOperationsRoleCommandOutput> | void {
    const command = new DisassociateEnvironmentOperationsRoleCommand(args);
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
   * <p>Returns a list of the available solution stack names, with the public version first and
   *       then in reverse chronological order.</p>
   */
  public listAvailableSolutionStacks(
    args: ListAvailableSolutionStacksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAvailableSolutionStacksCommandOutput>;
  public listAvailableSolutionStacks(
    args: ListAvailableSolutionStacksCommandInput,
    cb: (err: any, data?: ListAvailableSolutionStacksCommandOutput) => void
  ): void;
  public listAvailableSolutionStacks(
    args: ListAvailableSolutionStacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAvailableSolutionStacksCommandOutput) => void
  ): void;
  public listAvailableSolutionStacks(
    args: ListAvailableSolutionStacksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAvailableSolutionStacksCommandOutput) => void),
    cb?: (err: any, data?: ListAvailableSolutionStacksCommandOutput) => void
  ): Promise<ListAvailableSolutionStacksCommandOutput> | void {
    const command = new ListAvailableSolutionStacksCommand(args);
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
   * <p>Lists the platform branches available for your account in an AWS Region. Provides
   *       summary information about each platform branch.</p>
   *          <p>For definitions of platform branch and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk
   *         Platforms Glossary</a>.</p>
   */
  public listPlatformBranches(
    args: ListPlatformBranchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPlatformBranchesCommandOutput>;
  public listPlatformBranches(
    args: ListPlatformBranchesCommandInput,
    cb: (err: any, data?: ListPlatformBranchesCommandOutput) => void
  ): void;
  public listPlatformBranches(
    args: ListPlatformBranchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPlatformBranchesCommandOutput) => void
  ): void;
  public listPlatformBranches(
    args: ListPlatformBranchesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPlatformBranchesCommandOutput) => void),
    cb?: (err: any, data?: ListPlatformBranchesCommandOutput) => void
  ): Promise<ListPlatformBranchesCommandOutput> | void {
    const command = new ListPlatformBranchesCommand(args);
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
   * <p>Lists the platform versions available for your account in an AWS Region. Provides
   *       summary information about each platform version. Compare to <a>DescribePlatformVersion</a>, which provides full details about a single platform
   *       version.</p>
   *          <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk
   *         Platforms Glossary</a>.</p>
   */
  public listPlatformVersions(
    args: ListPlatformVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPlatformVersionsCommandOutput>;
  public listPlatformVersions(
    args: ListPlatformVersionsCommandInput,
    cb: (err: any, data?: ListPlatformVersionsCommandOutput) => void
  ): void;
  public listPlatformVersions(
    args: ListPlatformVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPlatformVersionsCommandOutput) => void
  ): void;
  public listPlatformVersions(
    args: ListPlatformVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPlatformVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListPlatformVersionsCommandOutput) => void
  ): Promise<ListPlatformVersionsCommandOutput> | void {
    const command = new ListPlatformVersionsCommand(args);
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
   * <p>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p>
   *          <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see
   *         <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application
   *         Resources</a>.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p>Deletes and recreates all of the AWS resources (for example: the Auto Scaling group,
   *       load balancer, etc.) for a specified environment and forces a restart.</p>
   */
  public rebuildEnvironment(
    args: RebuildEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebuildEnvironmentCommandOutput>;
  public rebuildEnvironment(
    args: RebuildEnvironmentCommandInput,
    cb: (err: any, data?: RebuildEnvironmentCommandOutput) => void
  ): void;
  public rebuildEnvironment(
    args: RebuildEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebuildEnvironmentCommandOutput) => void
  ): void;
  public rebuildEnvironment(
    args: RebuildEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RebuildEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: RebuildEnvironmentCommandOutput) => void
  ): Promise<RebuildEnvironmentCommandOutput> | void {
    const command = new RebuildEnvironmentCommand(args);
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
   * <p>Initiates a request to compile the specified type of information of the deployed
   *       environment.</p>
   *          <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from
   *       the application server log files of every Amazon EC2 instance in your environment. </p>
   *          <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application
   *       server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET
   *       containers do not support bundle logs. </p>
   *          <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p>
   *          <p>Related Topics</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>RetrieveEnvironmentInfo</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public requestEnvironmentInfo(
    args: RequestEnvironmentInfoCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RequestEnvironmentInfoCommandOutput>;
  public requestEnvironmentInfo(
    args: RequestEnvironmentInfoCommandInput,
    cb: (err: any, data?: RequestEnvironmentInfoCommandOutput) => void
  ): void;
  public requestEnvironmentInfo(
    args: RequestEnvironmentInfoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RequestEnvironmentInfoCommandOutput) => void
  ): void;
  public requestEnvironmentInfo(
    args: RequestEnvironmentInfoCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RequestEnvironmentInfoCommandOutput) => void),
    cb?: (err: any, data?: RequestEnvironmentInfoCommandOutput) => void
  ): Promise<RequestEnvironmentInfoCommandOutput> | void {
    const command = new RequestEnvironmentInfoCommand(args);
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
   * <p>Causes the environment to restart the application container server running on each
   *       Amazon EC2 instance.</p>
   */
  public restartAppServer(
    args: RestartAppServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestartAppServerCommandOutput>;
  public restartAppServer(
    args: RestartAppServerCommandInput,
    cb: (err: any, data?: RestartAppServerCommandOutput) => void
  ): void;
  public restartAppServer(
    args: RestartAppServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestartAppServerCommandOutput) => void
  ): void;
  public restartAppServer(
    args: RestartAppServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestartAppServerCommandOutput) => void),
    cb?: (err: any, data?: RestartAppServerCommandOutput) => void
  ): Promise<RestartAppServerCommandOutput> | void {
    const command = new RestartAppServerCommand(args);
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
   * <p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a>
   *       request.</p>
   *          <p>Related Topics</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>RequestEnvironmentInfo</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public retrieveEnvironmentInfo(
    args: RetrieveEnvironmentInfoCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetrieveEnvironmentInfoCommandOutput>;
  public retrieveEnvironmentInfo(
    args: RetrieveEnvironmentInfoCommandInput,
    cb: (err: any, data?: RetrieveEnvironmentInfoCommandOutput) => void
  ): void;
  public retrieveEnvironmentInfo(
    args: RetrieveEnvironmentInfoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetrieveEnvironmentInfoCommandOutput) => void
  ): void;
  public retrieveEnvironmentInfo(
    args: RetrieveEnvironmentInfoCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RetrieveEnvironmentInfoCommandOutput) => void),
    cb?: (err: any, data?: RetrieveEnvironmentInfoCommandOutput) => void
  ): Promise<RetrieveEnvironmentInfoCommandOutput> | void {
    const command = new RetrieveEnvironmentInfoCommand(args);
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
   * <p>Swaps the CNAMEs of two environments.</p>
   */
  public swapEnvironmentCNAMEs(
    args: SwapEnvironmentCNAMEsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SwapEnvironmentCNAMEsCommandOutput>;
  public swapEnvironmentCNAMEs(
    args: SwapEnvironmentCNAMEsCommandInput,
    cb: (err: any, data?: SwapEnvironmentCNAMEsCommandOutput) => void
  ): void;
  public swapEnvironmentCNAMEs(
    args: SwapEnvironmentCNAMEsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SwapEnvironmentCNAMEsCommandOutput) => void
  ): void;
  public swapEnvironmentCNAMEs(
    args: SwapEnvironmentCNAMEsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SwapEnvironmentCNAMEsCommandOutput) => void),
    cb?: (err: any, data?: SwapEnvironmentCNAMEsCommandOutput) => void
  ): Promise<SwapEnvironmentCNAMEsCommandOutput> | void {
    const command = new SwapEnvironmentCNAMEsCommand(args);
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
   * <p>Terminates the specified environment.</p>
   */
  public terminateEnvironment(
    args: TerminateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateEnvironmentCommandOutput>;
  public terminateEnvironment(
    args: TerminateEnvironmentCommandInput,
    cb: (err: any, data?: TerminateEnvironmentCommandOutput) => void
  ): void;
  public terminateEnvironment(
    args: TerminateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateEnvironmentCommandOutput) => void
  ): void;
  public terminateEnvironment(
    args: TerminateEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TerminateEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: TerminateEnvironmentCommandOutput) => void
  ): Promise<TerminateEnvironmentCommandOutput> | void {
    const command = new TerminateEnvironmentCommand(args);
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
   * <p>Updates the specified application to have the specified properties.</p>
   *          <note>
   *             <p>If a property (for example, <code>description</code>) is not provided, the value
   *         remains unchanged. To clear these properties, specify an empty string.</p>
   *          </note>
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

  /**
   * <p>Modifies lifecycle settings for an application.</p>
   */
  public updateApplicationResourceLifecycle(
    args: UpdateApplicationResourceLifecycleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationResourceLifecycleCommandOutput>;
  public updateApplicationResourceLifecycle(
    args: UpdateApplicationResourceLifecycleCommandInput,
    cb: (err: any, data?: UpdateApplicationResourceLifecycleCommandOutput) => void
  ): void;
  public updateApplicationResourceLifecycle(
    args: UpdateApplicationResourceLifecycleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationResourceLifecycleCommandOutput) => void
  ): void;
  public updateApplicationResourceLifecycle(
    args: UpdateApplicationResourceLifecycleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateApplicationResourceLifecycleCommandOutput) => void),
    cb?: (err: any, data?: UpdateApplicationResourceLifecycleCommandOutput) => void
  ): Promise<UpdateApplicationResourceLifecycleCommandOutput> | void {
    const command = new UpdateApplicationResourceLifecycleCommand(args);
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
   * <p>Updates the specified application version to have the specified properties.</p>
   *          <note>
   *             <p>If a property (for example, <code>description</code>) is not provided, the value
   *         remains unchanged. To clear properties, specify an empty string.</p>
   *          </note>
   */
  public updateApplicationVersion(
    args: UpdateApplicationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationVersionCommandOutput>;
  public updateApplicationVersion(
    args: UpdateApplicationVersionCommandInput,
    cb: (err: any, data?: UpdateApplicationVersionCommandOutput) => void
  ): void;
  public updateApplicationVersion(
    args: UpdateApplicationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationVersionCommandOutput) => void
  ): void;
  public updateApplicationVersion(
    args: UpdateApplicationVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateApplicationVersionCommandOutput) => void),
    cb?: (err: any, data?: UpdateApplicationVersionCommandOutput) => void
  ): Promise<UpdateApplicationVersionCommandOutput> | void {
    const command = new UpdateApplicationVersionCommand(args);
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
   * <p>Updates the specified configuration template to have the specified properties or
   *       configuration option values.</p>
   *          <note>
   *             <p>If a property (for example, <code>ApplicationName</code>) is not provided, its value
   *         remains unchanged. To clear such properties, specify an empty string.</p>
   *          </note>
   *          <p>Related Topics</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>DescribeConfigurationOptions</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public updateConfigurationTemplate(
    args: UpdateConfigurationTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationTemplateCommandOutput>;
  public updateConfigurationTemplate(
    args: UpdateConfigurationTemplateCommandInput,
    cb: (err: any, data?: UpdateConfigurationTemplateCommandOutput) => void
  ): void;
  public updateConfigurationTemplate(
    args: UpdateConfigurationTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationTemplateCommandOutput) => void
  ): void;
  public updateConfigurationTemplate(
    args: UpdateConfigurationTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConfigurationTemplateCommandOutput) => void),
    cb?: (err: any, data?: UpdateConfigurationTemplateCommandOutput) => void
  ): Promise<UpdateConfigurationTemplateCommandOutput> | void {
    const command = new UpdateConfigurationTemplateCommand(args);
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
   * <p>Updates the environment description, deploys a new application version, updates the
   *       configuration settings to an entirely new configuration template, or updates select
   *       configuration option values in the running environment.</p>
   *          <p> Attempting to update both the release and configuration is not allowed and AWS Elastic
   *       Beanstalk returns an <code>InvalidParameterCombination</code> error. </p>
   *          <p> When updating the configuration settings to a new template or individual settings, a
   *       draft configuration is created and <a>DescribeConfigurationSettings</a> for this
   *       environment returns two setting descriptions with different <code>DeploymentStatus</code>
   *       values. </p>
   */
  public updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentCommandOutput>;
  public updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  public updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  public updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): Promise<UpdateEnvironmentCommandOutput> | void {
    const command = new UpdateEnvironmentCommand(args);
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
   * <p>Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: <code>TagsToAdd</code>
   *       for tags to add or update, and <code>TagsToRemove</code>.</p>
   *          <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see
   *       <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application
   *         Resources</a>.</p>
   *          <p>If you create a custom IAM user policy to control permission to this operation, specify
   *       one of the following two virtual actions (or both) instead of the API operation name:</p>
   *          <dl>
   *             <dt>elasticbeanstalk:AddTags</dt>
   *             <dd>
   *                <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tags to add in the <code>TagsToAdd</code>
   *           parameter.</p>
   *             </dd>
   *             <dt>elasticbeanstalk:RemoveTags</dt>
   *             <dd>
   *                <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tag keys to remove in the <code>TagsToRemove</code>
   *           parameter.</p>
   *             </dd>
   *          </dl>
   *          <p>For details about creating a custom user policy, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#AWSHowTo.iam.policies">Creating a Custom User Policy</a>.</p>
   */
  public updateTagsForResource(
    args: UpdateTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTagsForResourceCommandOutput>;
  public updateTagsForResource(
    args: UpdateTagsForResourceCommandInput,
    cb: (err: any, data?: UpdateTagsForResourceCommandOutput) => void
  ): void;
  public updateTagsForResource(
    args: UpdateTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTagsForResourceCommandOutput) => void
  ): void;
  public updateTagsForResource(
    args: UpdateTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: UpdateTagsForResourceCommandOutput) => void
  ): Promise<UpdateTagsForResourceCommandOutput> | void {
    const command = new UpdateTagsForResourceCommand(args);
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
   * <p>Takes a set of configuration settings and either a configuration template or
   *       environment, and determines whether those values are valid.</p>
   *          <p>This action returns a list of messages indicating any errors or warnings associated
   *       with the selection of option values.</p>
   */
  public validateConfigurationSettings(
    args: ValidateConfigurationSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateConfigurationSettingsCommandOutput>;
  public validateConfigurationSettings(
    args: ValidateConfigurationSettingsCommandInput,
    cb: (err: any, data?: ValidateConfigurationSettingsCommandOutput) => void
  ): void;
  public validateConfigurationSettings(
    args: ValidateConfigurationSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateConfigurationSettingsCommandOutput) => void
  ): void;
  public validateConfigurationSettings(
    args: ValidateConfigurationSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ValidateConfigurationSettingsCommandOutput) => void),
    cb?: (err: any, data?: ValidateConfigurationSettingsCommandOutput) => void
  ): Promise<ValidateConfigurationSettingsCommandOutput> | void {
    const command = new ValidateConfigurationSettingsCommand(args);
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
