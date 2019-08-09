import {
  _PullRequestCreatedEventMetadata,
  _UnmarshalledPullRequestCreatedEventMetadata
} from "./_PullRequestCreatedEventMetadata";
import {
  _PullRequestStatusChangedEventMetadata,
  _UnmarshalledPullRequestStatusChangedEventMetadata
} from "./_PullRequestStatusChangedEventMetadata";
import {
  _PullRequestSourceReferenceUpdatedEventMetadata,
  _UnmarshalledPullRequestSourceReferenceUpdatedEventMetadata
} from "./_PullRequestSourceReferenceUpdatedEventMetadata";
import {
  _PullRequestMergedStateChangedEventMetadata,
  _UnmarshalledPullRequestMergedStateChangedEventMetadata
} from "./_PullRequestMergedStateChangedEventMetadata";

/**
 * <p>Returns information about a pull request event.</p>
 */
export interface _PullRequestEvent {
  /**
   * <p>The system-generated ID of the pull request.</p>
   */
  pullRequestId?: string;

  /**
   * <p>The day and time of the pull request event, in timestamp format.</p>
   */
  eventDate?: Date | string | number;

  /**
   * <p>The type of the pull request event, for example a status change event (PULL_REQUEST_STATUS_CHANGED) or update event (PULL_REQUEST_SOURCE_REFERENCE_UPDATED).</p>
   */
  pullRequestEventType?:
    | "PULL_REQUEST_CREATED"
    | "PULL_REQUEST_STATUS_CHANGED"
    | "PULL_REQUEST_SOURCE_REFERENCE_UPDATED"
    | "PULL_REQUEST_MERGE_STATE_CHANGED"
    | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user whose actions resulted in the event. Examples include updating the pull request with additional commits or changing the status of a pull request.</p>
   */
  actorArn?: string;

  /**
   * <p>Information about the source and destination branches for the pull request.</p>
   */
  pullRequestCreatedEventMetadata?: _PullRequestCreatedEventMetadata;

  /**
   * <p>Information about the change in status for the pull request event.</p>
   */
  pullRequestStatusChangedEventMetadata?: _PullRequestStatusChangedEventMetadata;

  /**
   * <p>Information about the updated source branch for the pull request event. </p>
   */
  pullRequestSourceReferenceUpdatedEventMetadata?: _PullRequestSourceReferenceUpdatedEventMetadata;

  /**
   * <p>Information about the change in mergability state for the pull request event.</p>
   */
  pullRequestMergedStateChangedEventMetadata?: _PullRequestMergedStateChangedEventMetadata;
}

export interface _UnmarshalledPullRequestEvent extends _PullRequestEvent {
  /**
   * <p>The day and time of the pull request event, in timestamp format.</p>
   */
  eventDate?: Date;

  /**
   * <p>Information about the source and destination branches for the pull request.</p>
   */
  pullRequestCreatedEventMetadata?: _UnmarshalledPullRequestCreatedEventMetadata;

  /**
   * <p>Information about the change in status for the pull request event.</p>
   */
  pullRequestStatusChangedEventMetadata?: _UnmarshalledPullRequestStatusChangedEventMetadata;

  /**
   * <p>Information about the updated source branch for the pull request event. </p>
   */
  pullRequestSourceReferenceUpdatedEventMetadata?: _UnmarshalledPullRequestSourceReferenceUpdatedEventMetadata;

  /**
   * <p>Information about the change in mergability state for the pull request event.</p>
   */
  pullRequestMergedStateChangedEventMetadata?: _UnmarshalledPullRequestMergedStateChangedEventMetadata;
}
