import { _CommunicationList } from "./_CommunicationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RecentCaseCommunications: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    communications: {
      shape: _CommunicationList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
