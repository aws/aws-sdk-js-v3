import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface AddFlowOutputs420Exception extends __SmithyException, $MetadataBearer {
    name: "AddFlowOutputs420Exception";
    $fault: "client";
    /**
     * The error message returned by AWS Elemental MediaConnect.
     */
    Message: string | undefined;
}
export declare namespace AddFlowOutputs420Exception {
    function isa(o: any): o is AddFlowOutputs420Exception;
}
/**
 * A request to add outputs to the specified flow.
 */
export interface AddFlowOutputsRequest {
    __type?: "AddFlowOutputsRequest";
    /**
     * The flow that you want to add outputs to.
     */
    FlowArn: string | undefined;
    /**
     * A list of outputs that you want to add.
     */
    Outputs: Array<AddOutputRequest> | undefined;
}
export declare namespace AddFlowOutputsRequest {
    function isa(o: any): o is AddFlowOutputsRequest;
}
export interface AddFlowOutputsResponse {
    __type?: "AddFlowOutputsResponse";
    /**
     * The ARN of the flow that these outputs were added to.
     */
    FlowArn?: string;
    /**
     * The details of the newly added outputs.
     */
    Outputs?: Array<Output>;
}
export declare namespace AddFlowOutputsResponse {
    function isa(o: any): o is AddFlowOutputsResponse;
}
/**
 * The output that you want to add to this flow.
 */
export interface AddOutputRequest {
    __type?: "AddOutputRequest";
    /**
     * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
     */
    CidrAllowList?: Array<string>;
    /**
     * A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user.
     */
    Description?: string;
    /**
     * The IP address from which video will be sent to output destinations.
     */
    Destination?: string;
    /**
     * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
     */
    Encryption?: Encryption;
    /**
     * The maximum latency in milliseconds for Zixi-based streams.
     */
    MaxLatency?: number;
    /**
     * The name of the output. This value must be unique within the current flow.
     */
    Name?: string;
    /**
     * The port to use when content is distributed to this output.
     */
    Port?: number;
    /**
     * The protocol to use for the output.
     */
    Protocol: Protocol | string | undefined;
    /**
     * The remote ID for the Zixi-pull output stream.
     */
    RemoteId?: string;
    /**
     * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
     */
    SmoothingLatency?: number;
    /**
     * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
     */
    StreamId?: string;
}
export declare namespace AddOutputRequest {
    function isa(o: any): o is AddOutputRequest;
}
export declare enum Algorithm {
    aes128 = "aes128",
    aes192 = "aes192",
    aes256 = "aes256"
}
/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
    name: "BadRequestException";
    $fault: "client";
    /**
     * The error message returned by AWS Elemental MediaConnect.
     */
    Message: string | undefined;
}
export declare namespace BadRequestException {
    function isa(o: any): o is BadRequestException;
}
/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface CreateFlow420Exception extends __SmithyException, $MetadataBearer {
    name: "CreateFlow420Exception";
    $fault: "client";
    /**
     * The error message returned by AWS Elemental MediaConnect.
     */
    Message: string | undefined;
}
export declare namespace CreateFlow420Exception {
    function isa(o: any): o is CreateFlow420Exception;
}
/**
 * Creates a new flow. The request must include one source. The request optionally can include outputs (up to 20) and entitlements (up to 50).
 */
export interface CreateFlowRequest {
    __type?: "CreateFlowRequest";
    /**
     * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS Region.
     */
    AvailabilityZone?: string;
    /**
     * The entitlements that you want to grant on a flow.
     */
    Entitlements?: Array<GrantEntitlementRequest>;
    /**
     * The name of the flow.
     */
    Name: string | undefined;
    /**
     * The outputs that you want to add to this flow.
     */
    Outputs?: Array<AddOutputRequest>;
    /**
     * The settings for the source of the flow.
     */
    Source: SetSourceRequest | undefined;
}
export declare namespace CreateFlowRequest {
    function isa(o: any): o is CreateFlowRequest;
}
export interface CreateFlowResponse {
    __type?: "CreateFlowResponse";
    /**
     * The settings for a flow, including its source, outputs, and entitlements.
     */
    Flow?: Flow;
}
export declare namespace CreateFlowResponse {
    function isa(o: any): o is CreateFlowResponse;
}
export interface DeleteFlowRequest {
    __type?: "DeleteFlowRequest";
    /**
     * The ARN of the flow that you want to delete.
     */
    FlowArn: string | undefined;
}
export declare namespace DeleteFlowRequest {
    function isa(o: any): o is DeleteFlowRequest;
}
export interface DeleteFlowResponse {
    __type?: "DeleteFlowResponse";
    /**
     * The ARN of the flow that was deleted.
     */
    FlowArn?: string;
    /**
     * The status of the flow when the DeleteFlow process begins.
     */
    Status?: Status | string;
}
export declare namespace DeleteFlowResponse {
    function isa(o: any): o is DeleteFlowResponse;
}
export interface DescribeFlowRequest {
    __type?: "DescribeFlowRequest";
    /**
     * The ARN of the flow that you want to describe.
     */
    FlowArn: string | undefined;
}
export declare namespace DescribeFlowRequest {
    function isa(o: any): o is DescribeFlowRequest;
}
export interface DescribeFlowResponse {
    __type?: "DescribeFlowResponse";
    /**
     * The settings for a flow, including its source, outputs, and entitlements.
     */
    Flow?: Flow;
    /**
     * Messages that provide the state of the flow.
     */
    Messages?: Messages;
}
export declare namespace DescribeFlowResponse {
    function isa(o: any): o is DescribeFlowResponse;
}
/**
 * Information about the encryption of the flow.
 */
export interface Encryption {
    __type?: "Encryption";
    /**
     * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
     */
    Algorithm: Algorithm | string | undefined;
    /**
     * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
     */
    ConstantInitializationVector?: string;
    /**
     * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    DeviceId?: string;
    /**
     * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
     */
    KeyType?: KeyType | string;
    /**
     * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    Region?: string;
    /**
     * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    ResourceId?: string;
    /**
     * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
     */
    RoleArn: string | undefined;
    /**
     * The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
     */
    SecretArn?: string;
    /**
     * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    Url?: string;
}
export declare namespace Encryption {
    function isa(o: any): o is Encryption;
}
/**
 * The settings for a flow entitlement.
 */
export interface Entitlement {
    __type?: "Entitlement";
    /**
     * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
     */
    DataTransferSubscriberFeePercent?: number;
    /**
     * A description of the entitlement.
     */
    Description?: string;
    /**
     * The type of encryption that will be used on the output that is associated with this entitlement.
     */
    Encryption?: Encryption;
    /**
     * The ARN of the entitlement.
     */
    EntitlementArn: string | undefined;
    /**
     * The name of the entitlement.
     */
    Name: string | undefined;
    /**
     * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.
     */
    Subscribers: Array<string> | undefined;
}
export declare namespace Entitlement {
    function isa(o: any): o is Entitlement;
}
/**
 * The settings for a flow, including its source, outputs, and entitlements.
 */
export interface Flow {
    __type?: "Flow";
    /**
     * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS.
     */
    AvailabilityZone: string | undefined;
    /**
     * A description of the flow. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
     */
    Description?: string;
    /**
     * The IP address from which video will be sent to output destinations.
     */
    EgressIp?: string;
    /**
     * The entitlements in this flow.
     */
    Entitlements: Array<Entitlement> | undefined;
    /**
     * The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
     */
    FlowArn: string | undefined;
    /**
     * The name of the flow.
     */
    Name: string | undefined;
    /**
     * The outputs in this flow.
     */
    Outputs: Array<Output> | undefined;
    /**
     * The settings for the source of the flow.
     */
    Source: Source | undefined;
    /**
     * The current status of the flow.
     */
    Status: Status | string | undefined;
}
export declare namespace Flow {
    function isa(o: any): o is Flow;
}
/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
    name: "ForbiddenException";
    $fault: "client";
    /**
     * The error message returned by AWS Elemental MediaConnect.
     */
    Message: string | undefined;
}
export declare namespace ForbiddenException {
    function isa(o: any): o is ForbiddenException;
}
/**
 * The entitlements that you want to grant on a flow.
 */
export interface GrantEntitlementRequest {
    __type?: "GrantEntitlementRequest";
    /**
     * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
     */
    DataTransferSubscriberFeePercent?: number;
    /**
     * A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user.
     */
    Description?: string;
    /**
     * The type of encryption that will be used on the output that is associated with this entitlement.
     */
    Encryption?: Encryption;
    /**
     * The name of the entitlement. This value must be unique within the current flow.
     */
    Name?: string;
    /**
     * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flows using your content as the source.
     */
    Subscribers: Array<string> | undefined;
}
export declare namespace GrantEntitlementRequest {
    function isa(o: any): o is GrantEntitlementRequest;
}
/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface GrantFlowEntitlements420Exception extends __SmithyException, $MetadataBearer {
    name: "GrantFlowEntitlements420Exception";
    $fault: "client";
    /**
     * The error message returned by AWS Elemental MediaConnect.
     */
    Message: string | undefined;
}
export declare namespace GrantFlowEntitlements420Exception {
    function isa(o: any): o is GrantFlowEntitlements420Exception;
}
/**
 * A request to grant entitlements on a flow.
 */
export interface GrantFlowEntitlementsRequest {
    __type?: "GrantFlowEntitlementsRequest";
    /**
     * The list of entitlements that you want to grant.
     */
    Entitlements: Array<GrantEntitlementRequest> | undefined;
    /**
     * The flow that you want to grant entitlements on.
     */
    FlowArn: string | undefined;
}
export declare namespace GrantFlowEntitlementsRequest {
    function isa(o: any): o is GrantFlowEntitlementsRequest;
}
export interface GrantFlowEntitlementsResponse {
    __type?: "GrantFlowEntitlementsResponse";
    /**
     * The entitlements that were just granted.
     */
    Entitlements?: Array<Entitlement>;
    /**
     * The ARN of the flow that these entitlements were granted to.
     */
    FlowArn?: string;
}
export declare namespace GrantFlowEntitlementsResponse {
    function isa(o: any): o is GrantFlowEntitlementsResponse;
}
/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
    name: "InternalServerErrorException";
    $fault: "server";
    /**
     * The error message returned by AWS Elemental MediaConnect.
     */
    Message: string | undefined;
}
export declare namespace InternalServerErrorException {
    function isa(o: any): o is InternalServerErrorException;
}
export declare enum KeyType {
    speke = "speke",
    static_key = "static-key"
}
export interface ListEntitlementsRequest {
    __type?: "ListEntitlementsRequest";
    /**
     * The maximum number of results to return per API request. For example, you submit a ListEntitlements request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 20 results per page.
     */
    MaxResults?: number;
    /**
     * The token that identifies which batch of results that you want to see. For example, you submit a ListEntitlements request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListEntitlements request a second time and specify the NextToken value.
     */
    NextToken?: string;
}
export declare namespace ListEntitlementsRequest {
    function isa(o: any): o is ListEntitlementsRequest;
}
export interface ListEntitlementsResponse {
    __type?: "ListEntitlementsResponse";
    /**
     * A list of entitlements that have been granted to you from other AWS accounts.
     */
    Entitlements?: Array<ListedEntitlement>;
    /**
     * The token that identifies which batch of results that you want to see. For example, you submit a ListEntitlements request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListEntitlements request a second time and specify the NextToken value.
     */
    NextToken?: string;
}
export declare namespace ListEntitlementsResponse {
    function isa(o: any): o is ListEntitlementsResponse;
}
export interface ListFlowsRequest {
    __type?: "ListFlowsRequest";
    /**
     * The maximum number of results to return per API request. For example, you submit a ListFlows request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
     */
    MaxResults?: number;
    /**
     * The token that identifies which batch of results that you want to see. For example, you submit a ListFlows request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFlows request a second time and specify the NextToken value.
     */
    NextToken?: string;
}
export declare namespace ListFlowsRequest {
    function isa(o: any): o is ListFlowsRequest;
}
export interface ListFlowsResponse {
    __type?: "ListFlowsResponse";
    /**
     * A list of flow summaries.
     */
    Flows?: Array<ListedFlow>;
    /**
     * The token that identifies which batch of results that you want to see. For example, you submit a ListFlows request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFlows request a second time and specify the NextToken value.
     */
    NextToken?: string;
}
export declare namespace ListFlowsResponse {
    function isa(o: any): o is ListFlowsResponse;
}
export interface ListTagsForResourceRequest {
    __type?: "ListTagsForResourceRequest";
    /**
     * The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource for which to list the tags.
     */
    ResourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    function isa(o: any): o is ListTagsForResourceRequest;
}
export interface ListTagsForResourceResponse {
    __type?: "ListTagsForResourceResponse";
    /**
     * A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    function isa(o: any): o is ListTagsForResourceResponse;
}
/**
 * An entitlement that has been granted to you from other AWS accounts.
 */
export interface ListedEntitlement {
    __type?: "ListedEntitlement";
    /**
     * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
     */
    DataTransferSubscriberFeePercent?: number;
    /**
     * The ARN of the entitlement.
     */
    EntitlementArn: string | undefined;
    /**
     * The name of the entitlement.
     */
    EntitlementName: string | undefined;
}
export declare namespace ListedEntitlement {
    function isa(o: any): o is ListedEntitlement;
}
/**
 * Provides a summary of a flow, including its ARN, Availability Zone, and source type.
 */
export interface ListedFlow {
    __type?: "ListedFlow";
    /**
     * The Availability Zone that the flow was created in.
     */
    AvailabilityZone: string | undefined;
    /**
     * A description of the flow.
     */
    Description: string | undefined;
    /**
     * The ARN of the flow.
     */
    FlowArn: string | undefined;
    /**
     * The name of the flow.
     */
    Name: string | undefined;
    /**
     * The type of source. This value is either owned (originated somewhere other than an AWS Elemental MediaConnect flow owned by another AWS account) or entitled (originated at an AWS Elemental MediaConnect flow owned by another AWS account).
     */
    SourceType: SourceType | string | undefined;
    /**
     * The current status of the flow.
     */
    Status: Status | string | undefined;
}
export declare namespace ListedFlow {
    function isa(o: any): o is ListedFlow;
}
/**
 * Messages that provide the state of the flow.
 */
export interface Messages {
    __type?: "Messages";
    /**
     * A list of errors that might have been generated from processes on this flow.
     */
    Errors: Array<string> | undefined;
}
export declare namespace Messages {
    function isa(o: any): o is Messages;
}
/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
    name: "NotFoundException";
    $fault: "client";
    /**
     * The error message returned by AWS Elemental MediaConnect.
     */
    Message: string | undefined;
}
export declare namespace NotFoundException {
    function isa(o: any): o is NotFoundException;
}
/**
 * The settings for an output.
 */
export interface Output {
    __type?: "Output";
    /**
     * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
     */
    DataTransferSubscriberFeePercent?: number;
    /**
     * A description of the output.
     */
    Description?: string;
    /**
     * The address where you want to send the output.
     */
    Destination?: string;
    /**
     * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
     */
    Encryption?: Encryption;
    /**
     * The ARN of the entitlement on the originator''s flow. This value is relevant only on entitled flows.
     */
    EntitlementArn?: string;
    /**
     * The input ARN of the AWS Elemental MediaLive channel. This parameter is relevant only for outputs that were added by creating a MediaLive input.
     */
    MediaLiveInputArn?: string;
    /**
     * The name of the output. This value must be unique within the current flow.
     */
    Name: string | undefined;
    /**
     * The ARN of the output.
     */
    OutputArn: string | undefined;
    /**
     * The port to use when content is distributed to this output.
     */
    Port?: number;
    /**
     * Attributes related to the transport stream that are used in the output.
     */
    Transport?: Transport;
}
export declare namespace Output {
    function isa(o: any): o is Output;
}
export declare enum Protocol {
    rist = "rist",
    rtp = "rtp",
    rtp_fec = "rtp-fec",
    zixi_pull = "zixi-pull",
    zixi_push = "zixi-push"
}
export interface RemoveFlowOutputRequest {
    __type?: "RemoveFlowOutputRequest";
    /**
     * The flow that you want to remove an output from.
     */
    FlowArn: string | undefined;
    /**
     * The ARN of the output that you want to remove.
     */
    OutputArn: string | undefined;
}
export declare namespace RemoveFlowOutputRequest {
    function isa(o: any): o is RemoveFlowOutputRequest;
}
export interface RemoveFlowOutputResponse {
    __type?: "RemoveFlowOutputResponse";
    /**
     * The ARN of the flow that is associated with the output you removed.
     */
    FlowArn?: string;
    /**
     * The ARN of the output that was removed.
     */
    OutputArn?: string;
}
export declare namespace RemoveFlowOutputResponse {
    function isa(o: any): o is RemoveFlowOutputResponse;
}
export interface RevokeFlowEntitlementRequest {
    __type?: "RevokeFlowEntitlementRequest";
    /**
     * The ARN of the entitlement that you want to revoke.
     */
    EntitlementArn: string | undefined;
    /**
     * The flow that you want to revoke an entitlement from.
     */
    FlowArn: string | undefined;
}
export declare namespace RevokeFlowEntitlementRequest {
    function isa(o: any): o is RevokeFlowEntitlementRequest;
}
export interface RevokeFlowEntitlementResponse {
    __type?: "RevokeFlowEntitlementResponse";
    /**
     * The ARN of the entitlement that was revoked.
     */
    EntitlementArn?: string;
    /**
     * The ARN of the flow that the entitlement was revoked from.
     */
    FlowArn?: string;
}
export declare namespace RevokeFlowEntitlementResponse {
    function isa(o: any): o is RevokeFlowEntitlementResponse;
}
/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
    name: "ServiceUnavailableException";
    $fault: "server";
    /**
     * The error message returned by AWS Elemental MediaConnect.
     */
    Message: string | undefined;
}
export declare namespace ServiceUnavailableException {
    function isa(o: any): o is ServiceUnavailableException;
}
/**
 * The settings for the source of the flow.
 */
export interface SetSourceRequest {
    __type?: "SetSourceRequest";
    /**
     * The type of encryption that is used on the content ingested from this source.
     */
    Decryption?: Encryption;
    /**
     * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
     */
    Description?: string;
    /**
     * The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.
     */
    EntitlementArn?: string;
    /**
     * The port that the flow will be listening on for incoming content.
     */
    IngestPort?: number;
    /**
     * The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.
     */
    MaxBitrate?: number;
    /**
     * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
     */
    MaxLatency?: number;
    /**
     * The name of the source.
     */
    Name?: string;
    /**
     * The protocol that is used by the source.
     */
    Protocol?: Protocol | string;
    /**
     * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
     */
    StreamId?: string;
    /**
     * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
     */
    WhitelistCidr?: string;
}
export declare namespace SetSourceRequest {
    function isa(o: any): o is SetSourceRequest;
}
/**
 * The settings for the source of the flow.
 */
export interface Source {
    __type?: "Source";
    /**
     * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
     */
    DataTransferSubscriberFeePercent?: number;
    /**
     * The type of encryption that is used on the content ingested from this source.
     */
    Decryption?: Encryption;
    /**
     * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
     */
    Description?: string;
    /**
     * The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.
     */
    EntitlementArn?: string;
    /**
     * The IP address that the flow will be listening on for incoming content.
     */
    IngestIp?: string;
    /**
     * The port that the flow will be listening on for incoming content.
     */
    IngestPort?: number;
    /**
     * The name of the source.
     */
    Name: string | undefined;
    /**
     * The ARN of the source.
     */
    SourceArn: string | undefined;
    /**
     * Attributes related to the transport stream that are used in the source.
     */
    Transport?: Transport;
    /**
     * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
     */
    WhitelistCidr?: string;
}
export declare namespace Source {
    function isa(o: any): o is Source;
}
export declare enum SourceType {
    ENTITLED = "ENTITLED",
    OWNED = "OWNED"
}
export interface StartFlowRequest {
    __type?: "StartFlowRequest";
    /**
     * The ARN of the flow that you want to start.
     */
    FlowArn: string | undefined;
}
export declare namespace StartFlowRequest {
    function isa(o: any): o is StartFlowRequest;
}
export interface StartFlowResponse {
    __type?: "StartFlowResponse";
    /**
     * The ARN of the flow that you started.
     */
    FlowArn?: string;
    /**
     * The status of the flow when the StartFlow process begins.
     */
    Status?: Status | string;
}
export declare namespace StartFlowResponse {
    function isa(o: any): o is StartFlowResponse;
}
export declare enum Status {
    ACTIVE = "ACTIVE",
    DELETING = "DELETING",
    ERROR = "ERROR",
    STANDBY = "STANDBY",
    STARTING = "STARTING",
    STOPPING = "STOPPING",
    UPDATING = "UPDATING"
}
export interface StopFlowRequest {
    __type?: "StopFlowRequest";
    /**
     * The ARN of the flow that you want to stop.
     */
    FlowArn: string | undefined;
}
export declare namespace StopFlowRequest {
    function isa(o: any): o is StopFlowRequest;
}
export interface StopFlowResponse {
    __type?: "StopFlowResponse";
    /**
     * The ARN of the flow that you stopped.
     */
    FlowArn?: string;
    /**
     * The status of the flow when the StopFlow process begins.
     */
    Status?: Status | string;
}
export declare namespace StopFlowResponse {
    function isa(o: any): o is StopFlowResponse;
}
/**
 * The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
 */
export interface TagResourceRequest {
    __type?: "TagResourceRequest";
    /**
     * The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource to which to add tags.
     */
    ResourceArn: string | undefined;
    /**
     * A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
     */
    Tags: {
        [key: string]: string;
    } | undefined;
}
export declare namespace TagResourceRequest {
    function isa(o: any): o is TagResourceRequest;
}
/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
    name: "TooManyRequestsException";
    $fault: "client";
    /**
     * The error message returned by AWS Elemental MediaConnect.
     */
    Message: string | undefined;
}
export declare namespace TooManyRequestsException {
    function isa(o: any): o is TooManyRequestsException;
}
/**
 * Attributes related to the transport stream that are used in a source or output.
 */
export interface Transport {
    __type?: "Transport";
    /**
     * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
     */
    CidrAllowList?: Array<string>;
    /**
     * The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.
     */
    MaxBitrate?: number;
    /**
     * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
     */
    MaxLatency?: number;
    /**
     * The protocol that is used by the source or output.
     */
    Protocol: Protocol | string | undefined;
    /**
     * The remote ID for the Zixi-pull stream.
     */
    RemoteId?: string;
    /**
     * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
     */
    SmoothingLatency?: number;
    /**
     * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
     */
    StreamId?: string;
}
export declare namespace Transport {
    function isa(o: any): o is Transport;
}
export interface UntagResourceRequest {
    __type?: "UntagResourceRequest";
    /**
     * The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource from which to delete tags.
     */
    ResourceArn: string | undefined;
    /**
     * The keys of the tags to be removed.
     */
    TagKeys: Array<string> | undefined;
}
export declare namespace UntagResourceRequest {
    function isa(o: any): o is UntagResourceRequest;
}
/**
 * Information about the encryption of the flow.
 */
export interface UpdateEncryption {
    __type?: "UpdateEncryption";
    /**
     * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
     */
    Algorithm?: Algorithm | string;
    /**
     * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
     */
    ConstantInitializationVector?: string;
    /**
     * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    DeviceId?: string;
    /**
     * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
     */
    KeyType?: KeyType | string;
    /**
     * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    Region?: string;
    /**
     * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    ResourceId?: string;
    /**
     * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
     */
    RoleArn?: string;
    /**
     * The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
     */
    SecretArn?: string;
    /**
     * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    Url?: string;
}
export declare namespace UpdateEncryption {
    function isa(o: any): o is UpdateEncryption;
}
/**
 * The entitlement fields that you want to update.
 */
export interface UpdateFlowEntitlementRequest {
    __type?: "UpdateFlowEntitlementRequest";
    /**
     * A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user.
     */
    Description?: string;
    /**
     * The type of encryption that will be used on the output associated with this entitlement.
     */
    Encryption?: UpdateEncryption;
    /**
     * The ARN of the entitlement that you want to update.
     */
    EntitlementArn: string | undefined;
    /**
     * The flow that is associated with the entitlement that you want to update.
     */
    FlowArn: string | undefined;
    /**
     * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.
     */
    Subscribers?: Array<string>;
}
export declare namespace UpdateFlowEntitlementRequest {
    function isa(o: any): o is UpdateFlowEntitlementRequest;
}
export interface UpdateFlowEntitlementResponse {
    __type?: "UpdateFlowEntitlementResponse";
    /**
     * The settings for a flow entitlement.
     */
    Entitlement?: Entitlement;
    /**
     * The ARN of the flow that this entitlement was granted on.
     */
    FlowArn?: string;
}
export declare namespace UpdateFlowEntitlementResponse {
    function isa(o: any): o is UpdateFlowEntitlementResponse;
}
/**
 * The fields that you want to update in the output.
 */
export interface UpdateFlowOutputRequest {
    __type?: "UpdateFlowOutputRequest";
    /**
     * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
     */
    CidrAllowList?: Array<string>;
    /**
     * A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user.
     */
    Description?: string;
    /**
     * The IP address where you want to send the output.
     */
    Destination?: string;
    /**
     * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
     */
    Encryption?: UpdateEncryption;
    /**
     * The flow that is associated with the output that you want to update.
     */
    FlowArn: string | undefined;
    /**
     * The maximum latency in milliseconds for Zixi-based streams.
     */
    MaxLatency?: number;
    /**
     * The ARN of the output that you want to update.
     */
    OutputArn: string | undefined;
    /**
     * The port to use when content is distributed to this output.
     */
    Port?: number;
    /**
     * The protocol to use for the output.
     */
    Protocol?: Protocol | string;
    /**
     * The remote ID for the Zixi-pull stream.
     */
    RemoteId?: string;
    /**
     * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
     */
    SmoothingLatency?: number;
    /**
     * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
     */
    StreamId?: string;
}
export declare namespace UpdateFlowOutputRequest {
    function isa(o: any): o is UpdateFlowOutputRequest;
}
export interface UpdateFlowOutputResponse {
    __type?: "UpdateFlowOutputResponse";
    /**
     * The ARN of the flow that is associated with the updated output.
     */
    FlowArn?: string;
    /**
     * The settings for an output.
     */
    Output?: Output;
}
export declare namespace UpdateFlowOutputResponse {
    function isa(o: any): o is UpdateFlowOutputResponse;
}
/**
 * A request to update the source of a flow.
 */
export interface UpdateFlowSourceRequest {
    __type?: "UpdateFlowSourceRequest";
    /**
     * The type of encryption used on the content ingested from this source.
     */
    Decryption?: UpdateEncryption;
    /**
     * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
     */
    Description?: string;
    /**
     * The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.
     */
    EntitlementArn?: string;
    /**
     * The flow that is associated with the source that you want to update.
     */
    FlowArn: string | undefined;
    /**
     * The port that the flow will be listening on for incoming content.
     */
    IngestPort?: number;
    /**
     * The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.
     */
    MaxBitrate?: number;
    /**
     * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
     */
    MaxLatency?: number;
    /**
     * The protocol that is used by the source.
     */
    Protocol?: Protocol | string;
    /**
     * The ARN of the source that you want to update.
     */
    SourceArn: string | undefined;
    /**
     * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
     */
    StreamId?: string;
    /**
     * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
     */
    WhitelistCidr?: string;
}
export declare namespace UpdateFlowSourceRequest {
    function isa(o: any): o is UpdateFlowSourceRequest;
}
export interface UpdateFlowSourceResponse {
    __type?: "UpdateFlowSourceResponse";
    /**
     * The ARN of the flow that you want to update.
     */
    FlowArn?: string;
    /**
     * The settings for the source of the flow.
     */
    Source?: Source;
}
export declare namespace UpdateFlowSourceResponse {
    function isa(o: any): o is UpdateFlowSourceResponse;
}
