import { GroundStationClient } from "./GroundStationClient";
import { CancelContactCommandInput, CancelContactCommandOutput } from "./commands/CancelContactCommand";
import { CreateConfigCommandInput, CreateConfigCommandOutput } from "./commands/CreateConfigCommand";
import { CreateDataflowEndpointGroupCommandInput, CreateDataflowEndpointGroupCommandOutput } from "./commands/CreateDataflowEndpointGroupCommand";
import { CreateMissionProfileCommandInput, CreateMissionProfileCommandOutput } from "./commands/CreateMissionProfileCommand";
import { DeleteConfigCommandInput, DeleteConfigCommandOutput } from "./commands/DeleteConfigCommand";
import { DeleteDataflowEndpointGroupCommandInput, DeleteDataflowEndpointGroupCommandOutput } from "./commands/DeleteDataflowEndpointGroupCommand";
import { DeleteMissionProfileCommandInput, DeleteMissionProfileCommandOutput } from "./commands/DeleteMissionProfileCommand";
import { DescribeContactCommandInput, DescribeContactCommandOutput } from "./commands/DescribeContactCommand";
import { GetConfigCommandInput, GetConfigCommandOutput } from "./commands/GetConfigCommand";
import { GetDataflowEndpointGroupCommandInput, GetDataflowEndpointGroupCommandOutput } from "./commands/GetDataflowEndpointGroupCommand";
import { GetMinuteUsageCommandInput, GetMinuteUsageCommandOutput } from "./commands/GetMinuteUsageCommand";
import { GetMissionProfileCommandInput, GetMissionProfileCommandOutput } from "./commands/GetMissionProfileCommand";
import { GetSatelliteCommandInput, GetSatelliteCommandOutput } from "./commands/GetSatelliteCommand";
import { ListConfigsCommandInput, ListConfigsCommandOutput } from "./commands/ListConfigsCommand";
import { ListContactsCommandInput, ListContactsCommandOutput } from "./commands/ListContactsCommand";
import { ListDataflowEndpointGroupsCommandInput, ListDataflowEndpointGroupsCommandOutput } from "./commands/ListDataflowEndpointGroupsCommand";
import { ListGroundStationsCommandInput, ListGroundStationsCommandOutput } from "./commands/ListGroundStationsCommand";
import { ListMissionProfilesCommandInput, ListMissionProfilesCommandOutput } from "./commands/ListMissionProfilesCommand";
import { ListSatellitesCommandInput, ListSatellitesCommandOutput } from "./commands/ListSatellitesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ReserveContactCommandInput, ReserveContactCommandOutput } from "./commands/ReserveContactCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateConfigCommandInput, UpdateConfigCommandOutput } from "./commands/UpdateConfigCommand";
import { UpdateMissionProfileCommandInput, UpdateMissionProfileCommandOutput } from "./commands/UpdateMissionProfileCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Welcome to the AWS Ground Station API Reference. AWS Ground Station is a fully managed service that
 *       enables you to control satellite communications, downlink and process satellite data, and
 *       scale your satellite operations efficiently and cost-effectively without having
 *       to build or manage your own ground station infrastructure.</p>
 */
export declare class GroundStation extends GroundStationClient {
    /**
     * <p>Cancels a contact with a specified contact ID.</p>
     */
    cancelContact(args: CancelContactCommandInput, options?: __HttpHandlerOptions): Promise<CancelContactCommandOutput>;
    cancelContact(args: CancelContactCommandInput, cb: (err: any, data?: CancelContactCommandOutput) => void): void;
    cancelContact(args: CancelContactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelContactCommandOutput) => void): void;
    /**
     * <p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p>
     *          <p>Only one type of <code>configData</code> can be specified.</p>
     */
    createConfig(args: CreateConfigCommandInput, options?: __HttpHandlerOptions): Promise<CreateConfigCommandOutput>;
    createConfig(args: CreateConfigCommandInput, cb: (err: any, data?: CreateConfigCommandOutput) => void): void;
    createConfig(args: CreateConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateConfigCommandOutput) => void): void;
    /**
     * <p>Creates a <code>DataflowEndpoint</code> group containing the specified list of <code>DataflowEndpoint</code> objects.</p>
     *          <p>The <code>name</code> field in each endpoint is used in your mission profile <code>DataflowEndpointConfig</code>
     *          to specify which endpoints to use during a contact.</p>
     *          <p>When a contact uses multiple <code>DataflowEndpointConfig</code> objects, each <code>Config</code>
     *          must match a <code>DataflowEndpoint</code> in the same group.</p>
     */
    createDataflowEndpointGroup(args: CreateDataflowEndpointGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateDataflowEndpointGroupCommandOutput>;
    createDataflowEndpointGroup(args: CreateDataflowEndpointGroupCommandInput, cb: (err: any, data?: CreateDataflowEndpointGroupCommandOutput) => void): void;
    createDataflowEndpointGroup(args: CreateDataflowEndpointGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDataflowEndpointGroupCommandOutput) => void): void;
    /**
     * <p>Creates a mission profile.</p>
     *          <p>
     *             <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings
     *          has two elements: a <i>from ARN</i> and a <i>to ARN</i>.</p>
     */
    createMissionProfile(args: CreateMissionProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateMissionProfileCommandOutput>;
    createMissionProfile(args: CreateMissionProfileCommandInput, cb: (err: any, data?: CreateMissionProfileCommandOutput) => void): void;
    createMissionProfile(args: CreateMissionProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMissionProfileCommandOutput) => void): void;
    /**
     * <p>Deletes a <code>Config</code>.</p>
     */
    deleteConfig(args: DeleteConfigCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConfigCommandOutput>;
    deleteConfig(args: DeleteConfigCommandInput, cb: (err: any, data?: DeleteConfigCommandOutput) => void): void;
    deleteConfig(args: DeleteConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConfigCommandOutput) => void): void;
    /**
     * <p>Deletes a dataflow endpoint group.</p>
     */
    deleteDataflowEndpointGroup(args: DeleteDataflowEndpointGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDataflowEndpointGroupCommandOutput>;
    deleteDataflowEndpointGroup(args: DeleteDataflowEndpointGroupCommandInput, cb: (err: any, data?: DeleteDataflowEndpointGroupCommandOutput) => void): void;
    deleteDataflowEndpointGroup(args: DeleteDataflowEndpointGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDataflowEndpointGroupCommandOutput) => void): void;
    /**
     * <p>Deletes a mission profile.</p>
     */
    deleteMissionProfile(args: DeleteMissionProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMissionProfileCommandOutput>;
    deleteMissionProfile(args: DeleteMissionProfileCommandInput, cb: (err: any, data?: DeleteMissionProfileCommandOutput) => void): void;
    deleteMissionProfile(args: DeleteMissionProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMissionProfileCommandOutput) => void): void;
    /**
     * <p>Describes an existing contact.</p>
     */
    describeContact(args: DescribeContactCommandInput, options?: __HttpHandlerOptions): Promise<DescribeContactCommandOutput>;
    describeContact(args: DescribeContactCommandInput, cb: (err: any, data?: DescribeContactCommandOutput) => void): void;
    describeContact(args: DescribeContactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeContactCommandOutput) => void): void;
    /**
     * <p>Returns <code>Config</code> information.</p>
     *          <p>Only one <code>Config</code> response can be returned.</p>
     */
    getConfig(args: GetConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetConfigCommandOutput>;
    getConfig(args: GetConfigCommandInput, cb: (err: any, data?: GetConfigCommandOutput) => void): void;
    getConfig(args: GetConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetConfigCommandOutput) => void): void;
    /**
     * <p>Returns the dataflow endpoint group.</p>
     */
    getDataflowEndpointGroup(args: GetDataflowEndpointGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetDataflowEndpointGroupCommandOutput>;
    getDataflowEndpointGroup(args: GetDataflowEndpointGroupCommandInput, cb: (err: any, data?: GetDataflowEndpointGroupCommandOutput) => void): void;
    getDataflowEndpointGroup(args: GetDataflowEndpointGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDataflowEndpointGroupCommandOutput) => void): void;
    /**
     * <p>Returns a mission profile.</p>
     */
    getMissionProfile(args: GetMissionProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetMissionProfileCommandOutput>;
    getMissionProfile(args: GetMissionProfileCommandInput, cb: (err: any, data?: GetMissionProfileCommandOutput) => void): void;
    getMissionProfile(args: GetMissionProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMissionProfileCommandOutput) => void): void;
    /**
     * <p>Returns a list of <code>Config</code> objects.</p>
     */
    listConfigs(args: ListConfigsCommandInput, options?: __HttpHandlerOptions): Promise<ListConfigsCommandOutput>;
    listConfigs(args: ListConfigsCommandInput, cb: (err: any, data?: ListConfigsCommandOutput) => void): void;
    listConfigs(args: ListConfigsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListConfigsCommandOutput) => void): void;
    /**
     * <p>Returns a list of contacts.</p>
     *          <p>If <code>statusList</code> contains AVAILABLE, the request must include
     *       <code>groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>.
     *       </p>
     */
    listContacts(args: ListContactsCommandInput, options?: __HttpHandlerOptions): Promise<ListContactsCommandOutput>;
    listContacts(args: ListContactsCommandInput, cb: (err: any, data?: ListContactsCommandOutput) => void): void;
    listContacts(args: ListContactsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListContactsCommandOutput) => void): void;
    /**
     * <p>Returns a list of <code>DataflowEndpoint</code> groups.</p>
     */
    listDataflowEndpointGroups(args: ListDataflowEndpointGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListDataflowEndpointGroupsCommandOutput>;
    listDataflowEndpointGroups(args: ListDataflowEndpointGroupsCommandInput, cb: (err: any, data?: ListDataflowEndpointGroupsCommandOutput) => void): void;
    listDataflowEndpointGroups(args: ListDataflowEndpointGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDataflowEndpointGroupsCommandOutput) => void): void;
    /**
     * <p>Returns a list of mission profiles.</p>
     */
    listMissionProfiles(args: ListMissionProfilesCommandInput, options?: __HttpHandlerOptions): Promise<ListMissionProfilesCommandOutput>;
    listMissionProfiles(args: ListMissionProfilesCommandInput, cb: (err: any, data?: ListMissionProfilesCommandOutput) => void): void;
    listMissionProfiles(args: ListMissionProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMissionProfilesCommandOutput) => void): void;
    /**
     * <p>Reserves a contact using specified parameters.</p>
     */
    reserveContact(args: ReserveContactCommandInput, options?: __HttpHandlerOptions): Promise<ReserveContactCommandOutput>;
    reserveContact(args: ReserveContactCommandInput, cb: (err: any, data?: ReserveContactCommandOutput) => void): void;
    reserveContact(args: ReserveContactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ReserveContactCommandOutput) => void): void;
    /**
     * <p>Updates the <code>Config</code> used when scheduling contacts.</p>
     *          <p>Updating a <code>Config</code> will not update the execution parameters
     *          for existing future contacts scheduled with this <code>Config</code>.</p>
     */
    updateConfig(args: UpdateConfigCommandInput, options?: __HttpHandlerOptions): Promise<UpdateConfigCommandOutput>;
    updateConfig(args: UpdateConfigCommandInput, cb: (err: any, data?: UpdateConfigCommandOutput) => void): void;
    updateConfig(args: UpdateConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateConfigCommandOutput) => void): void;
    /**
     * <p>Updates a mission profile.</p>
     *          <p>Updating a mission profile will not update the execution parameters
     *          for existing future contacts.</p>
     */
    updateMissionProfile(args: UpdateMissionProfileCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMissionProfileCommandOutput>;
    updateMissionProfile(args: UpdateMissionProfileCommandInput, cb: (err: any, data?: UpdateMissionProfileCommandOutput) => void): void;
    updateMissionProfile(args: UpdateMissionProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMissionProfileCommandOutput) => void): void;
    /**
     * <p>Returns the number of minutes used by account.</p>
     */
    getMinuteUsage(args: GetMinuteUsageCommandInput, options?: __HttpHandlerOptions): Promise<GetMinuteUsageCommandOutput>;
    getMinuteUsage(args: GetMinuteUsageCommandInput, cb: (err: any, data?: GetMinuteUsageCommandOutput) => void): void;
    getMinuteUsage(args: GetMinuteUsageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMinuteUsageCommandOutput) => void): void;
    /**
     * <p>Returns a satellite.</p>
     */
    getSatellite(args: GetSatelliteCommandInput, options?: __HttpHandlerOptions): Promise<GetSatelliteCommandOutput>;
    getSatellite(args: GetSatelliteCommandInput, cb: (err: any, data?: GetSatelliteCommandOutput) => void): void;
    getSatellite(args: GetSatelliteCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSatelliteCommandOutput) => void): void;
    /**
     * <p>Returns a list of ground stations. </p>
     */
    listGroundStations(args: ListGroundStationsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroundStationsCommandOutput>;
    listGroundStations(args: ListGroundStationsCommandInput, cb: (err: any, data?: ListGroundStationsCommandOutput) => void): void;
    listGroundStations(args: ListGroundStationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGroundStationsCommandOutput) => void): void;
    /**
     * <p>Returns a list of satellites.</p>
     */
    listSatellites(args: ListSatellitesCommandInput, options?: __HttpHandlerOptions): Promise<ListSatellitesCommandOutput>;
    listSatellites(args: ListSatellitesCommandInput, cb: (err: any, data?: ListSatellitesCommandOutput) => void): void;
    listSatellites(args: ListSatellitesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSatellitesCommandOutput) => void): void;
    /**
     * <p>Returns a list of tags or a specified resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Assigns a tag to a resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Deassigns a resource tag.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
}
