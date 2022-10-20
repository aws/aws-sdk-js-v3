// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AddNotificationChannelCommand,
  AddNotificationChannelCommandInput,
  AddNotificationChannelCommandOutput,
} from "./commands/AddNotificationChannelCommand";
import {
  DeleteInsightCommand,
  DeleteInsightCommandInput,
  DeleteInsightCommandOutput,
} from "./commands/DeleteInsightCommand";
import {
  DescribeAccountHealthCommand,
  DescribeAccountHealthCommandInput,
  DescribeAccountHealthCommandOutput,
} from "./commands/DescribeAccountHealthCommand";
import {
  DescribeAccountOverviewCommand,
  DescribeAccountOverviewCommandInput,
  DescribeAccountOverviewCommandOutput,
} from "./commands/DescribeAccountOverviewCommand";
import {
  DescribeAnomalyCommand,
  DescribeAnomalyCommandInput,
  DescribeAnomalyCommandOutput,
} from "./commands/DescribeAnomalyCommand";
import {
  DescribeEventSourcesConfigCommand,
  DescribeEventSourcesConfigCommandInput,
  DescribeEventSourcesConfigCommandOutput,
} from "./commands/DescribeEventSourcesConfigCommand";
import {
  DescribeFeedbackCommand,
  DescribeFeedbackCommandInput,
  DescribeFeedbackCommandOutput,
} from "./commands/DescribeFeedbackCommand";
import {
  DescribeInsightCommand,
  DescribeInsightCommandInput,
  DescribeInsightCommandOutput,
} from "./commands/DescribeInsightCommand";
import {
  DescribeOrganizationHealthCommand,
  DescribeOrganizationHealthCommandInput,
  DescribeOrganizationHealthCommandOutput,
} from "./commands/DescribeOrganizationHealthCommand";
import {
  DescribeOrganizationOverviewCommand,
  DescribeOrganizationOverviewCommandInput,
  DescribeOrganizationOverviewCommandOutput,
} from "./commands/DescribeOrganizationOverviewCommand";
import {
  DescribeOrganizationResourceCollectionHealthCommand,
  DescribeOrganizationResourceCollectionHealthCommandInput,
  DescribeOrganizationResourceCollectionHealthCommandOutput,
} from "./commands/DescribeOrganizationResourceCollectionHealthCommand";
import {
  DescribeResourceCollectionHealthCommand,
  DescribeResourceCollectionHealthCommandInput,
  DescribeResourceCollectionHealthCommandOutput,
} from "./commands/DescribeResourceCollectionHealthCommand";
import {
  DescribeServiceIntegrationCommand,
  DescribeServiceIntegrationCommandInput,
  DescribeServiceIntegrationCommandOutput,
} from "./commands/DescribeServiceIntegrationCommand";
import {
  GetCostEstimationCommand,
  GetCostEstimationCommandInput,
  GetCostEstimationCommandOutput,
} from "./commands/GetCostEstimationCommand";
import {
  GetResourceCollectionCommand,
  GetResourceCollectionCommandInput,
  GetResourceCollectionCommandOutput,
} from "./commands/GetResourceCollectionCommand";
import {
  ListAnomaliesForInsightCommand,
  ListAnomaliesForInsightCommandInput,
  ListAnomaliesForInsightCommandOutput,
} from "./commands/ListAnomaliesForInsightCommand";
import {
  ListAnomalousLogGroupsCommand,
  ListAnomalousLogGroupsCommandInput,
  ListAnomalousLogGroupsCommandOutput,
} from "./commands/ListAnomalousLogGroupsCommand";
import { ListEventsCommand, ListEventsCommandInput, ListEventsCommandOutput } from "./commands/ListEventsCommand";
import {
  ListInsightsCommand,
  ListInsightsCommandInput,
  ListInsightsCommandOutput,
} from "./commands/ListInsightsCommand";
import {
  ListMonitoredResourcesCommand,
  ListMonitoredResourcesCommandInput,
  ListMonitoredResourcesCommandOutput,
} from "./commands/ListMonitoredResourcesCommand";
import {
  ListNotificationChannelsCommand,
  ListNotificationChannelsCommandInput,
  ListNotificationChannelsCommandOutput,
} from "./commands/ListNotificationChannelsCommand";
import {
  ListOrganizationInsightsCommand,
  ListOrganizationInsightsCommandInput,
  ListOrganizationInsightsCommandOutput,
} from "./commands/ListOrganizationInsightsCommand";
import {
  ListRecommendationsCommand,
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "./commands/ListRecommendationsCommand";
import { PutFeedbackCommand, PutFeedbackCommandInput, PutFeedbackCommandOutput } from "./commands/PutFeedbackCommand";
import {
  RemoveNotificationChannelCommand,
  RemoveNotificationChannelCommandInput,
  RemoveNotificationChannelCommandOutput,
} from "./commands/RemoveNotificationChannelCommand";
import {
  SearchInsightsCommand,
  SearchInsightsCommandInput,
  SearchInsightsCommandOutput,
} from "./commands/SearchInsightsCommand";
import {
  SearchOrganizationInsightsCommand,
  SearchOrganizationInsightsCommandInput,
  SearchOrganizationInsightsCommandOutput,
} from "./commands/SearchOrganizationInsightsCommand";
import {
  StartCostEstimationCommand,
  StartCostEstimationCommandInput,
  StartCostEstimationCommandOutput,
} from "./commands/StartCostEstimationCommand";
import {
  UpdateEventSourcesConfigCommand,
  UpdateEventSourcesConfigCommandInput,
  UpdateEventSourcesConfigCommandOutput,
} from "./commands/UpdateEventSourcesConfigCommand";
import {
  UpdateResourceCollectionCommand,
  UpdateResourceCollectionCommandInput,
  UpdateResourceCollectionCommandOutput,
} from "./commands/UpdateResourceCollectionCommand";
import {
  UpdateServiceIntegrationCommand,
  UpdateServiceIntegrationCommandInput,
  UpdateServiceIntegrationCommandOutput,
} from "./commands/UpdateServiceIntegrationCommand";
import { DevOpsGuruClient } from "./DevOpsGuruClient";

/**
 * <p> Amazon DevOps Guru is a fully managed service that helps you identify anomalous behavior in
 * 			business critical operational applications. You specify the Amazon Web Services resources that you
 * 			want DevOps Guru to cover, then the Amazon CloudWatch metrics and Amazon Web Services CloudTrail events related to those
 * 			resources are analyzed. When anomalous behavior is detected, DevOps Guru creates an
 * 				<i>insight</i> that includes recommendations, related events, and
 * 			related metrics that can help you improve your operational applications. For more
 * 			information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html">What is Amazon DevOps Guru</a>. </p>
 *
 * 		       <p> You can specify 1 or 2 Amazon Simple Notification Service topics so you are notified every time a new insight
 * 			is created. You can also enable DevOps Guru to generate an OpsItem in Amazon Web Services Systems Manager for each
 * 			insight to help you manage and track your work addressing insights. </p>
 *
 * 		       <p> To learn about the DevOps Guru workflow, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html#how-it-works">How DevOps Guru works</a>. To
 * 			learn about DevOps Guru concepts, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/concepts.html">Concepts in DevOps Guru</a>. </p>
 */
export class DevOpsGuru extends DevOpsGuruClient {
  /**
   * <p> Adds a notification channel to DevOps Guru. A notification channel is used to notify you
   * 			about important DevOps Guru events, such as when an insight is generated. </p>
   * 		       <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission
   * 				to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics.
   * 				For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions
   * 				for cross account Amazon SNS topics</a>.</p>
   * 				     <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see Permissions for cross account Amazon SNS topics.</p>
   * 				     <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions
   * 				to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for
   * 				Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>
   */
  public addNotificationChannel(
    args: AddNotificationChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddNotificationChannelCommandOutput>;
  public addNotificationChannel(
    args: AddNotificationChannelCommandInput,
    cb: (err: any, data?: AddNotificationChannelCommandOutput) => void
  ): void;
  public addNotificationChannel(
    args: AddNotificationChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddNotificationChannelCommandOutput) => void
  ): void;
  public addNotificationChannel(
    args: AddNotificationChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddNotificationChannelCommandOutput) => void),
    cb?: (err: any, data?: AddNotificationChannelCommandOutput) => void
  ): Promise<AddNotificationChannelCommandOutput> | void {
    const command = new AddNotificationChannelCommand(args);
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
   * <p>Deletes the insight along with the associated anomalies, events and recommendations.</p>
   */
  public deleteInsight(
    args: DeleteInsightCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInsightCommandOutput>;
  public deleteInsight(
    args: DeleteInsightCommandInput,
    cb: (err: any, data?: DeleteInsightCommandOutput) => void
  ): void;
  public deleteInsight(
    args: DeleteInsightCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInsightCommandOutput) => void
  ): void;
  public deleteInsight(
    args: DeleteInsightCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteInsightCommandOutput) => void),
    cb?: (err: any, data?: DeleteInsightCommandOutput) => void
  ): Promise<DeleteInsightCommandOutput> | void {
    const command = new DeleteInsightCommand(args);
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
   * <p> Returns the number of open reactive insights, the number of open proactive insights,
   * 			and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the
   * 			health of operations in your Amazon Web Services account. </p>
   */
  public describeAccountHealth(
    args: DescribeAccountHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountHealthCommandOutput>;
  public describeAccountHealth(
    args: DescribeAccountHealthCommandInput,
    cb: (err: any, data?: DescribeAccountHealthCommandOutput) => void
  ): void;
  public describeAccountHealth(
    args: DescribeAccountHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountHealthCommandOutput) => void
  ): void;
  public describeAccountHealth(
    args: DescribeAccountHealthCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAccountHealthCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountHealthCommandOutput) => void
  ): Promise<DescribeAccountHealthCommandOutput> | void {
    const command = new DescribeAccountHealthCommand(args);
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
   * <p> For the time range passed in, returns the number of open reactive insight that were
   * 			created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all
   * 			closed reactive insights. </p>
   */
  public describeAccountOverview(
    args: DescribeAccountOverviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountOverviewCommandOutput>;
  public describeAccountOverview(
    args: DescribeAccountOverviewCommandInput,
    cb: (err: any, data?: DescribeAccountOverviewCommandOutput) => void
  ): void;
  public describeAccountOverview(
    args: DescribeAccountOverviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountOverviewCommandOutput) => void
  ): void;
  public describeAccountOverview(
    args: DescribeAccountOverviewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAccountOverviewCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountOverviewCommandOutput) => void
  ): Promise<DescribeAccountOverviewCommandOutput> | void {
    const command = new DescribeAccountOverviewCommand(args);
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
   * <p> Returns details about an anomaly that you specify using its ID. </p>
   */
  public describeAnomaly(
    args: DescribeAnomalyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAnomalyCommandOutput>;
  public describeAnomaly(
    args: DescribeAnomalyCommandInput,
    cb: (err: any, data?: DescribeAnomalyCommandOutput) => void
  ): void;
  public describeAnomaly(
    args: DescribeAnomalyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAnomalyCommandOutput) => void
  ): void;
  public describeAnomaly(
    args: DescribeAnomalyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAnomalyCommandOutput) => void),
    cb?: (err: any, data?: DescribeAnomalyCommandOutput) => void
  ): Promise<DescribeAnomalyCommandOutput> | void {
    const command = new DescribeAnomalyCommand(args);
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
   * <p>Returns the integration status of services that are integrated with DevOps Guru as Consumer
   * 			via EventBridge. The one service that can be integrated with DevOps Guru is Amazon CodeGuru
   * 			Profiler, which can produce proactive recommendations which can be stored and viewed in
   * 			DevOps Guru.</p>
   */
  public describeEventSourcesConfig(
    args: DescribeEventSourcesConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventSourcesConfigCommandOutput>;
  public describeEventSourcesConfig(
    args: DescribeEventSourcesConfigCommandInput,
    cb: (err: any, data?: DescribeEventSourcesConfigCommandOutput) => void
  ): void;
  public describeEventSourcesConfig(
    args: DescribeEventSourcesConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventSourcesConfigCommandOutput) => void
  ): void;
  public describeEventSourcesConfig(
    args: DescribeEventSourcesConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventSourcesConfigCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventSourcesConfigCommandOutput) => void
  ): Promise<DescribeEventSourcesConfigCommandOutput> | void {
    const command = new DescribeEventSourcesConfigCommand(args);
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
   * <p> Returns the most recent feedback submitted in the current Amazon Web Services account and Region.
   * 		</p>
   */
  public describeFeedback(
    args: DescribeFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFeedbackCommandOutput>;
  public describeFeedback(
    args: DescribeFeedbackCommandInput,
    cb: (err: any, data?: DescribeFeedbackCommandOutput) => void
  ): void;
  public describeFeedback(
    args: DescribeFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFeedbackCommandOutput) => void
  ): void;
  public describeFeedback(
    args: DescribeFeedbackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFeedbackCommandOutput) => void),
    cb?: (err: any, data?: DescribeFeedbackCommandOutput) => void
  ): Promise<DescribeFeedbackCommandOutput> | void {
    const command = new DescribeFeedbackCommand(args);
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
   * <p> Returns details about an insight that you specify using its ID. </p>
   */
  public describeInsight(
    args: DescribeInsightCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInsightCommandOutput>;
  public describeInsight(
    args: DescribeInsightCommandInput,
    cb: (err: any, data?: DescribeInsightCommandOutput) => void
  ): void;
  public describeInsight(
    args: DescribeInsightCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInsightCommandOutput) => void
  ): void;
  public describeInsight(
    args: DescribeInsightCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInsightCommandOutput) => void),
    cb?: (err: any, data?: DescribeInsightCommandOutput) => void
  ): Promise<DescribeInsightCommandOutput> | void {
    const command = new DescribeInsightCommand(args);
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
   * <p>Returns active insights, predictive insights, and resource hours analyzed in last
   * 			hour.</p>
   */
  public describeOrganizationHealth(
    args: DescribeOrganizationHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationHealthCommandOutput>;
  public describeOrganizationHealth(
    args: DescribeOrganizationHealthCommandInput,
    cb: (err: any, data?: DescribeOrganizationHealthCommandOutput) => void
  ): void;
  public describeOrganizationHealth(
    args: DescribeOrganizationHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationHealthCommandOutput) => void
  ): void;
  public describeOrganizationHealth(
    args: DescribeOrganizationHealthCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOrganizationHealthCommandOutput) => void),
    cb?: (err: any, data?: DescribeOrganizationHealthCommandOutput) => void
  ): Promise<DescribeOrganizationHealthCommandOutput> | void {
    const command = new DescribeOrganizationHealthCommand(args);
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
   * <p>Returns an overview of your organization's history based on the specified time range.
   * 			The overview includes the total reactive and proactive insights.</p>
   */
  public describeOrganizationOverview(
    args: DescribeOrganizationOverviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationOverviewCommandOutput>;
  public describeOrganizationOverview(
    args: DescribeOrganizationOverviewCommandInput,
    cb: (err: any, data?: DescribeOrganizationOverviewCommandOutput) => void
  ): void;
  public describeOrganizationOverview(
    args: DescribeOrganizationOverviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationOverviewCommandOutput) => void
  ): void;
  public describeOrganizationOverview(
    args: DescribeOrganizationOverviewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOrganizationOverviewCommandOutput) => void),
    cb?: (err: any, data?: DescribeOrganizationOverviewCommandOutput) => void
  ): Promise<DescribeOrganizationOverviewCommandOutput> | void {
    const command = new DescribeOrganizationOverviewCommand(args);
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
   * <p>Provides an overview of your system's health. If additional member accounts are part
   * 			of your organization, you can filter those accounts using the <code>AccountIds</code>
   * 			field.</p>
   */
  public describeOrganizationResourceCollectionHealth(
    args: DescribeOrganizationResourceCollectionHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationResourceCollectionHealthCommandOutput>;
  public describeOrganizationResourceCollectionHealth(
    args: DescribeOrganizationResourceCollectionHealthCommandInput,
    cb: (err: any, data?: DescribeOrganizationResourceCollectionHealthCommandOutput) => void
  ): void;
  public describeOrganizationResourceCollectionHealth(
    args: DescribeOrganizationResourceCollectionHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationResourceCollectionHealthCommandOutput) => void
  ): void;
  public describeOrganizationResourceCollectionHealth(
    args: DescribeOrganizationResourceCollectionHealthCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeOrganizationResourceCollectionHealthCommandOutput) => void),
    cb?: (err: any, data?: DescribeOrganizationResourceCollectionHealthCommandOutput) => void
  ): Promise<DescribeOrganizationResourceCollectionHealthCommandOutput> | void {
    const command = new DescribeOrganizationResourceCollectionHealthCommand(args);
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
   * <p> Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR)
   * 			for all closed insights in resource collections in your account. You specify the type of
   * 			Amazon Web Services resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  public describeResourceCollectionHealth(
    args: DescribeResourceCollectionHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourceCollectionHealthCommandOutput>;
  public describeResourceCollectionHealth(
    args: DescribeResourceCollectionHealthCommandInput,
    cb: (err: any, data?: DescribeResourceCollectionHealthCommandOutput) => void
  ): void;
  public describeResourceCollectionHealth(
    args: DescribeResourceCollectionHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourceCollectionHealthCommandOutput) => void
  ): void;
  public describeResourceCollectionHealth(
    args: DescribeResourceCollectionHealthCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeResourceCollectionHealthCommandOutput) => void),
    cb?: (err: any, data?: DescribeResourceCollectionHealthCommandOutput) => void
  ): Promise<DescribeResourceCollectionHealthCommandOutput> | void {
    const command = new DescribeResourceCollectionHealthCommand(args);
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
   * <p> Returns the integration status of services that are integrated with DevOps Guru.
   * 			The one service that can be integrated with DevOps Guru
   *       	is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight. </p>
   */
  public describeServiceIntegration(
    args: DescribeServiceIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServiceIntegrationCommandOutput>;
  public describeServiceIntegration(
    args: DescribeServiceIntegrationCommandInput,
    cb: (err: any, data?: DescribeServiceIntegrationCommandOutput) => void
  ): void;
  public describeServiceIntegration(
    args: DescribeServiceIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServiceIntegrationCommandOutput) => void
  ): void;
  public describeServiceIntegration(
    args: DescribeServiceIntegrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeServiceIntegrationCommandOutput) => void),
    cb?: (err: any, data?: DescribeServiceIntegrationCommandOutput) => void
  ): Promise<DescribeServiceIntegrationCommandOutput> | void {
    const command = new DescribeServiceIntegrationCommand(args);
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
   * <p>Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources.
   * 			For more information,
   * 			see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your
   * 			Amazon DevOps Guru costs</a> and
   * 			<a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.</p>
   */
  public getCostEstimation(
    args: GetCostEstimationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCostEstimationCommandOutput>;
  public getCostEstimation(
    args: GetCostEstimationCommandInput,
    cb: (err: any, data?: GetCostEstimationCommandOutput) => void
  ): void;
  public getCostEstimation(
    args: GetCostEstimationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCostEstimationCommandOutput) => void
  ): void;
  public getCostEstimation(
    args: GetCostEstimationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCostEstimationCommandOutput) => void),
    cb?: (err: any, data?: GetCostEstimationCommandOutput) => void
  ): Promise<GetCostEstimationCommandOutput> | void {
    const command = new GetCostEstimationCommand(args);
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
   * <p> Returns lists Amazon Web Services resources that are of the specified resource collection type.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
   */
  public getResourceCollection(
    args: GetResourceCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceCollectionCommandOutput>;
  public getResourceCollection(
    args: GetResourceCollectionCommandInput,
    cb: (err: any, data?: GetResourceCollectionCommandOutput) => void
  ): void;
  public getResourceCollection(
    args: GetResourceCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceCollectionCommandOutput) => void
  ): void;
  public getResourceCollection(
    args: GetResourceCollectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourceCollectionCommandOutput) => void),
    cb?: (err: any, data?: GetResourceCollectionCommandOutput) => void
  ): Promise<GetResourceCollectionCommandOutput> | void {
    const command = new GetResourceCollectionCommand(args);
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
   * <p> Returns a list of the anomalies that belong to an insight that you specify using its
   * 			ID. </p>
   */
  public listAnomaliesForInsight(
    args: ListAnomaliesForInsightCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnomaliesForInsightCommandOutput>;
  public listAnomaliesForInsight(
    args: ListAnomaliesForInsightCommandInput,
    cb: (err: any, data?: ListAnomaliesForInsightCommandOutput) => void
  ): void;
  public listAnomaliesForInsight(
    args: ListAnomaliesForInsightCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnomaliesForInsightCommandOutput) => void
  ): void;
  public listAnomaliesForInsight(
    args: ListAnomaliesForInsightCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAnomaliesForInsightCommandOutput) => void),
    cb?: (err: any, data?: ListAnomaliesForInsightCommandOutput) => void
  ): Promise<ListAnomaliesForInsightCommandOutput> | void {
    const command = new ListAnomaliesForInsightCommand(args);
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
   * <p>
   * 			Returns the list of log groups that contain log anomalies.
   * 		</p>
   */
  public listAnomalousLogGroups(
    args: ListAnomalousLogGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnomalousLogGroupsCommandOutput>;
  public listAnomalousLogGroups(
    args: ListAnomalousLogGroupsCommandInput,
    cb: (err: any, data?: ListAnomalousLogGroupsCommandOutput) => void
  ): void;
  public listAnomalousLogGroups(
    args: ListAnomalousLogGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnomalousLogGroupsCommandOutput) => void
  ): void;
  public listAnomalousLogGroups(
    args: ListAnomalousLogGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAnomalousLogGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListAnomalousLogGroupsCommandOutput) => void
  ): Promise<ListAnomalousLogGroupsCommandOutput> | void {
    const command = new ListAnomalousLogGroupsCommand(args);
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
   * <p> Returns a list of the events emitted by the resources that are evaluated by DevOps Guru.
   * 			You can use filters to specify which events are returned. </p>
   */
  public listEvents(args: ListEventsCommandInput, options?: __HttpHandlerOptions): Promise<ListEventsCommandOutput>;
  public listEvents(args: ListEventsCommandInput, cb: (err: any, data?: ListEventsCommandOutput) => void): void;
  public listEvents(
    args: ListEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventsCommandOutput) => void
  ): void;
  public listEvents(
    args: ListEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEventsCommandOutput) => void),
    cb?: (err: any, data?: ListEventsCommandOutput) => void
  ): Promise<ListEventsCommandOutput> | void {
    const command = new ListEventsCommand(args);
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
   * <p> Returns a list of insights in your Amazon Web Services account. You can specify which insights are
   * 			returned by their start time and status (<code>ONGOING</code>, <code>CLOSED</code>, or
   * 				<code>ANY</code>). </p>
   */
  public listInsights(
    args: ListInsightsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInsightsCommandOutput>;
  public listInsights(args: ListInsightsCommandInput, cb: (err: any, data?: ListInsightsCommandOutput) => void): void;
  public listInsights(
    args: ListInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInsightsCommandOutput) => void
  ): void;
  public listInsights(
    args: ListInsightsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInsightsCommandOutput) => void),
    cb?: (err: any, data?: ListInsightsCommandOutput) => void
  ): Promise<ListInsightsCommandOutput> | void {
    const command = new ListInsightsCommand(args);
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
   * <p>
   * 			Returns the list of all log groups that are being monitored and tagged by DevOps Guru.
   * 		</p>
   */
  public listMonitoredResources(
    args: ListMonitoredResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMonitoredResourcesCommandOutput>;
  public listMonitoredResources(
    args: ListMonitoredResourcesCommandInput,
    cb: (err: any, data?: ListMonitoredResourcesCommandOutput) => void
  ): void;
  public listMonitoredResources(
    args: ListMonitoredResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMonitoredResourcesCommandOutput) => void
  ): void;
  public listMonitoredResources(
    args: ListMonitoredResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMonitoredResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListMonitoredResourcesCommandOutput) => void
  ): Promise<ListMonitoredResourcesCommandOutput> | void {
    const command = new ListMonitoredResourcesCommand(args);
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
   * <p> Returns a list of notification channels configured for DevOps Guru. Each notification
   * 			channel is used to notify you when DevOps Guru generates an insight that contains information
   * 			about how to improve your operations. The one
   *       	supported notification channel is Amazon Simple Notification Service (Amazon SNS). </p>
   */
  public listNotificationChannels(
    args: ListNotificationChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotificationChannelsCommandOutput>;
  public listNotificationChannels(
    args: ListNotificationChannelsCommandInput,
    cb: (err: any, data?: ListNotificationChannelsCommandOutput) => void
  ): void;
  public listNotificationChannels(
    args: ListNotificationChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotificationChannelsCommandOutput) => void
  ): void;
  public listNotificationChannels(
    args: ListNotificationChannelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNotificationChannelsCommandOutput) => void),
    cb?: (err: any, data?: ListNotificationChannelsCommandOutput) => void
  ): Promise<ListNotificationChannelsCommandOutput> | void {
    const command = new ListNotificationChannelsCommand(args);
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
   * <p>Returns a list of insights associated with the account or OU Id.</p>
   */
  public listOrganizationInsights(
    args: ListOrganizationInsightsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOrganizationInsightsCommandOutput>;
  public listOrganizationInsights(
    args: ListOrganizationInsightsCommandInput,
    cb: (err: any, data?: ListOrganizationInsightsCommandOutput) => void
  ): void;
  public listOrganizationInsights(
    args: ListOrganizationInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationInsightsCommandOutput) => void
  ): void;
  public listOrganizationInsights(
    args: ListOrganizationInsightsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOrganizationInsightsCommandOutput) => void),
    cb?: (err: any, data?: ListOrganizationInsightsCommandOutput) => void
  ): Promise<ListOrganizationInsightsCommandOutput> | void {
    const command = new ListOrganizationInsightsCommand(args);
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
   * <p> Returns a list of a specified insight's recommendations. Each recommendation includes
   * 			a list of related metrics and a list of related events. </p>
   */
  public listRecommendations(
    args: ListRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendationsCommandOutput>;
  public listRecommendations(
    args: ListRecommendationsCommandInput,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;
  public listRecommendations(
    args: ListRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;
  public listRecommendations(
    args: ListRecommendationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRecommendationsCommandOutput) => void),
    cb?: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): Promise<ListRecommendationsCommandOutput> | void {
    const command = new ListRecommendationsCommand(args);
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
   * <p> Collects customer feedback about the specified insight. </p>
   */
  public putFeedback(args: PutFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<PutFeedbackCommandOutput>;
  public putFeedback(args: PutFeedbackCommandInput, cb: (err: any, data?: PutFeedbackCommandOutput) => void): void;
  public putFeedback(
    args: PutFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFeedbackCommandOutput) => void
  ): void;
  public putFeedback(
    args: PutFeedbackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutFeedbackCommandOutput) => void),
    cb?: (err: any, data?: PutFeedbackCommandOutput) => void
  ): Promise<PutFeedbackCommandOutput> | void {
    const command = new PutFeedbackCommand(args);
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
   * <p> Removes a notification channel from DevOps Guru. A notification channel is used to notify
   * 			you when DevOps Guru generates an insight that contains information about how to improve your
   * 			operations. </p>
   */
  public removeNotificationChannel(
    args: RemoveNotificationChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveNotificationChannelCommandOutput>;
  public removeNotificationChannel(
    args: RemoveNotificationChannelCommandInput,
    cb: (err: any, data?: RemoveNotificationChannelCommandOutput) => void
  ): void;
  public removeNotificationChannel(
    args: RemoveNotificationChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveNotificationChannelCommandOutput) => void
  ): void;
  public removeNotificationChannel(
    args: RemoveNotificationChannelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveNotificationChannelCommandOutput) => void),
    cb?: (err: any, data?: RemoveNotificationChannelCommandOutput) => void
  ): Promise<RemoveNotificationChannelCommandOutput> | void {
    const command = new RemoveNotificationChannelCommand(args);
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
   * <p> Returns a list of insights in your Amazon Web Services account. You can specify which insights are
   * 			returned by their start time, one or more statuses (<code>ONGOING</code> or <code>CLOSED</code>), one or more severities
   * 				(<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type
   * 				(<code>REACTIVE</code> or <code>PROACTIVE</code>). </p>
   * 		       <p> Use the <code>Filters</code> parameter to specify status and severity search
   * 			parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or
   * 				<code>PROACTIVE</code> in your search. </p>
   */
  public searchInsights(
    args: SearchInsightsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchInsightsCommandOutput>;
  public searchInsights(
    args: SearchInsightsCommandInput,
    cb: (err: any, data?: SearchInsightsCommandOutput) => void
  ): void;
  public searchInsights(
    args: SearchInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchInsightsCommandOutput) => void
  ): void;
  public searchInsights(
    args: SearchInsightsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchInsightsCommandOutput) => void),
    cb?: (err: any, data?: SearchInsightsCommandOutput) => void
  ): Promise<SearchInsightsCommandOutput> | void {
    const command = new SearchInsightsCommand(args);
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
   * <p> Returns a list of insights in your organization. You can specify which insights are
   * 			returned by their start time, one or more statuses (<code>ONGOING</code>,
   * 				<code>CLOSED</code>, and <code>CLOSED</code>), one or more severities
   * 				(<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type
   * 				(<code>REACTIVE</code> or <code>PROACTIVE</code>). </p>
   * 		       <p> Use the <code>Filters</code> parameter to specify status and severity search
   * 			parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or
   * 				<code>PROACTIVE</code> in your search. </p>
   */
  public searchOrganizationInsights(
    args: SearchOrganizationInsightsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchOrganizationInsightsCommandOutput>;
  public searchOrganizationInsights(
    args: SearchOrganizationInsightsCommandInput,
    cb: (err: any, data?: SearchOrganizationInsightsCommandOutput) => void
  ): void;
  public searchOrganizationInsights(
    args: SearchOrganizationInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchOrganizationInsightsCommandOutput) => void
  ): void;
  public searchOrganizationInsights(
    args: SearchOrganizationInsightsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchOrganizationInsightsCommandOutput) => void),
    cb?: (err: any, data?: SearchOrganizationInsightsCommandOutput) => void
  ): Promise<SearchOrganizationInsightsCommandOutput> | void {
    const command = new SearchOrganizationInsightsCommand(args);
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
   * <p>Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services
   * 			resources.</p>
   */
  public startCostEstimation(
    args: StartCostEstimationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCostEstimationCommandOutput>;
  public startCostEstimation(
    args: StartCostEstimationCommandInput,
    cb: (err: any, data?: StartCostEstimationCommandOutput) => void
  ): void;
  public startCostEstimation(
    args: StartCostEstimationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCostEstimationCommandOutput) => void
  ): void;
  public startCostEstimation(
    args: StartCostEstimationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartCostEstimationCommandOutput) => void),
    cb?: (err: any, data?: StartCostEstimationCommandOutput) => void
  ): Promise<StartCostEstimationCommandOutput> | void {
    const command = new StartCostEstimationCommand(args);
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
   * <p>Enables or disables integration with a service that can be integrated with DevOps Guru. The
   * 			one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which
   * 			can produce proactive recommendations which can be stored and viewed in DevOps Guru.</p>
   */
  public updateEventSourcesConfig(
    args: UpdateEventSourcesConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventSourcesConfigCommandOutput>;
  public updateEventSourcesConfig(
    args: UpdateEventSourcesConfigCommandInput,
    cb: (err: any, data?: UpdateEventSourcesConfigCommandOutput) => void
  ): void;
  public updateEventSourcesConfig(
    args: UpdateEventSourcesConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventSourcesConfigCommandOutput) => void
  ): void;
  public updateEventSourcesConfig(
    args: UpdateEventSourcesConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEventSourcesConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateEventSourcesConfigCommandOutput) => void
  ): Promise<UpdateEventSourcesConfigCommandOutput> | void {
    const command = new UpdateEventSourcesConfigCommand(args);
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
   * <p> Updates the collection of resources that DevOps Guru analyzes.
   * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
   *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
   *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for
   * 			you to use DevOps Guru. </p>
   */
  public updateResourceCollection(
    args: UpdateResourceCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceCollectionCommandOutput>;
  public updateResourceCollection(
    args: UpdateResourceCollectionCommandInput,
    cb: (err: any, data?: UpdateResourceCollectionCommandOutput) => void
  ): void;
  public updateResourceCollection(
    args: UpdateResourceCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceCollectionCommandOutput) => void
  ): void;
  public updateResourceCollection(
    args: UpdateResourceCollectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateResourceCollectionCommandOutput) => void),
    cb?: (err: any, data?: UpdateResourceCollectionCommandOutput) => void
  ): Promise<UpdateResourceCollectionCommandOutput> | void {
    const command = new UpdateResourceCollectionCommand(args);
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
   * <p> Enables or disables integration with a service that can be integrated with DevOps Guru. The
   * 			one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create
   * 			an OpsItem for each generated insight. </p>
   */
  public updateServiceIntegration(
    args: UpdateServiceIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceIntegrationCommandOutput>;
  public updateServiceIntegration(
    args: UpdateServiceIntegrationCommandInput,
    cb: (err: any, data?: UpdateServiceIntegrationCommandOutput) => void
  ): void;
  public updateServiceIntegration(
    args: UpdateServiceIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceIntegrationCommandOutput) => void
  ): void;
  public updateServiceIntegration(
    args: UpdateServiceIntegrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServiceIntegrationCommandOutput) => void),
    cb?: (err: any, data?: UpdateServiceIntegrationCommandOutput) => void
  ): Promise<UpdateServiceIntegrationCommandOutput> | void {
    const command = new UpdateServiceIntegrationCommand(args);
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
