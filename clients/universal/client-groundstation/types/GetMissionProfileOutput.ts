import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface GetMissionProfileOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
   */
  contactPostPassDurationSeconds?: number;

  /**
   * <p>Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.</p>
   */
  contactPrePassDurationSeconds?: number;

  /**
   * <p>A list of lists of ARNs. Each list of ARNs is an edge, with a from <code>Config</code> and a to
   *          <code>Config</code>.</p>
   */
  dataflowEdges?: Array<Array<string>>;

  /**
   * <p>Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.</p>
   */
  minimumViableContactDurationSeconds?: number;

  /**
   * <p>ARN of a mission profile.</p>
   */
  missionProfileArn?: string;

  /**
   * <p>ID of a mission profile.</p>
   */
  missionProfileId?: string;

  /**
   * <p>Name of a mission profile.</p>
   */
  name?: string;

  /**
   * <p>Region of a mission profile.</p>
   */
  region?: string;

  /**
   * <p>Tags assigned to a mission profile.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>ARN of a tracking <code>Config</code>.</p>
   */
  trackingConfigArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
