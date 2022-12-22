// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { ARCZonalShiftClient } from "./ARCZonalShiftClient";
import {
  CancelZonalShiftCommand,
  CancelZonalShiftCommandInput,
  CancelZonalShiftCommandOutput,
} from "./commands/CancelZonalShiftCommand";
import {
  GetManagedResourceCommand,
  GetManagedResourceCommandInput,
  GetManagedResourceCommandOutput,
} from "./commands/GetManagedResourceCommand";
import {
  ListManagedResourcesCommand,
  ListManagedResourcesCommandInput,
  ListManagedResourcesCommandOutput,
} from "./commands/ListManagedResourcesCommand";
import {
  ListZonalShiftsCommand,
  ListZonalShiftsCommandInput,
  ListZonalShiftsCommandOutput,
} from "./commands/ListZonalShiftsCommand";
import {
  StartZonalShiftCommand,
  StartZonalShiftCommandInput,
  StartZonalShiftCommandOutput,
} from "./commands/StartZonalShiftCommand";
import {
  UpdateZonalShiftCommand,
  UpdateZonalShiftCommandInput,
  UpdateZonalShiftCommandOutput,
} from "./commands/UpdateZonalShiftCommand";

/**
 * <p>This is the API Reference Guide for the zonal shift feature of Amazon Route 53 Application Recovery Controller. This guide is for developers who need detailed information about
 * 			zonal shift API actions, data types, and errors.</p>
 * 		       <p>Zonal shift is in preview release for Amazon Route 53 Application Recovery Controller and is subject to change.</p>
 * 		       <p>Zonal shift in Route 53 ARC enables you to move traffic for a load balancer resource away from an Availability Zone. Starting
 * 			a zonal shift helps your application recover immediately, for example, from a developer's bad code deployment
 * 			or from an AWS infrastructure failure in a single Availability Zone, reducing the impact and time lost from an issue
 * 			in one zone. </p>
 * 		       <p>Supported AWS resources are automatically registered with Route 53 ARC. Resources that are registered for zonal shifts
 * 			in Route 53 ARC are managed resources in Route 53 ARC. You can start a zonal shift for any managed resource in your account in a Region.
 * 			At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
 * 		       <p>Zonal shifts are temporary. You must specify an expiration when you start a zonal shift, of up to three days initially.
 * 			If you want to still keep traffic away from an Availability Zone, you can update the zonal shift and set a new expiration.
 * 			You can also cancel a zonal shift, before it expires, for example, if you're ready to restore traffic to the Availability Zone.</p>
 * 		       <p>For more information about using zonal shift, see the
 * 			<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route53-recovery.html">Amazon Route 53 Application Recovery Controller Developer Guide</a>.</p>
 */
export class ARCZonalShift extends ARCZonalShiftClient {
  /**
   * <p>Cancel a zonal shift in Amazon Route 53 Application Recovery Controller that you've started for a resource in your AWS account in an AWS Region. </p>
   */
  public cancelZonalShift(
    args: CancelZonalShiftCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelZonalShiftCommandOutput>;
  public cancelZonalShift(
    args: CancelZonalShiftCommandInput,
    cb: (err: any, data?: CancelZonalShiftCommandOutput) => void
  ): void;
  public cancelZonalShift(
    args: CancelZonalShiftCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelZonalShiftCommandOutput) => void
  ): void;
  public cancelZonalShift(
    args: CancelZonalShiftCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelZonalShiftCommandOutput) => void),
    cb?: (err: any, data?: CancelZonalShiftCommandOutput) => void
  ): Promise<CancelZonalShiftCommandOutput> | void {
    const command = new CancelZonalShiftCommand(args);
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
   * <p>Get information about a resource that's been registered for zonal shifts with Amazon Route 53 Application Recovery Controller in this AWS Region. Resources that are registered for
   *    		zonal shifts are managed resources in Route 53 ARC.</p>
   *    	     <p>At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
   */
  public getManagedResource(
    args: GetManagedResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedResourceCommandOutput>;
  public getManagedResource(
    args: GetManagedResourceCommandInput,
    cb: (err: any, data?: GetManagedResourceCommandOutput) => void
  ): void;
  public getManagedResource(
    args: GetManagedResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedResourceCommandOutput) => void
  ): void;
  public getManagedResource(
    args: GetManagedResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetManagedResourceCommandOutput) => void),
    cb?: (err: any, data?: GetManagedResourceCommandOutput) => void
  ): Promise<GetManagedResourceCommandOutput> | void {
    const command = new GetManagedResourceCommand(args);
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
   * <p>Lists all the resources in your AWS account in this AWS Region that are managed for zonal shifts in Amazon Route 53 Application Recovery Controller, and information
   *    		about them. The information includes their Amazon Resource Names (ARNs), the Availability Zones the resources are deployed in, and
   *    		the resource name.</p>
   */
  public listManagedResources(
    args: ListManagedResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedResourcesCommandOutput>;
  public listManagedResources(
    args: ListManagedResourcesCommandInput,
    cb: (err: any, data?: ListManagedResourcesCommandOutput) => void
  ): void;
  public listManagedResources(
    args: ListManagedResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedResourcesCommandOutput) => void
  ): void;
  public listManagedResources(
    args: ListManagedResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListManagedResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListManagedResourcesCommandOutput) => void
  ): Promise<ListManagedResourcesCommandOutput> | void {
    const command = new ListManagedResourcesCommand(args);
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
   * <p>Lists all the active zonal shifts in Amazon Route 53 Application Recovery Controller in your AWS account in this AWS Region.</p>
   */
  public listZonalShifts(
    args: ListZonalShiftsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListZonalShiftsCommandOutput>;
  public listZonalShifts(
    args: ListZonalShiftsCommandInput,
    cb: (err: any, data?: ListZonalShiftsCommandOutput) => void
  ): void;
  public listZonalShifts(
    args: ListZonalShiftsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListZonalShiftsCommandOutput) => void
  ): void;
  public listZonalShifts(
    args: ListZonalShiftsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListZonalShiftsCommandOutput) => void),
    cb?: (err: any, data?: ListZonalShiftsCommandOutput) => void
  ): Promise<ListZonalShiftsCommandOutput> | void {
    const command = new ListZonalShiftsCommand(args);
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
   * <p>You start a zonal shift to temporarily move load balancer traffic away from an Availability Zone in a AWS Region,
   *    		to help your application recover immediately, for example, from a developer's bad code deployment or from an AWS
   *    		infrastructure failure in a single Availability Zone. You can start a zonal shift in Route 53 ARC only for managed
   *    		resources in your account in an AWS Region. Resources are automatically registered with Route 53 ARC by AWS services.</p>
   *    	     <p>At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
   *    	     <p>When you start a zonal shift, traffic for the resource is no longer routed to the Availability Zone. The
   *    		zonal shift is created immediately in Route 53 ARC. However, it can take a short time, typically up to a few minutes,
   *    		for existing, in-progress connections in the Availability Zone to complete.</p>
   *    	     <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.html">Zonal shift</a>
   *    		in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
   */
  public startZonalShift(
    args: StartZonalShiftCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartZonalShiftCommandOutput>;
  public startZonalShift(
    args: StartZonalShiftCommandInput,
    cb: (err: any, data?: StartZonalShiftCommandOutput) => void
  ): void;
  public startZonalShift(
    args: StartZonalShiftCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartZonalShiftCommandOutput) => void
  ): void;
  public startZonalShift(
    args: StartZonalShiftCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartZonalShiftCommandOutput) => void),
    cb?: (err: any, data?: StartZonalShiftCommandOutput) => void
  ): Promise<StartZonalShiftCommandOutput> | void {
    const command = new StartZonalShiftCommand(args);
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
   * <p>Update an active zonal shift in Amazon Route 53 Application Recovery Controller in your AWS account. You can update a zonal shift to set a new expiration, or
   *    	edit or replace the comment for the zonal shift. </p>
   */
  public updateZonalShift(
    args: UpdateZonalShiftCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateZonalShiftCommandOutput>;
  public updateZonalShift(
    args: UpdateZonalShiftCommandInput,
    cb: (err: any, data?: UpdateZonalShiftCommandOutput) => void
  ): void;
  public updateZonalShift(
    args: UpdateZonalShiftCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateZonalShiftCommandOutput) => void
  ): void;
  public updateZonalShift(
    args: UpdateZonalShiftCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateZonalShiftCommandOutput) => void),
    cb?: (err: any, data?: UpdateZonalShiftCommandOutput) => void
  ): Promise<UpdateZonalShiftCommandOutput> | void {
    const command = new UpdateZonalShiftCommand(args);
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
