import { _PartnerEventSourceList } from "./_PartnerEventSourceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPartnerEventSourcesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PartnerEventSources: {
      shape: _PartnerEventSourceList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
