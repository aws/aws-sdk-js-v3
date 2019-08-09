import { _PullRequestCreatedEventMetadata } from "./_PullRequestCreatedEventMetadata";
import { _PullRequestStatusChangedEventMetadata } from "./_PullRequestStatusChangedEventMetadata";
import { _PullRequestSourceReferenceUpdatedEventMetadata } from "./_PullRequestSourceReferenceUpdatedEventMetadata";
import { _PullRequestMergedStateChangedEventMetadata } from "./_PullRequestMergedStateChangedEventMetadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PullRequestEvent: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    pullRequestId: {
      shape: {
        type: "string"
      }
    },
    eventDate: {
      shape: {
        type: "timestamp"
      }
    },
    pullRequestEventType: {
      shape: {
        type: "string"
      }
    },
    actorArn: {
      shape: {
        type: "string"
      }
    },
    pullRequestCreatedEventMetadata: {
      shape: _PullRequestCreatedEventMetadata
    },
    pullRequestStatusChangedEventMetadata: {
      shape: _PullRequestStatusChangedEventMetadata
    },
    pullRequestSourceReferenceUpdatedEventMetadata: {
      shape: _PullRequestSourceReferenceUpdatedEventMetadata
    },
    pullRequestMergedStateChangedEventMetadata: {
      shape: _PullRequestMergedStateChangedEventMetadata
    }
  }
};
