// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateSnapshotCommand,
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput,
} from "./commands/CreateSnapshotCommand";
import { DeleteAppCommand, DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import {
  DeleteSimulationCommand,
  DeleteSimulationCommandInput,
  DeleteSimulationCommandOutput,
} from "./commands/DeleteSimulationCommand";
import { DescribeAppCommand, DescribeAppCommandInput, DescribeAppCommandOutput } from "./commands/DescribeAppCommand";
import {
  DescribeSimulationCommand,
  DescribeSimulationCommandInput,
  DescribeSimulationCommandOutput,
} from "./commands/DescribeSimulationCommand";
import { ListAppsCommand, ListAppsCommandInput, ListAppsCommandOutput } from "./commands/ListAppsCommand";
import {
  ListSimulationsCommand,
  ListSimulationsCommandInput,
  ListSimulationsCommandOutput,
} from "./commands/ListSimulationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { StartAppCommand, StartAppCommandInput, StartAppCommandOutput } from "./commands/StartAppCommand";
import { StartClockCommand, StartClockCommandInput, StartClockCommandOutput } from "./commands/StartClockCommand";
import {
  StartSimulationCommand,
  StartSimulationCommandInput,
  StartSimulationCommandOutput,
} from "./commands/StartSimulationCommand";
import { StopAppCommand, StopAppCommandInput, StopAppCommandOutput } from "./commands/StopAppCommand";
import { StopClockCommand, StopClockCommandInput, StopClockCommandOutput } from "./commands/StopClockCommand";
import {
  StopSimulationCommand,
  StopSimulationCommandInput,
  StopSimulationCommandOutput,
} from "./commands/StopSimulationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { SimSpaceWeaverClient, SimSpaceWeaverClientConfig } from "./SimSpaceWeaverClient";

const commands = {
  CreateSnapshotCommand,
  DeleteAppCommand,
  DeleteSimulationCommand,
  DescribeAppCommand,
  DescribeSimulationCommand,
  ListAppsCommand,
  ListSimulationsCommand,
  ListTagsForResourceCommand,
  StartAppCommand,
  StartClockCommand,
  StartSimulationCommand,
  StopAppCommand,
  StopClockCommand,
  StopSimulationCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

export interface SimSpaceWeaver {
  /**
   * @see {@link CreateSnapshotCommand}
   */
  createSnapshot(
    args: CreateSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotCommandOutput>;
  createSnapshot(args: CreateSnapshotCommandInput, cb: (err: any, data?: CreateSnapshotCommandOutput) => void): void;
  createSnapshot(
    args: CreateSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppCommand}
   */
  deleteApp(args: DeleteAppCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAppCommandOutput>;
  deleteApp(args: DeleteAppCommandInput, cb: (err: any, data?: DeleteAppCommandOutput) => void): void;
  deleteApp(
    args: DeleteAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSimulationCommand}
   */
  deleteSimulation(
    args: DeleteSimulationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSimulationCommandOutput>;
  deleteSimulation(
    args: DeleteSimulationCommandInput,
    cb: (err: any, data?: DeleteSimulationCommandOutput) => void
  ): void;
  deleteSimulation(
    args: DeleteSimulationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSimulationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppCommand}
   */
  describeApp(args: DescribeAppCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAppCommandOutput>;
  describeApp(args: DescribeAppCommandInput, cb: (err: any, data?: DescribeAppCommandOutput) => void): void;
  describeApp(
    args: DescribeAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSimulationCommand}
   */
  describeSimulation(
    args: DescribeSimulationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSimulationCommandOutput>;
  describeSimulation(
    args: DescribeSimulationCommandInput,
    cb: (err: any, data?: DescribeSimulationCommandOutput) => void
  ): void;
  describeSimulation(
    args: DescribeSimulationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSimulationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppsCommand}
   */
  listApps(args: ListAppsCommandInput, options?: __HttpHandlerOptions): Promise<ListAppsCommandOutput>;
  listApps(args: ListAppsCommandInput, cb: (err: any, data?: ListAppsCommandOutput) => void): void;
  listApps(
    args: ListAppsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSimulationsCommand}
   */
  listSimulations(
    args: ListSimulationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSimulationsCommandOutput>;
  listSimulations(args: ListSimulationsCommandInput, cb: (err: any, data?: ListSimulationsCommandOutput) => void): void;
  listSimulations(
    args: ListSimulationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSimulationsCommandOutput) => void
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
   * @see {@link StartAppCommand}
   */
  startApp(args: StartAppCommandInput, options?: __HttpHandlerOptions): Promise<StartAppCommandOutput>;
  startApp(args: StartAppCommandInput, cb: (err: any, data?: StartAppCommandOutput) => void): void;
  startApp(
    args: StartAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAppCommandOutput) => void
  ): void;

  /**
   * @see {@link StartClockCommand}
   */
  startClock(args: StartClockCommandInput, options?: __HttpHandlerOptions): Promise<StartClockCommandOutput>;
  startClock(args: StartClockCommandInput, cb: (err: any, data?: StartClockCommandOutput) => void): void;
  startClock(
    args: StartClockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartClockCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSimulationCommand}
   */
  startSimulation(
    args: StartSimulationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSimulationCommandOutput>;
  startSimulation(args: StartSimulationCommandInput, cb: (err: any, data?: StartSimulationCommandOutput) => void): void;
  startSimulation(
    args: StartSimulationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSimulationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopAppCommand}
   */
  stopApp(args: StopAppCommandInput, options?: __HttpHandlerOptions): Promise<StopAppCommandOutput>;
  stopApp(args: StopAppCommandInput, cb: (err: any, data?: StopAppCommandOutput) => void): void;
  stopApp(
    args: StopAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopAppCommandOutput) => void
  ): void;

  /**
   * @see {@link StopClockCommand}
   */
  stopClock(args: StopClockCommandInput, options?: __HttpHandlerOptions): Promise<StopClockCommandOutput>;
  stopClock(args: StopClockCommandInput, cb: (err: any, data?: StopClockCommandOutput) => void): void;
  stopClock(
    args: StopClockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopClockCommandOutput) => void
  ): void;

  /**
   * @see {@link StopSimulationCommand}
   */
  stopSimulation(
    args: StopSimulationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopSimulationCommandOutput>;
  stopSimulation(args: StopSimulationCommandInput, cb: (err: any, data?: StopSimulationCommandOutput) => void): void;
  stopSimulation(
    args: StopSimulationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopSimulationCommandOutput) => void
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
}

/**
 * @public
 * <p>SimSpace Weaver (SimSpace Weaver)  is a service that you can use to build and run
 *          large-scale spatial simulations in the Amazon Web Services Cloud. For example, you can create
 *          crowd simulations, large real-world environments, and immersive and interactive experiences.
 *          For more information about SimSpace Weaver, see the <i>
 *                <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/">SimSpace Weaver User Guide</a>
 *             </i>.</p>
 *          <p>This API reference describes the API operations and data types that you can use to
 *          communicate directly with SimSpace Weaver.</p>
 *          <p>SimSpace Weaver also provides the SimSpace Weaver app SDK, which you use for app development. The
 *          SimSpace Weaver app SDK API reference is included in the SimSpace Weaver app SDK documentation. This
 *          documentation is part of the SimSpace Weaver app SDK distributable package.</p>
 */
export class SimSpaceWeaver extends SimSpaceWeaverClient implements SimSpaceWeaver {}
createAggregatedClient(commands, SimSpaceWeaver);
