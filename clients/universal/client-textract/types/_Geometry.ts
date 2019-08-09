import { _BoundingBox, _UnmarshalledBoundingBox } from "./_BoundingBox";
import { _Point, _UnmarshalledPoint } from "./_Point";

/**
 * <p>Information about where a recognized text, key, value, table, or table cell is located on a document page.</p>
 */
export interface _Geometry {
  /**
   * <p>An axis-aligned coarse representation of the location of the recognized text on the document page.</p>
   */
  BoundingBox?: _BoundingBox;

  /**
   * <p>Within the bounding box, a fine-grained polygon around the recognized text.</p>
   */
  Polygon?: Array<_Point> | Iterable<_Point>;
}

export interface _UnmarshalledGeometry extends _Geometry {
  /**
   * <p>An axis-aligned coarse representation of the location of the recognized text on the document page.</p>
   */
  BoundingBox?: _UnmarshalledBoundingBox;

  /**
   * <p>Within the bounding box, a fine-grained polygon around the recognized text.</p>
   */
  Polygon?: Array<_UnmarshalledPoint>;
}
