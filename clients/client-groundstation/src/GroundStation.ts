// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CancelContactCommand,
  CancelContactCommandInput,
  CancelContactCommandOutput,
} from "./commands/CancelContactCommand";
import {
  CreateConfigCommand,
  CreateConfigCommandInput,
  CreateConfigCommandOutput,
} from "./commands/CreateConfigCommand";
import {
  CreateDataflowEndpointGroupCommand,
  CreateDataflowEndpointGroupCommandInput,
  CreateDataflowEndpointGroupCommandOutput,
} from "./commands/CreateDataflowEndpointGroupCommand";
import {
  CreateEphemerisCommand,
  CreateEphemerisCommandInput,
  CreateEphemerisCommandOutput,
} from "./commands/CreateEphemerisCommand";
import {
  CreateMissionProfileCommand,
  CreateMissionProfileCommandInput,
  CreateMissionProfileCommandOutput,
} from "./commands/CreateMissionProfileCommand";
import {
  DeleteConfigCommand,
  DeleteConfigCommandInput,
  DeleteConfigCommandOutput,
} from "./commands/DeleteConfigCommand";
import {
  DeleteDataflowEndpointGroupCommand,
  DeleteDataflowEndpointGroupCommandInput,
  DeleteDataflowEndpointGroupCommandOutput,
} from "./commands/DeleteDataflowEndpointGroupCommand";
import {
  DeleteEphemerisCommand,
  DeleteEphemerisCommandInput,
  DeleteEphemerisCommandOutput,
} from "./commands/DeleteEphemerisCommand";
import {
  DeleteMissionProfileCommand,
  DeleteMissionProfileCommandInput,
  DeleteMissionProfileCommandOutput,
} from "./commands/DeleteMissionProfileCommand";
import {
  DescribeContactCommand,
  DescribeContactCommandInput,
  DescribeContactCommandOutput,
} from "./commands/DescribeContactCommand";
import {
  DescribeEphemerisCommand,
  DescribeEphemerisCommandInput,
  DescribeEphemerisCommandOutput,
} from "./commands/DescribeEphemerisCommand";
import { GetConfigCommand, GetConfigCommandInput, GetConfigCommandOutput } from "./commands/GetConfigCommand";
import {
  GetDataflowEndpointGroupCommand,
  GetDataflowEndpointGroupCommandInput,
  GetDataflowEndpointGroupCommandOutput,
} from "./commands/GetDataflowEndpointGroupCommand";
import {
  GetMinuteUsageCommand,
  GetMinuteUsageCommandInput,
  GetMinuteUsageCommandOutput,
} from "./commands/GetMinuteUsageCommand";
import {
  GetMissionProfileCommand,
  GetMissionProfileCommandInput,
  GetMissionProfileCommandOutput,
} from "./commands/GetMissionProfileCommand";
import {
  GetSatelliteCommand,
  GetSatelliteCommandInput,
  GetSatelliteCommandOutput,
} from "./commands/GetSatelliteCommand";
import { ListConfigsCommand, ListConfigsCommandInput, ListConfigsCommandOutput } from "./commands/ListConfigsCommand";
import {
  ListContactsCommand,
  ListContactsCommandInput,
  ListContactsCommandOutput,
} from "./commands/ListContactsCommand";
import {
  ListDataflowEndpointGroupsCommand,
  ListDataflowEndpointGroupsCommandInput,
  ListDataflowEndpointGroupsCommandOutput,
} from "./commands/ListDataflowEndpointGroupsCommand";
import {
  ListEphemeridesCommand,
  ListEphemeridesCommandInput,
  ListEphemeridesCommandOutput,
} from "./commands/ListEphemeridesCommand";
import {
  ListGroundStationsCommand,
  ListGroundStationsCommandInput,
  ListGroundStationsCommandOutput,
} from "./commands/ListGroundStationsCommand";
import {
  ListMissionProfilesCommand,
  ListMissionProfilesCommandInput,
  ListMissionProfilesCommandOutput,
} from "./commands/ListMissionProfilesCommand";
import {
  ListSatellitesCommand,
  ListSatellitesCommandInput,
  ListSatellitesCommandOutput,
} from "./commands/ListSatellitesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ReserveContactCommand,
  ReserveContactCommandInput,
  ReserveContactCommandOutput,
} from "./commands/ReserveContactCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateConfigCommand,
  UpdateConfigCommandInput,
  UpdateConfigCommandOutput,
} from "./commands/UpdateConfigCommand";
import {
  UpdateEphemerisCommand,
  UpdateEphemerisCommandInput,
  UpdateEphemerisCommandOutput,
} from "./commands/UpdateEphemerisCommand";
import {
  UpdateMissionProfileCommand,
  UpdateMissionProfileCommandInput,
  UpdateMissionProfileCommandOutput,
} from "./commands/UpdateMissionProfileCommand";
import { GroundStationClient } from "./GroundStationClient";

/**
 * <p>Welcome to the AWS Ground Station API Reference. AWS Ground Station is a fully managed service that
 *       enables you to control satellite communications, downlink and process satellite data, and
 *       scale your satellite operations efficiently and cost-effectively without having
 *       to build or manage your own ground station infrastructure.</p>
 */
export class GroundStation extends GroundStationClient {
  /**
   * <p>Cancels a contact with a specified contact ID.</p>
   */
  public cancelContact(
    args: CancelContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelContactCommandOutput>;
  public cancelContact(
    args: CancelContactCommandInput,
    cb: (err: any, data?: CancelContactCommandOutput) => void
  ): void;
  public cancelContact(
    args: CancelContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelContactCommandOutput) => void
  ): void;
  public cancelContact(
    args: CancelContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelContactCommandOutput) => void),
    cb?: (err: any, data?: CancelContactCommandOutput) => void
  ): Promise<CancelContactCommandOutput> | void {
    const command = new CancelContactCommand(args);
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
   * <p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p>
   *          <p>Only one type of <code>configData</code> can be specified.</p>
   */
  public createConfig(
    args: CreateConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigCommandOutput>;
  public createConfig(args: CreateConfigCommandInput, cb: (err: any, data?: CreateConfigCommandOutput) => void): void;
  public createConfig(
    args: CreateConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigCommandOutput) => void
  ): void;
  public createConfig(
    args: CreateConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConfigCommandOutput) => void),
    cb?: (err: any, data?: CreateConfigCommandOutput) => void
  ): Promise<CreateConfigCommandOutput> | void {
    const command = new CreateConfigCommand(args);
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
   * <p>Creates a <code>DataflowEndpoint</code> group containing the specified list of <code>DataflowEndpoint</code> objects.</p>
   *          <p>The <code>name</code> field in each endpoint is used in your mission profile <code>DataflowEndpointConfig</code>
   *          to specify which endpoints to use during a contact.</p>
   *          <p>When a contact uses multiple <code>DataflowEndpointConfig</code> objects, each <code>Config</code>
   *          must match a <code>DataflowEndpoint</code> in the same group.</p>
   */
  public createDataflowEndpointGroup(
    args: CreateDataflowEndpointGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataflowEndpointGroupCommandOutput>;
  public createDataflowEndpointGroup(
    args: CreateDataflowEndpointGroupCommandInput,
    cb: (err: any, data?: CreateDataflowEndpointGroupCommandOutput) => void
  ): void;
  public createDataflowEndpointGroup(
    args: CreateDataflowEndpointGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataflowEndpointGroupCommandOutput) => void
  ): void;
  public createDataflowEndpointGroup(
    args: CreateDataflowEndpointGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDataflowEndpointGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateDataflowEndpointGroupCommandOutput) => void
  ): Promise<CreateDataflowEndpointGroupCommandOutput> | void {
    const command = new CreateDataflowEndpointGroupCommand(args);
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
   * <p>Creates an Ephemeris with the specified <code>EphemerisData</code>.</p>
   */
  public createEphemeris(
    args: CreateEphemerisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEphemerisCommandOutput>;
  public createEphemeris(
    args: CreateEphemerisCommandInput,
    cb: (err: any, data?: CreateEphemerisCommandOutput) => void
  ): void;
  public createEphemeris(
    args: CreateEphemerisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEphemerisCommandOutput) => void
  ): void;
  public createEphemeris(
    args: CreateEphemerisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEphemerisCommandOutput) => void),
    cb?: (err: any, data?: CreateEphemerisCommandOutput) => void
  ): Promise<CreateEphemerisCommandOutput> | void {
    const command = new CreateEphemerisCommand(args);
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
   * <p>Creates a mission profile.</p>
   *          <p>
   *             <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings
   *          has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>
   */
  public createMissionProfile(
    args: CreateMissionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMissionProfileCommandOutput>;
  public createMissionProfile(
    args: CreateMissionProfileCommandInput,
    cb: (err: any, data?: CreateMissionProfileCommandOutput) => void
  ): void;
  public createMissionProfile(
    args: CreateMissionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMissionProfileCommandOutput) => void
  ): void;
  public createMissionProfile(
    args: CreateMissionProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMissionProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateMissionProfileCommandOutput) => void
  ): Promise<CreateMissionProfileCommandOutput> | void {
    const command = new CreateMissionProfileCommand(args);
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
   * <p>Deletes a <code>Config</code>.</p>
   */
  public deleteConfig(
    args: DeleteConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigCommandOutput>;
  public deleteConfig(args: DeleteConfigCommandInput, cb: (err: any, data?: DeleteConfigCommandOutput) => void): void;
  public deleteConfig(
    args: DeleteConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigCommandOutput) => void
  ): void;
  public deleteConfig(
    args: DeleteConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConfigCommandOutput) => void),
    cb?: (err: any, data?: DeleteConfigCommandOutput) => void
  ): Promise<DeleteConfigCommandOutput> | void {
    const command = new DeleteConfigCommand(args);
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
   * <p>Deletes a dataflow endpoint group.</p>
   */
  public deleteDataflowEndpointGroup(
    args: DeleteDataflowEndpointGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataflowEndpointGroupCommandOutput>;
  public deleteDataflowEndpointGroup(
    args: DeleteDataflowEndpointGroupCommandInput,
    cb: (err: any, data?: DeleteDataflowEndpointGroupCommandOutput) => void
  ): void;
  public deleteDataflowEndpointGroup(
    args: DeleteDataflowEndpointGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataflowEndpointGroupCommandOutput) => void
  ): void;
  public deleteDataflowEndpointGroup(
    args: DeleteDataflowEndpointGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDataflowEndpointGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteDataflowEndpointGroupCommandOutput) => void
  ): Promise<DeleteDataflowEndpointGroupCommandOutput> | void {
    const command = new DeleteDataflowEndpointGroupCommand(args);
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
   * <p>Deletes an ephemeris</p>
   */
  public deleteEphemeris(
    args: DeleteEphemerisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEphemerisCommandOutput>;
  public deleteEphemeris(
    args: DeleteEphemerisCommandInput,
    cb: (err: any, data?: DeleteEphemerisCommandOutput) => void
  ): void;
  public deleteEphemeris(
    args: DeleteEphemerisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEphemerisCommandOutput) => void
  ): void;
  public deleteEphemeris(
    args: DeleteEphemerisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEphemerisCommandOutput) => void),
    cb?: (err: any, data?: DeleteEphemerisCommandOutput) => void
  ): Promise<DeleteEphemerisCommandOutput> | void {
    const command = new DeleteEphemerisCommand(args);
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
   * <p>Deletes a mission profile.</p>
   */
  public deleteMissionProfile(
    args: DeleteMissionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMissionProfileCommandOutput>;
  public deleteMissionProfile(
    args: DeleteMissionProfileCommandInput,
    cb: (err: any, data?: DeleteMissionProfileCommandOutput) => void
  ): void;
  public deleteMissionProfile(
    args: DeleteMissionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMissionProfileCommandOutput) => void
  ): void;
  public deleteMissionProfile(
    args: DeleteMissionProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMissionProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteMissionProfileCommandOutput) => void
  ): Promise<DeleteMissionProfileCommandOutput> | void {
    const command = new DeleteMissionProfileCommand(args);
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
   * <p>Describes an existing contact.</p>
   */
  public describeContact(
    args: DescribeContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeContactCommandOutput>;
  public describeContact(
    args: DescribeContactCommandInput,
    cb: (err: any, data?: DescribeContactCommandOutput) => void
  ): void;
  public describeContact(
    args: DescribeContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeContactCommandOutput) => void
  ): void;
  public describeContact(
    args: DescribeContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeContactCommandOutput) => void),
    cb?: (err: any, data?: DescribeContactCommandOutput) => void
  ): Promise<DescribeContactCommandOutput> | void {
    const command = new DescribeContactCommand(args);
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
   * <p>Describes an existing ephemeris.</p>
   */
  public describeEphemeris(
    args: DescribeEphemerisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEphemerisCommandOutput>;
  public describeEphemeris(
    args: DescribeEphemerisCommandInput,
    cb: (err: any, data?: DescribeEphemerisCommandOutput) => void
  ): void;
  public describeEphemeris(
    args: DescribeEphemerisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEphemerisCommandOutput) => void
  ): void;
  public describeEphemeris(
    args: DescribeEphemerisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEphemerisCommandOutput) => void),
    cb?: (err: any, data?: DescribeEphemerisCommandOutput) => void
  ): Promise<DescribeEphemerisCommandOutput> | void {
    const command = new DescribeEphemerisCommand(args);
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
   * <p>Returns <code>Config</code> information.</p>
   *          <p>Only one <code>Config</code> response can be returned.</p>
   */
  public getConfig(args: GetConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetConfigCommandOutput>;
  public getConfig(args: GetConfigCommandInput, cb: (err: any, data?: GetConfigCommandOutput) => void): void;
  public getConfig(
    args: GetConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigCommandOutput) => void
  ): void;
  public getConfig(
    args: GetConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConfigCommandOutput) => void),
    cb?: (err: any, data?: GetConfigCommandOutput) => void
  ): Promise<GetConfigCommandOutput> | void {
    const command = new GetConfigCommand(args);
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
   * <p>Returns the dataflow endpoint group.</p>
   */
  public getDataflowEndpointGroup(
    args: GetDataflowEndpointGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataflowEndpointGroupCommandOutput>;
  public getDataflowEndpointGroup(
    args: GetDataflowEndpointGroupCommandInput,
    cb: (err: any, data?: GetDataflowEndpointGroupCommandOutput) => void
  ): void;
  public getDataflowEndpointGroup(
    args: GetDataflowEndpointGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataflowEndpointGroupCommandOutput) => void
  ): void;
  public getDataflowEndpointGroup(
    args: GetDataflowEndpointGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataflowEndpointGroupCommandOutput) => void),
    cb?: (err: any, data?: GetDataflowEndpointGroupCommandOutput) => void
  ): Promise<GetDataflowEndpointGroupCommandOutput> | void {
    const command = new GetDataflowEndpointGroupCommand(args);
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
   * <p>Returns the number of minutes used by account.</p>
   */
  public getMinuteUsage(
    args: GetMinuteUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMinuteUsageCommandOutput>;
  public getMinuteUsage(
    args: GetMinuteUsageCommandInput,
    cb: (err: any, data?: GetMinuteUsageCommandOutput) => void
  ): void;
  public getMinuteUsage(
    args: GetMinuteUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMinuteUsageCommandOutput) => void
  ): void;
  public getMinuteUsage(
    args: GetMinuteUsageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMinuteUsageCommandOutput) => void),
    cb?: (err: any, data?: GetMinuteUsageCommandOutput) => void
  ): Promise<GetMinuteUsageCommandOutput> | void {
    const command = new GetMinuteUsageCommand(args);
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
   * <p>Returns a mission profile.</p>
   */
  public getMissionProfile(
    args: GetMissionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMissionProfileCommandOutput>;
  public getMissionProfile(
    args: GetMissionProfileCommandInput,
    cb: (err: any, data?: GetMissionProfileCommandOutput) => void
  ): void;
  public getMissionProfile(
    args: GetMissionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMissionProfileCommandOutput) => void
  ): void;
  public getMissionProfile(
    args: GetMissionProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMissionProfileCommandOutput) => void),
    cb?: (err: any, data?: GetMissionProfileCommandOutput) => void
  ): Promise<GetMissionProfileCommandOutput> | void {
    const command = new GetMissionProfileCommand(args);
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
   * <p>Returns a satellite.</p>
   */
  public getSatellite(
    args: GetSatelliteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSatelliteCommandOutput>;
  public getSatellite(args: GetSatelliteCommandInput, cb: (err: any, data?: GetSatelliteCommandOutput) => void): void;
  public getSatellite(
    args: GetSatelliteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSatelliteCommandOutput) => void
  ): void;
  public getSatellite(
    args: GetSatelliteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSatelliteCommandOutput) => void),
    cb?: (err: any, data?: GetSatelliteCommandOutput) => void
  ): Promise<GetSatelliteCommandOutput> | void {
    const command = new GetSatelliteCommand(args);
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
   * <p>Returns a list of <code>Config</code> objects.</p>
   */
  public listConfigs(args: ListConfigsCommandInput, options?: __HttpHandlerOptions): Promise<ListConfigsCommandOutput>;
  public listConfigs(args: ListConfigsCommandInput, cb: (err: any, data?: ListConfigsCommandOutput) => void): void;
  public listConfigs(
    args: ListConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigsCommandOutput) => void
  ): void;
  public listConfigs(
    args: ListConfigsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConfigsCommandOutput) => void),
    cb?: (err: any, data?: ListConfigsCommandOutput) => void
  ): Promise<ListConfigsCommandOutput> | void {
    const command = new ListConfigsCommand(args);
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
   * <p>Returns a list of contacts.</p>
   *          <p>If <code>statusList</code> contains AVAILABLE, the request must include
   *       <code>groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>.
   *       </p>
   */
  public listContacts(
    args: ListContactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContactsCommandOutput>;
  public listContacts(args: ListContactsCommandInput, cb: (err: any, data?: ListContactsCommandOutput) => void): void;
  public listContacts(
    args: ListContactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContactsCommandOutput) => void
  ): void;
  public listContacts(
    args: ListContactsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListContactsCommandOutput) => void),
    cb?: (err: any, data?: ListContactsCommandOutput) => void
  ): Promise<ListContactsCommandOutput> | void {
    const command = new ListContactsCommand(args);
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
   * <p>Returns a list of <code>DataflowEndpoint</code> groups.</p>
   */
  public listDataflowEndpointGroups(
    args: ListDataflowEndpointGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataflowEndpointGroupsCommandOutput>;
  public listDataflowEndpointGroups(
    args: ListDataflowEndpointGroupsCommandInput,
    cb: (err: any, data?: ListDataflowEndpointGroupsCommandOutput) => void
  ): void;
  public listDataflowEndpointGroups(
    args: ListDataflowEndpointGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataflowEndpointGroupsCommandOutput) => void
  ): void;
  public listDataflowEndpointGroups(
    args: ListDataflowEndpointGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDataflowEndpointGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListDataflowEndpointGroupsCommandOutput) => void
  ): Promise<ListDataflowEndpointGroupsCommandOutput> | void {
    const command = new ListDataflowEndpointGroupsCommand(args);
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
   * <p>List existing ephemerides.</p>
   */
  public listEphemerides(
    args: ListEphemeridesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEphemeridesCommandOutput>;
  public listEphemerides(
    args: ListEphemeridesCommandInput,
    cb: (err: any, data?: ListEphemeridesCommandOutput) => void
  ): void;
  public listEphemerides(
    args: ListEphemeridesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEphemeridesCommandOutput) => void
  ): void;
  public listEphemerides(
    args: ListEphemeridesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEphemeridesCommandOutput) => void),
    cb?: (err: any, data?: ListEphemeridesCommandOutput) => void
  ): Promise<ListEphemeridesCommandOutput> | void {
    const command = new ListEphemeridesCommand(args);
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
   * <p>Returns a list of ground stations. </p>
   */
  public listGroundStations(
    args: ListGroundStationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroundStationsCommandOutput>;
  public listGroundStations(
    args: ListGroundStationsCommandInput,
    cb: (err: any, data?: ListGroundStationsCommandOutput) => void
  ): void;
  public listGroundStations(
    args: ListGroundStationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroundStationsCommandOutput) => void
  ): void;
  public listGroundStations(
    args: ListGroundStationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGroundStationsCommandOutput) => void),
    cb?: (err: any, data?: ListGroundStationsCommandOutput) => void
  ): Promise<ListGroundStationsCommandOutput> | void {
    const command = new ListGroundStationsCommand(args);
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
   * <p>Returns a list of mission profiles.</p>
   */
  public listMissionProfiles(
    args: ListMissionProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMissionProfilesCommandOutput>;
  public listMissionProfiles(
    args: ListMissionProfilesCommandInput,
    cb: (err: any, data?: ListMissionProfilesCommandOutput) => void
  ): void;
  public listMissionProfiles(
    args: ListMissionProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMissionProfilesCommandOutput) => void
  ): void;
  public listMissionProfiles(
    args: ListMissionProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMissionProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListMissionProfilesCommandOutput) => void
  ): Promise<ListMissionProfilesCommandOutput> | void {
    const command = new ListMissionProfilesCommand(args);
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
   * <p>Returns a list of satellites.</p>
   */
  public listSatellites(
    args: ListSatellitesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSatellitesCommandOutput>;
  public listSatellites(
    args: ListSatellitesCommandInput,
    cb: (err: any, data?: ListSatellitesCommandOutput) => void
  ): void;
  public listSatellites(
    args: ListSatellitesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSatellitesCommandOutput) => void
  ): void;
  public listSatellites(
    args: ListSatellitesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSatellitesCommandOutput) => void),
    cb?: (err: any, data?: ListSatellitesCommandOutput) => void
  ): Promise<ListSatellitesCommandOutput> | void {
    const command = new ListSatellitesCommand(args);
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
   * <p>Returns a list of tags for a specified resource.</p>
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
   * <p>Reserves a contact using specified parameters.</p>
   */
  public reserveContact(
    args: ReserveContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReserveContactCommandOutput>;
  public reserveContact(
    args: ReserveContactCommandInput,
    cb: (err: any, data?: ReserveContactCommandOutput) => void
  ): void;
  public reserveContact(
    args: ReserveContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReserveContactCommandOutput) => void
  ): void;
  public reserveContact(
    args: ReserveContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReserveContactCommandOutput) => void),
    cb?: (err: any, data?: ReserveContactCommandOutput) => void
  ): Promise<ReserveContactCommandOutput> | void {
    const command = new ReserveContactCommand(args);
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
   * <p>Assigns a tag to a resource.</p>
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
   * <p>Deassigns a resource tag.</p>
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
   * <p>Updates the <code>Config</code> used when scheduling contacts.</p>
   *          <p>Updating a <code>Config</code> will not update the execution parameters
   *          for existing future contacts scheduled with this <code>Config</code>.</p>
   */
  public updateConfig(
    args: UpdateConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigCommandOutput>;
  public updateConfig(args: UpdateConfigCommandInput, cb: (err: any, data?: UpdateConfigCommandOutput) => void): void;
  public updateConfig(
    args: UpdateConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigCommandOutput) => void
  ): void;
  public updateConfig(
    args: UpdateConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateConfigCommandOutput) => void
  ): Promise<UpdateConfigCommandOutput> | void {
    const command = new UpdateConfigCommand(args);
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
   * <p>Updates an existing ephemeris</p>
   */
  public updateEphemeris(
    args: UpdateEphemerisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEphemerisCommandOutput>;
  public updateEphemeris(
    args: UpdateEphemerisCommandInput,
    cb: (err: any, data?: UpdateEphemerisCommandOutput) => void
  ): void;
  public updateEphemeris(
    args: UpdateEphemerisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEphemerisCommandOutput) => void
  ): void;
  public updateEphemeris(
    args: UpdateEphemerisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEphemerisCommandOutput) => void),
    cb?: (err: any, data?: UpdateEphemerisCommandOutput) => void
  ): Promise<UpdateEphemerisCommandOutput> | void {
    const command = new UpdateEphemerisCommand(args);
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
   * <p>Updates a mission profile.</p>
   *          <p>Updating a mission profile will not update the execution parameters
   *          for existing future contacts.</p>
   */
  public updateMissionProfile(
    args: UpdateMissionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMissionProfileCommandOutput>;
  public updateMissionProfile(
    args: UpdateMissionProfileCommandInput,
    cb: (err: any, data?: UpdateMissionProfileCommandOutput) => void
  ): void;
  public updateMissionProfile(
    args: UpdateMissionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMissionProfileCommandOutput) => void
  ): void;
  public updateMissionProfile(
    args: UpdateMissionProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMissionProfileCommandOutput) => void),
    cb?: (err: any, data?: UpdateMissionProfileCommandOutput) => void
  ): Promise<UpdateMissionProfileCommandOutput> | void {
    const command = new UpdateMissionProfileCommand(args);
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
