import {
  _BatchListObjectAttributesResponse,
  _UnmarshalledBatchListObjectAttributesResponse
} from "./_BatchListObjectAttributesResponse";
import {
  _BatchListObjectChildrenResponse,
  _UnmarshalledBatchListObjectChildrenResponse
} from "./_BatchListObjectChildrenResponse";
import {
  _BatchGetObjectInformationResponse,
  _UnmarshalledBatchGetObjectInformationResponse
} from "./_BatchGetObjectInformationResponse";
import {
  _BatchGetObjectAttributesResponse,
  _UnmarshalledBatchGetObjectAttributesResponse
} from "./_BatchGetObjectAttributesResponse";
import {
  _BatchListAttachedIndicesResponse,
  _UnmarshalledBatchListAttachedIndicesResponse
} from "./_BatchListAttachedIndicesResponse";
import {
  _BatchListObjectParentPathsResponse,
  _UnmarshalledBatchListObjectParentPathsResponse
} from "./_BatchListObjectParentPathsResponse";
import {
  _BatchListObjectPoliciesResponse,
  _UnmarshalledBatchListObjectPoliciesResponse
} from "./_BatchListObjectPoliciesResponse";
import {
  _BatchListPolicyAttachmentsResponse,
  _UnmarshalledBatchListPolicyAttachmentsResponse
} from "./_BatchListPolicyAttachmentsResponse";
import {
  _BatchLookupPolicyResponse,
  _UnmarshalledBatchLookupPolicyResponse
} from "./_BatchLookupPolicyResponse";
import {
  _BatchListIndexResponse,
  _UnmarshalledBatchListIndexResponse
} from "./_BatchListIndexResponse";
import {
  _BatchListOutgoingTypedLinksResponse,
  _UnmarshalledBatchListOutgoingTypedLinksResponse
} from "./_BatchListOutgoingTypedLinksResponse";
import {
  _BatchListIncomingTypedLinksResponse,
  _UnmarshalledBatchListIncomingTypedLinksResponse
} from "./_BatchListIncomingTypedLinksResponse";
import {
  _BatchGetLinkAttributesResponse,
  _UnmarshalledBatchGetLinkAttributesResponse
} from "./_BatchGetLinkAttributesResponse";
import {
  _BatchListObjectParentsResponse,
  _UnmarshalledBatchListObjectParentsResponse
} from "./_BatchListObjectParentsResponse";

/**
 * <p>Represents the output of a <code>BatchRead</code> success response operation.</p>
 */
export interface _BatchReadSuccessfulResponse {
  /**
   * <p>Lists all attributes that are associated with an object.</p>
   */
  ListObjectAttributes?: _BatchListObjectAttributesResponse;

  /**
   * <p>Returns a paginated list of child objects that are associated with a given object.</p>
   */
  ListObjectChildren?: _BatchListObjectChildrenResponse;

  /**
   * <p>Retrieves metadata about an object.</p>
   */
  GetObjectInformation?: _BatchGetObjectInformationResponse;

  /**
   * <p>Retrieves attributes within a facet that are associated with an object.</p>
   */
  GetObjectAttributes?: _BatchGetObjectAttributesResponse;

  /**
   * <p>Lists indices attached to an object.</p>
   */
  ListAttachedIndices?: _BatchListAttachedIndicesResponse;

  /**
   * <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p>
   */
  ListObjectParentPaths?: _BatchListObjectParentPathsResponse;

  /**
   * <p>Returns policies attached to an object in pagination fashion.</p>
   */
  ListObjectPolicies?: _BatchListObjectPoliciesResponse;

  /**
   * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.</p>
   */
  ListPolicyAttachments?: _BatchListPolicyAttachmentsResponse;

  /**
   * <p>Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  LookupPolicy?: _BatchLookupPolicyResponse;

  /**
   * <p>Lists objects attached to the specified index.</p>
   */
  ListIndex?: _BatchListIndexResponse;

  /**
   * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListOutgoingTypedLinks?: _BatchListOutgoingTypedLinksResponse;

  /**
   * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListIncomingTypedLinks?: _BatchListIncomingTypedLinksResponse;

  /**
   * <p>The list of attributes to retrieve from the typed link.</p>
   */
  GetLinkAttributes?: _BatchGetLinkAttributesResponse;

  /**
   * _BatchListObjectParentsResponse shape
   */
  ListObjectParents?: _BatchListObjectParentsResponse;
}

export interface _UnmarshalledBatchReadSuccessfulResponse
  extends _BatchReadSuccessfulResponse {
  /**
   * <p>Lists all attributes that are associated with an object.</p>
   */
  ListObjectAttributes?: _UnmarshalledBatchListObjectAttributesResponse;

  /**
   * <p>Returns a paginated list of child objects that are associated with a given object.</p>
   */
  ListObjectChildren?: _UnmarshalledBatchListObjectChildrenResponse;

  /**
   * <p>Retrieves metadata about an object.</p>
   */
  GetObjectInformation?: _UnmarshalledBatchGetObjectInformationResponse;

  /**
   * <p>Retrieves attributes within a facet that are associated with an object.</p>
   */
  GetObjectAttributes?: _UnmarshalledBatchGetObjectAttributesResponse;

  /**
   * <p>Lists indices attached to an object.</p>
   */
  ListAttachedIndices?: _UnmarshalledBatchListAttachedIndicesResponse;

  /**
   * <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p>
   */
  ListObjectParentPaths?: _UnmarshalledBatchListObjectParentPathsResponse;

  /**
   * <p>Returns policies attached to an object in pagination fashion.</p>
   */
  ListObjectPolicies?: _UnmarshalledBatchListObjectPoliciesResponse;

  /**
   * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.</p>
   */
  ListPolicyAttachments?: _UnmarshalledBatchListPolicyAttachmentsResponse;

  /**
   * <p>Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  LookupPolicy?: _UnmarshalledBatchLookupPolicyResponse;

  /**
   * <p>Lists objects attached to the specified index.</p>
   */
  ListIndex?: _UnmarshalledBatchListIndexResponse;

  /**
   * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListOutgoingTypedLinks?: _UnmarshalledBatchListOutgoingTypedLinksResponse;

  /**
   * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListIncomingTypedLinks?: _UnmarshalledBatchListIncomingTypedLinksResponse;

  /**
   * <p>The list of attributes to retrieve from the typed link.</p>
   */
  GetLinkAttributes?: _UnmarshalledBatchGetLinkAttributesResponse;

  /**
   * _BatchListObjectParentsResponse shape
   */
  ListObjectParents?: _UnmarshalledBatchListObjectParentsResponse;
}
