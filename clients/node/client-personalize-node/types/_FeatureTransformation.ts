/**
 * <p>Provides feature transformation information. Feature transformation is the process of modifying raw input data into a form more suitable for model training.</p>
 */
export interface _FeatureTransformation {
  /**
   * <p>The name of the feature transformation.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the FeatureTransformation object.</p>
   */
  featureTransformationArn?: string;

  /**
   * <p>Provides the default parameters for feature transformation.</p>
   */
  defaultParameters?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The creation date and time (in Unix time) of the feature transformation.</p>
   */
  creationDateTime?: Date | string | number;

  /**
   * <p>The last update date and time (in Unix time) of the feature transformation.</p>
   */
  lastUpdatedDateTime?: Date | string | number;

  /**
   * <p>The status of the feature transformation.</p> <p>A feature transformation can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>
   */
  status?: string;
}

export interface _UnmarshalledFeatureTransformation
  extends _FeatureTransformation {
  /**
   * <p>Provides the default parameters for feature transformation.</p>
   */
  defaultParameters?: { [key: string]: string };

  /**
   * <p>The creation date and time (in Unix time) of the feature transformation.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The last update date and time (in Unix time) of the feature transformation.</p>
   */
  lastUpdatedDateTime?: Date;
}
