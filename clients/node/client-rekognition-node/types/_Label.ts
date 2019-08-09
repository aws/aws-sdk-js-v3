import { _Instance, _UnmarshalledInstance } from "./_Instance";
import { _Parent, _UnmarshalledParent } from "./_Parent";

/**
 * <p>Structure containing details about the detected label, including the name, detected instances, parent labels, and level of confidence.</p> <p> </p>
 */
export interface _Label {
  /**
   * <p>The name (label) of the object or scene.</p>
   */
  Name?: string;

  /**
   * <p>Level of confidence.</p>
   */
  Confidence?: number;

  /**
   * <p>If <code>Label</code> represents an object, <code>Instances</code> contains the bounding boxes for each instance of the detected object. Bounding boxes are returned for common object labels such as people, cars, furniture, apparel or pets.</p>
   */
  Instances?: Array<_Instance> | Iterable<_Instance>;

  /**
   * <p>The parent labels for a label. The response includes all ancestor labels.</p>
   */
  Parents?: Array<_Parent> | Iterable<_Parent>;
}

export interface _UnmarshalledLabel extends _Label {
  /**
   * <p>If <code>Label</code> represents an object, <code>Instances</code> contains the bounding boxes for each instance of the detected object. Bounding boxes are returned for common object labels such as people, cars, furniture, apparel or pets.</p>
   */
  Instances?: Array<_UnmarshalledInstance>;

  /**
   * <p>The parent labels for a label. The response includes all ancestor labels.</p>
   */
  Parents?: Array<_UnmarshalledParent>;
}
