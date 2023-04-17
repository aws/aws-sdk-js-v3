// smithy-typescript generated code
import { createAggregatedClient } from "@aws-sdk/smithy-client";
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
import { SecurityLakeClient, SecurityLakeClientConfig } from "./SecurityLakeClient";

const commands = {
  CreateAwsLogSourceCommand,
  CreateCustomLogSourceCommand,
  CreateDatalakeCommand,
  CreateDatalakeAutoEnableCommand,
  CreateDatalakeDelegatedAdminCommand,
  CreateDatalakeExceptionsSubscriptionCommand,
  CreateSubscriberCommand,
  CreateSubscriptionNotificationConfigurationCommand,
  DeleteAwsLogSourceCommand,
  DeleteCustomLogSourceCommand,
  DeleteDatalakeCommand,
  DeleteDatalakeAutoEnableCommand,
  DeleteDatalakeDelegatedAdminCommand,
  DeleteDatalakeExceptionsSubscriptionCommand,
  DeleteSubscriberCommand,
  DeleteSubscriptionNotificationConfigurationCommand,
  GetDatalakeCommand,
  GetDatalakeAutoEnableCommand,
  GetDatalakeExceptionsExpiryCommand,
  GetDatalakeExceptionsSubscriptionCommand,
  GetDatalakeStatusCommand,
  GetSubscriberCommand,
  ListDatalakeExceptionsCommand,
  ListLogSourcesCommand,
  ListSubscribersCommand,
  UpdateDatalakeCommand,
  UpdateDatalakeExceptionsExpiryCommand,
  UpdateDatalakeExceptionsSubscriptionCommand,
  UpdateSubscriberCommand,
  UpdateSubscriptionNotificationConfigurationCommand,
};

export interface SecurityLake {
  /**
   * @see {@link CreateAwsLogSourceCommand}
   */
  createAwsLogSource(
    args: CreateAwsLogSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAwsLogSourceCommandOutput>;
  createAwsLogSource(
    args: CreateAwsLogSourceCommandInput,
    cb: (err: any, data?: CreateAwsLogSourceCommandOutput) => void
  ): void;
  createAwsLogSource(
    args: CreateAwsLogSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAwsLogSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomLogSourceCommand}
   */
  createCustomLogSource(
    args: CreateCustomLogSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomLogSourceCommandOutput>;
  createCustomLogSource(
    args: CreateCustomLogSourceCommandInput,
    cb: (err: any, data?: CreateCustomLogSourceCommandOutput) => void
  ): void;
  createCustomLogSource(
    args: CreateCustomLogSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomLogSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatalakeCommand}
   */
  createDatalake(
    args: CreateDatalakeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatalakeCommandOutput>;
  createDatalake(args: CreateDatalakeCommandInput, cb: (err: any, data?: CreateDatalakeCommandOutput) => void): void;
  createDatalake(
    args: CreateDatalakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatalakeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatalakeAutoEnableCommand}
   */
  createDatalakeAutoEnable(
    args: CreateDatalakeAutoEnableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatalakeAutoEnableCommandOutput>;
  createDatalakeAutoEnable(
    args: CreateDatalakeAutoEnableCommandInput,
    cb: (err: any, data?: CreateDatalakeAutoEnableCommandOutput) => void
  ): void;
  createDatalakeAutoEnable(
    args: CreateDatalakeAutoEnableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatalakeAutoEnableCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatalakeDelegatedAdminCommand}
   */
  createDatalakeDelegatedAdmin(
    args: CreateDatalakeDelegatedAdminCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatalakeDelegatedAdminCommandOutput>;
  createDatalakeDelegatedAdmin(
    args: CreateDatalakeDelegatedAdminCommandInput,
    cb: (err: any, data?: CreateDatalakeDelegatedAdminCommandOutput) => void
  ): void;
  createDatalakeDelegatedAdmin(
    args: CreateDatalakeDelegatedAdminCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatalakeDelegatedAdminCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatalakeExceptionsSubscriptionCommand}
   */
  createDatalakeExceptionsSubscription(
    args: CreateDatalakeExceptionsSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatalakeExceptionsSubscriptionCommandOutput>;
  createDatalakeExceptionsSubscription(
    args: CreateDatalakeExceptionsSubscriptionCommandInput,
    cb: (err: any, data?: CreateDatalakeExceptionsSubscriptionCommandOutput) => void
  ): void;
  createDatalakeExceptionsSubscription(
    args: CreateDatalakeExceptionsSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatalakeExceptionsSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSubscriberCommand}
   */
  createSubscriber(
    args: CreateSubscriberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubscriberCommandOutput>;
  createSubscriber(
    args: CreateSubscriberCommandInput,
    cb: (err: any, data?: CreateSubscriberCommandOutput) => void
  ): void;
  createSubscriber(
    args: CreateSubscriberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubscriberCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSubscriptionNotificationConfigurationCommand}
   */
  createSubscriptionNotificationConfiguration(
    args: CreateSubscriptionNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubscriptionNotificationConfigurationCommandOutput>;
  createSubscriptionNotificationConfiguration(
    args: CreateSubscriptionNotificationConfigurationCommandInput,
    cb: (err: any, data?: CreateSubscriptionNotificationConfigurationCommandOutput) => void
  ): void;
  createSubscriptionNotificationConfiguration(
    args: CreateSubscriptionNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubscriptionNotificationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAwsLogSourceCommand}
   */
  deleteAwsLogSource(
    args: DeleteAwsLogSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAwsLogSourceCommandOutput>;
  deleteAwsLogSource(
    args: DeleteAwsLogSourceCommandInput,
    cb: (err: any, data?: DeleteAwsLogSourceCommandOutput) => void
  ): void;
  deleteAwsLogSource(
    args: DeleteAwsLogSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAwsLogSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomLogSourceCommand}
   */
  deleteCustomLogSource(
    args: DeleteCustomLogSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomLogSourceCommandOutput>;
  deleteCustomLogSource(
    args: DeleteCustomLogSourceCommandInput,
    cb: (err: any, data?: DeleteCustomLogSourceCommandOutput) => void
  ): void;
  deleteCustomLogSource(
    args: DeleteCustomLogSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomLogSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatalakeCommand}
   */
  deleteDatalake(
    args: DeleteDatalakeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatalakeCommandOutput>;
  deleteDatalake(args: DeleteDatalakeCommandInput, cb: (err: any, data?: DeleteDatalakeCommandOutput) => void): void;
  deleteDatalake(
    args: DeleteDatalakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatalakeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatalakeAutoEnableCommand}
   */
  deleteDatalakeAutoEnable(
    args: DeleteDatalakeAutoEnableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatalakeAutoEnableCommandOutput>;
  deleteDatalakeAutoEnable(
    args: DeleteDatalakeAutoEnableCommandInput,
    cb: (err: any, data?: DeleteDatalakeAutoEnableCommandOutput) => void
  ): void;
  deleteDatalakeAutoEnable(
    args: DeleteDatalakeAutoEnableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatalakeAutoEnableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatalakeDelegatedAdminCommand}
   */
  deleteDatalakeDelegatedAdmin(
    args: DeleteDatalakeDelegatedAdminCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatalakeDelegatedAdminCommandOutput>;
  deleteDatalakeDelegatedAdmin(
    args: DeleteDatalakeDelegatedAdminCommandInput,
    cb: (err: any, data?: DeleteDatalakeDelegatedAdminCommandOutput) => void
  ): void;
  deleteDatalakeDelegatedAdmin(
    args: DeleteDatalakeDelegatedAdminCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatalakeDelegatedAdminCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatalakeExceptionsSubscriptionCommand}
   */
  deleteDatalakeExceptionsSubscription(
    args: DeleteDatalakeExceptionsSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatalakeExceptionsSubscriptionCommandOutput>;
  deleteDatalakeExceptionsSubscription(
    args: DeleteDatalakeExceptionsSubscriptionCommandInput,
    cb: (err: any, data?: DeleteDatalakeExceptionsSubscriptionCommandOutput) => void
  ): void;
  deleteDatalakeExceptionsSubscription(
    args: DeleteDatalakeExceptionsSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatalakeExceptionsSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSubscriberCommand}
   */
  deleteSubscriber(
    args: DeleteSubscriberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSubscriberCommandOutput>;
  deleteSubscriber(
    args: DeleteSubscriberCommandInput,
    cb: (err: any, data?: DeleteSubscriberCommandOutput) => void
  ): void;
  deleteSubscriber(
    args: DeleteSubscriberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubscriberCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSubscriptionNotificationConfigurationCommand}
   */
  deleteSubscriptionNotificationConfiguration(
    args: DeleteSubscriptionNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSubscriptionNotificationConfigurationCommandOutput>;
  deleteSubscriptionNotificationConfiguration(
    args: DeleteSubscriptionNotificationConfigurationCommandInput,
    cb: (err: any, data?: DeleteSubscriptionNotificationConfigurationCommandOutput) => void
  ): void;
  deleteSubscriptionNotificationConfiguration(
    args: DeleteSubscriptionNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubscriptionNotificationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDatalakeCommand}
   */
  getDatalake(args: GetDatalakeCommandInput, options?: __HttpHandlerOptions): Promise<GetDatalakeCommandOutput>;
  getDatalake(args: GetDatalakeCommandInput, cb: (err: any, data?: GetDatalakeCommandOutput) => void): void;
  getDatalake(
    args: GetDatalakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatalakeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDatalakeAutoEnableCommand}
   */
  getDatalakeAutoEnable(
    args: GetDatalakeAutoEnableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDatalakeAutoEnableCommandOutput>;
  getDatalakeAutoEnable(
    args: GetDatalakeAutoEnableCommandInput,
    cb: (err: any, data?: GetDatalakeAutoEnableCommandOutput) => void
  ): void;
  getDatalakeAutoEnable(
    args: GetDatalakeAutoEnableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatalakeAutoEnableCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDatalakeExceptionsExpiryCommand}
   */
  getDatalakeExceptionsExpiry(
    args: GetDatalakeExceptionsExpiryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDatalakeExceptionsExpiryCommandOutput>;
  getDatalakeExceptionsExpiry(
    args: GetDatalakeExceptionsExpiryCommandInput,
    cb: (err: any, data?: GetDatalakeExceptionsExpiryCommandOutput) => void
  ): void;
  getDatalakeExceptionsExpiry(
    args: GetDatalakeExceptionsExpiryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatalakeExceptionsExpiryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDatalakeExceptionsSubscriptionCommand}
   */
  getDatalakeExceptionsSubscription(
    args: GetDatalakeExceptionsSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDatalakeExceptionsSubscriptionCommandOutput>;
  getDatalakeExceptionsSubscription(
    args: GetDatalakeExceptionsSubscriptionCommandInput,
    cb: (err: any, data?: GetDatalakeExceptionsSubscriptionCommandOutput) => void
  ): void;
  getDatalakeExceptionsSubscription(
    args: GetDatalakeExceptionsSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatalakeExceptionsSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDatalakeStatusCommand}
   */
  getDatalakeStatus(
    args: GetDatalakeStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDatalakeStatusCommandOutput>;
  getDatalakeStatus(
    args: GetDatalakeStatusCommandInput,
    cb: (err: any, data?: GetDatalakeStatusCommandOutput) => void
  ): void;
  getDatalakeStatus(
    args: GetDatalakeStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatalakeStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSubscriberCommand}
   */
  getSubscriber(args: GetSubscriberCommandInput, options?: __HttpHandlerOptions): Promise<GetSubscriberCommandOutput>;
  getSubscriber(args: GetSubscriberCommandInput, cb: (err: any, data?: GetSubscriberCommandOutput) => void): void;
  getSubscriber(
    args: GetSubscriberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSubscriberCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatalakeExceptionsCommand}
   */
  listDatalakeExceptions(
    args: ListDatalakeExceptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatalakeExceptionsCommandOutput>;
  listDatalakeExceptions(
    args: ListDatalakeExceptionsCommandInput,
    cb: (err: any, data?: ListDatalakeExceptionsCommandOutput) => void
  ): void;
  listDatalakeExceptions(
    args: ListDatalakeExceptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatalakeExceptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLogSourcesCommand}
   */
  listLogSources(
    args: ListLogSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLogSourcesCommandOutput>;
  listLogSources(args: ListLogSourcesCommandInput, cb: (err: any, data?: ListLogSourcesCommandOutput) => void): void;
  listLogSources(
    args: ListLogSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLogSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubscribersCommand}
   */
  listSubscribers(
    args: ListSubscribersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubscribersCommandOutput>;
  listSubscribers(args: ListSubscribersCommandInput, cb: (err: any, data?: ListSubscribersCommandOutput) => void): void;
  listSubscribers(
    args: ListSubscribersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubscribersCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDatalakeCommand}
   */
  updateDatalake(
    args: UpdateDatalakeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatalakeCommandOutput>;
  updateDatalake(args: UpdateDatalakeCommandInput, cb: (err: any, data?: UpdateDatalakeCommandOutput) => void): void;
  updateDatalake(
    args: UpdateDatalakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatalakeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDatalakeExceptionsExpiryCommand}
   */
  updateDatalakeExceptionsExpiry(
    args: UpdateDatalakeExceptionsExpiryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatalakeExceptionsExpiryCommandOutput>;
  updateDatalakeExceptionsExpiry(
    args: UpdateDatalakeExceptionsExpiryCommandInput,
    cb: (err: any, data?: UpdateDatalakeExceptionsExpiryCommandOutput) => void
  ): void;
  updateDatalakeExceptionsExpiry(
    args: UpdateDatalakeExceptionsExpiryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatalakeExceptionsExpiryCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDatalakeExceptionsSubscriptionCommand}
   */
  updateDatalakeExceptionsSubscription(
    args: UpdateDatalakeExceptionsSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatalakeExceptionsSubscriptionCommandOutput>;
  updateDatalakeExceptionsSubscription(
    args: UpdateDatalakeExceptionsSubscriptionCommandInput,
    cb: (err: any, data?: UpdateDatalakeExceptionsSubscriptionCommandOutput) => void
  ): void;
  updateDatalakeExceptionsSubscription(
    args: UpdateDatalakeExceptionsSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatalakeExceptionsSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSubscriberCommand}
   */
  updateSubscriber(
    args: UpdateSubscriberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSubscriberCommandOutput>;
  updateSubscriber(
    args: UpdateSubscriberCommandInput,
    cb: (err: any, data?: UpdateSubscriberCommandOutput) => void
  ): void;
  updateSubscriber(
    args: UpdateSubscriberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSubscriberCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSubscriptionNotificationConfigurationCommand}
   */
  updateSubscriptionNotificationConfiguration(
    args: UpdateSubscriptionNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSubscriptionNotificationConfigurationCommandOutput>;
  updateSubscriptionNotificationConfiguration(
    args: UpdateSubscriptionNotificationConfigurationCommandInput,
    cb: (err: any, data?: UpdateSubscriptionNotificationConfigurationCommandOutput) => void
  ): void;
  updateSubscriptionNotificationConfiguration(
    args: UpdateSubscriptionNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSubscriptionNotificationConfigurationCommandOutput) => void
  ): void;
}

/**
 * @public
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
export class SecurityLake extends SecurityLakeClient implements SecurityLake {}
createAggregatedClient(commands, SecurityLake);
