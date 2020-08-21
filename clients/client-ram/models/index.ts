import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AcceptResourceShareInvitationRequest {
  __type?: "AcceptResourceShareInvitationRequest";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the invitation.</p>
   */
  resourceShareInvitationArn: string | undefined;
}

export namespace AcceptResourceShareInvitationRequest {
  export const filterSensitiveLog = (obj: AcceptResourceShareInvitationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AcceptResourceShareInvitationRequest =>
    __isa(o, "AcceptResourceShareInvitationRequest");
}

export interface AcceptResourceShareInvitationResponse {
  __type?: "AcceptResourceShareInvitationResponse";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>Information about the invitation.</p>
   */
  resourceShareInvitation?: ResourceShareInvitation;
}

export namespace AcceptResourceShareInvitationResponse {
  export const filterSensitiveLog = (obj: AcceptResourceShareInvitationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AcceptResourceShareInvitationResponse =>
    __isa(o, "AcceptResourceShareInvitationResponse");
}

export interface AssociateResourceSharePermissionRequest {
  __type?: "AssociateResourceSharePermissionRequest";
  /**
   * <p>The ARN of the AWS RAM permission to associate with the resource share.</p>
   */
  permissionArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>Indicates whether the permission should replace the permissions that are currently
   *         	associated with the resource share. Use <code>true</code> to replace the current permissions.
   *         	Use <code>false</code> to add the permission to the current permission.</p>
   */
  replace?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;
}

export namespace AssociateResourceSharePermissionRequest {
  export const filterSensitiveLog = (obj: AssociateResourceSharePermissionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateResourceSharePermissionRequest =>
    __isa(o, "AssociateResourceSharePermissionRequest");
}

export interface AssociateResourceSharePermissionResponse {
  __type?: "AssociateResourceSharePermissionResponse";
  /**
   * <p>Indicates whether the request succeeded.</p>
   */
  returnValue?: boolean;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;
}

export namespace AssociateResourceSharePermissionResponse {
  export const filterSensitiveLog = (obj: AssociateResourceSharePermissionResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateResourceSharePermissionResponse =>
    __isa(o, "AssociateResourceSharePermissionResponse");
}

export interface AssociateResourceShareRequest {
  __type?: "AssociateResourceShareRequest";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The principals.</p>
   */
  principals?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARN) of the resources.</p>
   */
  resourceArns?: string[];
}

export namespace AssociateResourceShareRequest {
  export const filterSensitiveLog = (obj: AssociateResourceShareRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateResourceShareRequest => __isa(o, "AssociateResourceShareRequest");
}

export interface AssociateResourceShareResponse {
  __type?: "AssociateResourceShareResponse";
  /**
   * <p>Information about the associations.</p>
   */
  resourceShareAssociations?: ResourceShareAssociation[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;
}

export namespace AssociateResourceShareResponse {
  export const filterSensitiveLog = (obj: AssociateResourceShareResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateResourceShareResponse => __isa(o, "AssociateResourceShareResponse");
}

export interface CreateResourceShareRequest {
  __type?: "CreateResourceShareRequest";
  /**
   * <p>One or more tags.</p>
   */
  tags?: Tag[];

  /**
   * <p>The Amazon Resource Names (ARN) of the resources to associate with the resource share.</p>
   */
  resourceArns?: string[];

  /**
   * <p>The name of the resource share.</p>
   */
  name: string | undefined;

  /**
   * <p>Indicates whether principals outside your AWS organization can be associated with a resource share.</p>
   */
  allowExternalPrincipals?: boolean;

  /**
   * <p>The principals to associate with the resource share. The possible values are IDs of AWS accounts,
   *           the ARN of an OU or organization from AWS Organizations.</p>
   */
  principals?: string[];

  /**
   * <p>The ARNs of the permissions to associate with the resource share. If you do not specify an ARN
   * 			for the permission, AWS RAM automatically attaches the default version of the permission
   * 			for each resource type.</p>
   */
  permissionArns?: string[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;
}

export namespace CreateResourceShareRequest {
  export const filterSensitiveLog = (obj: CreateResourceShareRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateResourceShareRequest => __isa(o, "CreateResourceShareRequest");
}

export interface CreateResourceShareResponse {
  __type?: "CreateResourceShareResponse";
  /**
   * <p>Information about the resource share.</p>
   */
  resourceShare?: ResourceShare;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;
}

export namespace CreateResourceShareResponse {
  export const filterSensitiveLog = (obj: CreateResourceShareResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateResourceShareResponse => __isa(o, "CreateResourceShareResponse");
}

export interface DeleteResourceShareRequest {
  __type?: "DeleteResourceShareRequest";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;
}

export namespace DeleteResourceShareRequest {
  export const filterSensitiveLog = (obj: DeleteResourceShareRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteResourceShareRequest => __isa(o, "DeleteResourceShareRequest");
}

export interface DeleteResourceShareResponse {
  __type?: "DeleteResourceShareResponse";
  /**
   * <p>Indicates whether the request succeeded.</p>
   */
  returnValue?: boolean;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;
}

export namespace DeleteResourceShareResponse {
  export const filterSensitiveLog = (obj: DeleteResourceShareResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteResourceShareResponse => __isa(o, "DeleteResourceShareResponse");
}

export interface DisassociateResourceSharePermissionRequest {
  __type?: "DisassociateResourceSharePermissionRequest";
  /**
   * <p>The ARN of the permission to disassociate from the resource share.</p>
   */
  permissionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;
}

export namespace DisassociateResourceSharePermissionRequest {
  export const filterSensitiveLog = (obj: DisassociateResourceSharePermissionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateResourceSharePermissionRequest =>
    __isa(o, "DisassociateResourceSharePermissionRequest");
}

export interface DisassociateResourceSharePermissionResponse {
  __type?: "DisassociateResourceSharePermissionResponse";
  /**
   * <p>Indicates whether the request succeeded.</p>
   */
  returnValue?: boolean;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;
}

export namespace DisassociateResourceSharePermissionResponse {
  export const filterSensitiveLog = (obj: DisassociateResourceSharePermissionResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateResourceSharePermissionResponse =>
    __isa(o, "DisassociateResourceSharePermissionResponse");
}

export interface DisassociateResourceShareRequest {
  __type?: "DisassociateResourceShareRequest";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The principals.</p>
   */
  principals?: string[];

  /**
   * <p>The Amazon Resource Names (ARNs) of the resources.</p>
   */
  resourceArns?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;
}

export namespace DisassociateResourceShareRequest {
  export const filterSensitiveLog = (obj: DisassociateResourceShareRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateResourceShareRequest => __isa(o, "DisassociateResourceShareRequest");
}

export interface DisassociateResourceShareResponse {
  __type?: "DisassociateResourceShareResponse";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>Information about the associations.</p>
   */
  resourceShareAssociations?: ResourceShareAssociation[];
}

export namespace DisassociateResourceShareResponse {
  export const filterSensitiveLog = (obj: DisassociateResourceShareResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateResourceShareResponse => __isa(o, "DisassociateResourceShareResponse");
}

export interface EnableSharingWithAwsOrganizationRequest {
  __type?: "EnableSharingWithAwsOrganizationRequest";
}

export namespace EnableSharingWithAwsOrganizationRequest {
  export const filterSensitiveLog = (obj: EnableSharingWithAwsOrganizationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EnableSharingWithAwsOrganizationRequest =>
    __isa(o, "EnableSharingWithAwsOrganizationRequest");
}

export interface EnableSharingWithAwsOrganizationResponse {
  __type?: "EnableSharingWithAwsOrganizationResponse";
  /**
   * <p>Indicates whether the request succeeded.</p>
   */
  returnValue?: boolean;
}

export namespace EnableSharingWithAwsOrganizationResponse {
  export const filterSensitiveLog = (obj: EnableSharingWithAwsOrganizationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EnableSharingWithAwsOrganizationResponse =>
    __isa(o, "EnableSharingWithAwsOrganizationResponse");
}

export interface GetPermissionRequest {
  __type?: "GetPermissionRequest";
  /**
   * <p>The ARN of the permission.</p>
   */
  permissionArn: string | undefined;

  /**
   * <p>The identifier for the version of the permission.</p>
   */
  permissionVersion?: number;
}

export namespace GetPermissionRequest {
  export const filterSensitiveLog = (obj: GetPermissionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetPermissionRequest => __isa(o, "GetPermissionRequest");
}

export interface GetPermissionResponse {
  __type?: "GetPermissionResponse";
  /**
   * <p>Information about the permission.</p>
   */
  permission?: ResourceSharePermissionDetail;
}

export namespace GetPermissionResponse {
  export const filterSensitiveLog = (obj: GetPermissionResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetPermissionResponse => __isa(o, "GetPermissionResponse");
}

export interface GetResourcePoliciesRequest {
  __type?: "GetResourcePoliciesRequest";
  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The Amazon Resource Names (ARN) of the resources.</p>
   */
  resourceArns: string[] | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>The principal.</p>
   */
  principal?: string;
}

export namespace GetResourcePoliciesRequest {
  export const filterSensitiveLog = (obj: GetResourcePoliciesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetResourcePoliciesRequest => __isa(o, "GetResourcePoliciesRequest");
}

export interface GetResourcePoliciesResponse {
  __type?: "GetResourcePoliciesResponse";
  /**
   * <p>A key policy document, in JSON format.</p>
   */
  policies?: string[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace GetResourcePoliciesResponse {
  export const filterSensitiveLog = (obj: GetResourcePoliciesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetResourcePoliciesResponse => __isa(o, "GetResourcePoliciesResponse");
}

export interface GetResourceShareAssociationsRequest {
  __type?: "GetResourceShareAssociationsRequest";
  /**
   * <p>The association status.</p>
   */
  associationStatus?: ResourceShareAssociationStatus | string;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The Amazon Resource Names (ARN) of the resource shares.</p>
   */
  resourceShareArns?: string[];

  /**
   * <p>The association type. Specify <code>PRINCIPAL</code> to list the principals that are
   *    		associated with the specified resource share. Specify <code>RESOURCE</code> to list
   *    		the resources that are associated with the specified resource share.</p>
   */
  associationType: ResourceShareAssociationType | string | undefined;

  /**
   * <p>The principal. You cannot specify this parameter if the association type is
   *      	<code>RESOURCE</code>.</p>
   */
  principal?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource. You cannot specify this parameter if the
   *       	association type is <code>PRINCIPAL</code>.</p>
   */
  resourceArn?: string;
}

export namespace GetResourceShareAssociationsRequest {
  export const filterSensitiveLog = (obj: GetResourceShareAssociationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetResourceShareAssociationsRequest =>
    __isa(o, "GetResourceShareAssociationsRequest");
}

export interface GetResourceShareAssociationsResponse {
  __type?: "GetResourceShareAssociationsResponse";
  /**
   * <p>Information about the associations.</p>
   */
  resourceShareAssociations?: ResourceShareAssociation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace GetResourceShareAssociationsResponse {
  export const filterSensitiveLog = (obj: GetResourceShareAssociationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetResourceShareAssociationsResponse =>
    __isa(o, "GetResourceShareAssociationsResponse");
}

export interface GetResourceShareInvitationsRequest {
  __type?: "GetResourceShareInvitationsRequest";
  /**
   * <p>The maximum number of results to return with a single call.
   *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>The Amazon Resource Names (ARN) of the invitations.</p>
   */
  resourceShareInvitationArns?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The Amazon Resource Names (ARN) of the resource shares.</p>
   */
  resourceShareArns?: string[];
}

export namespace GetResourceShareInvitationsRequest {
  export const filterSensitiveLog = (obj: GetResourceShareInvitationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetResourceShareInvitationsRequest =>
    __isa(o, "GetResourceShareInvitationsRequest");
}

export interface GetResourceShareInvitationsResponse {
  __type?: "GetResourceShareInvitationsResponse";
  /**
   * <p>Information about the invitations.</p>
   */
  resourceShareInvitations?: ResourceShareInvitation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace GetResourceShareInvitationsResponse {
  export const filterSensitiveLog = (obj: GetResourceShareInvitationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetResourceShareInvitationsResponse =>
    __isa(o, "GetResourceShareInvitationsResponse");
}

export interface GetResourceSharesRequest {
  __type?: "GetResourceSharesRequest";
  /**
   * <p>The maximum number of results to return with a single call.
   *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>The status of the resource share.</p>
   */
  resourceShareStatus?: ResourceShareStatus | string;

  /**
   * <p>The Amazon Resource Names (ARN) of the resource shares.</p>
   */
  resourceShareArns?: string[];

  /**
   * <p>The type of owner.</p>
   */
  resourceOwner: ResourceOwner | string | undefined;

  /**
   * <p>One or more tag filters.</p>
   */
  tagFilters?: TagFilter[];

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The name of the resource share.</p>
   */
  name?: string;
}

export namespace GetResourceSharesRequest {
  export const filterSensitiveLog = (obj: GetResourceSharesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetResourceSharesRequest => __isa(o, "GetResourceSharesRequest");
}

export interface GetResourceSharesResponse {
  __type?: "GetResourceSharesResponse";
  /**
   * <p>Information about the resource shares.</p>
   */
  resourceShares?: ResourceShare[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace GetResourceSharesResponse {
  export const filterSensitiveLog = (obj: GetResourceSharesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetResourceSharesResponse => __isa(o, "GetResourceSharesResponse");
}

/**
 * <p>A client token input parameter was reused with an operation, but at least one of
 *         the other input parameters is different from the previous call to the operation.</p>
 */
export interface IdempotentParameterMismatchException extends __SmithyException, $MetadataBearer {
  name: "IdempotentParameterMismatchException";
  $fault: "client";
  message: string | undefined;
}

export namespace IdempotentParameterMismatchException {
  export const filterSensitiveLog = (obj: IdempotentParameterMismatchException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is IdempotentParameterMismatchException =>
    __isa(o, "IdempotentParameterMismatchException");
}

/**
 * <p>A client token is not valid.</p>
 */
export interface InvalidClientTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidClientTokenException";
  $fault: "client";
  message: string | undefined;
}

export namespace InvalidClientTokenException {
  export const filterSensitiveLog = (obj: InvalidClientTokenException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidClientTokenException => __isa(o, "InvalidClientTokenException");
}

/**
 * <p>The specified value for MaxResults is not valid.</p>
 */
export interface InvalidMaxResultsException extends __SmithyException, $MetadataBearer {
  name: "InvalidMaxResultsException";
  $fault: "client";
  message: string | undefined;
}

export namespace InvalidMaxResultsException {
  export const filterSensitiveLog = (obj: InvalidMaxResultsException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidMaxResultsException => __isa(o, "InvalidMaxResultsException");
}

/**
 * <p>The specified value for NextToken is not valid.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  message: string | undefined;
}

export namespace InvalidNextTokenException {
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidNextTokenException => __isa(o, "InvalidNextTokenException");
}

/**
 * <p>A parameter is not valid.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  message: string | undefined;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidParameterException => __isa(o, "InvalidParameterException");
}

/**
 * <p>The specified resource type is not valid.</p>
 */
export interface InvalidResourceTypeException extends __SmithyException, $MetadataBearer {
  name: "InvalidResourceTypeException";
  $fault: "client";
  message: string | undefined;
}

export namespace InvalidResourceTypeException {
  export const filterSensitiveLog = (obj: InvalidResourceTypeException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidResourceTypeException => __isa(o, "InvalidResourceTypeException");
}

/**
 * <p>The requested state transition is not valid.</p>
 */
export interface InvalidStateTransitionException extends __SmithyException, $MetadataBearer {
  name: "InvalidStateTransitionException";
  $fault: "client";
  message: string | undefined;
}

export namespace InvalidStateTransitionException {
  export const filterSensitiveLog = (obj: InvalidStateTransitionException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidStateTransitionException => __isa(o, "InvalidStateTransitionException");
}

export interface ListPendingInvitationResourcesRequest {
  __type?: "ListPendingInvitationResourcesRequest";
  /**
   * <p>The maximum number of results to return with a single call.
   *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the invitation.</p>
   */
  resourceShareInvitationArn: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListPendingInvitationResourcesRequest {
  export const filterSensitiveLog = (obj: ListPendingInvitationResourcesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPendingInvitationResourcesRequest =>
    __isa(o, "ListPendingInvitationResourcesRequest");
}

export interface ListPendingInvitationResourcesResponse {
  __type?: "ListPendingInvitationResourcesResponse";
  /**
   * <p>Information about the resources included the resource share.</p>
   */
  resources?: Resource[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListPendingInvitationResourcesResponse {
  export const filterSensitiveLog = (obj: ListPendingInvitationResourcesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPendingInvitationResourcesResponse =>
    __isa(o, "ListPendingInvitationResourcesResponse");
}

export interface ListPermissionsRequest {
  __type?: "ListPermissionsRequest";
  /**
   * <p>The maximum number of results to return with a single call.
   *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>Specifies the resource type for which to list permissions. For example, to list only
   * 		permissions that apply to EC2 subnets, specify <code>ec2:Subnet</code>.</p>
   */
  resourceType?: string;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListPermissionsRequest {
  export const filterSensitiveLog = (obj: ListPermissionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPermissionsRequest => __isa(o, "ListPermissionsRequest");
}

export interface ListPermissionsResponse {
  __type?: "ListPermissionsResponse";
  /**
   * <p>Information about the permissions.</p>
   */
  permissions?: ResourceSharePermissionSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListPermissionsResponse {
  export const filterSensitiveLog = (obj: ListPermissionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPermissionsResponse => __isa(o, "ListPermissionsResponse");
}

export interface ListPrincipalsRequest {
  __type?: "ListPrincipalsRequest";
  /**
   * <p>The principals.</p>
   */
  principals?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The Amazon Resource Names (ARN) of the resource shares.</p>
   */
  resourceShareArns?: string[];

  /**
   * <p>The type of owner.</p>
   */
  resourceOwner: ResourceOwner | string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn?: string;

  /**
   * <p>The resource type.</p>
   *    	     <p>Valid values: <code>codebuild:Project</code> | <code>codebuild:ReportGroup</code> | <code>ec2:CapacityReservation</code> | <code>ec2:DedicatedHost</code> | <code>ec2:Subnet</code> | <code>ec2:TrafficMirrorTarget</code> | <code>ec2:TransitGateway</code> | <code>imagebuilder:Component</code> | <code>imagebuilder:Image</code> | <code>imagebuilder:ImageRecipe</code> | <code>license-manager:LicenseConfiguration</code> I <code>resource-groups:Group</code> |
   *    		<code>rds:Cluster</code> | <code>route53resolver:ResolverRule</code>
   *          </p>
   */
  resourceType?: string;
}

export namespace ListPrincipalsRequest {
  export const filterSensitiveLog = (obj: ListPrincipalsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPrincipalsRequest => __isa(o, "ListPrincipalsRequest");
}

export interface ListPrincipalsResponse {
  __type?: "ListPrincipalsResponse";
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>The principals.</p>
   */
  principals?: Principal[];
}

export namespace ListPrincipalsResponse {
  export const filterSensitiveLog = (obj: ListPrincipalsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPrincipalsResponse => __isa(o, "ListPrincipalsResponse");
}

export interface ListResourceSharePermissionsRequest {
  __type?: "ListResourceSharePermissionsRequest";
  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;
}

export namespace ListResourceSharePermissionsRequest {
  export const filterSensitiveLog = (obj: ListResourceSharePermissionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListResourceSharePermissionsRequest =>
    __isa(o, "ListResourceSharePermissionsRequest");
}

export interface ListResourceSharePermissionsResponse {
  __type?: "ListResourceSharePermissionsResponse";
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>The permissions associated with the resource share.</p>
   */
  permissions?: ResourceSharePermissionSummary[];
}

export namespace ListResourceSharePermissionsResponse {
  export const filterSensitiveLog = (obj: ListResourceSharePermissionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListResourceSharePermissionsResponse =>
    __isa(o, "ListResourceSharePermissionsResponse");
}

export interface ListResourcesRequest {
  __type?: "ListResourcesRequest";
  /**
   * <p>The Amazon Resource Names (ARN) of the resource shares.</p>
   */
  resourceShareArns?: string[];

  /**
   * <p>The principal.</p>
   */
  principal?: string;

  /**
   * <p>The resource type.</p>
   *    	     <p>Valid values: <code>codebuild:Project</code> | <code>codebuild:ReportGroup</code> | <code>ec2:CapacityReservation</code> | <code>ec2:DedicatedHost</code> | <code>ec2:Subnet</code> | <code>ec2:TrafficMirrorTarget</code> | <code>ec2:TransitGateway</code> | <code>imagebuilder:Component</code> | <code>imagebuilder:Image</code> | <code>imagebuilder:ImageRecipe</code> | <code>license-manager:LicenseConfiguration</code> I <code>resource-groups:Group</code> |
   *    		<code>rds:Cluster</code> | <code>route53resolver:ResolverRule</code>
   *          </p>
   */
  resourceType?: string;

  /**
   * <p>The type of owner.</p>
   */
  resourceOwner: ResourceOwner | string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The Amazon Resource Names (ARN) of the resources.</p>
   */
  resourceArns?: string[];
}

export namespace ListResourcesRequest {
  export const filterSensitiveLog = (obj: ListResourcesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListResourcesRequest => __isa(o, "ListResourcesRequest");
}

export interface ListResourcesResponse {
  __type?: "ListResourcesResponse";
  /**
   * <p>Information about the resources.</p>
   */
  resources?: Resource[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListResourcesResponse {
  export const filterSensitiveLog = (obj: ListResourcesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListResourcesResponse => __isa(o, "ListResourcesResponse");
}

export interface ListResourceTypesRequest {
  __type?: "ListResourceTypesRequest";
  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call.
   *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;
}

export namespace ListResourceTypesRequest {
  export const filterSensitiveLog = (obj: ListResourceTypesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListResourceTypesRequest => __isa(o, "ListResourceTypesRequest");
}

export interface ListResourceTypesResponse {
  __type?: "ListResourceTypesResponse";
  /**
   * <p>The shareable resource types supported by AWS RAM.</p>
   */
  resourceTypes?: ServiceNameAndResourceType[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListResourceTypesResponse {
  export const filterSensitiveLog = (obj: ListResourceTypesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListResourceTypesResponse => __isa(o, "ListResourceTypesResponse");
}

/**
 * <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
 */
export interface MalformedArnException extends __SmithyException, $MetadataBearer {
  name: "MalformedArnException";
  $fault: "client";
  message: string | undefined;
}

export namespace MalformedArnException {
  export const filterSensitiveLog = (obj: MalformedArnException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MalformedArnException => __isa(o, "MalformedArnException");
}

/**
 * <p>A required input parameter is missing.</p>
 */
export interface MissingRequiredParameterException extends __SmithyException, $MetadataBearer {
  name: "MissingRequiredParameterException";
  $fault: "client";
  message: string | undefined;
}

export namespace MissingRequiredParameterException {
  export const filterSensitiveLog = (obj: MissingRequiredParameterException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MissingRequiredParameterException => __isa(o, "MissingRequiredParameterException");
}

/**
 * <p>The requested operation is not permitted.</p>
 */
export interface OperationNotPermittedException extends __SmithyException, $MetadataBearer {
  name: "OperationNotPermittedException";
  $fault: "client";
  message: string | undefined;
}

export namespace OperationNotPermittedException {
  export const filterSensitiveLog = (obj: OperationNotPermittedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OperationNotPermittedException => __isa(o, "OperationNotPermittedException");
}

/**
 * <p>Describes a principal for use with AWS Resource Access Manager.</p>
 */
export interface Principal {
  __type?: "Principal";
  /**
   * <p>The time when the association was last updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The ID of the principal.</p>
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn?: string;

  /**
   * <p>The time when the principal was associated with the resource share.</p>
   */
  creationTime?: Date;

  /**
   * <p>Indicates whether the principal belongs to the same AWS organization as the AWS account that owns the resource share.</p>
   */
  external?: boolean;
}

export namespace Principal {
  export const filterSensitiveLog = (obj: Principal): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Principal => __isa(o, "Principal");
}

export interface PromoteResourceShareCreatedFromPolicyRequest {
  __type?: "PromoteResourceShareCreatedFromPolicyRequest";
  /**
   * <p>The ARN of the resource share to promote.</p>
   */
  resourceShareArn: string | undefined;
}

export namespace PromoteResourceShareCreatedFromPolicyRequest {
  export const filterSensitiveLog = (obj: PromoteResourceShareCreatedFromPolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PromoteResourceShareCreatedFromPolicyRequest =>
    __isa(o, "PromoteResourceShareCreatedFromPolicyRequest");
}

export interface PromoteResourceShareCreatedFromPolicyResponse {
  __type?: "PromoteResourceShareCreatedFromPolicyResponse";
  /**
   * <p>Indicates whether the request succeeded.</p>
   */
  returnValue?: boolean;
}

export namespace PromoteResourceShareCreatedFromPolicyResponse {
  export const filterSensitiveLog = (obj: PromoteResourceShareCreatedFromPolicyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PromoteResourceShareCreatedFromPolicyResponse =>
    __isa(o, "PromoteResourceShareCreatedFromPolicyResponse");
}

export interface RejectResourceShareInvitationRequest {
  __type?: "RejectResourceShareInvitationRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the invitation.</p>
   */
  resourceShareInvitationArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;
}

export namespace RejectResourceShareInvitationRequest {
  export const filterSensitiveLog = (obj: RejectResourceShareInvitationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RejectResourceShareInvitationRequest =>
    __isa(o, "RejectResourceShareInvitationRequest");
}

export interface RejectResourceShareInvitationResponse {
  __type?: "RejectResourceShareInvitationResponse";
  /**
   * <p>Information about the invitation.</p>
   */
  resourceShareInvitation?: ResourceShareInvitation;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;
}

export namespace RejectResourceShareInvitationResponse {
  export const filterSensitiveLog = (obj: RejectResourceShareInvitationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RejectResourceShareInvitationResponse =>
    __isa(o, "RejectResourceShareInvitationResponse");
}

/**
 * <p>Describes a resource associated with a resource share.</p>
 */
export interface Resource {
  __type?: "Resource";
  /**
   * <p>The time when the association was last updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The status of the resource.</p>
   */
  status?: ResourceStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  arn?: string;

  /**
   * <p>A message about the status of the resource.</p>
   */
  statusMessage?: string;

  /**
   * <p>The resource type.</p>
   */
  type?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn?: string;

  /**
   * <p>The time when the resource was associated with the resource share.</p>
   */
  creationTime?: Date;

  /**
   * <p>The ARN of the resource group. This value is returned only if the resource is a resource
   * 			group.</p>
   */
  resourceGroupArn?: string;
}

export namespace Resource {
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Resource => __isa(o, "Resource");
}

/**
 * <p>An Amazon Resource Name (ARN) was not found.</p>
 */
export interface ResourceArnNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceArnNotFoundException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceArnNotFoundException {
  export const filterSensitiveLog = (obj: ResourceArnNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceArnNotFoundException => __isa(o, "ResourceArnNotFoundException");
}

export enum ResourceOwner {
  OTHER_ACCOUNTS = "OTHER-ACCOUNTS",
  SELF = "SELF",
}

/**
 * <p>Describes a resource share.</p>
 */
export interface ResourceShare {
  __type?: "ResourceShare";
  /**
   * <p>The tags for the resource share.</p>
   */
  tags?: Tag[];

  /**
   * <p>The time when the resource share was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>Indicates whether principals outside your AWS organization can be associated with a resource share.</p>
   */
  allowExternalPrincipals?: boolean;

  /**
   * <p>The name of the resource share.</p>
   */
  name?: string;

  /**
   * <p>Indicates how the resource share was created. Possible values include:</p>
   * 	        <ul>
   *             <li>
   * 			            <p>
   *                   <code>CREATED_FROM_POLICY</code> - Indicates that the resource share was created from an AWS Identity
   * 					and Access Management (AWS IAM) policy attached to a resource. These resource shares are
   * 					visible only to the AWS account that created it. They cannot be modified in
   * 					AWS RAM.</p>
   * 		          </li>
   *             <li>
   * 			            <p>
   *                   <code>PROMOTING_TO_STANDARD</code> - The resource share is in the process
   * 				of being promoted. For more information, see
   * 				<a>PromoteResourceShareCreatedFromPolicy</a>.</p>
   * 		          </li>
   *             <li>
   * 			            <p>
   *                   <code>STANDARD</code> - Indicates that the resource share was created in AWS RAM using the console or
   * 					APIs. These resource shares are visible to all principals. They can be modified
   * 					in AWS RAM.</p>
   * 		          </li>
   *          </ul>
   */
  featureSet?: ResourceShareFeatureSet | string;

  /**
   * <p>The status of the resource share.</p>
   */
  status?: ResourceShareStatus | string;

  /**
   * <p>A message about the status of the resource share.</p>
   */
  statusMessage?: string;

  /**
   * <p>The ID of the AWS account that owns the resource share.</p>
   */
  owningAccountId?: string;

  /**
   * <p>The time when the resource share was last updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn?: string;
}

export namespace ResourceShare {
  export const filterSensitiveLog = (obj: ResourceShare): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceShare => __isa(o, "ResourceShare");
}

/**
 * <p>Describes an association with a resource share.</p>
 */
export interface ResourceShareAssociation {
  __type?: "ResourceShareAssociation";
  /**
   * <p>The name of the resource share.</p>
   */
  resourceShareName?: string;

  /**
   * <p>A message about the status of the association.</p>
   */
  statusMessage?: string;

  /**
   * <p>The status of the association.</p>
   */
  status?: ResourceShareAssociationStatus | string;

  /**
   * <p>The associated entity. For resource associations, this is the ARN of the resource.
   *        For principal associations, this is the ID of an AWS account or the ARN of an OU or
   *        organization from AWS Organizations.</p>
   */
  associatedEntity?: string;

  /**
   * <p>The association type.</p>
   */
  associationType?: ResourceShareAssociationType | string;

  /**
   * <p>Indicates whether the principal belongs to the same AWS organization as the AWS account that owns the resource share.</p>
   */
  external?: boolean;

  /**
   * <p>The time when the association was last updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The time when the association was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn?: string;
}

export namespace ResourceShareAssociation {
  export const filterSensitiveLog = (obj: ResourceShareAssociation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceShareAssociation => __isa(o, "ResourceShareAssociation");
}

export type ResourceShareAssociationStatus =
  | "ASSOCIATED"
  | "ASSOCIATING"
  | "DISASSOCIATED"
  | "DISASSOCIATING"
  | "FAILED";

export type ResourceShareAssociationType = "PRINCIPAL" | "RESOURCE";

export type ResourceShareFeatureSet = "CREATED_FROM_POLICY" | "PROMOTING_TO_STANDARD" | "STANDARD";

/**
 * <p>Describes an invitation to join a resource share.</p>
 */
export interface ResourceShareInvitation {
  __type?: "ResourceShareInvitation";
  /**
   * <p>To view the resources associated with a pending resource share invitation, use
   *       	<a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPendingInvitationResources.html">
   *       		ListPendingInvitationResources</a>.</p>
   */
  resourceShareAssociations?: ResourceShareAssociation[];

  /**
   * <p>The date and time when the invitation was sent.</p>
   */
  invitationTimestamp?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn?: string;

  /**
   * <p>The name of the resource share.</p>
   */
  resourceShareName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the invitation.</p>
   */
  resourceShareInvitationArn?: string;

  /**
   * <p>The ID of the AWS account that received the invitation.</p>
   */
  receiverAccountId?: string;

  /**
   * <p>The ID of the AWS account that sent the invitation.</p>
   */
  senderAccountId?: string;

  /**
   * <p>The status of the invitation.</p>
   */
  status?: ResourceShareInvitationStatus | string;
}

export namespace ResourceShareInvitation {
  export const filterSensitiveLog = (obj: ResourceShareInvitation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceShareInvitation => __isa(o, "ResourceShareInvitation");
}

/**
 * <p>The invitation was already accepted.</p>
 */
export interface ResourceShareInvitationAlreadyAcceptedException extends __SmithyException, $MetadataBearer {
  name: "ResourceShareInvitationAlreadyAcceptedException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceShareInvitationAlreadyAcceptedException {
  export const filterSensitiveLog = (obj: ResourceShareInvitationAlreadyAcceptedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceShareInvitationAlreadyAcceptedException =>
    __isa(o, "ResourceShareInvitationAlreadyAcceptedException");
}

/**
 * <p>The invitation was already rejected.</p>
 */
export interface ResourceShareInvitationAlreadyRejectedException extends __SmithyException, $MetadataBearer {
  name: "ResourceShareInvitationAlreadyRejectedException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceShareInvitationAlreadyRejectedException {
  export const filterSensitiveLog = (obj: ResourceShareInvitationAlreadyRejectedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceShareInvitationAlreadyRejectedException =>
    __isa(o, "ResourceShareInvitationAlreadyRejectedException");
}

/**
 * <p>The Amazon Resource Name (ARN) for an invitation was not found.</p>
 */
export interface ResourceShareInvitationArnNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceShareInvitationArnNotFoundException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceShareInvitationArnNotFoundException {
  export const filterSensitiveLog = (obj: ResourceShareInvitationArnNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceShareInvitationArnNotFoundException =>
    __isa(o, "ResourceShareInvitationArnNotFoundException");
}

/**
 * <p>The invitation is expired.</p>
 */
export interface ResourceShareInvitationExpiredException extends __SmithyException, $MetadataBearer {
  name: "ResourceShareInvitationExpiredException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceShareInvitationExpiredException {
  export const filterSensitiveLog = (obj: ResourceShareInvitationExpiredException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceShareInvitationExpiredException =>
    __isa(o, "ResourceShareInvitationExpiredException");
}

export type ResourceShareInvitationStatus = "ACCEPTED" | "EXPIRED" | "PENDING" | "REJECTED";

/**
 * <p>The requested resource share exceeds the limit for your account.</p>
 */
export interface ResourceShareLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceShareLimitExceededException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceShareLimitExceededException {
  export const filterSensitiveLog = (obj: ResourceShareLimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceShareLimitExceededException =>
    __isa(o, "ResourceShareLimitExceededException");
}

/**
 * <p>Information about an AWS RAM permission.</p>
 */
export interface ResourceSharePermissionDetail {
  __type?: "ResourceSharePermissionDetail";
  /**
   * <p>The identifier for the version of the permission that is set as the
   *     		default version.</p>
   */
  defaultVersion?: boolean;

  /**
   * <p>The date and time when the permission was last updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The permission's effect and actions in JSON format. The <code>effect</code> indicates whether
   * 			the actions are allowed or denied. The <code>actions</code> list the API actions to
   * 			which the principal is granted or denied access.</p>
   */
  permission?: string;

  /**
   * <p>The date and time when the permission was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The resource type to which the permission applies.</p>
   */
  resourceType?: string;

  /**
   * <p>The identifier for the version of the permission.</p>
   */
  version?: string;

  /**
   * <p>The ARN of the permission.</p>
   */
  arn?: string;

  /**
   * <p>The name of the permission.</p>
   */
  name?: string;
}

export namespace ResourceSharePermissionDetail {
  export const filterSensitiveLog = (obj: ResourceSharePermissionDetail): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceSharePermissionDetail => __isa(o, "ResourceSharePermissionDetail");
}

/**
 * <p>Information about a permission that is associated with a resource share.</p>
 */
export interface ResourceSharePermissionSummary {
  __type?: "ResourceSharePermissionSummary";
  /**
   * <p>The current status of the permission.</p>
   */
  status?: string;

  /**
   * <p>The name of the permission.</p>
   */
  name?: string;

  /**
   * <p>The date and time when the permission was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The identifier for the version of the permission that is set as the default version.</p>
   */
  defaultVersion?: boolean;

  /**
   * <p>The ARN of the permission.</p>
   */
  arn?: string;

  /**
   * <p>The type of resource to which the permission applies.</p>
   */
  resourceType?: string;

  /**
   * <p>The identifier for the version of the permission.</p>
   */
  version?: string;

  /**
   * <p>The date and time when the permission was last updated.</p>
   */
  lastUpdatedTime?: Date;
}

export namespace ResourceSharePermissionSummary {
  export const filterSensitiveLog = (obj: ResourceSharePermissionSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceSharePermissionSummary => __isa(o, "ResourceSharePermissionSummary");
}

export type ResourceShareStatus = "ACTIVE" | "DELETED" | "DELETING" | "FAILED" | "PENDING";

export type ResourceStatus = "AVAILABLE" | "LIMIT_EXCEEDED" | "PENDING" | "UNAVAILABLE" | "ZONAL_RESOURCE_INACCESSIBLE";

/**
 * <p>The service could not respond to the request due to an internal problem.</p>
 */
export interface ServerInternalException extends __SmithyException, $MetadataBearer {
  name: "ServerInternalException";
  $fault: "server";
  message: string | undefined;
}

export namespace ServerInternalException {
  export const filterSensitiveLog = (obj: ServerInternalException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServerInternalException => __isa(o, "ServerInternalException");
}

/**
 * <p>Information about the shareable resource types and the AWS services to which they belong.</p>
 */
export interface ServiceNameAndResourceType {
  __type?: "ServiceNameAndResourceType";
  /**
   * <p>The name of the AWS services to which the resources belong.</p>
   */
  serviceName?: string;

  /**
   * <p>The shareable resource types.</p>
   */
  resourceType?: string;
}

export namespace ServiceNameAndResourceType {
  export const filterSensitiveLog = (obj: ServiceNameAndResourceType): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceNameAndResourceType => __isa(o, "ServiceNameAndResourceType");
}

/**
 * <p>The service is not available.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message: string | undefined;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceUnavailableException => __isa(o, "ServiceUnavailableException");
}

/**
 * <p>Information about a tag.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The key of the tag.</p>
   */
  key?: string;

  /**
   * <p>The value of the tag.</p>
   */
  value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

/**
 * <p>Used to filter information based on tags.</p>
 */
export interface TagFilter {
  __type?: "TagFilter";
  /**
   * <p>The tag key.</p>
   */
  tagKey?: string;

  /**
   * <p>The tag values.</p>
   */
  tagValues?: string[];
}

export namespace TagFilter {
  export const filterSensitiveLog = (obj: TagFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagFilter => __isa(o, "TagFilter");
}

/**
 * <p>The requested tags exceed the limit for your account.</p>
 */
export interface TagLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "TagLimitExceededException";
  $fault: "client";
  message: string | undefined;
}

export namespace TagLimitExceededException {
  export const filterSensitiveLog = (obj: TagLimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagLimitExceededException => __isa(o, "TagLimitExceededException");
}

/**
 * <p>The specified tag is a reserved word and cannot be used.</p>
 */
export interface TagPolicyViolationException extends __SmithyException, $MetadataBearer {
  name: "TagPolicyViolationException";
  $fault: "client";
  message: string | undefined;
}

export namespace TagPolicyViolationException {
  export const filterSensitiveLog = (obj: TagPolicyViolationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagPolicyViolationException => __isa(o, "TagPolicyViolationException");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>One or more tags.</p>
   */
  tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResponse => __isa(o, "TagResourceResponse");
}

/**
 * <p>A specified resource was not found.</p>
 */
export interface UnknownResourceException extends __SmithyException, $MetadataBearer {
  name: "UnknownResourceException";
  $fault: "client";
  message: string | undefined;
}

export namespace UnknownResourceException {
  export const filterSensitiveLog = (obj: UnknownResourceException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnknownResourceException => __isa(o, "UnknownResourceException");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;

  /**
   * <p>The tag keys of the tags to remove.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceResponse => __isa(o, "UntagResourceResponse");
}

export interface UpdateResourceShareRequest {
  __type?: "UpdateResourceShareRequest";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The name of the resource share.</p>
   */
  name?: string;

  /**
   * <p>Indicates whether principals outside your AWS organization can be associated with a resource share.</p>
   */
  allowExternalPrincipals?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;
}

export namespace UpdateResourceShareRequest {
  export const filterSensitiveLog = (obj: UpdateResourceShareRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateResourceShareRequest => __isa(o, "UpdateResourceShareRequest");
}

export interface UpdateResourceShareResponse {
  __type?: "UpdateResourceShareResponse";
  /**
   * <p>Information about the resource share.</p>
   */
  resourceShare?: ResourceShare;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;
}

export namespace UpdateResourceShareResponse {
  export const filterSensitiveLog = (obj: UpdateResourceShareResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateResourceShareResponse => __isa(o, "UpdateResourceShareResponse");
}
