/**
 * <p>A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>. </p>
 */
export interface _Paths {
  /**
   * <p>The number of invalidation paths specified for the objects that you want to invalidate.</p>
   */
  Quantity: number;

  /**
   * <p>A complex type that contains a list of the paths that you want to invalidate.</p>
   */
  Items?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledPaths extends _Paths {
  /**
   * <p>A complex type that contains a list of the paths that you want to invalidate.</p>
   */
  Items?: Array<string>;
}
