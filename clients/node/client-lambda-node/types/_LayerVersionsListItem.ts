/**
 * <p>Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>.</p>
 */
export interface _LayerVersionsListItem {
  /**
   * <p>The ARN of the layer version.</p>
   */
  LayerVersionArn?: string;

  /**
   * <p>The version number.</p>
   */
  Version?: number;

  /**
   * <p>The description of the version.</p>
   */
  Description?: string;

  /**
   * <p>The date that the version was created, in ISO 8601 format. For example, <code>2018-11-27T15:10:45.123+0000</code>.</p>
   */
  CreatedDate?: string;

  /**
   * <p>The layer's compatible runtimes.</p>
   */
  CompatibleRuntimes?:
    | Array<
        | "nodejs"
        | "nodejs4.3"
        | "nodejs6.10"
        | "nodejs8.10"
        | "nodejs10.x"
        | "java8"
        | "python2.7"
        | "python3.6"
        | "python3.7"
        | "dotnetcore1.0"
        | "dotnetcore2.0"
        | "dotnetcore2.1"
        | "nodejs4.3-edge"
        | "go1.x"
        | "ruby2.5"
        | "provided"
        | string
      >
    | Iterable<
        | "nodejs"
        | "nodejs4.3"
        | "nodejs6.10"
        | "nodejs8.10"
        | "nodejs10.x"
        | "java8"
        | "python2.7"
        | "python3.6"
        | "python3.7"
        | "dotnetcore1.0"
        | "dotnetcore2.0"
        | "dotnetcore2.1"
        | "nodejs4.3-edge"
        | "go1.x"
        | "ruby2.5"
        | "provided"
        | string
      >;

  /**
   * <p>The layer's open-source license.</p>
   */
  LicenseInfo?: string;
}

export interface _UnmarshalledLayerVersionsListItem
  extends _LayerVersionsListItem {
  /**
   * <p>The layer's compatible runtimes.</p>
   */
  CompatibleRuntimes?: Array<
    | "nodejs"
    | "nodejs4.3"
    | "nodejs6.10"
    | "nodejs8.10"
    | "nodejs10.x"
    | "java8"
    | "python2.7"
    | "python3.6"
    | "python3.7"
    | "dotnetcore1.0"
    | "dotnetcore2.0"
    | "dotnetcore2.1"
    | "nodejs4.3-edge"
    | "go1.x"
    | "ruby2.5"
    | "provided"
    | string
  >;
}
