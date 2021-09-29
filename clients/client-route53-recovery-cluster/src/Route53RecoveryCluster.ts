import { Route53RecoveryClusterClient } from "./Route53RecoveryClusterClient";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Welcome to the Amazon Route 53 Application Recovery Controller API Reference Guide for Recovery Control Data Plane .</p>
 * 			      <p>Recovery control in Route 53 Application Recovery Controller includes extremely reliable routing controls that enable you to recover applications
 * 				by rerouting traffic, for example, across Availability Zones or AWS Regions. Routing controls are simple on/off switches
 * 				hosted on a cluster. A cluster is a set of five redundant regional endpoints against which you can execute API calls to update or
 * 				get the state of routing controls. You use routing controls to failover traffic to recover your application
 * 				across Availability Zones or Regions.</p>
 * 			      <p>This API guide includes information about how to get and update routing control states in Route 53 Application Recovery Controller.</p>
 * 			      <p>For more information about Route 53 Application Recovery Controller, see the following:</p>
 * 			      <ul>
 *             <li>
 *                <p>You can create clusters, routing controls, and control panels by using the control plane API for Recovery
 * 					Control. For more information, see <a href="https://docs.aws.amazon.com/recovery-cluster/latest/api/">Amazon Route 53 Application Recovery Controller Recovery Control API Reference</a>.</p>
 *             </li>
 *             <li>
 *                <p>Route 53 Application Recovery Controller also provides continuous readiness checks to ensure that your applications are scaled to handle failover traffic.
 * 					For more information about the related API actions, see <a href="https://docs.aws.amazon.com/recovery-readiness/latest/api/">Amazon Route 53 Application Recovery Controller Recovery Readiness API Reference</a>.</p>
 *             </li>
 *             <li>
 *                <p>For more information about creating resilient applications and preparing for recovery readiness with Route 53 Application Recovery Controller,
 * 					see the <a href="r53recovery/latest/dg/">Amazon Route 53 Application Recovery Controller Developer Guide</a>.</p>
 *             </li>
 *          </ul>
 */
export class Route53RecoveryCluster extends Route53RecoveryClusterClient {
  /**
   * <p>Get the state for a routing control. A routing control is a simple on/off switch
   * 				that you can use to route traffic to cells. When the state is On, traffic flows to a cell. When it's off, traffic does not flow. </p>
   * 			      <p>Before you can create a routing control, you first must create a cluster to host the control.
   * 				For more information, see
   * 				<a href="https://docs.aws.amazon.com/recovery-cluster/latest/api/cluster.html">CreateCluster</a>.
   * 				Access one of the endpoints for the cluster to get or update the routing control state to
   * 				redirect traffic.</p>
   * 			      <p>For more information about working with routing controls, see
   * 				<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html">Routing control</a>
   * 				in the Route 53 Application Recovery Controller Developer Guide.</p>
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
   * <p>Set the state of the routing control to reroute traffic. You can set the value to be On or Off.
   * 				When the state is On, traffic flows to a cell. When it's off, traffic does not flow.</p>
   * 			      <p>For more information about working with routing controls, see
   * 				<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html">Routing control</a>
   * 				in the Route 53 Application Recovery Controller Developer Guide.</p>
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
   * 			When the state is On, traffic flows to a cell. When it's off, traffic does not flow.</p>
   * 			      <p>For more information about working with routing controls, see
   * 				<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html">Routing control</a>
   * 				in the Route 53 Application Recovery Controller Developer Guide.</p>
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
