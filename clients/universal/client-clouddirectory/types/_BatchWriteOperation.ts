import {
  _BatchCreateObject,
  _UnmarshalledBatchCreateObject
} from "./_BatchCreateObject";
import {
  _BatchAttachObject,
  _UnmarshalledBatchAttachObject
} from "./_BatchAttachObject";
import {
  _BatchDetachObject,
  _UnmarshalledBatchDetachObject
} from "./_BatchDetachObject";
import {
  _BatchUpdateObjectAttributes,
  _UnmarshalledBatchUpdateObjectAttributes
} from "./_BatchUpdateObjectAttributes";
import {
  _BatchDeleteObject,
  _UnmarshalledBatchDeleteObject
} from "./_BatchDeleteObject";
import {
  _BatchAddFacetToObject,
  _UnmarshalledBatchAddFacetToObject
} from "./_BatchAddFacetToObject";
import {
  _BatchRemoveFacetFromObject,
  _UnmarshalledBatchRemoveFacetFromObject
} from "./_BatchRemoveFacetFromObject";
import {
  _BatchAttachPolicy,
  _UnmarshalledBatchAttachPolicy
} from "./_BatchAttachPolicy";
import {
  _BatchDetachPolicy,
  _UnmarshalledBatchDetachPolicy
} from "./_BatchDetachPolicy";
import {
  _BatchCreateIndex,
  _UnmarshalledBatchCreateIndex
} from "./_BatchCreateIndex";
import {
  _BatchAttachToIndex,
  _UnmarshalledBatchAttachToIndex
} from "./_BatchAttachToIndex";
import {
  _BatchDetachFromIndex,
  _UnmarshalledBatchDetachFromIndex
} from "./_BatchDetachFromIndex";
import {
  _BatchAttachTypedLink,
  _UnmarshalledBatchAttachTypedLink
} from "./_BatchAttachTypedLink";
import {
  _BatchDetachTypedLink,
  _UnmarshalledBatchDetachTypedLink
} from "./_BatchDetachTypedLink";
import {
  _BatchUpdateLinkAttributes,
  _UnmarshalledBatchUpdateLinkAttributes
} from "./_BatchUpdateLinkAttributes";

/**
 * <p>Represents the output of a <code>BatchWrite</code> operation. </p>
 */
export interface _BatchWriteOperation {
  /**
   * <p>Creates an object.</p>
   */
  CreateObject?: _BatchCreateObject;

  /**
   * <p>Attaches an object to a <a>Directory</a>.</p>
   */
  AttachObject?: _BatchAttachObject;

  /**
   * <p>Detaches an object from a <a>Directory</a>.</p>
   */
  DetachObject?: _BatchDetachObject;

  /**
   * <p>Updates a given object's attributes.</p>
   */
  UpdateObjectAttributes?: _BatchUpdateObjectAttributes;

  /**
   * <p>Deletes an object in a <a>Directory</a>.</p>
   */
  DeleteObject?: _BatchDeleteObject;

  /**
   * <p>A batch operation that adds a facet to an object.</p>
   */
  AddFacetToObject?: _BatchAddFacetToObject;

  /**
   * <p>A batch operation that removes a facet from an object.</p>
   */
  RemoveFacetFromObject?: _BatchRemoveFacetFromObject;

  /**
   * <p>Attaches a policy object to a regular object. An object can have a limited number of attached policies.</p>
   */
  AttachPolicy?: _BatchAttachPolicy;

  /**
   * <p>Detaches a policy from a <a>Directory</a>.</p>
   */
  DetachPolicy?: _BatchDetachPolicy;

  /**
   * <p>Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.htm">Indexing and search</a> for more information.</p>
   */
  CreateIndex?: _BatchCreateIndex;

  /**
   * <p>Attaches the specified object to the specified index.</p>
   */
  AttachToIndex?: _BatchAttachToIndex;

  /**
   * <p>Detaches the specified object from the specified index.</p>
   */
  DetachFromIndex?: _BatchDetachFromIndex;

  /**
   * <p>Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  AttachTypedLink?: _BatchAttachTypedLink;

  /**
   * <p>Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  DetachTypedLink?: _BatchDetachTypedLink;

  /**
   * <p>Updates a given object's attributes.</p>
   */
  UpdateLinkAttributes?: _BatchUpdateLinkAttributes;
}

export interface _UnmarshalledBatchWriteOperation extends _BatchWriteOperation {
  /**
   * <p>Creates an object.</p>
   */
  CreateObject?: _UnmarshalledBatchCreateObject;

  /**
   * <p>Attaches an object to a <a>Directory</a>.</p>
   */
  AttachObject?: _UnmarshalledBatchAttachObject;

  /**
   * <p>Detaches an object from a <a>Directory</a>.</p>
   */
  DetachObject?: _UnmarshalledBatchDetachObject;

  /**
   * <p>Updates a given object's attributes.</p>
   */
  UpdateObjectAttributes?: _UnmarshalledBatchUpdateObjectAttributes;

  /**
   * <p>Deletes an object in a <a>Directory</a>.</p>
   */
  DeleteObject?: _UnmarshalledBatchDeleteObject;

  /**
   * <p>A batch operation that adds a facet to an object.</p>
   */
  AddFacetToObject?: _UnmarshalledBatchAddFacetToObject;

  /**
   * <p>A batch operation that removes a facet from an object.</p>
   */
  RemoveFacetFromObject?: _UnmarshalledBatchRemoveFacetFromObject;

  /**
   * <p>Attaches a policy object to a regular object. An object can have a limited number of attached policies.</p>
   */
  AttachPolicy?: _UnmarshalledBatchAttachPolicy;

  /**
   * <p>Detaches a policy from a <a>Directory</a>.</p>
   */
  DetachPolicy?: _UnmarshalledBatchDetachPolicy;

  /**
   * <p>Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.htm">Indexing and search</a> for more information.</p>
   */
  CreateIndex?: _UnmarshalledBatchCreateIndex;

  /**
   * <p>Attaches the specified object to the specified index.</p>
   */
  AttachToIndex?: _UnmarshalledBatchAttachToIndex;

  /**
   * <p>Detaches the specified object from the specified index.</p>
   */
  DetachFromIndex?: _UnmarshalledBatchDetachFromIndex;

  /**
   * <p>Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  AttachTypedLink?: _UnmarshalledBatchAttachTypedLink;

  /**
   * <p>Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  DetachTypedLink?: _UnmarshalledBatchDetachTypedLink;

  /**
   * <p>Updates a given object's attributes.</p>
   */
  UpdateLinkAttributes?: _UnmarshalledBatchUpdateLinkAttributes;
}
