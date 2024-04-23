// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import {
  Route53RecoveryControlConfigClient,
  Route53RecoveryControlConfigClientConfig,
} from "./Route53RecoveryControlConfigClient";

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
  UpdateControlPanelCommand,
  UpdateRoutingControlCommand,
  UpdateSafetyRuleCommand,
};

export interface Route53RecoveryControlConfig {
  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(args: CreateClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateClusterCommandOutput>;
  createCluster(args: CreateClusterCommandInput, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
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
  deleteCluster(args: DeleteClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteClusterCommandOutput>;
  deleteCluster(args: DeleteClusterCommandInput, cb: (err: any, data?: DeleteClusterCommandOutput) => void): void;
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
  describeCluster(args: DescribeClusterCommandInput, cb: (err: any, data?: DescribeClusterCommandOutput) => void): void;
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
  listClusters(args: ListClustersCommandInput, options?: __HttpHandlerOptions): Promise<ListClustersCommandOutput>;
  listClusters(args: ListClustersCommandInput, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
  listClusters(
    args: ListClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListControlPanelsCommand}
   */
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
  listSafetyRules(args: ListSafetyRulesCommandInput, cb: (err: any, data?: ListSafetyRulesCommandOutput) => void): void;
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
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
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
}

/**
 * @public
 * <p>Recovery Control Configuration API Reference for Amazon Route 53 Application Recovery Controller</p>
 */
export class Route53RecoveryControlConfig
  extends Route53RecoveryControlConfigClient
  implements Route53RecoveryControlConfig {}
createAggregatedClient(commands, Route53RecoveryControlConfig);
