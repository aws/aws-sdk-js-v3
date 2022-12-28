// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { Route53RecoveryControlConfigClient } from "./Route53RecoveryControlConfigClient";

/**
 * <p>Recovery Control Configuration API Reference for Amazon Route 53 Application Recovery Controller</p>
 */
export class Route53RecoveryControlConfig extends Route53RecoveryControlConfigClient {
  /**
   * <p>Create a new cluster. A cluster is a set of redundant Regional endpoints against which you can run API calls to update or get the state of one or more routing controls. Each cluster has a name, status, Amazon Resource Name (ARN), and an array of the five cluster endpoints (one for each supported Amazon Web Services Region) that you can use with API calls to the cluster data plane.</p>
   */
  public createCluster(
    args: CreateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterCommandOutput>;
  public createCluster(
    args: CreateClusterCommandInput,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  public createCluster(
    args: CreateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  public createCluster(
    args: CreateClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateClusterCommandOutput) => void),
    cb?: (err: any, data?: CreateClusterCommandOutput) => void
  ): Promise<CreateClusterCommandOutput> | void {
    const command = new CreateClusterCommand(args);
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
   * <p>Creates a new control panel. A control panel represents a group of routing controls that can be changed together in a single transaction. You can use a control panel to centrally view the operational status of applications across your organization, and trigger multi-app failovers in a single transaction, for example, to fail over an Availability Zone or Amazon Web Services Region.</p>
   */
  public createControlPanel(
    args: CreateControlPanelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateControlPanelCommandOutput>;
  public createControlPanel(
    args: CreateControlPanelCommandInput,
    cb: (err: any, data?: CreateControlPanelCommandOutput) => void
  ): void;
  public createControlPanel(
    args: CreateControlPanelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateControlPanelCommandOutput) => void
  ): void;
  public createControlPanel(
    args: CreateControlPanelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateControlPanelCommandOutput) => void),
    cb?: (err: any, data?: CreateControlPanelCommandOutput) => void
  ): Promise<CreateControlPanelCommandOutput> | void {
    const command = new CreateControlPanelCommand(args);
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
   * <p>Creates a new routing control.</p> <p>A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>
   */
  public createRoutingControl(
    args: CreateRoutingControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRoutingControlCommandOutput>;
  public createRoutingControl(
    args: CreateRoutingControlCommandInput,
    cb: (err: any, data?: CreateRoutingControlCommandOutput) => void
  ): void;
  public createRoutingControl(
    args: CreateRoutingControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoutingControlCommandOutput) => void
  ): void;
  public createRoutingControl(
    args: CreateRoutingControlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRoutingControlCommandOutput) => void),
    cb?: (err: any, data?: CreateRoutingControlCommandOutput) => void
  ): Promise<CreateRoutingControlCommandOutput> | void {
    const command = new CreateRoutingControlCommand(args);
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
   * <p>Creates a safety rule in a control panel. Safety rules let you add safeguards around changing routing control states, and for enabling and disabling routing controls, to help prevent unexpected outcomes.</p> <p>There are two types of safety rules: assertion rules and gating rules.</p> <p>Assertion rule: An assertion rule enforces that, when you change a routing control state, that a certain criteria is met. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.</p> <p>Gating rule: A gating rule lets you configure a gating routing control as an overall "on/off" switch for a group of routing controls. Or, you can configure more complex gating scenarios, for example by configuring multiple gating routing controls.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.safety-rules.html">Safety rules</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
   */
  public createSafetyRule(
    args: CreateSafetyRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSafetyRuleCommandOutput>;
  public createSafetyRule(
    args: CreateSafetyRuleCommandInput,
    cb: (err: any, data?: CreateSafetyRuleCommandOutput) => void
  ): void;
  public createSafetyRule(
    args: CreateSafetyRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSafetyRuleCommandOutput) => void
  ): void;
  public createSafetyRule(
    args: CreateSafetyRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSafetyRuleCommandOutput) => void),
    cb?: (err: any, data?: CreateSafetyRuleCommandOutput) => void
  ): Promise<CreateSafetyRuleCommandOutput> | void {
    const command = new CreateSafetyRuleCommand(args);
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
   * <p>Delete a cluster.</p>
   */
  public deleteCluster(
    args: DeleteClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterCommandOutput>;
  public deleteCluster(
    args: DeleteClusterCommandInput,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;
  public deleteCluster(
    args: DeleteClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;
  public deleteCluster(
    args: DeleteClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteClusterCommandOutput) => void),
    cb?: (err: any, data?: DeleteClusterCommandOutput) => void
  ): Promise<DeleteClusterCommandOutput> | void {
    const command = new DeleteClusterCommand(args);
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
   * <p>Deletes a control panel.</p>
   */
  public deleteControlPanel(
    args: DeleteControlPanelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteControlPanelCommandOutput>;
  public deleteControlPanel(
    args: DeleteControlPanelCommandInput,
    cb: (err: any, data?: DeleteControlPanelCommandOutput) => void
  ): void;
  public deleteControlPanel(
    args: DeleteControlPanelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteControlPanelCommandOutput) => void
  ): void;
  public deleteControlPanel(
    args: DeleteControlPanelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteControlPanelCommandOutput) => void),
    cb?: (err: any, data?: DeleteControlPanelCommandOutput) => void
  ): Promise<DeleteControlPanelCommandOutput> | void {
    const command = new DeleteControlPanelCommand(args);
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
   * <p>Deletes a routing control.</p>
   */
  public deleteRoutingControl(
    args: DeleteRoutingControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRoutingControlCommandOutput>;
  public deleteRoutingControl(
    args: DeleteRoutingControlCommandInput,
    cb: (err: any, data?: DeleteRoutingControlCommandOutput) => void
  ): void;
  public deleteRoutingControl(
    args: DeleteRoutingControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoutingControlCommandOutput) => void
  ): void;
  public deleteRoutingControl(
    args: DeleteRoutingControlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRoutingControlCommandOutput) => void),
    cb?: (err: any, data?: DeleteRoutingControlCommandOutput) => void
  ): Promise<DeleteRoutingControlCommandOutput> | void {
    const command = new DeleteRoutingControlCommand(args);
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
   * <p>Deletes a safety rule.</p>/&gt;
   */
  public deleteSafetyRule(
    args: DeleteSafetyRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSafetyRuleCommandOutput>;
  public deleteSafetyRule(
    args: DeleteSafetyRuleCommandInput,
    cb: (err: any, data?: DeleteSafetyRuleCommandOutput) => void
  ): void;
  public deleteSafetyRule(
    args: DeleteSafetyRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSafetyRuleCommandOutput) => void
  ): void;
  public deleteSafetyRule(
    args: DeleteSafetyRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSafetyRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteSafetyRuleCommandOutput) => void
  ): Promise<DeleteSafetyRuleCommandOutput> | void {
    const command = new DeleteSafetyRuleCommand(args);
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
   * <p>Display the details about a cluster. The response includes the cluster name, endpoints, status, and Amazon Resource Name (ARN).</p>
   */
  public describeCluster(
    args: DescribeClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterCommandOutput>;
  public describeCluster(
    args: DescribeClusterCommandInput,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;
  public describeCluster(
    args: DescribeClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;
  public describeCluster(
    args: DescribeClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClusterCommandOutput) => void),
    cb?: (err: any, data?: DescribeClusterCommandOutput) => void
  ): Promise<DescribeClusterCommandOutput> | void {
    const command = new DescribeClusterCommand(args);
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
   * <p>Displays details about a control panel.</p>
   */
  public describeControlPanel(
    args: DescribeControlPanelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeControlPanelCommandOutput>;
  public describeControlPanel(
    args: DescribeControlPanelCommandInput,
    cb: (err: any, data?: DescribeControlPanelCommandOutput) => void
  ): void;
  public describeControlPanel(
    args: DescribeControlPanelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeControlPanelCommandOutput) => void
  ): void;
  public describeControlPanel(
    args: DescribeControlPanelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeControlPanelCommandOutput) => void),
    cb?: (err: any, data?: DescribeControlPanelCommandOutput) => void
  ): Promise<DescribeControlPanelCommandOutput> | void {
    const command = new DescribeControlPanelCommand(args);
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
   * <p>Displays details about a routing control. A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>
   */
  public describeRoutingControl(
    args: DescribeRoutingControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRoutingControlCommandOutput>;
  public describeRoutingControl(
    args: DescribeRoutingControlCommandInput,
    cb: (err: any, data?: DescribeRoutingControlCommandOutput) => void
  ): void;
  public describeRoutingControl(
    args: DescribeRoutingControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRoutingControlCommandOutput) => void
  ): void;
  public describeRoutingControl(
    args: DescribeRoutingControlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRoutingControlCommandOutput) => void),
    cb?: (err: any, data?: DescribeRoutingControlCommandOutput) => void
  ): Promise<DescribeRoutingControlCommandOutput> | void {
    const command = new DescribeRoutingControlCommand(args);
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
   * <p>Returns information about a safety rule.</p>
   */
  public describeSafetyRule(
    args: DescribeSafetyRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSafetyRuleCommandOutput>;
  public describeSafetyRule(
    args: DescribeSafetyRuleCommandInput,
    cb: (err: any, data?: DescribeSafetyRuleCommandOutput) => void
  ): void;
  public describeSafetyRule(
    args: DescribeSafetyRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSafetyRuleCommandOutput) => void
  ): void;
  public describeSafetyRule(
    args: DescribeSafetyRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSafetyRuleCommandOutput) => void),
    cb?: (err: any, data?: DescribeSafetyRuleCommandOutput) => void
  ): Promise<DescribeSafetyRuleCommandOutput> | void {
    const command = new DescribeSafetyRuleCommand(args);
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
   * <p>Returns an array of all Amazon Route 53 health checks associated with a specific routing control.</p>
   */
  public listAssociatedRoute53HealthChecks(
    args: ListAssociatedRoute53HealthChecksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociatedRoute53HealthChecksCommandOutput>;
  public listAssociatedRoute53HealthChecks(
    args: ListAssociatedRoute53HealthChecksCommandInput,
    cb: (err: any, data?: ListAssociatedRoute53HealthChecksCommandOutput) => void
  ): void;
  public listAssociatedRoute53HealthChecks(
    args: ListAssociatedRoute53HealthChecksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociatedRoute53HealthChecksCommandOutput) => void
  ): void;
  public listAssociatedRoute53HealthChecks(
    args: ListAssociatedRoute53HealthChecksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssociatedRoute53HealthChecksCommandOutput) => void),
    cb?: (err: any, data?: ListAssociatedRoute53HealthChecksCommandOutput) => void
  ): Promise<ListAssociatedRoute53HealthChecksCommandOutput> | void {
    const command = new ListAssociatedRoute53HealthChecksCommand(args);
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
   * <p>Returns an array of all the clusters in an account.</p>
   */
  public listClusters(
    args: ListClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClustersCommandOutput>;
  public listClusters(args: ListClustersCommandInput, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
  public listClusters(
    args: ListClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;
  public listClusters(
    args: ListClustersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListClustersCommandOutput) => void),
    cb?: (err: any, data?: ListClustersCommandOutput) => void
  ): Promise<ListClustersCommandOutput> | void {
    const command = new ListClustersCommand(args);
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
   * <p>Returns an array of control panels in an account or in a cluster.</p>
   */
  public listControlPanels(
    args: ListControlPanelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListControlPanelsCommandOutput>;
  public listControlPanels(
    args: ListControlPanelsCommandInput,
    cb: (err: any, data?: ListControlPanelsCommandOutput) => void
  ): void;
  public listControlPanels(
    args: ListControlPanelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListControlPanelsCommandOutput) => void
  ): void;
  public listControlPanels(
    args: ListControlPanelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListControlPanelsCommandOutput) => void),
    cb?: (err: any, data?: ListControlPanelsCommandOutput) => void
  ): Promise<ListControlPanelsCommandOutput> | void {
    const command = new ListControlPanelsCommand(args);
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
   * <p>Returns an array of routing controls for a control panel. A routing control is an Amazon Route 53 Application Recovery Controller construct that has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.</p>
   */
  public listRoutingControls(
    args: ListRoutingControlsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRoutingControlsCommandOutput>;
  public listRoutingControls(
    args: ListRoutingControlsCommandInput,
    cb: (err: any, data?: ListRoutingControlsCommandOutput) => void
  ): void;
  public listRoutingControls(
    args: ListRoutingControlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoutingControlsCommandOutput) => void
  ): void;
  public listRoutingControls(
    args: ListRoutingControlsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRoutingControlsCommandOutput) => void),
    cb?: (err: any, data?: ListRoutingControlsCommandOutput) => void
  ): Promise<ListRoutingControlsCommandOutput> | void {
    const command = new ListRoutingControlsCommand(args);
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
   * <p>List the safety rules (the assertion rules and gating rules) that you've defined for the routing controls in a control panel.</p>
   */
  public listSafetyRules(
    args: ListSafetyRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSafetyRulesCommandOutput>;
  public listSafetyRules(
    args: ListSafetyRulesCommandInput,
    cb: (err: any, data?: ListSafetyRulesCommandOutput) => void
  ): void;
  public listSafetyRules(
    args: ListSafetyRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSafetyRulesCommandOutput) => void
  ): void;
  public listSafetyRules(
    args: ListSafetyRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSafetyRulesCommandOutput) => void),
    cb?: (err: any, data?: ListSafetyRulesCommandOutput) => void
  ): Promise<ListSafetyRulesCommandOutput> | void {
    const command = new ListSafetyRulesCommand(args);
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
   * <p>Lists the tags for a resource.</p>
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
   * <p>Adds a tag to a resource.</p>
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
   * <p>Removes a tag from a resource.</p>
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
   * <p>Updates a control panel. The only update you can make to a control panel is to change the name of the control panel.</p>
   */
  public updateControlPanel(
    args: UpdateControlPanelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateControlPanelCommandOutput>;
  public updateControlPanel(
    args: UpdateControlPanelCommandInput,
    cb: (err: any, data?: UpdateControlPanelCommandOutput) => void
  ): void;
  public updateControlPanel(
    args: UpdateControlPanelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateControlPanelCommandOutput) => void
  ): void;
  public updateControlPanel(
    args: UpdateControlPanelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateControlPanelCommandOutput) => void),
    cb?: (err: any, data?: UpdateControlPanelCommandOutput) => void
  ): Promise<UpdateControlPanelCommandOutput> | void {
    const command = new UpdateControlPanelCommand(args);
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
   * <p>Updates a routing control. You can only update the name of the routing control. To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>
   */
  public updateRoutingControl(
    args: UpdateRoutingControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoutingControlCommandOutput>;
  public updateRoutingControl(
    args: UpdateRoutingControlCommandInput,
    cb: (err: any, data?: UpdateRoutingControlCommandOutput) => void
  ): void;
  public updateRoutingControl(
    args: UpdateRoutingControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoutingControlCommandOutput) => void
  ): void;
  public updateRoutingControl(
    args: UpdateRoutingControlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRoutingControlCommandOutput) => void),
    cb?: (err: any, data?: UpdateRoutingControlCommandOutput) => void
  ): Promise<UpdateRoutingControlCommandOutput> | void {
    const command = new UpdateRoutingControlCommand(args);
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
   * <p>Update a safety rule (an assertion rule or gating rule). You can only update the name and the waiting period for a safety rule. To make other updates, delete the safety rule and create a new one.</p>
   */
  public updateSafetyRule(
    args: UpdateSafetyRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSafetyRuleCommandOutput>;
  public updateSafetyRule(
    args: UpdateSafetyRuleCommandInput,
    cb: (err: any, data?: UpdateSafetyRuleCommandOutput) => void
  ): void;
  public updateSafetyRule(
    args: UpdateSafetyRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSafetyRuleCommandOutput) => void
  ): void;
  public updateSafetyRule(
    args: UpdateSafetyRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSafetyRuleCommandOutput) => void),
    cb?: (err: any, data?: UpdateSafetyRuleCommandOutput) => void
  ): Promise<UpdateSafetyRuleCommandOutput> | void {
    const command = new UpdateSafetyRuleCommand(args);
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
