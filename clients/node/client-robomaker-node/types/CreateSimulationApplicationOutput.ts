import { _UnmarshalledSource } from "./_Source";
import { _UnmarshalledSimulationSoftwareSuite } from "./_SimulationSoftwareSuite";
import { _UnmarshalledRobotSoftwareSuite } from "./_RobotSoftwareSuite";
import { _UnmarshalledRenderingEngine } from "./_RenderingEngine";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSimulationApplicationOutput shape
 */
export interface CreateSimulationApplicationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation application.</p>
   */
  arn?: string;

  /**
   * <p>The name of the simulation application.</p>
   */
  name?: string;

  /**
   * <p>The version of the simulation application.</p>
   */
  version?: string;

  /**
   * <p>The sources of the simulation application.</p>
   */
  sources?: Array<_UnmarshalledSource>;

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite?: _UnmarshalledSimulationSoftwareSuite;

  /**
   * <p>Information about the robot software suite.</p>
   */
  robotSoftwareSuite?: _UnmarshalledRobotSoftwareSuite;

  /**
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: _UnmarshalledRenderingEngine;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation application was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The revision id of the simulation application.</p>
   */
  revisionId?: string;

  /**
   * <p>The list of all tags added to the simulation application.</p>
   */
  tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
