import { DevOpsGuruClient } from "./DevOpsGuruClient";
import {
  AddNotificationChannelCommand,
  AddNotificationChannelCommandInput,
  AddNotificationChannelCommandOutput,
} from "./commands/AddNotificationChannelCommand";
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
  GetResourceCollectionCommand,
  GetResourceCollectionCommandInput,
  GetResourceCollectionCommandOutput,
} from "./commands/GetResourceCollectionCommand";
import {
  ListAnomaliesForInsightCommand,
  ListAnomaliesForInsightCommandInput,
  ListAnomaliesForInsightCommandOutput,
} from "./commands/ListAnomaliesForInsightCommand";
import { ListEventsCommand, ListEventsCommandInput, ListEventsCommandOutput } from "./commands/ListEventsCommand";
import {
  ListInsightsCommand,
  ListInsightsCommandInput,
  ListInsightsCommandOutput,
} from "./commands/ListInsightsCommand";
import {
  ListNotificationChannelsCommand,
  ListNotificationChannelsCommandInput,
  ListNotificationChannelsCommandOutput,
} from "./commands/ListNotificationChannelsCommand";
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
  UpdateResourceCollectionCommand,
  UpdateResourceCollectionCommandInput,
  UpdateResourceCollectionCommandOutput,
} from "./commands/UpdateResourceCollectionCommand";
import {
  UpdateServiceIntegrationCommand,
  UpdateServiceIntegrationCommandInput,
  UpdateServiceIntegrationCommandOutput,
} from "./commands/UpdateServiceIntegrationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p> Amazon DevOps Guru is a fully managed service that helps you identify anomalous behavior in business
 * 			critical operational applications. You specify the AWS resources that you want DevOps Guru to cover,
 * 			then the Amazon CloudWatch metrics and AWS CloudTrail events related to those resources are analyzed. When
 * 			anomalous behavior is detected, DevOps Guru creates an <i>insight</i> that includes
 * 			recommendations, related events, and related metrics that can help you improve your
 * 			operational applications. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html">What is Amazon DevOps Guru</a>. </p>
 *
 * 		       <p>
 * 			You can specify 1 or 2 Amazon Simple Notification Service topics so you are notified every time a new insight is created. You can also enable DevOps Guru to generate
 * 			an OpsItem in AWS Systems Manager for each insight to help you manage and track your work addressing insights.
 * 		</p>
 *
 * 		       <p>
 * 			To learn about the DevOps Guru workflow, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html#how-it-works">How DevOps Guru works</a>. To
 * 			learn about DevOps Guru concepts, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/concepts.html">Concepts in DevOps Guru</a>.
 * 		</p>
 */
export class DevOpsGuru extends DevOpsGuruClient {
  /**
   * <p>
   * 			Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important DevOps Guru events, such as when an insight is generated.
   * 		</p>
   *
   * 		       <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission
   * 				to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account.
   * 				For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions
   * 				for cross account Amazon SNS topics</a>.</p>
   * 				     <p>If you use an Amazon SNS topic that is encrypted by an AWS Key Management Service customer-managed key (CMK), then you must add permissions
   * 				to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for
   * 				AWS KMS–encrypted Amazon SNS topics</a>.</p>
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
   * <p>
   *    		Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your AWS account.
   *    		Use these numbers to gauge the health of operations in your AWS account.
   *    	</p>
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
   * <p>
   *    		For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights
   *    		that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights.
   *    	</p>
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
   * <p>
   *    		Returns details about an anomaly that you specify using its ID.
   *    	</p>
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
   * <p>
   * 			Returns the most recent feedback submitted in the current AWS account and Region.
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
   * <p>
   *    		Returns details about an insight that you specify using its ID.
   *    	</p>
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
   * <p>
   *    		Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in
   *    		resource collections in your account. You specify the type of AWS resources collection. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
   *       	only the AWS resources that are defined in the stacks.
   *    	</p>
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
   * <p>
   * 			Returns the integration status of services that are integrated with DevOps Guru.
   * 			The one service that can be integrated with DevOps Guru
   *       	is AWS Systems Manager, which can be used to create an OpsItem for each generated insight.
   * 		</p>
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
   * <p>
   *    		Returns lists AWS resources that are of the specified resource collection type. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
   *       	only the AWS resources that are defined in the stacks.
   *    	</p>
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
   * <p>
   *    		Returns a list of the anomalies that belong to an insight that you specify using its ID.
   *    	</p>
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
   *    		Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned.
   *    	</p>
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
   * <p>
   *    		Returns a list of insights in your AWS account. You can specify which insights are returned by their start time and
   *    		status (<code>ONGOING</code>, <code>CLOSED</code>, or <code>ANY</code>).
   *    	</p>
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
   *    		Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when
   *    		DevOps Guru generates an insight that contains information about how to improve your operations. The one
   *       	supported notification channel is Amazon Simple Notification Service (Amazon SNS).
   *    	</p>
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
   * <p>
   *    		Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events.
   *    	</p>
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
   * <p>
   *    		Collects customer feedback about the specified insight.
   *    	</p>
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
   * <p>
   *    		Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps Guru generates an insight
   *    		that contains information about how to improve your operations.
   *    	</p>
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
   * <p>
   *    		Returns a list of insights in your AWS account. You can specify which insights are returned by their start time, one or more statuses
   *    		(<code>ONGOING</code>, <code>CLOSED</code>, and <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>,
   *    		and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>).
   *    	</p>
   *    	     <p>
   *    		Use the <code>Filters</code> parameter to specify status and severity
   *    		search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search.
   *    	</p>
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
   * <p> Updates the collection of resources that DevOps Guru analyzes.
   * 			The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
   *       	only the AWS resources that are defined in the stacks. This method also creates the IAM role required for you
   * 			to use DevOps Guru. </p>
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
   * <p>
   * 			Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with
   * 			DevOps Guru is AWS Systems Manager, which can be used to create an OpsItem for each generated insight.
   * 		</p>
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
