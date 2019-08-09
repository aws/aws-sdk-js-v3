import {
  _BatchCreateObjectResponse,
  _UnmarshalledBatchCreateObjectResponse
} from "./_BatchCreateObjectResponse";
import {
  _BatchAttachObjectResponse,
  _UnmarshalledBatchAttachObjectResponse
} from "./_BatchAttachObjectResponse";
import {
  _BatchDetachObjectResponse,
  _UnmarshalledBatchDetachObjectResponse
} from "./_BatchDetachObjectResponse";
import {
  _BatchUpdateObjectAttributesResponse,
  _UnmarshalledBatchUpdateObjectAttributesResponse
} from "./_BatchUpdateObjectAttributesResponse";
import {
  _BatchDeleteObjectResponse,
  _UnmarshalledBatchDeleteObjectResponse
} from "./_BatchDeleteObjectResponse";
import {
  _BatchAddFacetToObjectResponse,
  _UnmarshalledBatchAddFacetToObjectResponse
} from "./_BatchAddFacetToObjectResponse";
import {
  _BatchRemoveFacetFromObjectResponse,
  _UnmarshalledBatchRemoveFacetFromObjectResponse
} from "./_BatchRemoveFacetFromObjectResponse";
import {
  _BatchAttachPolicyResponse,
  _UnmarshalledBatchAttachPolicyResponse
} from "./_BatchAttachPolicyResponse";
import {
  _BatchDetachPolicyResponse,
  _UnmarshalledBatchDetachPolicyResponse
} from "./_BatchDetachPolicyResponse";
import {
  _BatchCreateIndexResponse,
  _UnmarshalledBatchCreateIndexResponse
} from "./_BatchCreateIndexResponse";
import {
  _BatchAttachToIndexResponse,
  _UnmarshalledBatchAttachToIndexResponse
} from "./_BatchAttachToIndexResponse";
import {
  _BatchDetachFromIndexResponse,
  _UnmarshalledBatchDetachFromIndexResponse
} from "./_BatchDetachFromIndexResponse";
import {
  _BatchAttachTypedLinkResponse,
  _UnmarshalledBatchAttachTypedLinkResponse
} from "./_BatchAttachTypedLinkResponse";
import {
  _BatchDetachTypedLinkResponse,
  _UnmarshalledBatchDetachTypedLinkResponse
} from "./_BatchDetachTypedLinkResponse";
import {
  _BatchUpdateLinkAttributesResponse,
  _UnmarshalledBatchUpdateLinkAttributesResponse
} from "./_BatchUpdateLinkAttributesResponse";

/**
 * <p>Represents the output of a <code>BatchWrite</code> response operation.</p>
 */
export interface _BatchWriteOperationResponse {
  /**
   * <p>Creates an object in a <a>Directory</a>.</p>
   */
  CreateObject?: _BatchCreateObjectResponse;

  /**
   * <p>Attaches an object to a <a>Directory</a>.</p>
   */
  AttachObject?: _BatchAttachObjectResponse;

  /**
   * <p>Detaches an object from a <a>Directory</a>.</p>
   */
  DetachObject?: _BatchDetachObjectResponse;

  /**
   * <p>Updates a given object’s attributes.</p>
   */
  UpdateObjectAttributes?: _BatchUpdateObjectAttributesResponse;

  /**
   * <p>Deletes an object in a <a>Directory</a>.</p>
   */
  DeleteObject?: _BatchDeleteObjectResponse;

  /**
   * <p>The result of an add facet to object batch operation.</p>
   */
  AddFacetToObject?: _BatchAddFacetToObjectResponse;

  /**
   * <p>The result of a batch remove facet from object operation.</p>
   */
  RemoveFacetFromObject?: _BatchRemoveFacetFromObjectResponse;

  /**
   * <p>Attaches a policy object to a regular object. An object can have a limited number of attached policies.</p>
   */
  AttachPolicy?: _BatchAttachPolicyResponse;

  /**
   * <p>Detaches a policy from a <a>Directory</a>.</p>
   */
  DetachPolicy?: _BatchDetachPolicyResponse;

  /**
   * <p>Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.htm">Indexing and search</a> for more information.</p>
   */
  CreateIndex?: _BatchCreateIndexResponse;

  /**
   * <p>Attaches the specified object to the specified index.</p>
   */
  AttachToIndex?: _BatchAttachToIndexResponse;

  /**
   * <p>Detaches the specified object from the specified index.</p>
   */
  DetachFromIndex?: _BatchDetachFromIndexResponse;

  /**
   * <p>Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  AttachTypedLink?: _BatchAttachTypedLinkResponse;

  /**
   * <p>Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  DetachTypedLink?: _BatchDetachTypedLinkResponse;

  /**
   * <p>Represents the output of a <code>BatchWrite</code> response operation.</p>
   */
  UpdateLinkAttributes?: _BatchUpdateLinkAttributesResponse;
}

export interface _UnmarshalledBatchWriteOperationResponse
  extends _BatchWriteOperationResponse {
  /**
   * <p>Creates an object in a <a>Directory</a>.</p>
   */
  CreateObject?: _UnmarshalledBatchCreateObjectResponse;

  /**
   * <p>Attaches an object to a <a>Directory</a>.</p>
   */
  AttachObject?: _UnmarshalledBatchAttachObjectResponse;

  /**
   * <p>Detaches an object from a <a>Directory</a>.</p>
   */
  DetachObject?: _UnmarshalledBatchDetachObjectResponse;

  /**
   * <p>Updates a given object’s attributes.</p>
   */
  UpdateObjectAttributes?: _UnmarshalledBatchUpdateObjectAttributesResponse;

  /**
   * <p>Deletes an object in a <a>Directory</a>.</p>
   */
  DeleteObject?: _UnmarshalledBatchDeleteObjectResponse;

  /**
   * <p>The result of an add facet to object batch operation.</p>
   */
  AddFacetToObject?: _UnmarshalledBatchAddFacetToObjectResponse;

  /**
   * <p>The result of a batch remove facet from object operation.</p>
   */
  RemoveFacetFromObject?: _UnmarshalledBatchRemoveFacetFromObjectResponse;

  /**
   * <p>Attaches a policy object to a regular object. An object can have a limited number of attached policies.</p>
   */
  AttachPolicy?: _UnmarshalledBatchAttachPolicyResponse;

  /**
   * <p>Detaches a policy from a <a>Directory</a>.</p>
   */
  DetachPolicy?: _UnmarshalledBatchDetachPolicyResponse;

  /**
   * <p>Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.htm">Indexing and search</a> for more information.</p>
   */
  CreateIndex?: _UnmarshalledBatchCreateIndexResponse;

  /**
   * <p>Attaches the specified object to the specified index.</p>
   */
  AttachToIndex?: _UnmarshalledBatchAttachToIndexResponse;

  /**
   * <p>Detaches the specified object from the specified index.</p>
   */
  DetachFromIndex?: _UnmarshalledBatchDetachFromIndexResponse;

  /**
   * <p>Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  AttachTypedLink?: _UnmarshalledBatchAttachTypedLinkResponse;

  /**
   * <p>Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  DetachTypedLink?: _UnmarshalledBatchDetachTypedLinkResponse;

  /**
   * <p>Represents the output of a <code>BatchWrite</code> response operation.</p>
   */
  UpdateLinkAttributes?: _UnmarshalledBatchUpdateLinkAttributesResponse;
}
