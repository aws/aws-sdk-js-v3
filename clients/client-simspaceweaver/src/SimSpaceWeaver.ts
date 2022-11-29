// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { SimSpaceWeaverClient } from "./SimSpaceWeaverClient";

/**
 * <p>Amazon Web Services SimSpace Weaver (SimSpace Weaver) is a managed service that you can use to build and operate large-scale
 *          spatial simulations in the Amazon Web Services Cloud. For example, you can create a digital twin of a city,
 *          crowd simulations with millions of people and objects, and massilvely-multiplayer games with
 *          hundreds of thousands of connected players.
 *          For more information about SimSpace Weaver, see the <i>
 *                <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/">Amazon Web Services SimSpace Weaver User Guide</a>
 *             </i>.</p>
 *          <p>This API reference describes the API operations and data types that you can use to
 *          communicate directly with SimSpace Weaver.</p>
 *          <p>SimSpace Weaver also provides the SimSpace Weaver app SDK, which you use for app development. The SimSpace Weaver
 *          app SDK API reference is included in the SimSpace Weaver app SDK documentation, which is part of the
 *          SimSpace Weaver app SDK distributable package.</p>
 */
export class SimSpaceWeaver extends SimSpaceWeaverClient {
  /**
   * <p>Deletes the instance of the given custom app.</p>
   */
  public deleteApp(args: DeleteAppCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAppCommandOutput>;
  public deleteApp(args: DeleteAppCommandInput, cb: (err: any, data?: DeleteAppCommandOutput) => void): void;
  public deleteApp(
    args: DeleteAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppCommandOutput) => void
  ): void;
  public deleteApp(
    args: DeleteAppCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAppCommandOutput) => void),
    cb?: (err: any, data?: DeleteAppCommandOutput) => void
  ): Promise<DeleteAppCommandOutput> | void {
    const command = new DeleteAppCommand(args);
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
   * <p>Deletes all SimSpace Weaver resources assigned to the given simulation.</p>
   *          <note>
   *             <p>Your simulation uses resources in other Amazon Web Services services. This API operation doesn't delete
   *             resources in other Amazon Web Services services.</p>
   *          </note>
   */
  public deleteSimulation(
    args: DeleteSimulationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSimulationCommandOutput>;
  public deleteSimulation(
    args: DeleteSimulationCommandInput,
    cb: (err: any, data?: DeleteSimulationCommandOutput) => void
  ): void;
  public deleteSimulation(
    args: DeleteSimulationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSimulationCommandOutput) => void
  ): void;
  public deleteSimulation(
    args: DeleteSimulationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSimulationCommandOutput) => void),
    cb?: (err: any, data?: DeleteSimulationCommandOutput) => void
  ): Promise<DeleteSimulationCommandOutput> | void {
    const command = new DeleteSimulationCommand(args);
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
   * <p>Returns the state of the given custom app.</p>
   */
  public describeApp(args: DescribeAppCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAppCommandOutput>;
  public describeApp(args: DescribeAppCommandInput, cb: (err: any, data?: DescribeAppCommandOutput) => void): void;
  public describeApp(
    args: DescribeAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppCommandOutput) => void
  ): void;
  public describeApp(
    args: DescribeAppCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAppCommandOutput) => void),
    cb?: (err: any, data?: DescribeAppCommandOutput) => void
  ): Promise<DescribeAppCommandOutput> | void {
    const command = new DescribeAppCommand(args);
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
   * <p>Returns the current state of the given simulation.</p>
   */
  public describeSimulation(
    args: DescribeSimulationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSimulationCommandOutput>;
  public describeSimulation(
    args: DescribeSimulationCommandInput,
    cb: (err: any, data?: DescribeSimulationCommandOutput) => void
  ): void;
  public describeSimulation(
    args: DescribeSimulationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSimulationCommandOutput) => void
  ): void;
  public describeSimulation(
    args: DescribeSimulationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSimulationCommandOutput) => void),
    cb?: (err: any, data?: DescribeSimulationCommandOutput) => void
  ): Promise<DescribeSimulationCommandOutput> | void {
    const command = new DescribeSimulationCommand(args);
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
   * <p>Lists all custom apps or service apps for the given simulation and domain.</p>
   */
  public listApps(args: ListAppsCommandInput, options?: __HttpHandlerOptions): Promise<ListAppsCommandOutput>;
  public listApps(args: ListAppsCommandInput, cb: (err: any, data?: ListAppsCommandOutput) => void): void;
  public listApps(
    args: ListAppsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppsCommandOutput) => void
  ): void;
  public listApps(
    args: ListAppsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAppsCommandOutput) => void),
    cb?: (err: any, data?: ListAppsCommandOutput) => void
  ): Promise<ListAppsCommandOutput> | void {
    const command = new ListAppsCommand(args);
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
   * <p>Lists the SimSpace Weaver simulations in the Amazon Web Services account used to make the API call.</p>
   */
  public listSimulations(
    args: ListSimulationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSimulationsCommandOutput>;
  public listSimulations(
    args: ListSimulationsCommandInput,
    cb: (err: any, data?: ListSimulationsCommandOutput) => void
  ): void;
  public listSimulations(
    args: ListSimulationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSimulationsCommandOutput) => void
  ): void;
  public listSimulations(
    args: ListSimulationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSimulationsCommandOutput) => void),
    cb?: (err: any, data?: ListSimulationsCommandOutput) => void
  ): Promise<ListSimulationsCommandOutput> | void {
    const command = new ListSimulationsCommand(args);
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
   * <p>Lists all tags on a SimSpace Weaver resource.</p>
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
   * <p>Starts a custom app with the configuration specified in the simulation schema.</p>
   */
  public startApp(args: StartAppCommandInput, options?: __HttpHandlerOptions): Promise<StartAppCommandOutput>;
  public startApp(args: StartAppCommandInput, cb: (err: any, data?: StartAppCommandOutput) => void): void;
  public startApp(
    args: StartAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAppCommandOutput) => void
  ): void;
  public startApp(
    args: StartAppCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartAppCommandOutput) => void),
    cb?: (err: any, data?: StartAppCommandOutput) => void
  ): Promise<StartAppCommandOutput> | void {
    const command = new StartAppCommand(args);
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
   * <p>Starts the simulation clock.</p>
   */
  public startClock(args: StartClockCommandInput, options?: __HttpHandlerOptions): Promise<StartClockCommandOutput>;
  public startClock(args: StartClockCommandInput, cb: (err: any, data?: StartClockCommandOutput) => void): void;
  public startClock(
    args: StartClockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartClockCommandOutput) => void
  ): void;
  public startClock(
    args: StartClockCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartClockCommandOutput) => void),
    cb?: (err: any, data?: StartClockCommandOutput) => void
  ): Promise<StartClockCommandOutput> | void {
    const command = new StartClockCommand(args);
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
   * <p>Starts a simulation with the given name and schema.</p>
   */
  public startSimulation(
    args: StartSimulationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSimulationCommandOutput>;
  public startSimulation(
    args: StartSimulationCommandInput,
    cb: (err: any, data?: StartSimulationCommandOutput) => void
  ): void;
  public startSimulation(
    args: StartSimulationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSimulationCommandOutput) => void
  ): void;
  public startSimulation(
    args: StartSimulationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartSimulationCommandOutput) => void),
    cb?: (err: any, data?: StartSimulationCommandOutput) => void
  ): Promise<StartSimulationCommandOutput> | void {
    const command = new StartSimulationCommand(args);
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
   * <p>Stops the given custom app and shuts down all of its allocated compute resources.</p>
   */
  public stopApp(args: StopAppCommandInput, options?: __HttpHandlerOptions): Promise<StopAppCommandOutput>;
  public stopApp(args: StopAppCommandInput, cb: (err: any, data?: StopAppCommandOutput) => void): void;
  public stopApp(
    args: StopAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopAppCommandOutput) => void
  ): void;
  public stopApp(
    args: StopAppCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopAppCommandOutput) => void),
    cb?: (err: any, data?: StopAppCommandOutput) => void
  ): Promise<StopAppCommandOutput> | void {
    const command = new StopAppCommand(args);
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
   * <p>Stops the simulation clock.</p>
   */
  public stopClock(args: StopClockCommandInput, options?: __HttpHandlerOptions): Promise<StopClockCommandOutput>;
  public stopClock(args: StopClockCommandInput, cb: (err: any, data?: StopClockCommandOutput) => void): void;
  public stopClock(
    args: StopClockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopClockCommandOutput) => void
  ): void;
  public stopClock(
    args: StopClockCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopClockCommandOutput) => void),
    cb?: (err: any, data?: StopClockCommandOutput) => void
  ): Promise<StopClockCommandOutput> | void {
    const command = new StopClockCommand(args);
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
   * <p>Stops the given simulation.</p>
   *          <important>
   *             <p>You can't restart a simulation after you stop it.
   *          If you need to restart a simulation, you must stop it, delete it,
   *          and start a new instance of it.</p>
   *          </important>
   */
  public stopSimulation(
    args: StopSimulationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopSimulationCommandOutput>;
  public stopSimulation(
    args: StopSimulationCommandInput,
    cb: (err: any, data?: StopSimulationCommandOutput) => void
  ): void;
  public stopSimulation(
    args: StopSimulationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopSimulationCommandOutput) => void
  ): void;
  public stopSimulation(
    args: StopSimulationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopSimulationCommandOutput) => void),
    cb?: (err: any, data?: StopSimulationCommandOutput) => void
  ): Promise<StopSimulationCommandOutput> | void {
    const command = new StopSimulationCommand(args);
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
   * <p>Adds tags to a SimSpace Weaver resource. For more information about tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the
   *    <i>Amazon Web Services General Reference</i>.</p>
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
   * <p>Removes tags from a SimSpace Weaver resource. For more information about tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the
   *    <i>Amazon Web Services General Reference</i>.</p>
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
}
