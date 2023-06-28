// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
  CreateDataLakeCommand,
  CreateDataLakeCommandInput,
  CreateDataLakeCommandOutput,
} from "./commands/CreateDataLakeCommand";
import {
  CreateDataLakeExceptionSubscriptionCommand,
  CreateDataLakeExceptionSubscriptionCommandInput,
  CreateDataLakeExceptionSubscriptionCommandOutput,
} from "./commands/CreateDataLakeExceptionSubscriptionCommand";
import {
  CreateDataLakeOrganizationConfigurationCommand,
  CreateDataLakeOrganizationConfigurationCommandInput,
  CreateDataLakeOrganizationConfigurationCommandOutput,
} from "./commands/CreateDataLakeOrganizationConfigurationCommand";
import {
  CreateSubscriberCommand,
  CreateSubscriberCommandInput,
  CreateSubscriberCommandOutput,
} from "./commands/CreateSubscriberCommand";
import {
  CreateSubscriberNotificationCommand,
  CreateSubscriberNotificationCommandInput,
  CreateSubscriberNotificationCommandOutput,
} from "./commands/CreateSubscriberNotificationCommand";
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
  DeleteDataLakeCommand,
  DeleteDataLakeCommandInput,
  DeleteDataLakeCommandOutput,
} from "./commands/DeleteDataLakeCommand";
import {
  DeleteDataLakeExceptionSubscriptionCommand,
  DeleteDataLakeExceptionSubscriptionCommandInput,
  DeleteDataLakeExceptionSubscriptionCommandOutput,
} from "./commands/DeleteDataLakeExceptionSubscriptionCommand";
import {
  DeleteDataLakeOrganizationConfigurationCommand,
  DeleteDataLakeOrganizationConfigurationCommandInput,
  DeleteDataLakeOrganizationConfigurationCommandOutput,
} from "./commands/DeleteDataLakeOrganizationConfigurationCommand";
import {
  DeleteSubscriberCommand,
  DeleteSubscriberCommandInput,
  DeleteSubscriberCommandOutput,
} from "./commands/DeleteSubscriberCommand";
import {
  DeleteSubscriberNotificationCommand,
  DeleteSubscriberNotificationCommandInput,
  DeleteSubscriberNotificationCommandOutput,
} from "./commands/DeleteSubscriberNotificationCommand";
import {
  DeregisterDataLakeDelegatedAdministratorCommand,
  DeregisterDataLakeDelegatedAdministratorCommandInput,
  DeregisterDataLakeDelegatedAdministratorCommandOutput,
} from "./commands/DeregisterDataLakeDelegatedAdministratorCommand";
import {
  GetDataLakeExceptionSubscriptionCommand,
  GetDataLakeExceptionSubscriptionCommandInput,
  GetDataLakeExceptionSubscriptionCommandOutput,
} from "./commands/GetDataLakeExceptionSubscriptionCommand";
import {
  GetDataLakeOrganizationConfigurationCommand,
  GetDataLakeOrganizationConfigurationCommandInput,
  GetDataLakeOrganizationConfigurationCommandOutput,
} from "./commands/GetDataLakeOrganizationConfigurationCommand";
import {
  GetDataLakeSourcesCommand,
  GetDataLakeSourcesCommandInput,
  GetDataLakeSourcesCommandOutput,
} from "./commands/GetDataLakeSourcesCommand";
import {
  GetSubscriberCommand,
  GetSubscriberCommandInput,
  GetSubscriberCommandOutput,
} from "./commands/GetSubscriberCommand";
import {
  ListDataLakeExceptionsCommand,
  ListDataLakeExceptionsCommandInput,
  ListDataLakeExceptionsCommandOutput,
} from "./commands/ListDataLakeExceptionsCommand";
import {
  ListDataLakesCommand,
  ListDataLakesCommandInput,
  ListDataLakesCommandOutput,
} from "./commands/ListDataLakesCommand";
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
  RegisterDataLakeDelegatedAdministratorCommand,
  RegisterDataLakeDelegatedAdministratorCommandInput,
  RegisterDataLakeDelegatedAdministratorCommandOutput,
} from "./commands/RegisterDataLakeDelegatedAdministratorCommand";
import {
  UpdateDataLakeCommand,
  UpdateDataLakeCommandInput,
  UpdateDataLakeCommandOutput,
} from "./commands/UpdateDataLakeCommand";
import {
  UpdateDataLakeExceptionSubscriptionCommand,
  UpdateDataLakeExceptionSubscriptionCommandInput,
  UpdateDataLakeExceptionSubscriptionCommandOutput,
} from "./commands/UpdateDataLakeExceptionSubscriptionCommand";
import {
  UpdateSubscriberCommand,
  UpdateSubscriberCommandInput,
  UpdateSubscriberCommandOutput,
} from "./commands/UpdateSubscriberCommand";
import {
  UpdateSubscriberNotificationCommand,
  UpdateSubscriberNotificationCommandInput,
  UpdateSubscriberNotificationCommandOutput,
} from "./commands/UpdateSubscriberNotificationCommand";
import { SecurityLakeClient, SecurityLakeClientConfig } from "./SecurityLakeClient";

const commands = {
  CreateAwsLogSourceCommand,
  CreateCustomLogSourceCommand,
  CreateDataLakeCommand,
  CreateDataLakeExceptionSubscriptionCommand,
  CreateDataLakeOrganizationConfigurationCommand,
  CreateSubscriberCommand,
  CreateSubscriberNotificationCommand,
  DeleteAwsLogSourceCommand,
  DeleteCustomLogSourceCommand,
  DeleteDataLakeCommand,
  DeleteDataLakeExceptionSubscriptionCommand,
  DeleteDataLakeOrganizationConfigurationCommand,
  DeleteSubscriberCommand,
  DeleteSubscriberNotificationCommand,
  DeregisterDataLakeDelegatedAdministratorCommand,
  GetDataLakeExceptionSubscriptionCommand,
  GetDataLakeOrganizationConfigurationCommand,
  GetDataLakeSourcesCommand,
  GetSubscriberCommand,
  ListDataLakeExceptionsCommand,
  ListDataLakesCommand,
  ListLogSourcesCommand,
  ListSubscribersCommand,
  RegisterDataLakeDelegatedAdministratorCommand,
  UpdateDataLakeCommand,
  UpdateDataLakeExceptionSubscriptionCommand,
  UpdateSubscriberCommand,
  UpdateSubscriberNotificationCommand,
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
   * @see {@link CreateDataLakeCommand}
   */
  createDataLake(
    args: CreateDataLakeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataLakeCommandOutput>;
  createDataLake(args: CreateDataLakeCommandInput, cb: (err: any, data?: CreateDataLakeCommandOutput) => void): void;
  createDataLake(
    args: CreateDataLakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataLakeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataLakeExceptionSubscriptionCommand}
   */
  createDataLakeExceptionSubscription(
    args: CreateDataLakeExceptionSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataLakeExceptionSubscriptionCommandOutput>;
  createDataLakeExceptionSubscription(
    args: CreateDataLakeExceptionSubscriptionCommandInput,
    cb: (err: any, data?: CreateDataLakeExceptionSubscriptionCommandOutput) => void
  ): void;
  createDataLakeExceptionSubscription(
    args: CreateDataLakeExceptionSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataLakeExceptionSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataLakeOrganizationConfigurationCommand}
   */
  createDataLakeOrganizationConfiguration(
    args: CreateDataLakeOrganizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataLakeOrganizationConfigurationCommandOutput>;
  createDataLakeOrganizationConfiguration(
    args: CreateDataLakeOrganizationConfigurationCommandInput,
    cb: (err: any, data?: CreateDataLakeOrganizationConfigurationCommandOutput) => void
  ): void;
  createDataLakeOrganizationConfiguration(
    args: CreateDataLakeOrganizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataLakeOrganizationConfigurationCommandOutput) => void
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
   * @see {@link CreateSubscriberNotificationCommand}
   */
  createSubscriberNotification(
    args: CreateSubscriberNotificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubscriberNotificationCommandOutput>;
  createSubscriberNotification(
    args: CreateSubscriberNotificationCommandInput,
    cb: (err: any, data?: CreateSubscriberNotificationCommandOutput) => void
  ): void;
  createSubscriberNotification(
    args: CreateSubscriberNotificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubscriberNotificationCommandOutput) => void
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
   * @see {@link DeleteDataLakeCommand}
   */
  deleteDataLake(
    args: DeleteDataLakeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataLakeCommandOutput>;
  deleteDataLake(args: DeleteDataLakeCommandInput, cb: (err: any, data?: DeleteDataLakeCommandOutput) => void): void;
  deleteDataLake(
    args: DeleteDataLakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataLakeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataLakeExceptionSubscriptionCommand}
   */
  deleteDataLakeExceptionSubscription(
    args: DeleteDataLakeExceptionSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataLakeExceptionSubscriptionCommandOutput>;
  deleteDataLakeExceptionSubscription(
    args: DeleteDataLakeExceptionSubscriptionCommandInput,
    cb: (err: any, data?: DeleteDataLakeExceptionSubscriptionCommandOutput) => void
  ): void;
  deleteDataLakeExceptionSubscription(
    args: DeleteDataLakeExceptionSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataLakeExceptionSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataLakeOrganizationConfigurationCommand}
   */
  deleteDataLakeOrganizationConfiguration(
    args: DeleteDataLakeOrganizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataLakeOrganizationConfigurationCommandOutput>;
  deleteDataLakeOrganizationConfiguration(
    args: DeleteDataLakeOrganizationConfigurationCommandInput,
    cb: (err: any, data?: DeleteDataLakeOrganizationConfigurationCommandOutput) => void
  ): void;
  deleteDataLakeOrganizationConfiguration(
    args: DeleteDataLakeOrganizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataLakeOrganizationConfigurationCommandOutput) => void
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
   * @see {@link DeleteSubscriberNotificationCommand}
   */
  deleteSubscriberNotification(
    args: DeleteSubscriberNotificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSubscriberNotificationCommandOutput>;
  deleteSubscriberNotification(
    args: DeleteSubscriberNotificationCommandInput,
    cb: (err: any, data?: DeleteSubscriberNotificationCommandOutput) => void
  ): void;
  deleteSubscriberNotification(
    args: DeleteSubscriberNotificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubscriberNotificationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterDataLakeDelegatedAdministratorCommand}
   */
  deregisterDataLakeDelegatedAdministrator(
    args: DeregisterDataLakeDelegatedAdministratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterDataLakeDelegatedAdministratorCommandOutput>;
  deregisterDataLakeDelegatedAdministrator(
    args: DeregisterDataLakeDelegatedAdministratorCommandInput,
    cb: (err: any, data?: DeregisterDataLakeDelegatedAdministratorCommandOutput) => void
  ): void;
  deregisterDataLakeDelegatedAdministrator(
    args: DeregisterDataLakeDelegatedAdministratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterDataLakeDelegatedAdministratorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataLakeExceptionSubscriptionCommand}
   */
  getDataLakeExceptionSubscription(
    args: GetDataLakeExceptionSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataLakeExceptionSubscriptionCommandOutput>;
  getDataLakeExceptionSubscription(
    args: GetDataLakeExceptionSubscriptionCommandInput,
    cb: (err: any, data?: GetDataLakeExceptionSubscriptionCommandOutput) => void
  ): void;
  getDataLakeExceptionSubscription(
    args: GetDataLakeExceptionSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataLakeExceptionSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataLakeOrganizationConfigurationCommand}
   */
  getDataLakeOrganizationConfiguration(
    args: GetDataLakeOrganizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataLakeOrganizationConfigurationCommandOutput>;
  getDataLakeOrganizationConfiguration(
    args: GetDataLakeOrganizationConfigurationCommandInput,
    cb: (err: any, data?: GetDataLakeOrganizationConfigurationCommandOutput) => void
  ): void;
  getDataLakeOrganizationConfiguration(
    args: GetDataLakeOrganizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataLakeOrganizationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataLakeSourcesCommand}
   */
  getDataLakeSources(
    args: GetDataLakeSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataLakeSourcesCommandOutput>;
  getDataLakeSources(
    args: GetDataLakeSourcesCommandInput,
    cb: (err: any, data?: GetDataLakeSourcesCommandOutput) => void
  ): void;
  getDataLakeSources(
    args: GetDataLakeSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataLakeSourcesCommandOutput) => void
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
   * @see {@link ListDataLakeExceptionsCommand}
   */
  listDataLakeExceptions(
    args: ListDataLakeExceptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataLakeExceptionsCommandOutput>;
  listDataLakeExceptions(
    args: ListDataLakeExceptionsCommandInput,
    cb: (err: any, data?: ListDataLakeExceptionsCommandOutput) => void
  ): void;
  listDataLakeExceptions(
    args: ListDataLakeExceptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataLakeExceptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataLakesCommand}
   */
  listDataLakes(args: ListDataLakesCommandInput, options?: __HttpHandlerOptions): Promise<ListDataLakesCommandOutput>;
  listDataLakes(args: ListDataLakesCommandInput, cb: (err: any, data?: ListDataLakesCommandOutput) => void): void;
  listDataLakes(
    args: ListDataLakesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataLakesCommandOutput) => void
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
   * @see {@link RegisterDataLakeDelegatedAdministratorCommand}
   */
  registerDataLakeDelegatedAdministrator(
    args: RegisterDataLakeDelegatedAdministratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterDataLakeDelegatedAdministratorCommandOutput>;
  registerDataLakeDelegatedAdministrator(
    args: RegisterDataLakeDelegatedAdministratorCommandInput,
    cb: (err: any, data?: RegisterDataLakeDelegatedAdministratorCommandOutput) => void
  ): void;
  registerDataLakeDelegatedAdministrator(
    args: RegisterDataLakeDelegatedAdministratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterDataLakeDelegatedAdministratorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataLakeCommand}
   */
  updateDataLake(
    args: UpdateDataLakeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataLakeCommandOutput>;
  updateDataLake(args: UpdateDataLakeCommandInput, cb: (err: any, data?: UpdateDataLakeCommandOutput) => void): void;
  updateDataLake(
    args: UpdateDataLakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataLakeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataLakeExceptionSubscriptionCommand}
   */
  updateDataLakeExceptionSubscription(
    args: UpdateDataLakeExceptionSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataLakeExceptionSubscriptionCommandOutput>;
  updateDataLakeExceptionSubscription(
    args: UpdateDataLakeExceptionSubscriptionCommandInput,
    cb: (err: any, data?: UpdateDataLakeExceptionSubscriptionCommandOutput) => void
  ): void;
  updateDataLakeExceptionSubscription(
    args: UpdateDataLakeExceptionSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataLakeExceptionSubscriptionCommandOutput) => void
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
   * @see {@link UpdateSubscriberNotificationCommand}
   */
  updateSubscriberNotification(
    args: UpdateSubscriberNotificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSubscriberNotificationCommandOutput>;
  updateSubscriberNotification(
    args: UpdateSubscriberNotificationCommandInput,
    cb: (err: any, data?: UpdateSubscriberNotificationCommandOutput) => void
  ): void;
  updateSubscriberNotification(
    args: UpdateSubscriberNotificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSubscriberNotificationCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Security Lake is a fully managed security data lake service. You can use Security Lake to
 *          automatically centralize security data from cloud, on-premises, and custom sources into a
 *          data lake that's stored in your Amazon Web Services account. Amazon Web Services Organizations
 *          is an account management service that lets you consolidate multiple Amazon Web Services
 *          accounts into an organization that you create and centrally manage. With Organizations, you
 *          can create member accounts and invite existing accounts to join your organization.
 *          Security Lake helps you analyze security data for a more complete understanding of your
 *          security posture across the entire organization. It can also help you improve the
 *          protection of your workloads, applications, and data.</p>
 *          <p>The data lake is backed by Amazon Simple Storage Service (Amazon S3) buckets, and you
 *          retain ownership over your data.</p>
 *          <p>Amazon Security Lake integrates with CloudTrail, a service that provides a record of
 *          actions taken by a user, role, or an Amazon Web Services service. In Security Lake, CloudTrail captures API calls for Security Lake as events. The calls captured include calls
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
