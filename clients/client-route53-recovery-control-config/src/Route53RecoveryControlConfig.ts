// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";
import type { WaiterResult } from "@smithy/util-waiter";

import {
  CreateClusterCommand,
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
} from "./commands/CreateClusterCommand";
import {
  CreateControlPanelCommand,
  CreateControlPanelCommandInput,
  CreateControlPanelCommandOutput,
} from "./commands/CreateControlPanelCommand";
import {
  CreateRoutingControlCommand,
  CreateRoutingControlCommandInput,
  CreateRoutingControlCommandOutput,
} from "./commands/CreateRoutingControlCommand";
import {
  CreateSafetyRuleCommand,
  CreateSafetyRuleCommandInput,
  CreateSafetyRuleCommandOutput,
} from "./commands/CreateSafetyRuleCommand";
import {
  DeleteClusterCommand,
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
} from "./commands/DeleteClusterCommand";
import {
  DeleteControlPanelCommand,
  DeleteControlPanelCommandInput,
  DeleteControlPanelCommandOutput,
} from "./commands/DeleteControlPanelCommand";
import {
  DeleteRoutingControlCommand,
  DeleteRoutingControlCommandInput,
  DeleteRoutingControlCommandOutput,
} from "./commands/DeleteRoutingControlCommand";
import {
  DeleteSafetyRuleCommand,
  DeleteSafetyRuleCommandInput,
  DeleteSafetyRuleCommandOutput,
} from "./commands/DeleteSafetyRuleCommand";
import {
  DescribeClusterCommand,
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput,
} from "./commands/DescribeClusterCommand";
import {
  DescribeControlPanelCommand,
  DescribeControlPanelCommandInput,
  DescribeControlPanelCommandOutput,
} from "./commands/DescribeControlPanelCommand";
import {
  DescribeRoutingControlCommand,
  DescribeRoutingControlCommandInput,
  DescribeRoutingControlCommandOutput,
} from "./commands/DescribeRoutingControlCommand";
import {
  DescribeSafetyRuleCommand,
  DescribeSafetyRuleCommandInput,
  DescribeSafetyRuleCommandOutput,
} from "./commands/DescribeSafetyRuleCommand";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import {
  ListAssociatedRoute53HealthChecksCommand,
  ListAssociatedRoute53HealthChecksCommandInput,
  ListAssociatedRoute53HealthChecksCommandOutput,
} from "./commands/ListAssociatedRoute53HealthChecksCommand";
import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "./commands/ListClustersCommand";
import {
  ListControlPanelsCommand,
  ListControlPanelsCommandInput,
  ListControlPanelsCommandOutput,
} from "./commands/ListControlPanelsCommand";
import {
  ListRoutingControlsCommand,
  ListRoutingControlsCommandInput,
  ListRoutingControlsCommandOutput,
} from "./commands/ListRoutingControlsCommand";
import {
  ListSafetyRulesCommand,
  ListSafetyRulesCommandInput,
  ListSafetyRulesCommandOutput,
} from "./commands/ListSafetyRulesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateClusterCommand,
  UpdateClusterCommandInput,
  UpdateClusterCommandOutput,
} from "./commands/UpdateClusterCommand";
import {
  UpdateControlPanelCommand,
  UpdateControlPanelCommandInput,
  UpdateControlPanelCommandOutput,
} from "./commands/UpdateControlPanelCommand";
import {
  UpdateRoutingControlCommand,
  UpdateRoutingControlCommandInput,
  UpdateRoutingControlCommandOutput,
} from "./commands/UpdateRoutingControlCommand";
import {
  UpdateSafetyRuleCommand,
  UpdateSafetyRuleCommandInput,
  UpdateSafetyRuleCommandOutput,
} from "./commands/UpdateSafetyRuleCommand";
import { paginateListAssociatedRoute53HealthChecks } from "./pagination/ListAssociatedRoute53HealthChecksPaginator";
import { paginateListClusters } from "./pagination/ListClustersPaginator";
import { paginateListControlPanels } from "./pagination/ListControlPanelsPaginator";
import { paginateListRoutingControls } from "./pagination/ListRoutingControlsPaginator";
import { paginateListSafetyRules } from "./pagination/ListSafetyRulesPaginator";
import { Route53RecoveryControlConfigClient } from "./Route53RecoveryControlConfigClient";
import { waitUntilClusterCreated } from "./waiters/waitForClusterCreated";
import { waitUntilClusterDeleted } from "./waiters/waitForClusterDeleted";
import { waitUntilControlPanelCreated } from "./waiters/waitForControlPanelCreated";
import { waitUntilControlPanelDeleted } from "./waiters/waitForControlPanelDeleted";
import { waitUntilRoutingControlCreated } from "./waiters/waitForRoutingControlCreated";
import { waitUntilRoutingControlDeleted } from "./waiters/waitForRoutingControlDeleted";

const commands = {
  CreateClusterCommand,
  CreateControlPanelCommand,
  CreateRoutingControlCommand,
  CreateSafetyRuleCommand,
  DeleteClusterCommand,
  DeleteControlPanelCommand,
  DeleteRoutingControlCommand,
  DeleteSafetyRuleCommand,
  DescribeClusterCommand,
  DescribeControlPanelCommand,
  DescribeRoutingControlCommand,
  DescribeSafetyRuleCommand,
  GetResourcePolicyCommand,
  ListAssociatedRoute53HealthChecksCommand,
  ListClustersCommand,
  ListControlPanelsCommand,
  ListRoutingControlsCommand,
  ListSafetyRulesCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateClusterCommand,
  UpdateControlPanelCommand,
  UpdateRoutingControlCommand,
  UpdateSafetyRuleCommand,
};
const paginators = {
  paginateListAssociatedRoute53HealthChecks,
  paginateListClusters,
  paginateListControlPanels,
  paginateListRoutingControls,
  paginateListSafetyRules,
};
const waiters = {
  waitUntilClusterCreated,
  waitUntilClusterDeleted,
  waitUntilControlPanelCreated,
  waitUntilControlPanelDeleted,
  waitUntilRoutingControlCreated,
  waitUntilRoutingControlDeleted,
};

export interface Route53RecoveryControlConfig {
  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(
    args: CreateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterCommandOutput>;
  createCluster(
    args: CreateClusterCommandInput,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  createCluster(
    args: CreateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateControlPanelCommand}
   */
  createControlPanel(
    args: CreateControlPanelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateControlPanelCommandOutput>;
  createControlPanel(
    args: CreateControlPanelCommandInput,
    cb: (err: any, data?: CreateControlPanelCommandOutput) => void
  ): void;
  createControlPanel(
    args: CreateControlPanelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateControlPanelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRoutingControlCommand}
   */
  createRoutingControl(
    args: CreateRoutingControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRoutingControlCommandOutput>;
  createRoutingControl(
    args: CreateRoutingControlCommandInput,
    cb: (err: any, data?: CreateRoutingControlCommandOutput) => void
  ): void;
  createRoutingControl(
    args: CreateRoutingControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoutingControlCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSafetyRuleCommand}
   */
  createSafetyRule(): Promise<CreateSafetyRuleCommandOutput>;
  createSafetyRule(
    args: CreateSafetyRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSafetyRuleCommandOutput>;
  createSafetyRule(
    args: CreateSafetyRuleCommandInput,
    cb: (err: any, data?: CreateSafetyRuleCommandOutput) => void
  ): void;
  createSafetyRule(
    args: CreateSafetyRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSafetyRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(
    args: DeleteClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterCommandOutput>;
  deleteCluster(
    args: DeleteClusterCommandInput,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;
  deleteCluster(
    args: DeleteClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteControlPanelCommand}
   */
  deleteControlPanel(
    args: DeleteControlPanelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteControlPanelCommandOutput>;
  deleteControlPanel(
    args: DeleteControlPanelCommandInput,
    cb: (err: any, data?: DeleteControlPanelCommandOutput) => void
  ): void;
  deleteControlPanel(
    args: DeleteControlPanelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteControlPanelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRoutingControlCommand}
   */
  deleteRoutingControl(
    args: DeleteRoutingControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRoutingControlCommandOutput>;
  deleteRoutingControl(
    args: DeleteRoutingControlCommandInput,
    cb: (err: any, data?: DeleteRoutingControlCommandOutput) => void
  ): void;
  deleteRoutingControl(
    args: DeleteRoutingControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoutingControlCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSafetyRuleCommand}
   */
  deleteSafetyRule(
    args: DeleteSafetyRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSafetyRuleCommandOutput>;
  deleteSafetyRule(
    args: DeleteSafetyRuleCommandInput,
    cb: (err: any, data?: DeleteSafetyRuleCommandOutput) => void
  ): void;
  deleteSafetyRule(
    args: DeleteSafetyRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSafetyRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClusterCommand}
   */
  describeCluster(
    args: DescribeClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterCommandOutput>;
  describeCluster(
    args: DescribeClusterCommandInput,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;
  describeCluster(
    args: DescribeClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeControlPanelCommand}
   */
  describeControlPanel(
    args: DescribeControlPanelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeControlPanelCommandOutput>;
  describeControlPanel(
    args: DescribeControlPanelCommandInput,
    cb: (err: any, data?: DescribeControlPanelCommandOutput) => void
  ): void;
  describeControlPanel(
    args: DescribeControlPanelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeControlPanelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRoutingControlCommand}
   */
  describeRoutingControl(
    args: DescribeRoutingControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRoutingControlCommandOutput>;
  describeRoutingControl(
    args: DescribeRoutingControlCommandInput,
    cb: (err: any, data?: DescribeRoutingControlCommandOutput) => void
  ): void;
  describeRoutingControl(
    args: DescribeRoutingControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRoutingControlCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSafetyRuleCommand}
   */
  describeSafetyRule(
    args: DescribeSafetyRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSafetyRuleCommandOutput>;
  describeSafetyRule(
    args: DescribeSafetyRuleCommandInput,
    cb: (err: any, data?: DescribeSafetyRuleCommandOutput) => void
  ): void;
  describeSafetyRule(
    args: DescribeSafetyRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSafetyRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociatedRoute53HealthChecksCommand}
   */
  listAssociatedRoute53HealthChecks(
    args: ListAssociatedRoute53HealthChecksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociatedRoute53HealthChecksCommandOutput>;
  listAssociatedRoute53HealthChecks(
    args: ListAssociatedRoute53HealthChecksCommandInput,
    cb: (err: any, data?: ListAssociatedRoute53HealthChecksCommandOutput) => void
  ): void;
  listAssociatedRoute53HealthChecks(
    args: ListAssociatedRoute53HealthChecksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociatedRoute53HealthChecksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClustersCommand}
   */
  listClusters(): Promise<ListClustersCommandOutput>;
  listClusters(
    args: ListClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClustersCommandOutput>;
  listClusters(
    args: ListClustersCommandInput,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;
  listClusters(
    args: ListClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListControlPanelsCommand}
   */
  listControlPanels(): Promise<ListControlPanelsCommandOutput>;
  listControlPanels(
    args: ListControlPanelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListControlPanelsCommandOutput>;
  listControlPanels(
    args: ListControlPanelsCommandInput,
    cb: (err: any, data?: ListControlPanelsCommandOutput) => void
  ): void;
  listControlPanels(
    args: ListControlPanelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListControlPanelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRoutingControlsCommand}
   */
  listRoutingControls(
    args: ListRoutingControlsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRoutingControlsCommandOutput>;
  listRoutingControls(
    args: ListRoutingControlsCommandInput,
    cb: (err: any, data?: ListRoutingControlsCommandOutput) => void
  ): void;
  listRoutingControls(
    args: ListRoutingControlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoutingControlsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSafetyRulesCommand}
   */
  listSafetyRules(
    args: ListSafetyRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSafetyRulesCommandOutput>;
  listSafetyRules(
    args: ListSafetyRulesCommandInput,
    cb: (err: any, data?: ListSafetyRulesCommandOutput) => void
  ): void;
  listSafetyRules(
    args: ListSafetyRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSafetyRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClusterCommand}
   */
  updateCluster(
    args: UpdateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClusterCommandOutput>;
  updateCluster(
    args: UpdateClusterCommandInput,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;
  updateCluster(
    args: UpdateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateControlPanelCommand}
   */
  updateControlPanel(
    args: UpdateControlPanelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateControlPanelCommandOutput>;
  updateControlPanel(
    args: UpdateControlPanelCommandInput,
    cb: (err: any, data?: UpdateControlPanelCommandOutput) => void
  ): void;
  updateControlPanel(
    args: UpdateControlPanelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateControlPanelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRoutingControlCommand}
   */
  updateRoutingControl(
    args: UpdateRoutingControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoutingControlCommandOutput>;
  updateRoutingControl(
    args: UpdateRoutingControlCommandInput,
    cb: (err: any, data?: UpdateRoutingControlCommandOutput) => void
  ): void;
  updateRoutingControl(
    args: UpdateRoutingControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoutingControlCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSafetyRuleCommand}
   */
  updateSafetyRule(): Promise<UpdateSafetyRuleCommandOutput>;
  updateSafetyRule(
    args: UpdateSafetyRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSafetyRuleCommandOutput>;
  updateSafetyRule(
    args: UpdateSafetyRuleCommandInput,
    cb: (err: any, data?: UpdateSafetyRuleCommandOutput) => void
  ): void;
  updateSafetyRule(
    args: UpdateSafetyRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSafetyRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociatedRoute53HealthChecksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssociatedRoute53HealthChecksCommandOutput}.
   */
  paginateListAssociatedRoute53HealthChecks(
    args: ListAssociatedRoute53HealthChecksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssociatedRoute53HealthChecksCommandOutput>;

  /**
   * @see {@link ListClustersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListClustersCommandOutput}.
   */
  paginateListClusters(
    args?: ListClustersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListClustersCommandOutput>;

  /**
   * @see {@link ListControlPanelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListControlPanelsCommandOutput}.
   */
  paginateListControlPanels(
    args?: ListControlPanelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListControlPanelsCommandOutput>;

  /**
   * @see {@link ListRoutingControlsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRoutingControlsCommandOutput}.
   */
  paginateListRoutingControls(
    args: ListRoutingControlsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRoutingControlsCommandOutput>;

  /**
   * @see {@link ListSafetyRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSafetyRulesCommandOutput}.
   */
  paginateListSafetyRules(
    args: ListSafetyRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSafetyRulesCommandOutput>;

  /**
   * @see {@link DescribeClusterCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilClusterCreated(
    args: DescribeClusterCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Route53RecoveryControlConfig>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeClusterCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilClusterDeleted(
    args: DescribeClusterCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Route53RecoveryControlConfig>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeControlPanelCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilControlPanelCreated(
    args: DescribeControlPanelCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Route53RecoveryControlConfig>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeControlPanelCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilControlPanelDeleted(
    args: DescribeControlPanelCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Route53RecoveryControlConfig>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeRoutingControlCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilRoutingControlCreated(
    args: DescribeRoutingControlCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Route53RecoveryControlConfig>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeRoutingControlCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilRoutingControlDeleted(
    args: DescribeRoutingControlCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Route53RecoveryControlConfig>, "client">
  ): Promise<WaiterResult>;
}

/**
 * <p>Recovery Control Configuration API Reference for Amazon Route 53 Application Recovery Controller</p>
 * @public
 */
export class Route53RecoveryControlConfig extends Route53RecoveryControlConfigClient implements Route53RecoveryControlConfig {}
createAggregatedClient(commands, Route53RecoveryControlConfig, { paginators, waiters });
