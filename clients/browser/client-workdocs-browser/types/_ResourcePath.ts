import {
  _ResourcePathComponent,
  _UnmarshalledResourcePathComponent
} from "./_ResourcePathComponent";

/**
 * <p>Describes the path information of a resource.</p>
 */
export interface _ResourcePath {
  /**
   * <p>The components of the resource path.</p>
   */
  Components?: Array<_ResourcePathComponent> | Iterable<_ResourcePathComponent>;
}

export interface _UnmarshalledResourcePath extends _ResourcePath {
  /**
   * <p>The components of the resource path.</p>
   */
  Components?: Array<_UnmarshalledResourcePathComponent>;
}
