/**
 * <p>The reference that identifies an object.</p>
 */
export interface _ObjectReference {
  /**
   * <p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier</p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>
   */
  Selector?: string;
}

export type _UnmarshalledObjectReference = _ObjectReference;
