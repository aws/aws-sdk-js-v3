import { MediaConnectClient } from "./MediaConnectClient";
import { AddFlowOutputsCommandInput, AddFlowOutputsCommandOutput } from "./commands/AddFlowOutputsCommand";
import { CreateFlowCommandInput, CreateFlowCommandOutput } from "./commands/CreateFlowCommand";
import { DeleteFlowCommandInput, DeleteFlowCommandOutput } from "./commands/DeleteFlowCommand";
import { DescribeFlowCommandInput, DescribeFlowCommandOutput } from "./commands/DescribeFlowCommand";
import { GrantFlowEntitlementsCommandInput, GrantFlowEntitlementsCommandOutput } from "./commands/GrantFlowEntitlementsCommand";
import { ListEntitlementsCommandInput, ListEntitlementsCommandOutput } from "./commands/ListEntitlementsCommand";
import { ListFlowsCommandInput, ListFlowsCommandOutput } from "./commands/ListFlowsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { RemoveFlowOutputCommandInput, RemoveFlowOutputCommandOutput } from "./commands/RemoveFlowOutputCommand";
import { RevokeFlowEntitlementCommandInput, RevokeFlowEntitlementCommandOutput } from "./commands/RevokeFlowEntitlementCommand";
import { StartFlowCommandInput, StartFlowCommandOutput } from "./commands/StartFlowCommand";
import { StopFlowCommandInput, StopFlowCommandOutput } from "./commands/StopFlowCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateFlowEntitlementCommandInput, UpdateFlowEntitlementCommandOutput } from "./commands/UpdateFlowEntitlementCommand";
import { UpdateFlowOutputCommandInput, UpdateFlowOutputCommandOutput } from "./commands/UpdateFlowOutputCommand";
import { UpdateFlowSourceCommandInput, UpdateFlowSourceCommandOutput } from "./commands/UpdateFlowSourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * API for AWS Elemental MediaConnect
 */
export declare class MediaConnect extends MediaConnectClient {
    /**
     * Adds outputs to an existing flow. You can create up to 20 outputs per flow.
     */
    addFlowOutputs(args: AddFlowOutputsCommandInput, options?: __HttpHandlerOptions): Promise<AddFlowOutputsCommandOutput>;
    addFlowOutputs(args: AddFlowOutputsCommandInput, cb: (err: any, data?: AddFlowOutputsCommandOutput) => void): void;
    addFlowOutputs(args: AddFlowOutputsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddFlowOutputsCommandOutput) => void): void;
    /**
     * Creates a new flow. The request must include one source. The request optionally can include outputs (up to 20) and entitlements (up to 50).
     */
    createFlow(args: CreateFlowCommandInput, options?: __HttpHandlerOptions): Promise<CreateFlowCommandOutput>;
    createFlow(args: CreateFlowCommandInput, cb: (err: any, data?: CreateFlowCommandOutput) => void): void;
    createFlow(args: CreateFlowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFlowCommandOutput) => void): void;
    /**
     * Deletes a flow. Before you can delete a flow, you must stop the flow.
     */
    deleteFlow(args: DeleteFlowCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFlowCommandOutput>;
    deleteFlow(args: DeleteFlowCommandInput, cb: (err: any, data?: DeleteFlowCommandOutput) => void): void;
    deleteFlow(args: DeleteFlowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFlowCommandOutput) => void): void;
    /**
     * Displays the details of a flow. The response includes the flow ARN, name, and Availability Zone, as well as details about the source, outputs, and entitlements.
     */
    describeFlow(args: DescribeFlowCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFlowCommandOutput>;
    describeFlow(args: DescribeFlowCommandInput, cb: (err: any, data?: DescribeFlowCommandOutput) => void): void;
    describeFlow(args: DescribeFlowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeFlowCommandOutput) => void): void;
    /**
     * Grants entitlements to an existing flow.
     */
    grantFlowEntitlements(args: GrantFlowEntitlementsCommandInput, options?: __HttpHandlerOptions): Promise<GrantFlowEntitlementsCommandOutput>;
    grantFlowEntitlements(args: GrantFlowEntitlementsCommandInput, cb: (err: any, data?: GrantFlowEntitlementsCommandOutput) => void): void;
    grantFlowEntitlements(args: GrantFlowEntitlementsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GrantFlowEntitlementsCommandOutput) => void): void;
    /**
     * Displays a list of all entitlements that have been granted to this account. This request returns 20 results per page.
     */
    listEntitlements(args: ListEntitlementsCommandInput, options?: __HttpHandlerOptions): Promise<ListEntitlementsCommandOutput>;
    listEntitlements(args: ListEntitlementsCommandInput, cb: (err: any, data?: ListEntitlementsCommandOutput) => void): void;
    listEntitlements(args: ListEntitlementsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEntitlementsCommandOutput) => void): void;
    /**
     * Displays a list of flows that are associated with this account. This request returns a paginated result.
     */
    listFlows(args: ListFlowsCommandInput, options?: __HttpHandlerOptions): Promise<ListFlowsCommandOutput>;
    listFlows(args: ListFlowsCommandInput, cb: (err: any, data?: ListFlowsCommandOutput) => void): void;
    listFlows(args: ListFlowsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFlowsCommandOutput) => void): void;
    /**
     * List all tags on an AWS Elemental MediaConnect resource
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * Removes an output from an existing flow. This request can be made only on an output that does not have an entitlement associated with it. If the output has an entitlement, you must revoke the entitlement instead. When an entitlement is revoked from a flow, the service automatically removes the associated output.
     */
    removeFlowOutput(args: RemoveFlowOutputCommandInput, options?: __HttpHandlerOptions): Promise<RemoveFlowOutputCommandOutput>;
    removeFlowOutput(args: RemoveFlowOutputCommandInput, cb: (err: any, data?: RemoveFlowOutputCommandOutput) => void): void;
    removeFlowOutput(args: RemoveFlowOutputCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveFlowOutputCommandOutput) => void): void;
    /**
     * Revokes an entitlement from a flow. Once an entitlement is revoked, the content becomes unavailable to the subscriber and the associated output is removed.
     */
    revokeFlowEntitlement(args: RevokeFlowEntitlementCommandInput, options?: __HttpHandlerOptions): Promise<RevokeFlowEntitlementCommandOutput>;
    revokeFlowEntitlement(args: RevokeFlowEntitlementCommandInput, cb: (err: any, data?: RevokeFlowEntitlementCommandOutput) => void): void;
    revokeFlowEntitlement(args: RevokeFlowEntitlementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RevokeFlowEntitlementCommandOutput) => void): void;
    /**
     * Starts a flow.
     */
    startFlow(args: StartFlowCommandInput, options?: __HttpHandlerOptions): Promise<StartFlowCommandOutput>;
    startFlow(args: StartFlowCommandInput, cb: (err: any, data?: StartFlowCommandOutput) => void): void;
    startFlow(args: StartFlowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartFlowCommandOutput) => void): void;
    /**
     * Stops a flow.
     */
    stopFlow(args: StopFlowCommandInput, options?: __HttpHandlerOptions): Promise<StopFlowCommandOutput>;
    stopFlow(args: StopFlowCommandInput, cb: (err: any, data?: StopFlowCommandOutput) => void): void;
    stopFlow(args: StopFlowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopFlowCommandOutput) => void): void;
    /**
     * Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * Deletes specified tags from a resource.
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * You can change an entitlement's description, subscribers, and encryption. If you change the subscribers, the service will remove the outputs that are are used by the subscribers that are removed.
     */
    updateFlowEntitlement(args: UpdateFlowEntitlementCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFlowEntitlementCommandOutput>;
    updateFlowEntitlement(args: UpdateFlowEntitlementCommandInput, cb: (err: any, data?: UpdateFlowEntitlementCommandOutput) => void): void;
    updateFlowEntitlement(args: UpdateFlowEntitlementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFlowEntitlementCommandOutput) => void): void;
    /**
     * Updates an existing flow output.
     */
    updateFlowOutput(args: UpdateFlowOutputCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFlowOutputCommandOutput>;
    updateFlowOutput(args: UpdateFlowOutputCommandInput, cb: (err: any, data?: UpdateFlowOutputCommandOutput) => void): void;
    updateFlowOutput(args: UpdateFlowOutputCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFlowOutputCommandOutput) => void): void;
    /**
     * Updates the source of a flow.
     */
    updateFlowSource(args: UpdateFlowSourceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFlowSourceCommandOutput>;
    updateFlowSource(args: UpdateFlowSourceCommandInput, cb: (err: any, data?: UpdateFlowSourceCommandOutput) => void): void;
    updateFlowSource(args: UpdateFlowSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFlowSourceCommandOutput) => void): void;
}
