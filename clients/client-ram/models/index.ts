import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
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
  export function isa(o: any): o is AcceptResourceShareInvitationRequest {
    return __isa(o, "AcceptResourceShareInvitationRequest");
  }
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
  export function isa(o: any): o is AcceptResourceShareInvitationResponse {
    return __isa(o, "AcceptResourceShareInvitationResponse");
  }
}

export interface AssociateResourceSharePermissionRequest {
  __type?: "AssociateResourceSharePermissionRequest";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The ARN of the AWS RAM permission to associate with the resource share.</p>
   */
  permissionArn: string | undefined;

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
  export function isa(o: any): o is AssociateResourceSharePermissionRequest {
    return __isa(o, "AssociateResourceSharePermissionRequest");
  }
}

export interface AssociateResourceSharePermissionResponse {
  __type?: "AssociateResourceSharePermissionResponse";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>Indicates whether the request succeeded.</p>
   */
  returnValue?: boolean;
}

export namespace AssociateResourceSharePermissionResponse {
  export function isa(o: any): o is AssociateResourceSharePermissionResponse {
    return __isa(o, "AssociateResourceSharePermissionResponse");
  }
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
  principals?: Array<string>;

  /**
   * <p>The Amazon Resource Names (ARN) of the resources.</p>
   */
  resourceArns?: Array<string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;
}

export namespace AssociateResourceShareRequest {
  export function isa(o: any): o is AssociateResourceShareRequest {
    return __isa(o, "AssociateResourceShareRequest");
  }
}

export interface AssociateResourceShareResponse {
  __type?: "AssociateResourceShareResponse";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>Information about the associations.</p>
   */
  resourceShareAssociations?: Array<ResourceShareAssociation>;
}

export namespace AssociateResourceShareResponse {
  export function isa(o: any): o is AssociateResourceShareResponse {
    return __isa(o, "AssociateResourceShareResponse");
  }
}

export interface CreateResourceShareRequest {
  __type?: "CreateResourceShareRequest";
  /**
   * <p>Indicates whether principals outside your AWS organization can be associated with a resource share.</p>
   */
  allowExternalPrincipals?: boolean;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The name of the resource share.</p>
   */
  name: string | undefined;

  /**
   * <p>The ARNs of the permissions to associate with the resource share. If you do not specify an ARN
   * 			for the permission, AWS RAM automatically attaches the default version of the permission
   * 			for each resource type.</p>
   */
  permissionArns?: Array<string>;

  /**
   * <p>The principals to associate with the resource share. The possible values are IDs of AWS accounts,
   *           the ARN of an OU or organization from AWS Organizations.</p>
   */
  principals?: Array<string>;

  /**
   * <p>The Amazon Resource Names (ARN) of the resources to associate with the resource share.</p>
   */
  resourceArns?: Array<string>;

  /**
   * <p>One or more tags.</p>
   */
  tags?: Array<Tag>;
}

export namespace CreateResourceShareRequest {
  export function isa(o: any): o is CreateResourceShareRequest {
    return __isa(o, "CreateResourceShareRequest");
  }
}

export interface CreateResourceShareResponse {
  __type?: "CreateResourceShareResponse";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>Information about the resource share.</p>
   */
  resourceShare?: ResourceShare;
}

export namespace CreateResourceShareResponse {
  export function isa(o: any): o is CreateResourceShareResponse {
    return __isa(o, "CreateResourceShareResponse");
  }
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
  export function isa(o: any): o is DeleteResourceShareRequest {
    return __isa(o, "DeleteResourceShareRequest");
  }
}

export interface DeleteResourceShareResponse {
  __type?: "DeleteResourceShareResponse";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>Indicates whether the request succeeded.</p>
   */
  returnValue?: boolean;
}

export namespace DeleteResourceShareResponse {
  export function isa(o: any): o is DeleteResourceShareResponse {
    return __isa(o, "DeleteResourceShareResponse");
  }
}

export interface DisassociateResourceSharePermissionRequest {
  __type?: "DisassociateResourceSharePermissionRequest";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The ARN of the permission to disassociate from the resource share.</p>
   */
  permissionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;
}

export namespace DisassociateResourceSharePermissionRequest {
  export function isa(o: any): o is DisassociateResourceSharePermissionRequest {
    return __isa(o, "DisassociateResourceSharePermissionRequest");
  }
}

export interface DisassociateResourceSharePermissionResponse {
  __type?: "DisassociateResourceSharePermissionResponse";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>Indicates whether the request succeeded.</p>
   */
  returnValue?: boolean;
}

export namespace DisassociateResourceSharePermissionResponse {
  export function isa(
    o: any
  ): o is DisassociateResourceSharePermissionResponse {
    return __isa(o, "DisassociateResourceSharePermissionResponse");
  }
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
  principals?: Array<string>;

  /**
   * <p>The Amazon Resource Names (ARNs) of the resources.</p>
   */
  resourceArns?: Array<string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;
}

export namespace DisassociateResourceShareRequest {
  export function isa(o: any): o is DisassociateResourceShareRequest {
    return __isa(o, "DisassociateResourceShareRequest");
  }
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
  resourceShareAssociations?: Array<ResourceShareAssociation>;
}

export namespace DisassociateResourceShareResponse {
  export function isa(o: any): o is DisassociateResourceShareResponse {
    return __isa(o, "DisassociateResourceShareResponse");
  }
}

export interface EnableSharingWithAwsOrganizationRequest {
  __type?: "EnableSharingWithAwsOrganizationRequest";
}

export namespace EnableSharingWithAwsOrganizationRequest {
  export function isa(o: any): o is EnableSharingWithAwsOrganizationRequest {
    return __isa(o, "EnableSharingWithAwsOrganizationRequest");
  }
}

export interface EnableSharingWithAwsOrganizationResponse {
  __type?: "EnableSharingWithAwsOrganizationResponse";
  /**
   * <p>Indicates whether the request succeeded.</p>
   */
  returnValue?: boolean;
}

export namespace EnableSharingWithAwsOrganizationResponse {
  export function isa(o: any): o is EnableSharingWithAwsOrganizationResponse {
    return __isa(o, "EnableSharingWithAwsOrganizationResponse");
  }
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
  export function isa(o: any): o is GetPermissionRequest {
    return __isa(o, "GetPermissionRequest");
  }
}

export interface GetPermissionResponse {
  __type?: "GetPermissionResponse";
  /**
   * <p>Information about the permission.</p>
   */
  permission?: ResourceSharePermissionDetail;
}

export namespace GetPermissionResponse {
  export function isa(o: any): o is GetPermissionResponse {
    return __isa(o, "GetPermissionResponse");
  }
}

export interface GetResourcePoliciesRequest {
  __type?: "GetResourcePoliciesRequest";
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
   * <p>The principal.</p>
   */
  principal?: string;

  /**
   * <p>The Amazon Resource Names (ARN) of the resources.</p>
   */
  resourceArns: Array<string> | undefined;
}

export namespace GetResourcePoliciesRequest {
  export function isa(o: any): o is GetResourcePoliciesRequest {
    return __isa(o, "GetResourcePoliciesRequest");
  }
}

export interface GetResourcePoliciesResponse {
  __type?: "GetResourcePoliciesResponse";
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>A key policy document, in JSON format.</p>
   */
  policies?: Array<string>;
}

export namespace GetResourcePoliciesResponse {
  export function isa(o: any): o is GetResourcePoliciesResponse {
    return __isa(o, "GetResourcePoliciesResponse");
  }
}

export interface GetResourceShareAssociationsRequest {
  __type?: "GetResourceShareAssociationsRequest";
  /**
   * <p>The association status.</p>
   */
  associationStatus?: ResourceShareAssociationStatus | string;

  /**
   * <p>The association type. Specify <code>PRINCIPAL</code> to list the principals that are
   *    		associated with the specified resource share. Specify <code>RESOURCE</code> to list
   *    		the resources that are associated with the specified resource share.</p>
   */
  associationType: ResourceShareAssociationType | string | undefined;

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
   * <p>The principal. You cannot specify this parameter if the association type is
   *      	<code>RESOURCE</code>.</p>
   */
  principal?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource. You cannot specify this parameter if the
   *       	association type is <code>PRINCIPAL</code>.</p>
   */
  resourceArn?: string;

  /**
   * <p>The Amazon Resource Names (ARN) of the resource shares.</p>
   */
  resourceShareArns?: Array<string>;
}

export namespace GetResourceShareAssociationsRequest {
  export function isa(o: any): o is GetResourceShareAssociationsRequest {
    return __isa(o, "GetResourceShareAssociationsRequest");
  }
}

export interface GetResourceShareAssociationsResponse {
  __type?: "GetResourceShareAssociationsResponse";
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>Information about the associations.</p>
   */
  resourceShareAssociations?: Array<ResourceShareAssociation>;
}

export namespace GetResourceShareAssociationsResponse {
  export function isa(o: any): o is GetResourceShareAssociationsResponse {
    return __isa(o, "GetResourceShareAssociationsResponse");
  }
}

export interface GetResourceShareInvitationsRequest {
  __type?: "GetResourceShareInvitationsRequest";
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
   * <p>The Amazon Resource Names (ARN) of the resource shares.</p>
   */
  resourceShareArns?: Array<string>;

  /**
   * <p>The Amazon Resource Names (ARN) of the invitations.</p>
   */
  resourceShareInvitationArns?: Array<string>;
}

export namespace GetResourceShareInvitationsRequest {
  export function isa(o: any): o is GetResourceShareInvitationsRequest {
    return __isa(o, "GetResourceShareInvitationsRequest");
  }
}

export interface GetResourceShareInvitationsResponse {
  __type?: "GetResourceShareInvitationsResponse";
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>Information about the invitations.</p>
   */
  resourceShareInvitations?: Array<ResourceShareInvitation>;
}

export namespace GetResourceShareInvitationsResponse {
  export function isa(o: any): o is GetResourceShareInvitationsResponse {
    return __isa(o, "GetResourceShareInvitationsResponse");
  }
}

export interface GetResourceSharesRequest {
  __type?: "GetResourceSharesRequest";
  /**
   * <p>The maximum number of results to return with a single call.
   *   To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>The name of the resource share.</p>
   */
  name?: string;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The type of owner.</p>
   */
  resourceOwner: ResourceOwner | string | undefined;

  /**
   * <p>The Amazon Resource Names (ARN) of the resource shares.</p>
   */
  resourceShareArns?: Array<string>;

  /**
   * <p>The status of the resource share.</p>
   */
  resourceShareStatus?: ResourceShareStatus | string;

  /**
   * <p>One or more tag filters.</p>
   */
  tagFilters?: Array<TagFilter>;
}

export namespace GetResourceSharesRequest {
  export function isa(o: any): o is GetResourceSharesRequest {
    return __isa(o, "GetResourceSharesRequest");
  }
}

export interface GetResourceSharesResponse {
  __type?: "GetResourceSharesResponse";
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>Information about the resource shares.</p>
   */
  resourceShares?: Array<ResourceShare>;
}

export namespace GetResourceSharesResponse {
  export function isa(o: any): o is GetResourceSharesResponse {
    return __isa(o, "GetResourceSharesResponse");
  }
}

/**
 * <p>A client token input parameter was reused with an operation, but at least one of
 *         the other input parameters is different from the previous call to the operation.</p>
 */
export interface IdempotentParameterMismatchException
  extends __SmithyException,
    $MetadataBearer {
  name: "IdempotentParameterMismatchException";
  $fault: "client";
  message: string | undefined;
}

export namespace IdempotentParameterMismatchException {
  export function isa(o: any): o is IdempotentParameterMismatchException {
    return __isa(o, "IdempotentParameterMismatchException");
  }
}

/**
 * <p>A client token is not valid.</p>
 */
export interface InvalidClientTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidClientTokenException";
  $fault: "client";
  message: string | undefined;
}

export namespace InvalidClientTokenException {
  export function isa(o: any): o is InvalidClientTokenException {
    return __isa(o, "InvalidClientTokenException");
  }
}

/**
 * <p>The specified value for MaxResults is not valid.</p>
 */
export interface InvalidMaxResultsException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidMaxResultsException";
  $fault: "client";
  message: string | undefined;
}

export namespace InvalidMaxResultsException {
  export function isa(o: any): o is InvalidMaxResultsException {
    return __isa(o, "InvalidMaxResultsException");
  }
}

/**
 * <p>The specified value for NextToken is not valid.</p>
 */
export interface InvalidNextTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  message: string | undefined;
}

export namespace InvalidNextTokenException {
  export function isa(o: any): o is InvalidNextTokenException {
    return __isa(o, "InvalidNextTokenException");
  }
}

/**
 * <p>A parameter is not valid.</p>
 */
export interface InvalidParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  message: string | undefined;
}

export namespace InvalidParameterException {
  export function isa(o: any): o is InvalidParameterException {
    return __isa(o, "InvalidParameterException");
  }
}

/**
 * <p>The specified resource type is not valid.</p>
 */
export interface InvalidResourceTypeException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidResourceTypeException";
  $fault: "client";
  message: string | undefined;
}

export namespace InvalidResourceTypeException {
  export function isa(o: any): o is InvalidResourceTypeException {
    return __isa(o, "InvalidResourceTypeException");
  }
}

/**
 * <p>The requested state transition is not valid.</p>
 */
export interface InvalidStateTransitionException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidStateTransitionException";
  $fault: "client";
  message: string | undefined;
}

export namespace InvalidStateTransitionException {
  export function isa(o: any): o is InvalidStateTransitionException {
    return __isa(o, "InvalidStateTransitionException");
  }
}

export interface ListPendingInvitationResourcesRequest {
  __type?: "ListPendingInvitationResourcesRequest";
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
   * <p>The Amazon Resource Name (ARN) of the invitation.</p>
   */
  resourceShareInvitationArn: string | undefined;
}

export namespace ListPendingInvitationResourcesRequest {
  export function isa(o: any): o is ListPendingInvitationResourcesRequest {
    return __isa(o, "ListPendingInvitationResourcesRequest");
  }
}

export interface ListPendingInvitationResourcesResponse {
  __type?: "ListPendingInvitationResourcesResponse";
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>Information about the resources included the resource share.</p>
   */
  resources?: Array<Resource>;
}

export namespace ListPendingInvitationResourcesResponse {
  export function isa(o: any): o is ListPendingInvitationResourcesResponse {
    return __isa(o, "ListPendingInvitationResourcesResponse");
  }
}

export interface ListPermissionsRequest {
  __type?: "ListPermissionsRequest";
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
   * <p>Specifies the resource type for which to list permissions. For example, to list only
   * 		permissions that apply to EC2 subnets, specify <code>ec2:Subnet</code>.</p>
   */
  resourceType?: string;
}

export namespace ListPermissionsRequest {
  export function isa(o: any): o is ListPermissionsRequest {
    return __isa(o, "ListPermissionsRequest");
  }
}

export interface ListPermissionsResponse {
  __type?: "ListPermissionsResponse";
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>Information about the permissions.</p>
   */
  permissions?: Array<ResourceSharePermissionSummary>;
}

export namespace ListPermissionsResponse {
  export function isa(o: any): o is ListPermissionsResponse {
    return __isa(o, "ListPermissionsResponse");
  }
}

export interface ListPrincipalsRequest {
  __type?: "ListPrincipalsRequest";
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
   * <p>The principals.</p>
   */
  principals?: Array<string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn?: string;

  /**
   * <p>The type of owner.</p>
   */
  resourceOwner: ResourceOwner | string | undefined;

  /**
   * <p>The Amazon Resource Names (ARN) of the resource shares.</p>
   */
  resourceShareArns?: Array<string>;

  /**
   * <p>The resource type.</p>
   *          <p>Valid values: <code>ec2:CapacityReservation</code> | <code>ec2:Subnet</code> |
   *     	<code>ec2:TrafficMirrorTarget</code> | <code>ec2:TransitGateway</code> |
   *     	<code>license-manager:LicenseConfiguration</code> |
   *     	<code>rds:Cluster</code> | <code>route53resolver:ResolverRule</code> I
   *     	<code>resource-groups:Group</code>
   *          </p>
   */
  resourceType?: string;
}

export namespace ListPrincipalsRequest {
  export function isa(o: any): o is ListPrincipalsRequest {
    return __isa(o, "ListPrincipalsRequest");
  }
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
  principals?: Array<Principal>;
}

export namespace ListPrincipalsResponse {
  export function isa(o: any): o is ListPrincipalsResponse {
    return __isa(o, "ListPrincipalsResponse");
  }
}

export interface ListResourceSharePermissionsRequest {
  __type?: "ListResourceSharePermissionsRequest";
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
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;
}

export namespace ListResourceSharePermissionsRequest {
  export function isa(o: any): o is ListResourceSharePermissionsRequest {
    return __isa(o, "ListResourceSharePermissionsRequest");
  }
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
  permissions?: Array<ResourceSharePermissionSummary>;
}

export namespace ListResourceSharePermissionsResponse {
  export function isa(o: any): o is ListResourceSharePermissionsResponse {
    return __isa(o, "ListResourceSharePermissionsResponse");
  }
}

export interface ListResourcesRequest {
  __type?: "ListResourcesRequest";
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
   * <p>The principal.</p>
   */
  principal?: string;

  /**
   * <p>The Amazon Resource Names (ARN) of the resources.</p>
   */
  resourceArns?: Array<string>;

  /**
   * <p>The type of owner.</p>
   */
  resourceOwner: ResourceOwner | string | undefined;

  /**
   * <p>The Amazon Resource Names (ARN) of the resource shares.</p>
   */
  resourceShareArns?: Array<string>;

  /**
   * <p>The resource type.</p>
   *    	     <p>Valid values: <code>ec2:CapacityReservation</code> | <code>ec2:Subnet</code> |
   *    		<code>ec2:TrafficMirrorTarget</code> | <code>ec2:TransitGateway</code> |
   *    		<code>license-manager:LicenseConfiguration</code> |
   *    		<code>rds:Cluster</code> | <code>route53resolver:ResolverRule</code> |
   *    		<code>resource-groups:Group</code>
   *          </p>
   */
  resourceType?: string;
}

export namespace ListResourcesRequest {
  export function isa(o: any): o is ListResourcesRequest {
    return __isa(o, "ListResourcesRequest");
  }
}

export interface ListResourcesResponse {
  __type?: "ListResourcesResponse";
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>Information about the resources.</p>
   */
  resources?: Array<Resource>;
}

export namespace ListResourcesResponse {
  export function isa(o: any): o is ListResourcesResponse {
    return __isa(o, "ListResourcesResponse");
  }
}

/**
 * <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
 */
export interface MalformedArnException
  extends __SmithyException,
    $MetadataBearer {
  name: "MalformedArnException";
  $fault: "client";
  message: string | undefined;
}

export namespace MalformedArnException {
  export function isa(o: any): o is MalformedArnException {
    return __isa(o, "MalformedArnException");
  }
}

/**
 * <p>A required input parameter is missing.</p>
 */
export interface MissingRequiredParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "MissingRequiredParameterException";
  $fault: "client";
  message: string | undefined;
}

export namespace MissingRequiredParameterException {
  export function isa(o: any): o is MissingRequiredParameterException {
    return __isa(o, "MissingRequiredParameterException");
  }
}

/**
 * <p>The requested operation is not permitted.</p>
 */
export interface OperationNotPermittedException
  extends __SmithyException,
    $MetadataBearer {
  name: "OperationNotPermittedException";
  $fault: "client";
  message: string | undefined;
}

export namespace OperationNotPermittedException {
  export function isa(o: any): o is OperationNotPermittedException {
    return __isa(o, "OperationNotPermittedException");
  }
}

/**
 * <p>Describes a principal for use with AWS Resource Access Manager.</p>
 */
export interface Principal {
  __type?: "Principal";
  /**
   * <p>The time when the principal was associated with the resource share.</p>
   */
  creationTime?: Date;

  /**
   * <p>Indicates whether the principal belongs to the same AWS organization as the AWS account that owns the resource share.</p>
   */
  external?: boolean;

  /**
   * <p>The ID of the principal.</p>
   */
  id?: string;

  /**
   * <p>The time when the association was last updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn?: string;
}

export namespace Principal {
  export function isa(o: any): o is Principal {
    return __isa(o, "Principal");
  }
}

export interface PromoteResourceShareCreatedFromPolicyRequest {
  __type?: "PromoteResourceShareCreatedFromPolicyRequest";
  /**
   * <p>The ARN of the resource share to promote.</p>
   */
  resourceShareArn: string | undefined;
}

export namespace PromoteResourceShareCreatedFromPolicyRequest {
  export function isa(
    o: any
  ): o is PromoteResourceShareCreatedFromPolicyRequest {
    return __isa(o, "PromoteResourceShareCreatedFromPolicyRequest");
  }
}

export interface PromoteResourceShareCreatedFromPolicyResponse {
  __type?: "PromoteResourceShareCreatedFromPolicyResponse";
  /**
   * <p>Indicates whether the request succeeded.</p>
   */
  returnValue?: boolean;
}

export namespace PromoteResourceShareCreatedFromPolicyResponse {
  export function isa(
    o: any
  ): o is PromoteResourceShareCreatedFromPolicyResponse {
    return __isa(o, "PromoteResourceShareCreatedFromPolicyResponse");
  }
}

export interface RejectResourceShareInvitationRequest {
  __type?: "RejectResourceShareInvitationRequest";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the invitation.</p>
   */
  resourceShareInvitationArn: string | undefined;
}

export namespace RejectResourceShareInvitationRequest {
  export function isa(o: any): o is RejectResourceShareInvitationRequest {
    return __isa(o, "RejectResourceShareInvitationRequest");
  }
}

export interface RejectResourceShareInvitationResponse {
  __type?: "RejectResourceShareInvitationResponse";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>Information about the invitation.</p>
   */
  resourceShareInvitation?: ResourceShareInvitation;
}

export namespace RejectResourceShareInvitationResponse {
  export function isa(o: any): o is RejectResourceShareInvitationResponse {
    return __isa(o, "RejectResourceShareInvitationResponse");
  }
}

/**
 * <p>Describes a resource associated with a resource share.</p>
 */
export interface Resource {
  __type?: "Resource";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  arn?: string;

  /**
   * <p>The time when the resource was associated with the resource share.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time when the association was last updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The ARN of the resource group. This value is returned only if the resource is a resource
   * 			group.</p>
   */
  resourceGroupArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn?: string;

  /**
   * <p>The status of the resource.</p>
   */
  status?: ResourceStatus | string;

  /**
   * <p>A message about the status of the resource.</p>
   */
  statusMessage?: string;

  /**
   * <p>The resource type.</p>
   */
  type?: string;
}

export namespace Resource {
  export function isa(o: any): o is Resource {
    return __isa(o, "Resource");
  }
}

/**
 * <p>An Amazon Resource Name (ARN) was not found.</p>
 */
export interface ResourceArnNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceArnNotFoundException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceArnNotFoundException {
  export function isa(o: any): o is ResourceArnNotFoundException {
    return __isa(o, "ResourceArnNotFoundException");
  }
}

export enum ResourceOwner {
  OTHER_ACCOUNTS = "OTHER-ACCOUNTS",
  SELF = "SELF"
}

/**
 * <p>Describes a resource share.</p>
 */
export interface ResourceShare {
  __type?: "ResourceShare";
  /**
   * <p>Indicates whether principals outside your AWS organization can be associated with a resource share.</p>
   */
  allowExternalPrincipals?: boolean;

  /**
   * <p>The time when the resource share was created.</p>
   */
  creationTime?: Date;

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
   * <p>The time when the resource share was last updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The name of the resource share.</p>
   */
  name?: string;

  /**
   * <p>The ID of the AWS account that owns the resource share.</p>
   */
  owningAccountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn?: string;

  /**
   * <p>The status of the resource share.</p>
   */
  status?: ResourceShareStatus | string;

  /**
   * <p>A message about the status of the resource share.</p>
   */
  statusMessage?: string;

  /**
   * <p>The tags for the resource share.</p>
   */
  tags?: Array<Tag>;
}

export namespace ResourceShare {
  export function isa(o: any): o is ResourceShare {
    return __isa(o, "ResourceShare");
  }
}

/**
 * <p>Describes an association with a resource share.</p>
 */
export interface ResourceShareAssociation {
  __type?: "ResourceShareAssociation";
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
   * <p>The time when the association was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>Indicates whether the principal belongs to the same AWS organization as the AWS account that owns the resource share.</p>
   */
  external?: boolean;

  /**
   * <p>The time when the association was last updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn?: string;

  /**
   * <p>The name of the resource share.</p>
   */
  resourceShareName?: string;

  /**
   * <p>The status of the association.</p>
   */
  status?: ResourceShareAssociationStatus | string;

  /**
   * <p>A message about the status of the association.</p>
   */
  statusMessage?: string;
}

export namespace ResourceShareAssociation {
  export function isa(o: any): o is ResourceShareAssociation {
    return __isa(o, "ResourceShareAssociation");
  }
}

export type ResourceShareAssociationStatus =
  | "ASSOCIATED"
  | "ASSOCIATING"
  | "DISASSOCIATED"
  | "DISASSOCIATING"
  | "FAILED";

export type ResourceShareAssociationType = "PRINCIPAL" | "RESOURCE";

export type ResourceShareFeatureSet =
  | "CREATED_FROM_POLICY"
  | "PROMOTING_TO_STANDARD"
  | "STANDARD";

/**
 * <p>Describes an invitation to join a resource share.</p>
 */
export interface ResourceShareInvitation {
  __type?: "ResourceShareInvitation";
  /**
   * <p>The date and time when the invitation was sent.</p>
   */
  invitationTimestamp?: Date;

  /**
   * <p>The ID of the AWS account that received the invitation.</p>
   */
  receiverAccountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn?: string;

  /**
   * <p>To view the resources associated with a pending resource share invitation, use
   *       	<a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPendingInvitationResources.html">
   *       		ListPendingInvitationResources</a>.</p>
   */
  resourceShareAssociations?: Array<ResourceShareAssociation>;

  /**
   * <p>The Amazon Resource Name (ARN) of the invitation.</p>
   */
  resourceShareInvitationArn?: string;

  /**
   * <p>The name of the resource share.</p>
   */
  resourceShareName?: string;

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
  export function isa(o: any): o is ResourceShareInvitation {
    return __isa(o, "ResourceShareInvitation");
  }
}

/**
 * <p>The invitation was already accepted.</p>
 */
export interface ResourceShareInvitationAlreadyAcceptedException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceShareInvitationAlreadyAcceptedException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceShareInvitationAlreadyAcceptedException {
  export function isa(
    o: any
  ): o is ResourceShareInvitationAlreadyAcceptedException {
    return __isa(o, "ResourceShareInvitationAlreadyAcceptedException");
  }
}

/**
 * <p>The invitation was already rejected.</p>
 */
export interface ResourceShareInvitationAlreadyRejectedException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceShareInvitationAlreadyRejectedException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceShareInvitationAlreadyRejectedException {
  export function isa(
    o: any
  ): o is ResourceShareInvitationAlreadyRejectedException {
    return __isa(o, "ResourceShareInvitationAlreadyRejectedException");
  }
}

/**
 * <p>The Amazon Resource Name (ARN) for an invitation was not found.</p>
 */
export interface ResourceShareInvitationArnNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceShareInvitationArnNotFoundException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceShareInvitationArnNotFoundException {
  export function isa(
    o: any
  ): o is ResourceShareInvitationArnNotFoundException {
    return __isa(o, "ResourceShareInvitationArnNotFoundException");
  }
}

/**
 * <p>The invitation is expired.</p>
 */
export interface ResourceShareInvitationExpiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceShareInvitationExpiredException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceShareInvitationExpiredException {
  export function isa(o: any): o is ResourceShareInvitationExpiredException {
    return __isa(o, "ResourceShareInvitationExpiredException");
  }
}

export type ResourceShareInvitationStatus =
  | "ACCEPTED"
  | "EXPIRED"
  | "PENDING"
  | "REJECTED";

/**
 * <p>The requested resource share exceeds the limit for your account.</p>
 */
export interface ResourceShareLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceShareLimitExceededException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceShareLimitExceededException {
  export function isa(o: any): o is ResourceShareLimitExceededException {
    return __isa(o, "ResourceShareLimitExceededException");
  }
}

/**
 * <p>Information about an AWS RAM permission.</p>
 */
export interface ResourceSharePermissionDetail {
  __type?: "ResourceSharePermissionDetail";
  /**
   * <p>The ARN of the permission.</p>
   */
  arn?: string;

  /**
   * <p>The date and time when the permission was created.</p>
   */
  creationTime?: Date;

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
   * <p>The name of the permission.</p>
   */
  name?: string;

  /**
   * <p>The permission's effect and actions in JSON format. The <code>effect</code> indicates whether
   * 			the actions are allowed or denied. The <code>actions</code> list the API actions to
   * 			which the principal is granted or denied access.</p>
   */
  permission?: string;

  /**
   * <p>The resource type to which the permission applies.</p>
   */
  resourceType?: string;

  /**
   * <p>The identifier for the version of the permission.</p>
   */
  version?: string;
}

export namespace ResourceSharePermissionDetail {
  export function isa(o: any): o is ResourceSharePermissionDetail {
    return __isa(o, "ResourceSharePermissionDetail");
  }
}

/**
 * <p>Information about a permission that is associated with a resource share.</p>
 */
export interface ResourceSharePermissionSummary {
  __type?: "ResourceSharePermissionSummary";
  /**
   * <p>The ARN of the permission.</p>
   */
  arn?: string;

  /**
   * <p>The date and time when the permission was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The identifier for the version of the permission that is set as the default version.</p>
   */
  defaultVersion?: boolean;

  /**
   * <p>The date and time when the permission was last updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The name of the permission.</p>
   */
  name?: string;

  /**
   * <p>The type of resource to which the permission applies.</p>
   */
  resourceType?: string;

  /**
   * <p>The current status of the permission.</p>
   */
  status?: string;

  /**
   * <p>The identifier for the version of the permission.</p>
   */
  version?: string;
}

export namespace ResourceSharePermissionSummary {
  export function isa(o: any): o is ResourceSharePermissionSummary {
    return __isa(o, "ResourceSharePermissionSummary");
  }
}

export type ResourceShareStatus =
  | "ACTIVE"
  | "DELETED"
  | "DELETING"
  | "FAILED"
  | "PENDING";

export type ResourceStatus =
  | "AVAILABLE"
  | "LIMIT_EXCEEDED"
  | "PENDING"
  | "UNAVAILABLE"
  | "ZONAL_RESOURCE_INACCESSIBLE";

/**
 * <p>The service could not respond to the request due to an internal problem.</p>
 */
export interface ServerInternalException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServerInternalException";
  $fault: "server";
  message: string | undefined;
}

export namespace ServerInternalException {
  export function isa(o: any): o is ServerInternalException {
    return __isa(o, "ServerInternalException");
  }
}

/**
 * <p>The service is not available.</p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message: string | undefined;
}

export namespace ServiceUnavailableException {
  export function isa(o: any): o is ServiceUnavailableException {
    return __isa(o, "ServiceUnavailableException");
  }
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
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
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
  tagValues?: Array<string>;
}

export namespace TagFilter {
  export function isa(o: any): o is TagFilter {
    return __isa(o, "TagFilter");
  }
}

/**
 * <p>The requested tags exceed the limit for your account.</p>
 */
export interface TagLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "TagLimitExceededException";
  $fault: "client";
  message: string | undefined;
}

export namespace TagLimitExceededException {
  export function isa(o: any): o is TagLimitExceededException {
    return __isa(o, "TagLimitExceededException");
  }
}

/**
 * <p>The specified tag is a reserved word and cannot be used.</p>
 */
export interface TagPolicyViolationException
  extends __SmithyException,
    $MetadataBearer {
  name: "TagPolicyViolationException";
  $fault: "client";
  message: string | undefined;
}

export namespace TagPolicyViolationException {
  export function isa(o: any): o is TagPolicyViolationException {
    return __isa(o, "TagPolicyViolationException");
  }
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
  tags: Array<Tag> | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
}

/**
 * <p>A specified resource was not found.</p>
 */
export interface UnknownResourceException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnknownResourceException";
  $fault: "client";
  message: string | undefined;
}

export namespace UnknownResourceException {
  export function isa(o: any): o is UnknownResourceException {
    return __isa(o, "UnknownResourceException");
  }
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
  tagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}

export interface UpdateResourceShareRequest {
  __type?: "UpdateResourceShareRequest";
  /**
   * <p>Indicates whether principals outside your AWS organization can be associated with a resource share.</p>
   */
  allowExternalPrincipals?: boolean;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The name of the resource share.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn: string | undefined;
}

export namespace UpdateResourceShareRequest {
  export function isa(o: any): o is UpdateResourceShareRequest {
    return __isa(o, "UpdateResourceShareRequest");
  }
}

export interface UpdateResourceShareResponse {
  __type?: "UpdateResourceShareResponse";
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>Information about the resource share.</p>
   */
  resourceShare?: ResourceShare;
}

export namespace UpdateResourceShareResponse {
  export function isa(o: any): o is UpdateResourceShareResponse {
    return __isa(o, "UpdateResourceShareResponse");
  }
}
