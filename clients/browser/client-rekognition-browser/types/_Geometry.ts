import { _BoundingBox, _UnmarshalledBoundingBox } from "./_BoundingBox";
import { _Point, _UnmarshalledPoint } from "./_Point";

/**
 * <p>Information about where the text detected by <a>DetectText</a> is located on an image.</p>
 */
export interface _Geometry {
  /**
   * <p>An axis-aligned coarse representation of the detected text's location on the image.</p>
   */
  BoundingBox?: _BoundingBox;

  /**
   * <p>Within the bounding box, a fine-grained polygon around the detected text.</p>
   */
  Polygon?: Array<_Point> | Iterable<_Point>;
}

export interface _UnmarshalledGeometry extends _Geometry {
  /**
   * <p>An axis-aligned coarse representation of the detected text's location on the image.</p>
   */
  BoundingBox?: _UnmarshalledBoundingBox;

  /**
   * <p>Within the bounding box, a fine-grained polygon around the detected text.</p>
   */
  Polygon?: Array<_UnmarshalledPoint>;
}
