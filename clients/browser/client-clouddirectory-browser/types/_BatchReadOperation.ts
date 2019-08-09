import {
  _BatchListObjectAttributes,
  _UnmarshalledBatchListObjectAttributes
} from "./_BatchListObjectAttributes";
import {
  _BatchListObjectChildren,
  _UnmarshalledBatchListObjectChildren
} from "./_BatchListObjectChildren";
import {
  _BatchListAttachedIndices,
  _UnmarshalledBatchListAttachedIndices
} from "./_BatchListAttachedIndices";
import {
  _BatchListObjectParentPaths,
  _UnmarshalledBatchListObjectParentPaths
} from "./_BatchListObjectParentPaths";
import {
  _BatchGetObjectInformation,
  _UnmarshalledBatchGetObjectInformation
} from "./_BatchGetObjectInformation";
import {
  _BatchGetObjectAttributes,
  _UnmarshalledBatchGetObjectAttributes
} from "./_BatchGetObjectAttributes";
import {
  _BatchListObjectParents,
  _UnmarshalledBatchListObjectParents
} from "./_BatchListObjectParents";
import {
  _BatchListObjectPolicies,
  _UnmarshalledBatchListObjectPolicies
} from "./_BatchListObjectPolicies";
import {
  _BatchListPolicyAttachments,
  _UnmarshalledBatchListPolicyAttachments
} from "./_BatchListPolicyAttachments";
import {
  _BatchLookupPolicy,
  _UnmarshalledBatchLookupPolicy
} from "./_BatchLookupPolicy";
import {
  _BatchListIndex,
  _UnmarshalledBatchListIndex
} from "./_BatchListIndex";
import {
  _BatchListOutgoingTypedLinks,
  _UnmarshalledBatchListOutgoingTypedLinks
} from "./_BatchListOutgoingTypedLinks";
import {
  _BatchListIncomingTypedLinks,
  _UnmarshalledBatchListIncomingTypedLinks
} from "./_BatchListIncomingTypedLinks";
import {
  _BatchGetLinkAttributes,
  _UnmarshalledBatchGetLinkAttributes
} from "./_BatchGetLinkAttributes";

/**
 * <p>Represents the output of a <code>BatchRead</code> operation.</p>
 */
export interface _BatchReadOperation {
  /**
   * <p>Lists all attributes that are associated with an object.</p>
   */
  ListObjectAttributes?: _BatchListObjectAttributes;

  /**
   * <p>Returns a paginated list of child objects that are associated with a given object.</p>
   */
  ListObjectChildren?: _BatchListObjectChildren;

  /**
   * <p>Lists indices attached to an object.</p>
   */
  ListAttachedIndices?: _BatchListAttachedIndices;

  /**
   * <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p>
   */
  ListObjectParentPaths?: _BatchListObjectParentPaths;

  /**
   * <p>Retrieves metadata about an object.</p>
   */
  GetObjectInformation?: _BatchGetObjectInformation;

  /**
   * <p>Retrieves attributes within a facet that are associated with an object.</p>
   */
  GetObjectAttributes?: _BatchGetObjectAttributes;

  /**
   * _BatchListObjectParents shape
   */
  ListObjectParents?: _BatchListObjectParents;

  /**
   * <p>Returns policies attached to an object in pagination fashion.</p>
   */
  ListObjectPolicies?: _BatchListObjectPolicies;

  /**
   * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.</p>
   */
  ListPolicyAttachments?: _BatchListPolicyAttachments;

  /**
   * <p>Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  LookupPolicy?: _BatchLookupPolicy;

  /**
   * <p>Lists objects attached to the specified index.</p>
   */
  ListIndex?: _BatchListIndex;

  /**
   * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListOutgoingTypedLinks?: _BatchListOutgoingTypedLinks;

  /**
   * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListIncomingTypedLinks?: _BatchListIncomingTypedLinks;

  /**
   * <p>Retrieves attributes that are associated with a typed link.</p>
   */
  GetLinkAttributes?: _BatchGetLinkAttributes;
}

export interface _UnmarshalledBatchReadOperation extends _BatchReadOperation {
  /**
   * <p>Lists all attributes that are associated with an object.</p>
   */
  ListObjectAttributes?: _UnmarshalledBatchListObjectAttributes;

  /**
   * <p>Returns a paginated list of child objects that are associated with a given object.</p>
   */
  ListObjectChildren?: _UnmarshalledBatchListObjectChildren;

  /**
   * <p>Lists indices attached to an object.</p>
   */
  ListAttachedIndices?: _UnmarshalledBatchListAttachedIndices;

  /**
   * <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p>
   */
  ListObjectParentPaths?: _UnmarshalledBatchListObjectParentPaths;

  /**
   * <p>Retrieves metadata about an object.</p>
   */
  GetObjectInformation?: _UnmarshalledBatchGetObjectInformation;

  /**
   * <p>Retrieves attributes within a facet that are associated with an object.</p>
   */
  GetObjectAttributes?: _UnmarshalledBatchGetObjectAttributes;

  /**
   * _BatchListObjectParents shape
   */
  ListObjectParents?: _UnmarshalledBatchListObjectParents;

  /**
   * <p>Returns policies attached to an object in pagination fashion.</p>
   */
  ListObjectPolicies?: _UnmarshalledBatchListObjectPolicies;

  /**
   * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.</p>
   */
  ListPolicyAttachments?: _UnmarshalledBatchListPolicyAttachments;

  /**
   * <p>Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  LookupPolicy?: _UnmarshalledBatchLookupPolicy;

  /**
   * <p>Lists objects attached to the specified index.</p>
   */
  ListIndex?: _UnmarshalledBatchListIndex;

  /**
   * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListOutgoingTypedLinks?: _UnmarshalledBatchListOutgoingTypedLinks;

  /**
   * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListIncomingTypedLinks?: _UnmarshalledBatchListIncomingTypedLinks;

  /**
   * <p>Retrieves attributes that are associated with a typed link.</p>
   */
  GetLinkAttributes?: _UnmarshalledBatchGetLinkAttributes;
}
