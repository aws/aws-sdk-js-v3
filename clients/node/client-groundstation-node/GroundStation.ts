import { GroundStationClient } from "./GroundStationClient";
import { CancelContactInput } from "./types/CancelContactInput";
import { CancelContactOutput } from "./types/CancelContactOutput";
import { CreateConfigInput } from "./types/CreateConfigInput";
import { CreateConfigOutput } from "./types/CreateConfigOutput";
import { CreateDataflowEndpointGroupInput } from "./types/CreateDataflowEndpointGroupInput";
import { CreateDataflowEndpointGroupOutput } from "./types/CreateDataflowEndpointGroupOutput";
import { CreateMissionProfileInput } from "./types/CreateMissionProfileInput";
import { CreateMissionProfileOutput } from "./types/CreateMissionProfileOutput";
import { DeleteConfigInput } from "./types/DeleteConfigInput";
import { DeleteConfigOutput } from "./types/DeleteConfigOutput";
import { DeleteDataflowEndpointGroupInput } from "./types/DeleteDataflowEndpointGroupInput";
import { DeleteDataflowEndpointGroupOutput } from "./types/DeleteDataflowEndpointGroupOutput";
import { DeleteMissionProfileInput } from "./types/DeleteMissionProfileInput";
import { DeleteMissionProfileOutput } from "./types/DeleteMissionProfileOutput";
import { DependencyException } from "./types/DependencyException";
import { DescribeContactInput } from "./types/DescribeContactInput";
import { DescribeContactOutput } from "./types/DescribeContactOutput";
import { GetConfigInput } from "./types/GetConfigInput";
import { GetConfigOutput } from "./types/GetConfigOutput";
import { GetDataflowEndpointGroupInput } from "./types/GetDataflowEndpointGroupInput";
import { GetDataflowEndpointGroupOutput } from "./types/GetDataflowEndpointGroupOutput";
import { GetMinuteUsageInput } from "./types/GetMinuteUsageInput";
import { GetMinuteUsageOutput } from "./types/GetMinuteUsageOutput";
import { GetMissionProfileInput } from "./types/GetMissionProfileInput";
import { GetMissionProfileOutput } from "./types/GetMissionProfileOutput";
import { GetSatelliteInput } from "./types/GetSatelliteInput";
import { GetSatelliteOutput } from "./types/GetSatelliteOutput";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { ListConfigsInput } from "./types/ListConfigsInput";
import { ListConfigsOutput } from "./types/ListConfigsOutput";
import { ListContactsInput } from "./types/ListContactsInput";
import { ListContactsOutput } from "./types/ListContactsOutput";
import { ListDataflowEndpointGroupsInput } from "./types/ListDataflowEndpointGroupsInput";
import { ListDataflowEndpointGroupsOutput } from "./types/ListDataflowEndpointGroupsOutput";
import { ListGroundStationsInput } from "./types/ListGroundStationsInput";
import { ListGroundStationsOutput } from "./types/ListGroundStationsOutput";
import { ListMissionProfilesInput } from "./types/ListMissionProfilesInput";
import { ListMissionProfilesOutput } from "./types/ListMissionProfilesOutput";
import { ListSatellitesInput } from "./types/ListSatellitesInput";
import { ListSatellitesOutput } from "./types/ListSatellitesOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ReserveContactInput } from "./types/ReserveContactInput";
import { ReserveContactOutput } from "./types/ReserveContactOutput";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateConfigInput } from "./types/UpdateConfigInput";
import { UpdateConfigOutput } from "./types/UpdateConfigOutput";
import { UpdateMissionProfileInput } from "./types/UpdateMissionProfileInput";
import { UpdateMissionProfileOutput } from "./types/UpdateMissionProfileOutput";
import { CancelContactCommand } from "./commands/CancelContactCommand";
import { CreateConfigCommand } from "./commands/CreateConfigCommand";
import { CreateDataflowEndpointGroupCommand } from "./commands/CreateDataflowEndpointGroupCommand";
import { CreateMissionProfileCommand } from "./commands/CreateMissionProfileCommand";
import { DeleteConfigCommand } from "./commands/DeleteConfigCommand";
import { DeleteDataflowEndpointGroupCommand } from "./commands/DeleteDataflowEndpointGroupCommand";
import { DeleteMissionProfileCommand } from "./commands/DeleteMissionProfileCommand";
import { DescribeContactCommand } from "./commands/DescribeContactCommand";
import { GetConfigCommand } from "./commands/GetConfigCommand";
import { GetDataflowEndpointGroupCommand } from "./commands/GetDataflowEndpointGroupCommand";
import { GetMinuteUsageCommand } from "./commands/GetMinuteUsageCommand";
import { GetMissionProfileCommand } from "./commands/GetMissionProfileCommand";
import { GetSatelliteCommand } from "./commands/GetSatelliteCommand";
import { ListConfigsCommand } from "./commands/ListConfigsCommand";
import { ListContactsCommand } from "./commands/ListContactsCommand";
import { ListDataflowEndpointGroupsCommand } from "./commands/ListDataflowEndpointGroupsCommand";
import { ListGroundStationsCommand } from "./commands/ListGroundStationsCommand";
import { ListMissionProfilesCommand } from "./commands/ListMissionProfilesCommand";
import { ListSatellitesCommand } from "./commands/ListSatellitesCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ReserveContactCommand } from "./commands/ReserveContactCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateConfigCommand } from "./commands/UpdateConfigCommand";
import { UpdateMissionProfileCommand } from "./commands/UpdateMissionProfileCommand";

export class GroundStation extends GroundStationClient {
  /**
   * <p>Cancels a contact with a specified contact ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelContact(args: CancelContactInput): Promise<CancelContactOutput>;
  public cancelContact(
    args: CancelContactInput,
    cb: (err: any, data?: CancelContactOutput) => void
  ): void;
  public cancelContact(
    args: CancelContactInput,
    cb?: (err: any, data?: CancelContactOutput) => void
  ): Promise<CancelContactOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelContactCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p>
           <p>Only one type of <code>configData</code> can be specified.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createConfig(args: CreateConfigInput): Promise<CreateConfigOutput>;
  public createConfig(
    args: CreateConfigInput,
    cb: (err: any, data?: CreateConfigOutput) => void
  ): void;
  public createConfig(
    args: CreateConfigInput,
    cb?: (err: any, data?: CreateConfigOutput) => void
  ): Promise<CreateConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a <code>DataflowEndpoint</code> group containing the specified list of <code>DataflowEndpoint</code> objects.</p>
           <p>The <code>name</code> field in each endpoint is used in your mission profile <code>DataflowEndpointConfig</code>
           to specify which endpoints to use during a contact.</p>
           <p>When a contact uses multiple <code>DataflowEndpointConfig</code> objects, each <code>Config</code>
           must match a <code>DataflowEndpoint</code> in the same group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDataflowEndpointGroup(
    args: CreateDataflowEndpointGroupInput
  ): Promise<CreateDataflowEndpointGroupOutput>;
  public createDataflowEndpointGroup(
    args: CreateDataflowEndpointGroupInput,
    cb: (err: any, data?: CreateDataflowEndpointGroupOutput) => void
  ): void;
  public createDataflowEndpointGroup(
    args: CreateDataflowEndpointGroupInput,
    cb?: (err: any, data?: CreateDataflowEndpointGroupOutput) => void
  ): Promise<CreateDataflowEndpointGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDataflowEndpointGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a mission profile.</p>
           <p>
              <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings
           has two elements: a <i>from ARN</i> and a <i>to ARN</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createMissionProfile(
    args: CreateMissionProfileInput
  ): Promise<CreateMissionProfileOutput>;
  public createMissionProfile(
    args: CreateMissionProfileInput,
    cb: (err: any, data?: CreateMissionProfileOutput) => void
  ): void;
  public createMissionProfile(
    args: CreateMissionProfileInput,
    cb?: (err: any, data?: CreateMissionProfileOutput) => void
  ): Promise<CreateMissionProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateMissionProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a <code>Config</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteConfig(args: DeleteConfigInput): Promise<DeleteConfigOutput>;
  public deleteConfig(
    args: DeleteConfigInput,
    cb: (err: any, data?: DeleteConfigOutput) => void
  ): void;
  public deleteConfig(
    args: DeleteConfigInput,
    cb?: (err: any, data?: DeleteConfigOutput) => void
  ): Promise<DeleteConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a dataflow endpoint group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDataflowEndpointGroup(
    args: DeleteDataflowEndpointGroupInput
  ): Promise<DeleteDataflowEndpointGroupOutput>;
  public deleteDataflowEndpointGroup(
    args: DeleteDataflowEndpointGroupInput,
    cb: (err: any, data?: DeleteDataflowEndpointGroupOutput) => void
  ): void;
  public deleteDataflowEndpointGroup(
    args: DeleteDataflowEndpointGroupInput,
    cb?: (err: any, data?: DeleteDataflowEndpointGroupOutput) => void
  ): Promise<DeleteDataflowEndpointGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDataflowEndpointGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a mission profile.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteMissionProfile(
    args: DeleteMissionProfileInput
  ): Promise<DeleteMissionProfileOutput>;
  public deleteMissionProfile(
    args: DeleteMissionProfileInput,
    cb: (err: any, data?: DeleteMissionProfileOutput) => void
  ): void;
  public deleteMissionProfile(
    args: DeleteMissionProfileInput,
    cb?: (err: any, data?: DeleteMissionProfileOutput) => void
  ): Promise<DeleteMissionProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteMissionProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes an existing contact.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeContact(
    args: DescribeContactInput
  ): Promise<DescribeContactOutput>;
  public describeContact(
    args: DescribeContactInput,
    cb: (err: any, data?: DescribeContactOutput) => void
  ): void;
  public describeContact(
    args: DescribeContactInput,
    cb?: (err: any, data?: DescribeContactOutput) => void
  ): Promise<DescribeContactOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeContactCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns <code>Config</code> information.</p>
           <p>Only one <code>Config</code> response can be returned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getConfig(args: GetConfigInput): Promise<GetConfigOutput>;
  public getConfig(
    args: GetConfigInput,
    cb: (err: any, data?: GetConfigOutput) => void
  ): void;
  public getConfig(
    args: GetConfigInput,
    cb?: (err: any, data?: GetConfigOutput) => void
  ): Promise<GetConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the dataflow endpoint group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDataflowEndpointGroup(
    args: GetDataflowEndpointGroupInput
  ): Promise<GetDataflowEndpointGroupOutput>;
  public getDataflowEndpointGroup(
    args: GetDataflowEndpointGroupInput,
    cb: (err: any, data?: GetDataflowEndpointGroupOutput) => void
  ): void;
  public getDataflowEndpointGroup(
    args: GetDataflowEndpointGroupInput,
    cb?: (err: any, data?: GetDataflowEndpointGroupOutput) => void
  ): Promise<GetDataflowEndpointGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDataflowEndpointGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a mission profile.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMissionProfile(
    args: GetMissionProfileInput
  ): Promise<GetMissionProfileOutput>;
  public getMissionProfile(
    args: GetMissionProfileInput,
    cb: (err: any, data?: GetMissionProfileOutput) => void
  ): void;
  public getMissionProfile(
    args: GetMissionProfileInput,
    cb?: (err: any, data?: GetMissionProfileOutput) => void
  ): Promise<GetMissionProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMissionProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of <code>Config</code> objects.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listConfigs(args: ListConfigsInput): Promise<ListConfigsOutput>;
  public listConfigs(
    args: ListConfigsInput,
    cb: (err: any, data?: ListConfigsOutput) => void
  ): void;
  public listConfigs(
    args: ListConfigsInput,
    cb?: (err: any, data?: ListConfigsOutput) => void
  ): Promise<ListConfigsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListConfigsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of contacts.</p>
           <p>If <code>statusList</code> contains AVAILABLE, the request must include
        <code>groundstation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>.
        </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listContacts(args: ListContactsInput): Promise<ListContactsOutput>;
  public listContacts(
    args: ListContactsInput,
    cb: (err: any, data?: ListContactsOutput) => void
  ): void;
  public listContacts(
    args: ListContactsInput,
    cb?: (err: any, data?: ListContactsOutput) => void
  ): Promise<ListContactsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListContactsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of <code>DataflowEndpoint</code> groups.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDataflowEndpointGroups(
    args: ListDataflowEndpointGroupsInput
  ): Promise<ListDataflowEndpointGroupsOutput>;
  public listDataflowEndpointGroups(
    args: ListDataflowEndpointGroupsInput,
    cb: (err: any, data?: ListDataflowEndpointGroupsOutput) => void
  ): void;
  public listDataflowEndpointGroups(
    args: ListDataflowEndpointGroupsInput,
    cb?: (err: any, data?: ListDataflowEndpointGroupsOutput) => void
  ): Promise<ListDataflowEndpointGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDataflowEndpointGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of mission profiles.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listMissionProfiles(
    args: ListMissionProfilesInput
  ): Promise<ListMissionProfilesOutput>;
  public listMissionProfiles(
    args: ListMissionProfilesInput,
    cb: (err: any, data?: ListMissionProfilesOutput) => void
  ): void;
  public listMissionProfiles(
    args: ListMissionProfilesInput,
    cb?: (err: any, data?: ListMissionProfilesOutput) => void
  ): Promise<ListMissionProfilesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListMissionProfilesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Reserves a contact using specified parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public reserveContact(
    args: ReserveContactInput
  ): Promise<ReserveContactOutput>;
  public reserveContact(
    args: ReserveContactInput,
    cb: (err: any, data?: ReserveContactOutput) => void
  ): void;
  public reserveContact(
    args: ReserveContactInput,
    cb?: (err: any, data?: ReserveContactOutput) => void
  ): Promise<ReserveContactOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ReserveContactCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the <code>Config</code> used when scheduling contacts.</p>
           <p>Updating a <code>Config</code> will not update the execution parameters
           for existing future contacts scheduled with this <code>Config</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateConfig(args: UpdateConfigInput): Promise<UpdateConfigOutput>;
  public updateConfig(
    args: UpdateConfigInput,
    cb: (err: any, data?: UpdateConfigOutput) => void
  ): void;
  public updateConfig(
    args: UpdateConfigInput,
    cb?: (err: any, data?: UpdateConfigOutput) => void
  ): Promise<UpdateConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a mission profile.</p>
           <p>Updating a mission profile will not update the execution parameters
           for existing future contacts.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateMissionProfile(
    args: UpdateMissionProfileInput
  ): Promise<UpdateMissionProfileOutput>;
  public updateMissionProfile(
    args: UpdateMissionProfileInput,
    cb: (err: any, data?: UpdateMissionProfileOutput) => void
  ): void;
  public updateMissionProfile(
    args: UpdateMissionProfileInput,
    cb?: (err: any, data?: UpdateMissionProfileOutput) => void
  ): Promise<UpdateMissionProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateMissionProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the number of minutes used by account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMinuteUsage(
    args: GetMinuteUsageInput
  ): Promise<GetMinuteUsageOutput>;
  public getMinuteUsage(
    args: GetMinuteUsageInput,
    cb: (err: any, data?: GetMinuteUsageOutput) => void
  ): void;
  public getMinuteUsage(
    args: GetMinuteUsageInput,
    cb?: (err: any, data?: GetMinuteUsageOutput) => void
  ): Promise<GetMinuteUsageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMinuteUsageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a satellite.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSatellite(args: GetSatelliteInput): Promise<GetSatelliteOutput>;
  public getSatellite(
    args: GetSatelliteInput,
    cb: (err: any, data?: GetSatelliteOutput) => void
  ): void;
  public getSatellite(
    args: GetSatelliteInput,
    cb?: (err: any, data?: GetSatelliteOutput) => void
  ): Promise<GetSatelliteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSatelliteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of ground stations. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listGroundStations(
    args: ListGroundStationsInput
  ): Promise<ListGroundStationsOutput>;
  public listGroundStations(
    args: ListGroundStationsInput,
    cb: (err: any, data?: ListGroundStationsOutput) => void
  ): void;
  public listGroundStations(
    args: ListGroundStationsInput,
    cb?: (err: any, data?: ListGroundStationsOutput) => void
  ): Promise<ListGroundStationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListGroundStationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of satellites.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSatellites(
    args: ListSatellitesInput
  ): Promise<ListSatellitesOutput>;
  public listSatellites(
    args: ListSatellitesInput,
    cb: (err: any, data?: ListSatellitesOutput) => void
  ): void;
  public listSatellites(
    args: ListSatellitesInput,
    cb?: (err: any, data?: ListSatellitesOutput) => void
  ): Promise<ListSatellitesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSatellitesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of tags or a specified resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Assigns a tag to a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deassigns a resource tag.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyException} <p>Dependency encountered an error.</p>
   *   - {InvalidParameterException} <p>One or more parameters are not valid.</p>
   *   - {ResourceNotFoundException} <p>Resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
