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

export class DevOpsGuru extends DevOpsGuruClient {
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
