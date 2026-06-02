// smithy-typescript generated code
import type { StreamingBlobTypes } from "@smithy/types";

import type { CompletionStatus } from "./enums";

/**
 * @public
 */
export interface CompleteRolloutRequest {
  /**
   * The job ARN.
   * @public
   */
  JobArn: string | undefined;

  /**
   * The trajectory ID to mark as complete.
   * @public
   */
  TrajectoryId: string | undefined;

  /**
   * The target status for the trajectory. Defaults to READY if not specified.
   * Set to FAILED if the rollout encountered an error and the trajectory should
   * not be used for processing.
   * @public
   */
  Status?: CompletionStatus | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the
   * idempotency of the request.
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CompleteRolloutResponse {}

/**
 * @public
 */
export interface SampleRequest {
  /**
   * The job ARN that identifies which model session
   * to route the inference request to.
   * @public
   */
  JobArn: string | undefined;

  /**
   * The trajectory ID for grouping turns into a single rollout. Each turn
   * (prompt and response) is captured for later use.
   * @public
   */
  TrajectoryId: string | undefined;

  /**
   * The raw inference request body in OpenAI-compatible JSON format.
   * @public
   */
  Body: Uint8Array | undefined;
}

/**
 * @public
 */
export interface SampleResponse {
  /**
   * MIME type of the inference result.
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The raw inference response body from the model.
   * @public
   */
  Body: Uint8Array | undefined;
}

/**
 * @public
 */
export interface SampleWithResponseStreamRequest {
  /**
   * The job ARN that identifies which model session
   * to route the inference request to.
   * @public
   */
  JobArn: string | undefined;

  /**
   * The trajectory ID for grouping turns into a single rollout. Each turn
   * is captured for later use.
   * @public
   */
  TrajectoryId: string | undefined;

  /**
   * The raw inference request body in OpenAI-compatible JSON format.
   * @public
   */
  Body: Uint8Array | undefined;
}

/**
 * @public
 */
export interface SampleWithResponseStreamResponse {
  /**
   * MIME type of the streaming inference result.
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The streaming response body, delivered as a series of PayloadPart events.
   * @public
   */
  Body: StreamingBlobTypes | undefined;
}

/**
 * @public
 */
export interface UpdateRewardRequest {
  /**
   * The job ARN.
   * @public
   */
  JobArn: string | undefined;

  /**
   * The trajectory ID to update with reward values.
   * @public
   */
  TrajectoryId: string | undefined;

  /**
   * The list of reward values to assign to this trajectory. Provide one reward
   * value per turn in the trajectory.
   * @public
   */
  Rewards: number[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the
   * idempotency of the request.
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRewardResponse {}
