// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { ARCZonalShiftClient, ARCZonalShiftClientConfig } from "./ARCZonalShiftClient";
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

const commands = {
  CancelZonalShiftCommand,
  GetManagedResourceCommand,
  ListManagedResourcesCommand,
  ListZonalShiftsCommand,
  StartZonalShiftCommand,
  UpdateZonalShiftCommand,
};

export interface ARCZonalShift {
  /**
   * @see {@link CancelZonalShiftCommand}
   */
  cancelZonalShift(
    args: CancelZonalShiftCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelZonalShiftCommandOutput>;
  cancelZonalShift(
    args: CancelZonalShiftCommandInput,
    cb: (err: any, data?: CancelZonalShiftCommandOutput) => void
  ): void;
  cancelZonalShift(
    args: CancelZonalShiftCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelZonalShiftCommandOutput) => void
  ): void;

  /**
   * @see {@link GetManagedResourceCommand}
   */
  getManagedResource(
    args: GetManagedResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedResourceCommandOutput>;
  getManagedResource(
    args: GetManagedResourceCommandInput,
    cb: (err: any, data?: GetManagedResourceCommandOutput) => void
  ): void;
  getManagedResource(
    args: GetManagedResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedResourcesCommand}
   */
  listManagedResources(
    args: ListManagedResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedResourcesCommandOutput>;
  listManagedResources(
    args: ListManagedResourcesCommandInput,
    cb: (err: any, data?: ListManagedResourcesCommandOutput) => void
  ): void;
  listManagedResources(
    args: ListManagedResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListZonalShiftsCommand}
   */
  listZonalShifts(
    args: ListZonalShiftsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListZonalShiftsCommandOutput>;
  listZonalShifts(args: ListZonalShiftsCommandInput, cb: (err: any, data?: ListZonalShiftsCommandOutput) => void): void;
  listZonalShifts(
    args: ListZonalShiftsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListZonalShiftsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartZonalShiftCommand}
   */
  startZonalShift(
    args: StartZonalShiftCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartZonalShiftCommandOutput>;
  startZonalShift(args: StartZonalShiftCommandInput, cb: (err: any, data?: StartZonalShiftCommandOutput) => void): void;
  startZonalShift(
    args: StartZonalShiftCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartZonalShiftCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateZonalShiftCommand}
   */
  updateZonalShift(
    args: UpdateZonalShiftCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateZonalShiftCommandOutput>;
  updateZonalShift(
    args: UpdateZonalShiftCommandInput,
    cb: (err: any, data?: UpdateZonalShiftCommandOutput) => void
  ): void;
  updateZonalShift(
    args: UpdateZonalShiftCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateZonalShiftCommandOutput) => void
  ): void;
}

/**
 * @public
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
export class ARCZonalShift extends ARCZonalShiftClient implements ARCZonalShift {}
createAggregatedClient(commands, ARCZonalShift);
