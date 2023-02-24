// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateAwsLogSourceCommand,
  CreateAwsLogSourceCommandInput,
  CreateAwsLogSourceCommandOutput,
} from "./commands/CreateAwsLogSourceCommand";
import {
  CreateCustomLogSourceCommand,
  CreateCustomLogSourceCommandInput,
  CreateCustomLogSourceCommandOutput,
} from "./commands/CreateCustomLogSourceCommand";
import {
  CreateDatalakeAutoEnableCommand,
  CreateDatalakeAutoEnableCommandInput,
  CreateDatalakeAutoEnableCommandOutput,
} from "./commands/CreateDatalakeAutoEnableCommand";
import {
  CreateDatalakeCommand,
  CreateDatalakeCommandInput,
  CreateDatalakeCommandOutput,
} from "./commands/CreateDatalakeCommand";
import {
  CreateDatalakeDelegatedAdminCommand,
  CreateDatalakeDelegatedAdminCommandInput,
  CreateDatalakeDelegatedAdminCommandOutput,
} from "./commands/CreateDatalakeDelegatedAdminCommand";
import {
  CreateDatalakeExceptionsSubscriptionCommand,
  CreateDatalakeExceptionsSubscriptionCommandInput,
  CreateDatalakeExceptionsSubscriptionCommandOutput,
} from "./commands/CreateDatalakeExceptionsSubscriptionCommand";
import {
  CreateSubscriberCommand,
  CreateSubscriberCommandInput,
  CreateSubscriberCommandOutput,
} from "./commands/CreateSubscriberCommand";
import {
  CreateSubscriptionNotificationConfigurationCommand,
  CreateSubscriptionNotificationConfigurationCommandInput,
  CreateSubscriptionNotificationConfigurationCommandOutput,
} from "./commands/CreateSubscriptionNotificationConfigurationCommand";
import {
  DeleteAwsLogSourceCommand,
  DeleteAwsLogSourceCommandInput,
  DeleteAwsLogSourceCommandOutput,
} from "./commands/DeleteAwsLogSourceCommand";
import {
  DeleteCustomLogSourceCommand,
  DeleteCustomLogSourceCommandInput,
  DeleteCustomLogSourceCommandOutput,
} from "./commands/DeleteCustomLogSourceCommand";
import {
  DeleteDatalakeAutoEnableCommand,
  DeleteDatalakeAutoEnableCommandInput,
  DeleteDatalakeAutoEnableCommandOutput,
} from "./commands/DeleteDatalakeAutoEnableCommand";
import {
  DeleteDatalakeCommand,
  DeleteDatalakeCommandInput,
  DeleteDatalakeCommandOutput,
} from "./commands/DeleteDatalakeCommand";
import {
  DeleteDatalakeDelegatedAdminCommand,
  DeleteDatalakeDelegatedAdminCommandInput,
  DeleteDatalakeDelegatedAdminCommandOutput,
} from "./commands/DeleteDatalakeDelegatedAdminCommand";
import {
  DeleteDatalakeExceptionsSubscriptionCommand,
  DeleteDatalakeExceptionsSubscriptionCommandInput,
  DeleteDatalakeExceptionsSubscriptionCommandOutput,
} from "./commands/DeleteDatalakeExceptionsSubscriptionCommand";
import {
  DeleteSubscriberCommand,
  DeleteSubscriberCommandInput,
  DeleteSubscriberCommandOutput,
} from "./commands/DeleteSubscriberCommand";
import {
  DeleteSubscriptionNotificationConfigurationCommand,
  DeleteSubscriptionNotificationConfigurationCommandInput,
  DeleteSubscriptionNotificationConfigurationCommandOutput,
} from "./commands/DeleteSubscriptionNotificationConfigurationCommand";
import {
  GetDatalakeAutoEnableCommand,
  GetDatalakeAutoEnableCommandInput,
  GetDatalakeAutoEnableCommandOutput,
} from "./commands/GetDatalakeAutoEnableCommand";
import { GetDatalakeCommand, GetDatalakeCommandInput, GetDatalakeCommandOutput } from "./commands/GetDatalakeCommand";
import {
  GetDatalakeExceptionsExpiryCommand,
  GetDatalakeExceptionsExpiryCommandInput,
  GetDatalakeExceptionsExpiryCommandOutput,
} from "./commands/GetDatalakeExceptionsExpiryCommand";
import {
  GetDatalakeExceptionsSubscriptionCommand,
  GetDatalakeExceptionsSubscriptionCommandInput,
  GetDatalakeExceptionsSubscriptionCommandOutput,
} from "./commands/GetDatalakeExceptionsSubscriptionCommand";
import {
  GetDatalakeStatusCommand,
  GetDatalakeStatusCommandInput,
  GetDatalakeStatusCommandOutput,
} from "./commands/GetDatalakeStatusCommand";
import {
  GetSubscriberCommand,
  GetSubscriberCommandInput,
  GetSubscriberCommandOutput,
} from "./commands/GetSubscriberCommand";
import {
  ListDatalakeExceptionsCommand,
  ListDatalakeExceptionsCommandInput,
  ListDatalakeExceptionsCommandOutput,
} from "./commands/ListDatalakeExceptionsCommand";
import {
  ListLogSourcesCommand,
  ListLogSourcesCommandInput,
  ListLogSourcesCommandOutput,
} from "./commands/ListLogSourcesCommand";
import {
  ListSubscribersCommand,
  ListSubscribersCommandInput,
  ListSubscribersCommandOutput,
} from "./commands/ListSubscribersCommand";
import {
  UpdateDatalakeCommand,
  UpdateDatalakeCommandInput,
  UpdateDatalakeCommandOutput,
} from "./commands/UpdateDatalakeCommand";
import {
  UpdateDatalakeExceptionsExpiryCommand,
  UpdateDatalakeExceptionsExpiryCommandInput,
  UpdateDatalakeExceptionsExpiryCommandOutput,
} from "./commands/UpdateDatalakeExceptionsExpiryCommand";
import {
  UpdateDatalakeExceptionsSubscriptionCommand,
  UpdateDatalakeExceptionsSubscriptionCommandInput,
  UpdateDatalakeExceptionsSubscriptionCommandOutput,
} from "./commands/UpdateDatalakeExceptionsSubscriptionCommand";
import {
  UpdateSubscriberCommand,
  UpdateSubscriberCommandInput,
  UpdateSubscriberCommandOutput,
} from "./commands/UpdateSubscriberCommand";
import {
  UpdateSubscriptionNotificationConfigurationCommand,
  UpdateSubscriptionNotificationConfigurationCommandInput,
  UpdateSubscriptionNotificationConfigurationCommandOutput,
} from "./commands/UpdateSubscriptionNotificationConfigurationCommand";
import { SecurityLakeClient } from "./SecurityLakeClient";

/**
 * <note>
 *             <p>Amazon Security Lake is in preview release. Your use of the Security Lake preview is subject to
 *             Section 2 of the <a href="http://aws.amazon.com/service-terms/">Amazon Web Services Service
 *                Terms</a>("Betas and Previews").</p>
 *          </note>
 *          <p>Amazon Security Lake is a fully managed security data lake service. You can use Security Lake to
 *          automatically centralize security data from cloud, on-premises, and custom sources into a
 *          data lake that's stored in your Amazon Web Servicesaccount. Amazon Web Services Organizations
 *          is an account management service that lets you consolidate multiple Amazon Web Services
 *          accounts into an organization that you create and centrally manage. With Organizations, you
 *          can create member accounts and invite existing accounts to join your organization.
 *          Security Lake helps you analyze security data for a more complete understanding of your
 *          security posture across the entire organization. It can also help you improve the
 *          protection of your workloads, applications, and data.</p>
 *          <p>The data lake is backed by Amazon Simple Storage Service (Amazon S3) buckets, and you
 *          retain ownership over your data.   </p>
 *          <p>Amazon Security Lake integrates with CloudTrail, a service that provides a record of
 *          actions taken by a user, role, or an Amazon Web Services service in Security Lake CloudTrail captures API calls for Security Lake as events. The calls captured include calls
 *          from the Security Lake console and code calls to the Security Lake API operations. If you create a
 *          trail, you can enable continuous delivery of CloudTrail events to an Amazon S3 bucket, including events for Security Lake. If you don't configure a trail, you can still
 *          view the most recent events in the CloudTrail console in Event history. Using the
 *          information collected by CloudTrail you can determine the request that was made to
 *          Security Lake, the IP address from which the request was made, who made the request, when it
 *          was made, and additional details. To learn more about Security Lake information in CloudTrail, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/securitylake-cloudtrail.html">Amazon Security Lake User Guide</a>.</p>
 *          <p>Security Lake automates the collection of security-related log and event data from
 *          integrated Amazon Web Services and third-party services. It also helps you manage
 *          the lifecycle of data with customizable retention and replication settings. Security Lake
 *          converts ingested data into Apache Parquet format and a standard open-source schema called
 *          the Open Cybersecurity Schema Framework (OCSF).</p>
 *          <p>Other Amazon Web Services and third-party services can subscribe to the data that's stored in Security Lake for
 *          incident response and security data analytics.</p>
 */
export class SecurityLake extends SecurityLakeClient {
  /**
   * <p>Adds a natively supported Amazon Web Service as an Amazon Security Lake source. Enables
   *          source types for member accounts in required Amazon Web Services Regions, based on the
   *          parameters you specify. You can choose any source type in any Region for either accounts
   *          that are part of a trusted organization or standalone accounts. At least one of the three
   *          dimensions is a mandatory input to this API. However, you can supply any combination of the
   *          three dimensions to this API. </p>
   *          <p>By default, a dimension refers to the entire set. When you don't provide a dimension,
   *          Security Lake assumes that the missing dimension refers to the entire set. This is overridden
   *          when you supply any one of the inputs. For instance, when you do not specify members, the
   *          API enables all Security Lake member accounts for all sources. Similarly, when you do not
   *          specify Regions, Security Lake is enabled for all the Regions where Security Lake is available as a
   *          service.</p>
   *          <p>You can use this API only to enable natively supported Amazon Web Services as a
   *          source. Use <code>CreateCustomLogSource</code> to enable data collection from a custom
   *          source. </p>
   */
  public createAwsLogSource(
    args: CreateAwsLogSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAwsLogSourceCommandOutput>;
  public createAwsLogSource(
    args: CreateAwsLogSourceCommandInput,
    cb: (err: any, data?: CreateAwsLogSourceCommandOutput) => void
  ): void;
  public createAwsLogSource(
    args: CreateAwsLogSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAwsLogSourceCommandOutput) => void
  ): void;
  public createAwsLogSource(
    args: CreateAwsLogSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAwsLogSourceCommandOutput) => void),
    cb?: (err: any, data?: CreateAwsLogSourceCommandOutput) => void
  ): Promise<CreateAwsLogSourceCommandOutput> | void {
    const command = new CreateAwsLogSourceCommand(args);
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
   * <p>Adds a third-party custom source in Amazon Security Lake, from the Amazon Web Services Region
   *          where you want to create a custom source. Security Lake can collect logs and events from
   *          third-party custom sources. After creating the appropriate IAM role to
   *          invoke Glue crawler, use this API to add a custom source name in Security Lake. This
   *          operation creates a partition in the Amazon S3 bucket for Security Lake as the target
   *          location for log files from the custom source in addition to an associated Glue table and an Glue crawler.</p>
   */
  public createCustomLogSource(
    args: CreateCustomLogSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomLogSourceCommandOutput>;
  public createCustomLogSource(
    args: CreateCustomLogSourceCommandInput,
    cb: (err: any, data?: CreateCustomLogSourceCommandOutput) => void
  ): void;
  public createCustomLogSource(
    args: CreateCustomLogSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomLogSourceCommandOutput) => void
  ): void;
  public createCustomLogSource(
    args: CreateCustomLogSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCustomLogSourceCommandOutput) => void),
    cb?: (err: any, data?: CreateCustomLogSourceCommandOutput) => void
  ): Promise<CreateCustomLogSourceCommandOutput> | void {
    const command = new CreateCustomLogSourceCommand(args);
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
   * <p>Initializes an Amazon Security Lake instance with the provided (or default) configuration. You
   *          can enable Security Lake in Amazon Web Services Regions with customized settings before enabling
   *          log collection in Regions. You can either use the <code>enableAll</code> parameter to
   *          specify all Regions or specify the Regions where you want to enable Security Lake. To specify
   *          particular Regions, use the <code>Regions</code> parameter and then configure these Regions
   *          using the <code>configurations</code> parameter. If you have already enabled Security Lake in a
   *          Region when you call this command, the command will update the Region if you provide new
   *          configuration parameters. If you have not already enabled Security Lake in the Region when you
   *          call this API, it will set up the data lake in the Region with the specified
   *          configurations.</p>
   *          <p>When you enable Security Lake, it starts ingesting security data after the
   *             <code>CreateAwsLogSource</code> call. This includes ingesting security data from
   *          sources, storing data, and making data accessible to subscribers. Security Lake also enables
   *          all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. For
   *          more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/what-is-security-lake.html">Amazon Security Lake User
   *             Guide</a>.</p>
   */
  public createDatalake(
    args: CreateDatalakeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatalakeCommandOutput>;
  public createDatalake(
    args: CreateDatalakeCommandInput,
    cb: (err: any, data?: CreateDatalakeCommandOutput) => void
  ): void;
  public createDatalake(
    args: CreateDatalakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatalakeCommandOutput) => void
  ): void;
  public createDatalake(
    args: CreateDatalakeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDatalakeCommandOutput) => void),
    cb?: (err: any, data?: CreateDatalakeCommandOutput) => void
  ): Promise<CreateDatalakeCommandOutput> | void {
    const command = new CreateDatalakeCommand(args);
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
   * <p>Automatically enables Amazon Security Lake for new member accounts in your organization.
   *          Security Lake is not automatically enabled for any existing member accounts in your
   *          organization.</p>
   */
  public createDatalakeAutoEnable(
    args: CreateDatalakeAutoEnableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatalakeAutoEnableCommandOutput>;
  public createDatalakeAutoEnable(
    args: CreateDatalakeAutoEnableCommandInput,
    cb: (err: any, data?: CreateDatalakeAutoEnableCommandOutput) => void
  ): void;
  public createDatalakeAutoEnable(
    args: CreateDatalakeAutoEnableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatalakeAutoEnableCommandOutput) => void
  ): void;
  public createDatalakeAutoEnable(
    args: CreateDatalakeAutoEnableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDatalakeAutoEnableCommandOutput) => void),
    cb?: (err: any, data?: CreateDatalakeAutoEnableCommandOutput) => void
  ): Promise<CreateDatalakeAutoEnableCommandOutput> | void {
    const command = new CreateDatalakeAutoEnableCommand(args);
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
   * <p>Designates the Amazon Security Lake delegated administrator account for the organization. This
   *          API can only be called by the organization management account. The organization management
   *          account cannot be the delegated administrator account.</p>
   */
  public createDatalakeDelegatedAdmin(
    args: CreateDatalakeDelegatedAdminCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatalakeDelegatedAdminCommandOutput>;
  public createDatalakeDelegatedAdmin(
    args: CreateDatalakeDelegatedAdminCommandInput,
    cb: (err: any, data?: CreateDatalakeDelegatedAdminCommandOutput) => void
  ): void;
  public createDatalakeDelegatedAdmin(
    args: CreateDatalakeDelegatedAdminCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatalakeDelegatedAdminCommandOutput) => void
  ): void;
  public createDatalakeDelegatedAdmin(
    args: CreateDatalakeDelegatedAdminCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDatalakeDelegatedAdminCommandOutput) => void),
    cb?: (err: any, data?: CreateDatalakeDelegatedAdminCommandOutput) => void
  ): Promise<CreateDatalakeDelegatedAdminCommandOutput> | void {
    const command = new CreateDatalakeDelegatedAdminCommand(args);
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
   * <p>Creates the specified notification subscription in Amazon Security Lake for the organization
   *          you specify.</p>
   */
  public createDatalakeExceptionsSubscription(
    args: CreateDatalakeExceptionsSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatalakeExceptionsSubscriptionCommandOutput>;
  public createDatalakeExceptionsSubscription(
    args: CreateDatalakeExceptionsSubscriptionCommandInput,
    cb: (err: any, data?: CreateDatalakeExceptionsSubscriptionCommandOutput) => void
  ): void;
  public createDatalakeExceptionsSubscription(
    args: CreateDatalakeExceptionsSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatalakeExceptionsSubscriptionCommandOutput) => void
  ): void;
  public createDatalakeExceptionsSubscription(
    args: CreateDatalakeExceptionsSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDatalakeExceptionsSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: CreateDatalakeExceptionsSubscriptionCommandOutput) => void
  ): Promise<CreateDatalakeExceptionsSubscriptionCommandOutput> | void {
    const command = new CreateDatalakeExceptionsSubscriptionCommand(args);
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
   * <p>Creates a subscription permission for accounts that are already enabled in
   *          Amazon Security Lake. You can create a subscriber with access to data in the current Amazon Web Services Region.</p>
   */
  public createSubscriber(
    args: CreateSubscriberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubscriberCommandOutput>;
  public createSubscriber(
    args: CreateSubscriberCommandInput,
    cb: (err: any, data?: CreateSubscriberCommandOutput) => void
  ): void;
  public createSubscriber(
    args: CreateSubscriberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubscriberCommandOutput) => void
  ): void;
  public createSubscriber(
    args: CreateSubscriberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSubscriberCommandOutput) => void),
    cb?: (err: any, data?: CreateSubscriberCommandOutput) => void
  ): Promise<CreateSubscriberCommandOutput> | void {
    const command = new CreateSubscriberCommand(args);
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
   * <p>Notifies the subscriber when new data is written to the data lake for the sources that
   *          the subscriber consumes in Security Lake.</p>
   */
  public createSubscriptionNotificationConfiguration(
    args: CreateSubscriptionNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubscriptionNotificationConfigurationCommandOutput>;
  public createSubscriptionNotificationConfiguration(
    args: CreateSubscriptionNotificationConfigurationCommandInput,
    cb: (err: any, data?: CreateSubscriptionNotificationConfigurationCommandOutput) => void
  ): void;
  public createSubscriptionNotificationConfiguration(
    args: CreateSubscriptionNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubscriptionNotificationConfigurationCommandOutput) => void
  ): void;
  public createSubscriptionNotificationConfiguration(
    args: CreateSubscriptionNotificationConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateSubscriptionNotificationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateSubscriptionNotificationConfigurationCommandOutput) => void
  ): Promise<CreateSubscriptionNotificationConfigurationCommandOutput> | void {
    const command = new CreateSubscriptionNotificationConfigurationCommand(args);
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
   * <p>Removes a natively supported Amazon Web Service as an Amazon Security Lake source. When
   *          you remove the source, Security Lake stops collecting data from that source, and subscribers
   *          can no longer consume new data from the source. Subscribers can still consume data that
   *          Security Lake collected from the source before disablement.</p>
   *          <p>You can choose any source type in any Amazon Web Services Region for either accounts that
   *          are part of a trusted organization or standalone accounts. At least one of the three
   *          dimensions is a mandatory input to this API. However, you can supply any combination of the
   *          three dimensions to this API. </p>
   *          <p>By default, a dimension refers to the entire set. This is overridden when you supply any
   *          one of the inputs. For instance, when you do not specify members, the API disables all
   *          Security Lake member accounts for sources. Similarly, when you do not specify Regions,
   *          Security Lake is disabled for all the Regions where Security Lake is available as a service.</p>
   *          <p>When you don't provide a dimension, Security Lake  assumes that the missing dimension refers
   *          to the entire set. For example, if you don't provide specific accounts, the API applies to
   *          the entire set of accounts in your organization.</p>
   */
  public deleteAwsLogSource(
    args: DeleteAwsLogSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAwsLogSourceCommandOutput>;
  public deleteAwsLogSource(
    args: DeleteAwsLogSourceCommandInput,
    cb: (err: any, data?: DeleteAwsLogSourceCommandOutput) => void
  ): void;
  public deleteAwsLogSource(
    args: DeleteAwsLogSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAwsLogSourceCommandOutput) => void
  ): void;
  public deleteAwsLogSource(
    args: DeleteAwsLogSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAwsLogSourceCommandOutput) => void),
    cb?: (err: any, data?: DeleteAwsLogSourceCommandOutput) => void
  ): Promise<DeleteAwsLogSourceCommandOutput> | void {
    const command = new DeleteAwsLogSourceCommand(args);
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
   * <p>Removes a custom log source from Amazon Security Lake.</p>
   */
  public deleteCustomLogSource(
    args: DeleteCustomLogSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomLogSourceCommandOutput>;
  public deleteCustomLogSource(
    args: DeleteCustomLogSourceCommandInput,
    cb: (err: any, data?: DeleteCustomLogSourceCommandOutput) => void
  ): void;
  public deleteCustomLogSource(
    args: DeleteCustomLogSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomLogSourceCommandOutput) => void
  ): void;
  public deleteCustomLogSource(
    args: DeleteCustomLogSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCustomLogSourceCommandOutput) => void),
    cb?: (err: any, data?: DeleteCustomLogSourceCommandOutput) => void
  ): Promise<DeleteCustomLogSourceCommandOutput> | void {
    const command = new DeleteCustomLogSourceCommand(args);
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
   * <p>When you delete Amazon Security Lake from your account, Security Lake is disabled in all Amazon Web Services Regions. Also, this API automatically takes steps to remove the account from
   *          Security Lake . </p>
   *          <p>This operation disables security data collection from sources, deletes data stored, and
   *          stops making data accessible to subscribers. Security Lake also deletes all the existing
   *          settings and resources that it stores or maintains for your Amazon Web Services account in
   *          the current Region, including security log and event data. The <code>DeleteDatalake</code>
   *          operation does not delete the Amazon S3 bucket, which is owned by your Amazon Web Services account. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/disable-security-lake.html">Amazon Security Lake User
   *             Guide</a>.</p>
   */
  public deleteDatalake(
    args: DeleteDatalakeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatalakeCommandOutput>;
  public deleteDatalake(
    args: DeleteDatalakeCommandInput,
    cb: (err: any, data?: DeleteDatalakeCommandOutput) => void
  ): void;
  public deleteDatalake(
    args: DeleteDatalakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatalakeCommandOutput) => void
  ): void;
  public deleteDatalake(
    args: DeleteDatalakeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDatalakeCommandOutput) => void),
    cb?: (err: any, data?: DeleteDatalakeCommandOutput) => void
  ): Promise<DeleteDatalakeCommandOutput> | void {
    const command = new DeleteDatalakeCommand(args);
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
   * <p>Automatically deletes Amazon Security Lake to stop collecting security data. When you delete
   *          Amazon Security Lake from your account, Security Lake is disabled in all Regions. Also, this API
   *          automatically takes steps to remove the account from Security Lake . </p>
   *          <p>This operation disables security data collection from sources, deletes data stored, and
   *          stops making data accessible to subscribers. Security Lake also deletes all the existing
   *          settings and resources that it stores or maintains for your Amazon Web Services account in
   *          the current Region, including security log and event data. The <code>DeleteDatalake</code>
   *          operation does not delete the Amazon S3 bucket, which is owned by your Amazon Web Services account. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/disable-security-lake.html">Amazon Security Lake User
   *             Guide</a>.</p>
   */
  public deleteDatalakeAutoEnable(
    args: DeleteDatalakeAutoEnableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatalakeAutoEnableCommandOutput>;
  public deleteDatalakeAutoEnable(
    args: DeleteDatalakeAutoEnableCommandInput,
    cb: (err: any, data?: DeleteDatalakeAutoEnableCommandOutput) => void
  ): void;
  public deleteDatalakeAutoEnable(
    args: DeleteDatalakeAutoEnableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatalakeAutoEnableCommandOutput) => void
  ): void;
  public deleteDatalakeAutoEnable(
    args: DeleteDatalakeAutoEnableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDatalakeAutoEnableCommandOutput) => void),
    cb?: (err: any, data?: DeleteDatalakeAutoEnableCommandOutput) => void
  ): Promise<DeleteDatalakeAutoEnableCommandOutput> | void {
    const command = new DeleteDatalakeAutoEnableCommand(args);
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
   * <p>Deletes the Amazon Security Lake delegated administrator account for the organization. This API
   *          can only be called by the organization management account. The organization management
   *          account cannot be the delegated administrator account.</p>
   */
  public deleteDatalakeDelegatedAdmin(
    args: DeleteDatalakeDelegatedAdminCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatalakeDelegatedAdminCommandOutput>;
  public deleteDatalakeDelegatedAdmin(
    args: DeleteDatalakeDelegatedAdminCommandInput,
    cb: (err: any, data?: DeleteDatalakeDelegatedAdminCommandOutput) => void
  ): void;
  public deleteDatalakeDelegatedAdmin(
    args: DeleteDatalakeDelegatedAdminCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatalakeDelegatedAdminCommandOutput) => void
  ): void;
  public deleteDatalakeDelegatedAdmin(
    args: DeleteDatalakeDelegatedAdminCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDatalakeDelegatedAdminCommandOutput) => void),
    cb?: (err: any, data?: DeleteDatalakeDelegatedAdminCommandOutput) => void
  ): Promise<DeleteDatalakeDelegatedAdminCommandOutput> | void {
    const command = new DeleteDatalakeDelegatedAdminCommand(args);
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
   * <p>Deletes the specified notification subscription in Amazon Security Lake for the organization
   *          you specify.</p>
   */
  public deleteDatalakeExceptionsSubscription(
    args: DeleteDatalakeExceptionsSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatalakeExceptionsSubscriptionCommandOutput>;
  public deleteDatalakeExceptionsSubscription(
    args: DeleteDatalakeExceptionsSubscriptionCommandInput,
    cb: (err: any, data?: DeleteDatalakeExceptionsSubscriptionCommandOutput) => void
  ): void;
  public deleteDatalakeExceptionsSubscription(
    args: DeleteDatalakeExceptionsSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatalakeExceptionsSubscriptionCommandOutput) => void
  ): void;
  public deleteDatalakeExceptionsSubscription(
    args: DeleteDatalakeExceptionsSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDatalakeExceptionsSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: DeleteDatalakeExceptionsSubscriptionCommandOutput) => void
  ): Promise<DeleteDatalakeExceptionsSubscriptionCommandOutput> | void {
    const command = new DeleteDatalakeExceptionsSubscriptionCommand(args);
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
   * <p>Deletes the subscription permission for accounts that are already enabled in
   *          Amazon Security Lake. You can delete a subscriber and remove access to data in the current Amazon Web Services
   *          Region.</p>
   */
  public deleteSubscriber(
    args: DeleteSubscriberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSubscriberCommandOutput>;
  public deleteSubscriber(
    args: DeleteSubscriberCommandInput,
    cb: (err: any, data?: DeleteSubscriberCommandOutput) => void
  ): void;
  public deleteSubscriber(
    args: DeleteSubscriberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubscriberCommandOutput) => void
  ): void;
  public deleteSubscriber(
    args: DeleteSubscriberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSubscriberCommandOutput) => void),
    cb?: (err: any, data?: DeleteSubscriberCommandOutput) => void
  ): Promise<DeleteSubscriberCommandOutput> | void {
    const command = new DeleteSubscriberCommand(args);
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
   * <p>Deletes the specified notification subscription in Amazon Security Lake for the organization
   *          you specify.</p>
   */
  public deleteSubscriptionNotificationConfiguration(
    args: DeleteSubscriptionNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSubscriptionNotificationConfigurationCommandOutput>;
  public deleteSubscriptionNotificationConfiguration(
    args: DeleteSubscriptionNotificationConfigurationCommandInput,
    cb: (err: any, data?: DeleteSubscriptionNotificationConfigurationCommandOutput) => void
  ): void;
  public deleteSubscriptionNotificationConfiguration(
    args: DeleteSubscriptionNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubscriptionNotificationConfigurationCommandOutput) => void
  ): void;
  public deleteSubscriptionNotificationConfiguration(
    args: DeleteSubscriptionNotificationConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteSubscriptionNotificationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteSubscriptionNotificationConfigurationCommandOutput) => void
  ): Promise<DeleteSubscriptionNotificationConfigurationCommandOutput> | void {
    const command = new DeleteSubscriptionNotificationConfigurationCommand(args);
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
   * <p>Retrieves the Amazon Security Lake configuration object for the specified Amazon Web Services account ID. You can use the <code>GetDatalake</code> API to know whether
   *          Security Lake is enabled for the current Region. This API does not take input parameters. </p>
   */
  public getDatalake(args: GetDatalakeCommandInput, options?: __HttpHandlerOptions): Promise<GetDatalakeCommandOutput>;
  public getDatalake(args: GetDatalakeCommandInput, cb: (err: any, data?: GetDatalakeCommandOutput) => void): void;
  public getDatalake(
    args: GetDatalakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatalakeCommandOutput) => void
  ): void;
  public getDatalake(
    args: GetDatalakeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDatalakeCommandOutput) => void),
    cb?: (err: any, data?: GetDatalakeCommandOutput) => void
  ): Promise<GetDatalakeCommandOutput> | void {
    const command = new GetDatalakeCommand(args);
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
   * <p>Retrieves the configuration that will be automatically set up for accounts added to the
   *          organization after the organization has onboarded to Amazon Security Lake. This API does not take
   *          input parameters.</p>
   */
  public getDatalakeAutoEnable(
    args: GetDatalakeAutoEnableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDatalakeAutoEnableCommandOutput>;
  public getDatalakeAutoEnable(
    args: GetDatalakeAutoEnableCommandInput,
    cb: (err: any, data?: GetDatalakeAutoEnableCommandOutput) => void
  ): void;
  public getDatalakeAutoEnable(
    args: GetDatalakeAutoEnableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatalakeAutoEnableCommandOutput) => void
  ): void;
  public getDatalakeAutoEnable(
    args: GetDatalakeAutoEnableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDatalakeAutoEnableCommandOutput) => void),
    cb?: (err: any, data?: GetDatalakeAutoEnableCommandOutput) => void
  ): Promise<GetDatalakeAutoEnableCommandOutput> | void {
    const command = new GetDatalakeAutoEnableCommand(args);
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
   * <p>Retrieves the expiration period and time-to-live (TTL) for which the exception message
   *          will remain. Exceptions are stored by default, for 2 weeks from when a record was created
   *          in Amazon Security Lake. This API does not take input parameters.</p>
   */
  public getDatalakeExceptionsExpiry(
    args: GetDatalakeExceptionsExpiryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDatalakeExceptionsExpiryCommandOutput>;
  public getDatalakeExceptionsExpiry(
    args: GetDatalakeExceptionsExpiryCommandInput,
    cb: (err: any, data?: GetDatalakeExceptionsExpiryCommandOutput) => void
  ): void;
  public getDatalakeExceptionsExpiry(
    args: GetDatalakeExceptionsExpiryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatalakeExceptionsExpiryCommandOutput) => void
  ): void;
  public getDatalakeExceptionsExpiry(
    args: GetDatalakeExceptionsExpiryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDatalakeExceptionsExpiryCommandOutput) => void),
    cb?: (err: any, data?: GetDatalakeExceptionsExpiryCommandOutput) => void
  ): Promise<GetDatalakeExceptionsExpiryCommandOutput> | void {
    const command = new GetDatalakeExceptionsExpiryCommand(args);
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
   * <p>Retrieves the details of exception notifications for the account in Amazon Security Lake.</p>
   */
  public getDatalakeExceptionsSubscription(
    args: GetDatalakeExceptionsSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDatalakeExceptionsSubscriptionCommandOutput>;
  public getDatalakeExceptionsSubscription(
    args: GetDatalakeExceptionsSubscriptionCommandInput,
    cb: (err: any, data?: GetDatalakeExceptionsSubscriptionCommandOutput) => void
  ): void;
  public getDatalakeExceptionsSubscription(
    args: GetDatalakeExceptionsSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatalakeExceptionsSubscriptionCommandOutput) => void
  ): void;
  public getDatalakeExceptionsSubscription(
    args: GetDatalakeExceptionsSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDatalakeExceptionsSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: GetDatalakeExceptionsSubscriptionCommandOutput) => void
  ): Promise<GetDatalakeExceptionsSubscriptionCommandOutput> | void {
    const command = new GetDatalakeExceptionsSubscriptionCommand(args);
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
   * <p>Retrieves a snapshot of the current Region, including whether Amazon Security Lake is enabled
   *          for those accounts and which sources Security Lake is collecting data from. </p>
   */
  public getDatalakeStatus(
    args: GetDatalakeStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDatalakeStatusCommandOutput>;
  public getDatalakeStatus(
    args: GetDatalakeStatusCommandInput,
    cb: (err: any, data?: GetDatalakeStatusCommandOutput) => void
  ): void;
  public getDatalakeStatus(
    args: GetDatalakeStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatalakeStatusCommandOutput) => void
  ): void;
  public getDatalakeStatus(
    args: GetDatalakeStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDatalakeStatusCommandOutput) => void),
    cb?: (err: any, data?: GetDatalakeStatusCommandOutput) => void
  ): Promise<GetDatalakeStatusCommandOutput> | void {
    const command = new GetDatalakeStatusCommand(args);
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
   * <p>Retrieves the subscription information for the specified subscription ID. You can get
   *          information about a specific subscriber.</p>
   */
  public getSubscriber(
    args: GetSubscriberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSubscriberCommandOutput>;
  public getSubscriber(
    args: GetSubscriberCommandInput,
    cb: (err: any, data?: GetSubscriberCommandOutput) => void
  ): void;
  public getSubscriber(
    args: GetSubscriberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSubscriberCommandOutput) => void
  ): void;
  public getSubscriber(
    args: GetSubscriberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSubscriberCommandOutput) => void),
    cb?: (err: any, data?: GetSubscriberCommandOutput) => void
  ): Promise<GetSubscriberCommandOutput> | void {
    const command = new GetSubscriberCommand(args);
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
   * <p>Lists the Amazon Security Lake exceptions that you can use to find the source of problems and
   *          fix them.</p>
   */
  public listDatalakeExceptions(
    args: ListDatalakeExceptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatalakeExceptionsCommandOutput>;
  public listDatalakeExceptions(
    args: ListDatalakeExceptionsCommandInput,
    cb: (err: any, data?: ListDatalakeExceptionsCommandOutput) => void
  ): void;
  public listDatalakeExceptions(
    args: ListDatalakeExceptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatalakeExceptionsCommandOutput) => void
  ): void;
  public listDatalakeExceptions(
    args: ListDatalakeExceptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDatalakeExceptionsCommandOutput) => void),
    cb?: (err: any, data?: ListDatalakeExceptionsCommandOutput) => void
  ): Promise<ListDatalakeExceptionsCommandOutput> | void {
    const command = new ListDatalakeExceptionsCommand(args);
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
   * <p>Retrieves the log sources in the current Amazon Web Services Region. </p>
   */
  public listLogSources(
    args: ListLogSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLogSourcesCommandOutput>;
  public listLogSources(
    args: ListLogSourcesCommandInput,
    cb: (err: any, data?: ListLogSourcesCommandOutput) => void
  ): void;
  public listLogSources(
    args: ListLogSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLogSourcesCommandOutput) => void
  ): void;
  public listLogSources(
    args: ListLogSourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLogSourcesCommandOutput) => void),
    cb?: (err: any, data?: ListLogSourcesCommandOutput) => void
  ): Promise<ListLogSourcesCommandOutput> | void {
    const command = new ListLogSourcesCommand(args);
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
   * <p>List all subscribers for the specific Amazon Security Lake account ID. You can retrieve a list
   *          of subscriptions associated with a specific organization or Amazon Web Services account.</p>
   */
  public listSubscribers(
    args: ListSubscribersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubscribersCommandOutput>;
  public listSubscribers(
    args: ListSubscribersCommandInput,
    cb: (err: any, data?: ListSubscribersCommandOutput) => void
  ): void;
  public listSubscribers(
    args: ListSubscribersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubscribersCommandOutput) => void
  ): void;
  public listSubscribers(
    args: ListSubscribersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSubscribersCommandOutput) => void),
    cb?: (err: any, data?: ListSubscribersCommandOutput) => void
  ): Promise<ListSubscribersCommandOutput> | void {
    const command = new ListSubscribersCommand(args);
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
   * <p>Specifies where to store your security data and for how long. You can add a rollup
   *          Region to consolidate data from multiple Amazon Web Services Regions. </p>
   */
  public updateDatalake(
    args: UpdateDatalakeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatalakeCommandOutput>;
  public updateDatalake(
    args: UpdateDatalakeCommandInput,
    cb: (err: any, data?: UpdateDatalakeCommandOutput) => void
  ): void;
  public updateDatalake(
    args: UpdateDatalakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatalakeCommandOutput) => void
  ): void;
  public updateDatalake(
    args: UpdateDatalakeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDatalakeCommandOutput) => void),
    cb?: (err: any, data?: UpdateDatalakeCommandOutput) => void
  ): Promise<UpdateDatalakeCommandOutput> | void {
    const command = new UpdateDatalakeCommand(args);
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
   * <p>Update the expiration period for the exception message to your preferred time, and
   *          control the time-to-live (TTL) for the exception message to remain. Exceptions are stored
   *          by default for 2 weeks from when a record was created in Amazon Security Lake. </p>
   */
  public updateDatalakeExceptionsExpiry(
    args: UpdateDatalakeExceptionsExpiryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatalakeExceptionsExpiryCommandOutput>;
  public updateDatalakeExceptionsExpiry(
    args: UpdateDatalakeExceptionsExpiryCommandInput,
    cb: (err: any, data?: UpdateDatalakeExceptionsExpiryCommandOutput) => void
  ): void;
  public updateDatalakeExceptionsExpiry(
    args: UpdateDatalakeExceptionsExpiryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatalakeExceptionsExpiryCommandOutput) => void
  ): void;
  public updateDatalakeExceptionsExpiry(
    args: UpdateDatalakeExceptionsExpiryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDatalakeExceptionsExpiryCommandOutput) => void),
    cb?: (err: any, data?: UpdateDatalakeExceptionsExpiryCommandOutput) => void
  ): Promise<UpdateDatalakeExceptionsExpiryCommandOutput> | void {
    const command = new UpdateDatalakeExceptionsExpiryCommand(args);
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
   * <p>Updates the specified notification subscription in Amazon Security Lake for the organization
   *          you specify.</p>
   */
  public updateDatalakeExceptionsSubscription(
    args: UpdateDatalakeExceptionsSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatalakeExceptionsSubscriptionCommandOutput>;
  public updateDatalakeExceptionsSubscription(
    args: UpdateDatalakeExceptionsSubscriptionCommandInput,
    cb: (err: any, data?: UpdateDatalakeExceptionsSubscriptionCommandOutput) => void
  ): void;
  public updateDatalakeExceptionsSubscription(
    args: UpdateDatalakeExceptionsSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatalakeExceptionsSubscriptionCommandOutput) => void
  ): void;
  public updateDatalakeExceptionsSubscription(
    args: UpdateDatalakeExceptionsSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDatalakeExceptionsSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: UpdateDatalakeExceptionsSubscriptionCommandOutput) => void
  ): Promise<UpdateDatalakeExceptionsSubscriptionCommandOutput> | void {
    const command = new UpdateDatalakeExceptionsSubscriptionCommand(args);
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
   * <p>Updates an existing subscription for the given Amazon Security Lake account ID. You can update
   *          a subscriber by changing the sources that the subscriber consumes data from. </p>
   */
  public updateSubscriber(
    args: UpdateSubscriberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSubscriberCommandOutput>;
  public updateSubscriber(
    args: UpdateSubscriberCommandInput,
    cb: (err: any, data?: UpdateSubscriberCommandOutput) => void
  ): void;
  public updateSubscriber(
    args: UpdateSubscriberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSubscriberCommandOutput) => void
  ): void;
  public updateSubscriber(
    args: UpdateSubscriberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSubscriberCommandOutput) => void),
    cb?: (err: any, data?: UpdateSubscriberCommandOutput) => void
  ): Promise<UpdateSubscriberCommandOutput> | void {
    const command = new UpdateSubscriberCommand(args);
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
   * <p>Creates a new subscription notification or adds the existing subscription notification
   *          setting for the specified subscription ID.</p>
   */
  public updateSubscriptionNotificationConfiguration(
    args: UpdateSubscriptionNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSubscriptionNotificationConfigurationCommandOutput>;
  public updateSubscriptionNotificationConfiguration(
    args: UpdateSubscriptionNotificationConfigurationCommandInput,
    cb: (err: any, data?: UpdateSubscriptionNotificationConfigurationCommandOutput) => void
  ): void;
  public updateSubscriptionNotificationConfiguration(
    args: UpdateSubscriptionNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSubscriptionNotificationConfigurationCommandOutput) => void
  ): void;
  public updateSubscriptionNotificationConfiguration(
    args: UpdateSubscriptionNotificationConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateSubscriptionNotificationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateSubscriptionNotificationConfigurationCommandOutput) => void
  ): Promise<UpdateSubscriptionNotificationConfigurationCommandOutput> | void {
    const command = new UpdateSubscriptionNotificationConfigurationCommand(args);
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
