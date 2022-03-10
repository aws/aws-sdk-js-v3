import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  GetRoutingControlStateCommand,
  GetRoutingControlStateCommandInput,
  GetRoutingControlStateCommandOutput,
} from "./commands/GetRoutingControlStateCommand";
import {
  UpdateRoutingControlStateCommand,
  UpdateRoutingControlStateCommandInput,
  UpdateRoutingControlStateCommandOutput,
} from "./commands/UpdateRoutingControlStateCommand";
import {
  UpdateRoutingControlStatesCommand,
  UpdateRoutingControlStatesCommandInput,
  UpdateRoutingControlStatesCommandOutput,
} from "./commands/UpdateRoutingControlStatesCommand";
import { Route53RecoveryClusterClient } from "./Route53RecoveryClusterClient";

/**
 * <p>Welcome to the Routing Control (Recovery Cluster) API Reference Guide for Amazon Route 53 Application Recovery Controller.</p>
 * 			      <p>With Amazon Route 53 Application Recovery Controller, you can use routing control with extreme reliability to
 * 			recover applications by rerouting traffic across
 * 			Availability Zones or AWS Regions. Routing controls are simple on/off switches hosted
 * 			on a highly available cluster in Application Recovery Controller. A cluster provides a set of five redundant Regional endpoints against which you
 * 			can run API calls to get or update the state of routing controls. To implement failover, you set
 * 			one routing control on and another one off, to reroute traffic from one Availability Zone or Amazon Web Services Region
 * 			to another. </p>
 * 			      <p>
 *             <i>Be aware that you must specify the Regional endpoints for a cluster when you work with API cluster operations
 * 				to get or update routing control states in Application Recovery Controller.</i> In addition, you must specify the US West (Oregon) Region
 * 				for Application Recovery Controller API calls. For example, use the parameter <code>region us-west-2</code> with AWS CLI commands.
 * 				For more information, see
 * 				<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.update.api.html">
 * 					Get and update routing control states using the API</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
 * 		       <p>This API guide includes information about the API operations for how to get and update routing control states
 * 			in Application Recovery Controller. You also must set up the structures to support routing controls: clusters and control panels.</p>
 * 			      <p>For more information about working with routing control in Application Recovery Controller, see the following:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>To create clusters, routing controls, and control panels by using the control plane API
 * 					for routing control, see the <a href="https://docs.aws.amazon.com/recovery-cluster/latest/api/">Recovery Control Configuration API Reference Guide for Amazon Route 53 Application Recovery Controller</a>.</p>
 * 			         </li>
 *             <li>
 *                <p>Learn about the components in recovery control configuration, including clusters,
 * 				routing controls, and control panels. For more information, see
 * 				<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/introduction-components.html#introduction-components-routing">
 * 					Recovery control components</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
 *             </li>
 *             <li>
 * 				           <p>Application Recovery Controller also provides readiness checks that run continually to help make sure that your
 * 					applications are scaled and ready to handle failover traffic. For more information about
 * 					the related API actions, see the <a href="https://docs.aws.amazon.com/recovery-readiness/latest/api/">Recovery Readiness API Reference Guide for Amazon Route 53 Application Recovery Controller</a>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>For more information about creating resilient applications and preparing for
 * 					recovery readiness with Application Recovery Controller, see the <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/">Amazon Route 53 Application Recovery Controller Developer Guide</a>.</p>
 * 			         </li>
 *          </ul>
 */
export class Route53RecoveryCluster extends Route53RecoveryClusterClient {
  /**
   * <p>Get the state for a routing control. A routing control is a simple on/off switch that you
   * 			can use to route traffic to cells. When the state is On, traffic flows to a cell. When
   * 			it's Off, traffic does not flow. </p>
   * 			      <p>Before you can create a routing control, you must first create a cluster to host the control
   * 				in a control panel. For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.create.html">
   * 					Create routing control structures</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.
   * 				Then you access one of the endpoints for the cluster to get or update the routing control state to
   * 				redirect traffic. </p>
   * 			      <p>
   *             <i>You must specify Regional endpoints when you work with API cluster operations
   * 				to get or update routing control states in Application Recovery Controller.</i>
   *          </p>
   * 			      <p>To see a code example for getting a routing control state, including accessing Regional cluster endpoints
   * 				in sequence, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/service_code_examples_actions.html">API examples</a>
   * 				in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
   * 			      <p>Learn more about working with routing controls in the following topics in the
   * 				Amazon Route 53 Application Recovery Controller Developer Guide:</p>
   * 			      <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.update.html">
   * 					Viewing and updating routing control states</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html">Working with routing controls overall</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public getRoutingControlState(
    args: GetRoutingControlStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRoutingControlStateCommandOutput>;
  public getRoutingControlState(
    args: GetRoutingControlStateCommandInput,
    cb: (err: any, data?: GetRoutingControlStateCommandOutput) => void
  ): void;
  public getRoutingControlState(
    args: GetRoutingControlStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoutingControlStateCommandOutput) => void
  ): void;
  public getRoutingControlState(
    args: GetRoutingControlStateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRoutingControlStateCommandOutput) => void),
    cb?: (err: any, data?: GetRoutingControlStateCommandOutput) => void
  ): Promise<GetRoutingControlStateCommandOutput> | void {
    const command = new GetRoutingControlStateCommand(args);
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
   * <p>Set the state of the routing control to reroute traffic. You can set the value to be On or
   * 			Off. When the state is On, traffic flows to a cell. When it's Off, traffic does not
   * 			flow.</p>
   * 			      <p>With Application Recovery Controller, you can add safety rules for routing controls, which are safeguards for routing
   * 				control state updates that help prevent unexpected outcomes, like fail open traffic routing. However,
   * 				there are scenarios when you might want to bypass the routing control safeguards that are enforced with
   * 				safety rules that you've configured. For example, you might want to fail over quickly for disaster recovery,
   * 				and one or more safety rules might be unexpectedly preventing you from updating a routing control state to
   * 				reroute traffic. In a "break glass" scenario like this, you can override one or more safety rules to change
   * 				a routing control state and fail over your application.</p>
   * 			      <p>The <code>SafetyRulesToOverride</code> property enables you override one or more safety rules and
   * 				update routing control states. For more information, see
   * 				<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.override-safety-rule.html">
   * 					Override safety rules to reroute traffic</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
   * 			      <p>
   *             <i>You must specify Regional endpoints when you work with API cluster operations
   * 				to get or update routing control states in Application Recovery Controller.</i>
   *          </p>
   * 			      <p>To see a code example for getting a routing control state, including accessing Regional cluster endpoints
   * 				in sequence, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/service_code_examples_actions.html">API examples</a>
   * 				in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
   * 			      <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.update.html">
   * 					Viewing and updating routing control states</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html">Working with routing controls overall</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public updateRoutingControlState(
    args: UpdateRoutingControlStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoutingControlStateCommandOutput>;
  public updateRoutingControlState(
    args: UpdateRoutingControlStateCommandInput,
    cb: (err: any, data?: UpdateRoutingControlStateCommandOutput) => void
  ): void;
  public updateRoutingControlState(
    args: UpdateRoutingControlStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoutingControlStateCommandOutput) => void
  ): void;
  public updateRoutingControlState(
    args: UpdateRoutingControlStateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRoutingControlStateCommandOutput) => void),
    cb?: (err: any, data?: UpdateRoutingControlStateCommandOutput) => void
  ): Promise<UpdateRoutingControlStateCommandOutput> | void {
    const command = new UpdateRoutingControlStateCommand(args);
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
   * <p>Set multiple routing control states. You can set the value for each state to be On or Off.
   * 			When the state is On, traffic flows to a cell. When it's Off, traffic does not
   * 			flow.</p>
   * 			      <p>With Application Recovery Controller, you can add safety rules for routing controls, which are safeguards for routing
   * 				control state updates that help prevent unexpected outcomes, like fail open traffic routing. However,
   * 				there are scenarios when you might want to bypass the routing control safeguards that are enforced with
   * 				safety rules that you've configured. For example, you might want to fail over quickly for disaster recovery,
   * 				and one or more safety rules might be unexpectedly preventing you from updating a routing control state to
   * 				reroute traffic. In a "break glass" scenario like this, you can override one or more safety rules to change
   * 				a routing control state and fail over your application.</p>
   * 			      <p>The <code>SafetyRulesToOverride</code> property enables you override one or more safety rules and
   * 				update routing control states. For more information, see
   * 				<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.override-safety-rule.html">
   * 					Override safety rules to reroute traffic</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
   *          <p>
   *             <i>You must specify Regional endpoints when you work with API cluster operations
   * 				to get or update routing control states in Application Recovery Controller.</i>
   *          </p>
   * 			      <p>To see a code example for getting a routing control state, including accessing Regional cluster endpoints
   * 				in sequence, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/service_code_examples_actions.html">API examples</a>
   * 				in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
   * 			      <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.update.html">
   * 					Viewing and updating routing control states</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html">Working with routing controls overall</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public updateRoutingControlStates(
    args: UpdateRoutingControlStatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoutingControlStatesCommandOutput>;
  public updateRoutingControlStates(
    args: UpdateRoutingControlStatesCommandInput,
    cb: (err: any, data?: UpdateRoutingControlStatesCommandOutput) => void
  ): void;
  public updateRoutingControlStates(
    args: UpdateRoutingControlStatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoutingControlStatesCommandOutput) => void
  ): void;
  public updateRoutingControlStates(
    args: UpdateRoutingControlStatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRoutingControlStatesCommandOutput) => void),
    cb?: (err: any, data?: UpdateRoutingControlStatesCommandOutput) => void
  ): Promise<UpdateRoutingControlStatesCommandOutput> | void {
    const command = new UpdateRoutingControlStatesCommand(args);
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
