// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { AppConfigClient } from "./AppConfigClient";
import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import {
  CreateConfigurationProfileCommand,
  CreateConfigurationProfileCommandInput,
  CreateConfigurationProfileCommandOutput,
} from "./commands/CreateConfigurationProfileCommand";
import {
  CreateDeploymentStrategyCommand,
  CreateDeploymentStrategyCommandInput,
  CreateDeploymentStrategyCommandOutput,
} from "./commands/CreateDeploymentStrategyCommand";
import {
  CreateEnvironmentCommand,
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,
} from "./commands/CreateEnvironmentCommand";
import {
  CreateExtensionAssociationCommand,
  CreateExtensionAssociationCommandInput,
  CreateExtensionAssociationCommandOutput,
} from "./commands/CreateExtensionAssociationCommand";
import {
  CreateExtensionCommand,
  CreateExtensionCommandInput,
  CreateExtensionCommandOutput,
} from "./commands/CreateExtensionCommand";
import {
  CreateHostedConfigurationVersionCommand,
  CreateHostedConfigurationVersionCommandInput,
  CreateHostedConfigurationVersionCommandOutput,
} from "./commands/CreateHostedConfigurationVersionCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import {
  DeleteConfigurationProfileCommand,
  DeleteConfigurationProfileCommandInput,
  DeleteConfigurationProfileCommandOutput,
} from "./commands/DeleteConfigurationProfileCommand";
import {
  DeleteDeploymentStrategyCommand,
  DeleteDeploymentStrategyCommandInput,
  DeleteDeploymentStrategyCommandOutput,
} from "./commands/DeleteDeploymentStrategyCommand";
import {
  DeleteEnvironmentCommand,
  DeleteEnvironmentCommandInput,
  DeleteEnvironmentCommandOutput,
} from "./commands/DeleteEnvironmentCommand";
import {
  DeleteExtensionAssociationCommand,
  DeleteExtensionAssociationCommandInput,
  DeleteExtensionAssociationCommandOutput,
} from "./commands/DeleteExtensionAssociationCommand";
import {
  DeleteExtensionCommand,
  DeleteExtensionCommandInput,
  DeleteExtensionCommandOutput,
} from "./commands/DeleteExtensionCommand";
import {
  DeleteHostedConfigurationVersionCommand,
  DeleteHostedConfigurationVersionCommandInput,
  DeleteHostedConfigurationVersionCommandOutput,
} from "./commands/DeleteHostedConfigurationVersionCommand";
import {
  GetApplicationCommand,
  GetApplicationCommandInput,
  GetApplicationCommandOutput,
} from "./commands/GetApplicationCommand";
import {
  GetConfigurationCommand,
  GetConfigurationCommandInput,
  GetConfigurationCommandOutput,
} from "./commands/GetConfigurationCommand";
import {
  GetConfigurationProfileCommand,
  GetConfigurationProfileCommandInput,
  GetConfigurationProfileCommandOutput,
} from "./commands/GetConfigurationProfileCommand";
import {
  GetDeploymentCommand,
  GetDeploymentCommandInput,
  GetDeploymentCommandOutput,
} from "./commands/GetDeploymentCommand";
import {
  GetDeploymentStrategyCommand,
  GetDeploymentStrategyCommandInput,
  GetDeploymentStrategyCommandOutput,
} from "./commands/GetDeploymentStrategyCommand";
import {
  GetEnvironmentCommand,
  GetEnvironmentCommandInput,
  GetEnvironmentCommandOutput,
} from "./commands/GetEnvironmentCommand";
import {
  GetExtensionAssociationCommand,
  GetExtensionAssociationCommandInput,
  GetExtensionAssociationCommandOutput,
} from "./commands/GetExtensionAssociationCommand";
import {
  GetExtensionCommand,
  GetExtensionCommandInput,
  GetExtensionCommandOutput,
} from "./commands/GetExtensionCommand";
import {
  GetHostedConfigurationVersionCommand,
  GetHostedConfigurationVersionCommandInput,
  GetHostedConfigurationVersionCommandOutput,
} from "./commands/GetHostedConfigurationVersionCommand";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "./commands/ListApplicationsCommand";
import {
  ListConfigurationProfilesCommand,
  ListConfigurationProfilesCommandInput,
  ListConfigurationProfilesCommandOutput,
} from "./commands/ListConfigurationProfilesCommand";
import {
  ListDeploymentsCommand,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput,
} from "./commands/ListDeploymentsCommand";
import {
  ListDeploymentStrategiesCommand,
  ListDeploymentStrategiesCommandInput,
  ListDeploymentStrategiesCommandOutput,
} from "./commands/ListDeploymentStrategiesCommand";
import {
  ListEnvironmentsCommand,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
} from "./commands/ListEnvironmentsCommand";
import {
  ListExtensionAssociationsCommand,
  ListExtensionAssociationsCommandInput,
  ListExtensionAssociationsCommandOutput,
} from "./commands/ListExtensionAssociationsCommand";
import {
  ListExtensionsCommand,
  ListExtensionsCommandInput,
  ListExtensionsCommandOutput,
} from "./commands/ListExtensionsCommand";
import {
  ListHostedConfigurationVersionsCommand,
  ListHostedConfigurationVersionsCommandInput,
  ListHostedConfigurationVersionsCommandOutput,
} from "./commands/ListHostedConfigurationVersionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartDeploymentCommand,
  StartDeploymentCommandInput,
  StartDeploymentCommandOutput,
} from "./commands/StartDeploymentCommand";
import {
  StopDeploymentCommand,
  StopDeploymentCommandInput,
  StopDeploymentCommandOutput,
} from "./commands/StopDeploymentCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import {
  UpdateConfigurationProfileCommand,
  UpdateConfigurationProfileCommandInput,
  UpdateConfigurationProfileCommandOutput,
} from "./commands/UpdateConfigurationProfileCommand";
import {
  UpdateDeploymentStrategyCommand,
  UpdateDeploymentStrategyCommandInput,
  UpdateDeploymentStrategyCommandOutput,
} from "./commands/UpdateDeploymentStrategyCommand";
import {
  UpdateEnvironmentCommand,
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput,
} from "./commands/UpdateEnvironmentCommand";
import {
  UpdateExtensionAssociationCommand,
  UpdateExtensionAssociationCommandInput,
  UpdateExtensionAssociationCommandOutput,
} from "./commands/UpdateExtensionAssociationCommand";
import {
  UpdateExtensionCommand,
  UpdateExtensionCommandInput,
  UpdateExtensionCommandOutput,
} from "./commands/UpdateExtensionCommand";
import {
  ValidateConfigurationCommand,
  ValidateConfigurationCommandInput,
  ValidateConfigurationCommandOutput,
} from "./commands/ValidateConfigurationCommand";

/**
 * <p>Use AppConfig, a capability of Amazon Web Services Systems Manager, to create, manage, and quickly
 *          deploy application configurations. AppConfig supports controlled deployments to
 *          applications of any size and includes built-in validation checks and monitoring. You can
 *          use AppConfig with applications hosted on Amazon EC2 instances, Lambda, containers,
 *          mobile applications, or IoT devices.</p>
 *          <p>To prevent errors when deploying application configurations, especially for production
 *          systems where a simple typo could cause an unexpected outage, AppConfig includes
 *          validators. A validator provides a syntactic or semantic check to ensure that the
 *          configuration you want to deploy works as intended. To validate your application
 *          configuration data, you provide a schema or an Amazon Web Services Lambda function that runs against
 *          the configuration. The configuration deployment or update can only proceed when the
 *          configuration data is valid.</p>
 *          <p>During a configuration deployment, AppConfig monitors the application to
 *          ensure that the deployment is successful. If the system encounters an error, AppConfig rolls back the change to minimize impact for your application users. You can
 *          configure a deployment strategy for each application or environment that includes
 *          deployment criteria, including velocity, bake time, and alarms to monitor. Similar to error
 *          monitoring, if a deployment triggers an alarm, AppConfig automatically rolls back
 *          to the previous version. </p>
 *          <p>AppConfig supports multiple use cases. Here are some examples:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Feature flags</b>: Use AppConfig to turn on
 *                new features that require a timely deployment, such as a product launch or
 *                announcement. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Application tuning</b>: Use AppConfig to
 *                carefully introduce changes to your application that can only be tested with
 *                production traffic.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Allow list</b>: Use AppConfig to allow
 *                premium subscribers to access paid content. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Operational issues</b>: Use AppConfig to
 *                reduce stress on your application when a dependency or other external factor impacts
 *                the system.</p>
 *             </li>
 *          </ul>
 *          <p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html">AppConfig User
 *          Guide</a>.</p>
 */
export class AppConfig extends AppConfigClient {
  /**
   * <p>Creates an application. In AppConfig, an application is simply an
   *          organizational construct like a folder. This organizational construct has a relationship
   *          with some unit of executable code. For example, you could create an application called
   *          MyMobileApp to organize and manage configuration data for a mobile application installed by
   *          your users.</p>
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
   * <p>Creates a configuration profile, which is information that enables AppConfig
   *          to access the configuration source. Valid configuration sources include the AppConfig hosted configuration store, Amazon Web Services Systems Manager (SSM) documents, SSM Parameter Store
   *          parameters, Amazon S3 objects, or any <a href="http://docs.aws.amazon.com/codepipeline/latest/userguide/integrations-action-type.html#integrations-source">integration source
   *             action</a> supported by CodePipeline. A configuration profile includes the following
   *          information:</p>
   *
   *          <ul>
   *             <li>
   *                <p>The URI location of the configuration data.</p>
   *             </li>
   *             <li>
   *                <p>The Identity and Access Management (IAM) role that provides access to the configuration data.</p>
   *             </li>
   *             <li>
   *                <p>A validator for the configuration data. Available validators include either a JSON
   *                Schema or an Amazon Web Services Lambda function.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-configuration-and-profile.html">Create a
   *             Configuration and a Configuration Profile</a> in the <i>AppConfig
   *             User Guide</i>.</p>
   */
  public createConfigurationProfile(
    args: CreateConfigurationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationProfileCommandOutput>;
  public createConfigurationProfile(
    args: CreateConfigurationProfileCommandInput,
    cb: (err: any, data?: CreateConfigurationProfileCommandOutput) => void
  ): void;
  public createConfigurationProfile(
    args: CreateConfigurationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationProfileCommandOutput) => void
  ): void;
  public createConfigurationProfile(
    args: CreateConfigurationProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConfigurationProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateConfigurationProfileCommandOutput) => void
  ): Promise<CreateConfigurationProfileCommandOutput> | void {
    const command = new CreateConfigurationProfileCommand(args);
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
   * <p>Creates a deployment strategy that defines important criteria for rolling out your
   *          configuration to the designated targets. A deployment strategy includes the overall
   *          duration required, a percentage of targets to receive the deployment during each interval,
   *          an algorithm that defines how percentage grows, and bake time.</p>
   */
  public createDeploymentStrategy(
    args: CreateDeploymentStrategyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentStrategyCommandOutput>;
  public createDeploymentStrategy(
    args: CreateDeploymentStrategyCommandInput,
    cb: (err: any, data?: CreateDeploymentStrategyCommandOutput) => void
  ): void;
  public createDeploymentStrategy(
    args: CreateDeploymentStrategyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentStrategyCommandOutput) => void
  ): void;
  public createDeploymentStrategy(
    args: CreateDeploymentStrategyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDeploymentStrategyCommandOutput) => void),
    cb?: (err: any, data?: CreateDeploymentStrategyCommandOutput) => void
  ): Promise<CreateDeploymentStrategyCommandOutput> | void {
    const command = new CreateDeploymentStrategyCommand(args);
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
   * <p>Creates an environment. For each application, you define one or more environments. An
   *          environment is a deployment group of AppConfig targets, such as applications in a
   *             <code>Beta</code> or <code>Production</code> environment. You can also define
   *          environments for application subcomponents such as the <code>Web</code>,
   *             <code>Mobile</code> and <code>Back-end</code> components for your application. You can
   *          configure Amazon CloudWatch alarms for each environment. The system monitors alarms during a
   *          configuration deployment. If an alarm is triggered, the system rolls back the
   *          configuration.</p>
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
   * <p>Creates an AppConfig extension. An extension augments your ability to inject
   *          logic or behavior at different points during the AppConfig workflow of creating
   *          or deploying a configuration.</p>
   *          <p>You can create your own extensions or use the Amazon Web Services-authored extensions provided by
   *             AppConfig. For most use-cases, to create your own extension, you must create
   *          an Lambda function to perform any computation and processing defined in the
   *          extension. For more information about extensions, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with
   *                AppConfig extensions</a> in the
   *          <i>AppConfig User Guide</i>.</p>
   */
  public createExtension(
    args: CreateExtensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExtensionCommandOutput>;
  public createExtension(
    args: CreateExtensionCommandInput,
    cb: (err: any, data?: CreateExtensionCommandOutput) => void
  ): void;
  public createExtension(
    args: CreateExtensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExtensionCommandOutput) => void
  ): void;
  public createExtension(
    args: CreateExtensionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateExtensionCommandOutput) => void),
    cb?: (err: any, data?: CreateExtensionCommandOutput) => void
  ): Promise<CreateExtensionCommandOutput> | void {
    const command = new CreateExtensionCommand(args);
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
   * <p>When you create an extension or configure an Amazon Web Services-authored extension, you
   *          associate the extension with an AppConfig application, environment, or
   *          configuration profile. For example, you can choose to run the <code>AppConfig
   *             deployment events to Amazon SNS</code>
   *          Amazon Web Services-authored extension and receive notifications on an Amazon SNS
   *          topic anytime a configuration deployment is started for a specific application. Defining
   *          which extension to associate with an AppConfig resource is called an
   *             <i>extension association</i>. An extension association is a specified
   *          relationship between an extension and an AppConfig resource, such as an
   *          application or a configuration profile. For more information about extensions and
   *          associations, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with
   *                AppConfig extensions</a> in the
   *          <i>AppConfig User Guide</i>.</p>
   */
  public createExtensionAssociation(
    args: CreateExtensionAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExtensionAssociationCommandOutput>;
  public createExtensionAssociation(
    args: CreateExtensionAssociationCommandInput,
    cb: (err: any, data?: CreateExtensionAssociationCommandOutput) => void
  ): void;
  public createExtensionAssociation(
    args: CreateExtensionAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExtensionAssociationCommandOutput) => void
  ): void;
  public createExtensionAssociation(
    args: CreateExtensionAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateExtensionAssociationCommandOutput) => void),
    cb?: (err: any, data?: CreateExtensionAssociationCommandOutput) => void
  ): Promise<CreateExtensionAssociationCommandOutput> | void {
    const command = new CreateExtensionAssociationCommand(args);
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
   * <p>Creates a new configuration in the AppConfig hosted configuration
   *          store.</p>
   */
  public createHostedConfigurationVersion(
    args: CreateHostedConfigurationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHostedConfigurationVersionCommandOutput>;
  public createHostedConfigurationVersion(
    args: CreateHostedConfigurationVersionCommandInput,
    cb: (err: any, data?: CreateHostedConfigurationVersionCommandOutput) => void
  ): void;
  public createHostedConfigurationVersion(
    args: CreateHostedConfigurationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHostedConfigurationVersionCommandOutput) => void
  ): void;
  public createHostedConfigurationVersion(
    args: CreateHostedConfigurationVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateHostedConfigurationVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateHostedConfigurationVersionCommandOutput) => void
  ): Promise<CreateHostedConfigurationVersionCommandOutput> | void {
    const command = new CreateHostedConfigurationVersionCommand(args);
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
   * <p>Deletes an application. Deleting an application does not delete a configuration from a
   *          host.</p>
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
   * <p>Deletes a configuration profile. Deleting a configuration profile does not delete a
   *          configuration from a host.</p>
   */
  public deleteConfigurationProfile(
    args: DeleteConfigurationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationProfileCommandOutput>;
  public deleteConfigurationProfile(
    args: DeleteConfigurationProfileCommandInput,
    cb: (err: any, data?: DeleteConfigurationProfileCommandOutput) => void
  ): void;
  public deleteConfigurationProfile(
    args: DeleteConfigurationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationProfileCommandOutput) => void
  ): void;
  public deleteConfigurationProfile(
    args: DeleteConfigurationProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConfigurationProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteConfigurationProfileCommandOutput) => void
  ): Promise<DeleteConfigurationProfileCommandOutput> | void {
    const command = new DeleteConfigurationProfileCommand(args);
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
   * <p>Deletes a deployment strategy. Deleting a deployment strategy does not delete a
   *          configuration from a host.</p>
   */
  public deleteDeploymentStrategy(
    args: DeleteDeploymentStrategyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeploymentStrategyCommandOutput>;
  public deleteDeploymentStrategy(
    args: DeleteDeploymentStrategyCommandInput,
    cb: (err: any, data?: DeleteDeploymentStrategyCommandOutput) => void
  ): void;
  public deleteDeploymentStrategy(
    args: DeleteDeploymentStrategyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeploymentStrategyCommandOutput) => void
  ): void;
  public deleteDeploymentStrategy(
    args: DeleteDeploymentStrategyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDeploymentStrategyCommandOutput) => void),
    cb?: (err: any, data?: DeleteDeploymentStrategyCommandOutput) => void
  ): Promise<DeleteDeploymentStrategyCommandOutput> | void {
    const command = new DeleteDeploymentStrategyCommand(args);
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
   * <p>Deletes an environment. Deleting an environment does not delete a configuration from a
   *          host.</p>
   */
  public deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentCommandOutput>;
  public deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;
  public deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;
  public deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): Promise<DeleteEnvironmentCommandOutput> | void {
    const command = new DeleteEnvironmentCommand(args);
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
   * <p>Deletes an AppConfig extension. You must delete all associations to an
   *          extension before you delete the extension.</p>
   */
  public deleteExtension(
    args: DeleteExtensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExtensionCommandOutput>;
  public deleteExtension(
    args: DeleteExtensionCommandInput,
    cb: (err: any, data?: DeleteExtensionCommandOutput) => void
  ): void;
  public deleteExtension(
    args: DeleteExtensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExtensionCommandOutput) => void
  ): void;
  public deleteExtension(
    args: DeleteExtensionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteExtensionCommandOutput) => void),
    cb?: (err: any, data?: DeleteExtensionCommandOutput) => void
  ): Promise<DeleteExtensionCommandOutput> | void {
    const command = new DeleteExtensionCommand(args);
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
   * <p>Deletes an extension association. This action doesn't delete extensions defined in the
   *          association.</p>
   */
  public deleteExtensionAssociation(
    args: DeleteExtensionAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExtensionAssociationCommandOutput>;
  public deleteExtensionAssociation(
    args: DeleteExtensionAssociationCommandInput,
    cb: (err: any, data?: DeleteExtensionAssociationCommandOutput) => void
  ): void;
  public deleteExtensionAssociation(
    args: DeleteExtensionAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExtensionAssociationCommandOutput) => void
  ): void;
  public deleteExtensionAssociation(
    args: DeleteExtensionAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteExtensionAssociationCommandOutput) => void),
    cb?: (err: any, data?: DeleteExtensionAssociationCommandOutput) => void
  ): Promise<DeleteExtensionAssociationCommandOutput> | void {
    const command = new DeleteExtensionAssociationCommand(args);
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
   * <p>Deletes a version of a configuration from the AppConfig hosted configuration
   *          store.</p>
   */
  public deleteHostedConfigurationVersion(
    args: DeleteHostedConfigurationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHostedConfigurationVersionCommandOutput>;
  public deleteHostedConfigurationVersion(
    args: DeleteHostedConfigurationVersionCommandInput,
    cb: (err: any, data?: DeleteHostedConfigurationVersionCommandOutput) => void
  ): void;
  public deleteHostedConfigurationVersion(
    args: DeleteHostedConfigurationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHostedConfigurationVersionCommandOutput) => void
  ): void;
  public deleteHostedConfigurationVersion(
    args: DeleteHostedConfigurationVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteHostedConfigurationVersionCommandOutput) => void),
    cb?: (err: any, data?: DeleteHostedConfigurationVersionCommandOutput) => void
  ): Promise<DeleteHostedConfigurationVersionCommandOutput> | void {
    const command = new DeleteHostedConfigurationVersionCommand(args);
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
   * <p>Retrieves information about an application.</p>
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
   * @deprecated
   *
   * <p>Retrieves the latest deployed configuration.</p>
   *
   *          <important>
   *             <p>Note the following important information.</p>
   *             <ul>
   *                <li>
   *                   <p>This API action has been deprecated. Calls to receive configuration data should
   *                   use the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_StartConfigurationSession.html">StartConfigurationSession</a> and <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html">GetLatestConfiguration</a> APIs instead. </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>GetConfiguration</code> is a priced call. For more information, see
   *                      <a href="https://aws.amazon.com/systems-manager/pricing/">Pricing</a>.</p>
   *                </li>
   *                <li>
   *                   <p>AppConfig uses the value of the
   *                      <code>ClientConfigurationVersion</code> parameter to identify the configuration
   *                   version on your clients. If you don’t send <code>ClientConfigurationVersion</code>
   *                   with each call to <code>GetConfiguration</code>, your clients receive the current
   *                   configuration. You are charged each time your clients receive a
   *                   configuration.</p>
   *                   <p>To avoid excess charges, we recommend you use the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/StartConfigurationSession.html">StartConfigurationSession</a> and <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/GetLatestConfiguration.html">GetLatestConfiguration</a> APIs, which track the client configuration
   *                   version on your behalf. If you choose to continue using
   *                      <code>GetConfiguration</code>, we recommend that you include the
   *                      <code>ClientConfigurationVersion</code> value with every call to
   *                      <code>GetConfiguration</code>. The value to use for
   *                      <code>ClientConfigurationVersion</code> comes from the
   *                      <code>ConfigurationVersion</code> attribute returned by
   *                      <code>GetConfiguration</code> when there is new or updated data, and should be
   *                   saved for subsequent calls to <code>GetConfiguration</code>.</p>
   *                </li>
   *             </ul>
   *          </important>
   */
  public getConfiguration(
    args: GetConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationCommandOutput>;
  public getConfiguration(
    args: GetConfigurationCommandInput,
    cb: (err: any, data?: GetConfigurationCommandOutput) => void
  ): void;
  public getConfiguration(
    args: GetConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationCommandOutput) => void
  ): void;
  public getConfiguration(
    args: GetConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetConfigurationCommandOutput) => void
  ): Promise<GetConfigurationCommandOutput> | void {
    const command = new GetConfigurationCommand(args);
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
   * <p>Retrieves information about a configuration profile.</p>
   */
  public getConfigurationProfile(
    args: GetConfigurationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationProfileCommandOutput>;
  public getConfigurationProfile(
    args: GetConfigurationProfileCommandInput,
    cb: (err: any, data?: GetConfigurationProfileCommandOutput) => void
  ): void;
  public getConfigurationProfile(
    args: GetConfigurationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationProfileCommandOutput) => void
  ): void;
  public getConfigurationProfile(
    args: GetConfigurationProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConfigurationProfileCommandOutput) => void),
    cb?: (err: any, data?: GetConfigurationProfileCommandOutput) => void
  ): Promise<GetConfigurationProfileCommandOutput> | void {
    const command = new GetConfigurationProfileCommand(args);
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
   * <p>Retrieves information about a configuration deployment.</p>
   */
  public getDeployment(
    args: GetDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentCommandOutput>;
  public getDeployment(
    args: GetDeploymentCommandInput,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
  public getDeployment(
    args: GetDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
  public getDeployment(
    args: GetDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeploymentCommandOutput) => void),
    cb?: (err: any, data?: GetDeploymentCommandOutput) => void
  ): Promise<GetDeploymentCommandOutput> | void {
    const command = new GetDeploymentCommand(args);
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
   * <p>Retrieves information about a deployment strategy. A deployment strategy defines
   *          important criteria for rolling out your configuration to the designated targets. A
   *          deployment strategy includes the overall duration required, a percentage of targets to
   *          receive the deployment during each interval, an algorithm that defines how percentage
   *          grows, and bake time.</p>
   */
  public getDeploymentStrategy(
    args: GetDeploymentStrategyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentStrategyCommandOutput>;
  public getDeploymentStrategy(
    args: GetDeploymentStrategyCommandInput,
    cb: (err: any, data?: GetDeploymentStrategyCommandOutput) => void
  ): void;
  public getDeploymentStrategy(
    args: GetDeploymentStrategyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentStrategyCommandOutput) => void
  ): void;
  public getDeploymentStrategy(
    args: GetDeploymentStrategyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeploymentStrategyCommandOutput) => void),
    cb?: (err: any, data?: GetDeploymentStrategyCommandOutput) => void
  ): Promise<GetDeploymentStrategyCommandOutput> | void {
    const command = new GetDeploymentStrategyCommand(args);
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
   * <p>Retrieves information about an environment. An environment is a deployment group of
   *             AppConfig applications, such as applications in a <code>Production</code>
   *          environment or in an <code>EU_Region</code> environment. Each configuration deployment
   *          targets an environment. You can enable one or more Amazon CloudWatch alarms for an environment. If
   *          an alarm is triggered during a deployment, AppConfig roles back the
   *          configuration.</p>
   */
  public getEnvironment(
    args: GetEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentCommandOutput>;
  public getEnvironment(
    args: GetEnvironmentCommandInput,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;
  public getEnvironment(
    args: GetEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;
  public getEnvironment(
    args: GetEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): Promise<GetEnvironmentCommandOutput> | void {
    const command = new GetEnvironmentCommand(args);
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
   * <p>Returns information about an AppConfig extension.</p>
   */
  public getExtension(
    args: GetExtensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExtensionCommandOutput>;
  public getExtension(args: GetExtensionCommandInput, cb: (err: any, data?: GetExtensionCommandOutput) => void): void;
  public getExtension(
    args: GetExtensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExtensionCommandOutput) => void
  ): void;
  public getExtension(
    args: GetExtensionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetExtensionCommandOutput) => void),
    cb?: (err: any, data?: GetExtensionCommandOutput) => void
  ): Promise<GetExtensionCommandOutput> | void {
    const command = new GetExtensionCommand(args);
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
   * <p>Returns information about an AppConfig extension association. For more
   *          information about extensions and associations, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with
   *                AppConfig extensions</a> in the
   *          <i>AppConfig User Guide</i>.</p>
   */
  public getExtensionAssociation(
    args: GetExtensionAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExtensionAssociationCommandOutput>;
  public getExtensionAssociation(
    args: GetExtensionAssociationCommandInput,
    cb: (err: any, data?: GetExtensionAssociationCommandOutput) => void
  ): void;
  public getExtensionAssociation(
    args: GetExtensionAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExtensionAssociationCommandOutput) => void
  ): void;
  public getExtensionAssociation(
    args: GetExtensionAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetExtensionAssociationCommandOutput) => void),
    cb?: (err: any, data?: GetExtensionAssociationCommandOutput) => void
  ): Promise<GetExtensionAssociationCommandOutput> | void {
    const command = new GetExtensionAssociationCommand(args);
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
   * <p>Retrieves information about a specific configuration version.</p>
   */
  public getHostedConfigurationVersion(
    args: GetHostedConfigurationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHostedConfigurationVersionCommandOutput>;
  public getHostedConfigurationVersion(
    args: GetHostedConfigurationVersionCommandInput,
    cb: (err: any, data?: GetHostedConfigurationVersionCommandOutput) => void
  ): void;
  public getHostedConfigurationVersion(
    args: GetHostedConfigurationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHostedConfigurationVersionCommandOutput) => void
  ): void;
  public getHostedConfigurationVersion(
    args: GetHostedConfigurationVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetHostedConfigurationVersionCommandOutput) => void),
    cb?: (err: any, data?: GetHostedConfigurationVersionCommandOutput) => void
  ): Promise<GetHostedConfigurationVersionCommandOutput> | void {
    const command = new GetHostedConfigurationVersionCommand(args);
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
   * <p>Lists all applications in your Amazon Web Services account.</p>
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
   * <p>Lists the configuration profiles for an application.</p>
   */
  public listConfigurationProfiles(
    args: ListConfigurationProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationProfilesCommandOutput>;
  public listConfigurationProfiles(
    args: ListConfigurationProfilesCommandInput,
    cb: (err: any, data?: ListConfigurationProfilesCommandOutput) => void
  ): void;
  public listConfigurationProfiles(
    args: ListConfigurationProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationProfilesCommandOutput) => void
  ): void;
  public listConfigurationProfiles(
    args: ListConfigurationProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConfigurationProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListConfigurationProfilesCommandOutput) => void
  ): Promise<ListConfigurationProfilesCommandOutput> | void {
    const command = new ListConfigurationProfilesCommand(args);
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
   * <p>Lists the deployments for an environment in descending deployment number order.</p>
   */
  public listDeployments(
    args: ListDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentsCommandOutput>;
  public listDeployments(
    args: ListDeploymentsCommandInput,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;
  public listDeployments(
    args: ListDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;
  public listDeployments(
    args: ListDeploymentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeploymentsCommandOutput) => void),
    cb?: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): Promise<ListDeploymentsCommandOutput> | void {
    const command = new ListDeploymentsCommand(args);
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
   * <p>Lists deployment strategies.</p>
   */
  public listDeploymentStrategies(
    args: ListDeploymentStrategiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentStrategiesCommandOutput>;
  public listDeploymentStrategies(
    args: ListDeploymentStrategiesCommandInput,
    cb: (err: any, data?: ListDeploymentStrategiesCommandOutput) => void
  ): void;
  public listDeploymentStrategies(
    args: ListDeploymentStrategiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentStrategiesCommandOutput) => void
  ): void;
  public listDeploymentStrategies(
    args: ListDeploymentStrategiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeploymentStrategiesCommandOutput) => void),
    cb?: (err: any, data?: ListDeploymentStrategiesCommandOutput) => void
  ): Promise<ListDeploymentStrategiesCommandOutput> | void {
    const command = new ListDeploymentStrategiesCommand(args);
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
   * <p>Lists the environments for an application.</p>
   */
  public listEnvironments(
    args: ListEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentsCommandOutput>;
  public listEnvironments(
    args: ListEnvironmentsCommandInput,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;
  public listEnvironments(
    args: ListEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;
  public listEnvironments(
    args: ListEnvironmentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEnvironmentsCommandOutput) => void),
    cb?: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): Promise<ListEnvironmentsCommandOutput> | void {
    const command = new ListEnvironmentsCommand(args);
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
   * <p>Lists all AppConfig extension associations in the account. For more
   *          information about extensions and associations, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with
   *                AppConfig extensions</a> in the
   *          <i>AppConfig User Guide</i>.</p>
   */
  public listExtensionAssociations(
    args: ListExtensionAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExtensionAssociationsCommandOutput>;
  public listExtensionAssociations(
    args: ListExtensionAssociationsCommandInput,
    cb: (err: any, data?: ListExtensionAssociationsCommandOutput) => void
  ): void;
  public listExtensionAssociations(
    args: ListExtensionAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExtensionAssociationsCommandOutput) => void
  ): void;
  public listExtensionAssociations(
    args: ListExtensionAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListExtensionAssociationsCommandOutput) => void),
    cb?: (err: any, data?: ListExtensionAssociationsCommandOutput) => void
  ): Promise<ListExtensionAssociationsCommandOutput> | void {
    const command = new ListExtensionAssociationsCommand(args);
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
   * <p>Lists all custom and Amazon Web Services-authored AppConfig extensions in the
   *          account. For more information about extensions, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with
   *                AppConfig extensions</a> in the
   *          <i>AppConfig User Guide</i>.</p>
   */
  public listExtensions(
    args: ListExtensionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExtensionsCommandOutput>;
  public listExtensions(
    args: ListExtensionsCommandInput,
    cb: (err: any, data?: ListExtensionsCommandOutput) => void
  ): void;
  public listExtensions(
    args: ListExtensionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExtensionsCommandOutput) => void
  ): void;
  public listExtensions(
    args: ListExtensionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListExtensionsCommandOutput) => void),
    cb?: (err: any, data?: ListExtensionsCommandOutput) => void
  ): Promise<ListExtensionsCommandOutput> | void {
    const command = new ListExtensionsCommand(args);
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
   * <p>Lists configurations stored in the AppConfig hosted configuration store by
   *          version.</p>
   */
  public listHostedConfigurationVersions(
    args: ListHostedConfigurationVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHostedConfigurationVersionsCommandOutput>;
  public listHostedConfigurationVersions(
    args: ListHostedConfigurationVersionsCommandInput,
    cb: (err: any, data?: ListHostedConfigurationVersionsCommandOutput) => void
  ): void;
  public listHostedConfigurationVersions(
    args: ListHostedConfigurationVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHostedConfigurationVersionsCommandOutput) => void
  ): void;
  public listHostedConfigurationVersions(
    args: ListHostedConfigurationVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListHostedConfigurationVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListHostedConfigurationVersionsCommandOutput) => void
  ): Promise<ListHostedConfigurationVersionsCommandOutput> | void {
    const command = new ListHostedConfigurationVersionsCommand(args);
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
   * <p>Retrieves the list of key-value tags assigned to the resource.</p>
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
   * <p>Starts a deployment.</p>
   */
  public startDeployment(
    args: StartDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDeploymentCommandOutput>;
  public startDeployment(
    args: StartDeploymentCommandInput,
    cb: (err: any, data?: StartDeploymentCommandOutput) => void
  ): void;
  public startDeployment(
    args: StartDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDeploymentCommandOutput) => void
  ): void;
  public startDeployment(
    args: StartDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartDeploymentCommandOutput) => void),
    cb?: (err: any, data?: StartDeploymentCommandOutput) => void
  ): Promise<StartDeploymentCommandOutput> | void {
    const command = new StartDeploymentCommand(args);
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
   * <p>Stops a deployment. This API action works only on deployments that have a status of
   *             <code>DEPLOYING</code>. This action moves the deployment to a status of
   *             <code>ROLLED_BACK</code>.</p>
   */
  public stopDeployment(
    args: StopDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDeploymentCommandOutput>;
  public stopDeployment(
    args: StopDeploymentCommandInput,
    cb: (err: any, data?: StopDeploymentCommandOutput) => void
  ): void;
  public stopDeployment(
    args: StopDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDeploymentCommandOutput) => void
  ): void;
  public stopDeployment(
    args: StopDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopDeploymentCommandOutput) => void),
    cb?: (err: any, data?: StopDeploymentCommandOutput) => void
  ): Promise<StopDeploymentCommandOutput> | void {
    const command = new StopDeploymentCommand(args);
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
   * <p>Assigns metadata to an AppConfig resource. Tags help organize and categorize
   *          your AppConfig resources. Each tag consists of a key and an optional value, both
   *          of which you define. You can specify a maximum of 50 tags for a resource.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * <p>Deletes a tag key and value from an AppConfig resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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
   * <p>Updates an application.</p>
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
   * <p>Updates a configuration profile.</p>
   */
  public updateConfigurationProfile(
    args: UpdateConfigurationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationProfileCommandOutput>;
  public updateConfigurationProfile(
    args: UpdateConfigurationProfileCommandInput,
    cb: (err: any, data?: UpdateConfigurationProfileCommandOutput) => void
  ): void;
  public updateConfigurationProfile(
    args: UpdateConfigurationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationProfileCommandOutput) => void
  ): void;
  public updateConfigurationProfile(
    args: UpdateConfigurationProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConfigurationProfileCommandOutput) => void),
    cb?: (err: any, data?: UpdateConfigurationProfileCommandOutput) => void
  ): Promise<UpdateConfigurationProfileCommandOutput> | void {
    const command = new UpdateConfigurationProfileCommand(args);
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
   * <p>Updates a deployment strategy.</p>
   */
  public updateDeploymentStrategy(
    args: UpdateDeploymentStrategyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeploymentStrategyCommandOutput>;
  public updateDeploymentStrategy(
    args: UpdateDeploymentStrategyCommandInput,
    cb: (err: any, data?: UpdateDeploymentStrategyCommandOutput) => void
  ): void;
  public updateDeploymentStrategy(
    args: UpdateDeploymentStrategyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeploymentStrategyCommandOutput) => void
  ): void;
  public updateDeploymentStrategy(
    args: UpdateDeploymentStrategyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDeploymentStrategyCommandOutput) => void),
    cb?: (err: any, data?: UpdateDeploymentStrategyCommandOutput) => void
  ): Promise<UpdateDeploymentStrategyCommandOutput> | void {
    const command = new UpdateDeploymentStrategyCommand(args);
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
   * <p>Updates an environment.</p>
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
   * <p>Updates an AppConfig extension. For more information about extensions, see
   *             <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with
   *                AppConfig extensions</a> in the
   *          <i>AppConfig User Guide</i>.</p>
   */
  public updateExtension(
    args: UpdateExtensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateExtensionCommandOutput>;
  public updateExtension(
    args: UpdateExtensionCommandInput,
    cb: (err: any, data?: UpdateExtensionCommandOutput) => void
  ): void;
  public updateExtension(
    args: UpdateExtensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateExtensionCommandOutput) => void
  ): void;
  public updateExtension(
    args: UpdateExtensionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateExtensionCommandOutput) => void),
    cb?: (err: any, data?: UpdateExtensionCommandOutput) => void
  ): Promise<UpdateExtensionCommandOutput> | void {
    const command = new UpdateExtensionCommand(args);
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
   * <p>Updates an association. For more information about extensions and associations, see
   *             <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Working with
   *                AppConfig extensions</a> in the
   *          <i>AppConfig User Guide</i>.</p>
   */
  public updateExtensionAssociation(
    args: UpdateExtensionAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateExtensionAssociationCommandOutput>;
  public updateExtensionAssociation(
    args: UpdateExtensionAssociationCommandInput,
    cb: (err: any, data?: UpdateExtensionAssociationCommandOutput) => void
  ): void;
  public updateExtensionAssociation(
    args: UpdateExtensionAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateExtensionAssociationCommandOutput) => void
  ): void;
  public updateExtensionAssociation(
    args: UpdateExtensionAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateExtensionAssociationCommandOutput) => void),
    cb?: (err: any, data?: UpdateExtensionAssociationCommandOutput) => void
  ): Promise<UpdateExtensionAssociationCommandOutput> | void {
    const command = new UpdateExtensionAssociationCommand(args);
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
   * <p>Uses the validators in a configuration profile to validate a configuration.</p>
   */
  public validateConfiguration(
    args: ValidateConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateConfigurationCommandOutput>;
  public validateConfiguration(
    args: ValidateConfigurationCommandInput,
    cb: (err: any, data?: ValidateConfigurationCommandOutput) => void
  ): void;
  public validateConfiguration(
    args: ValidateConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateConfigurationCommandOutput) => void
  ): void;
  public validateConfiguration(
    args: ValidateConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ValidateConfigurationCommandOutput) => void),
    cb?: (err: any, data?: ValidateConfigurationCommandOutput) => void
  ): Promise<ValidateConfigurationCommandOutput> | void {
    const command = new ValidateConfigurationCommand(args);
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
