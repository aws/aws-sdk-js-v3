import { _ThreatIntelSetIds } from "./_ThreatIntelSetIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListThreatIntelSetsOutput: _Structure_ = {
  type: "structure",
  required: ["ThreatIntelSetIds"],
  members: {
    ThreatIntelSetIds: {
      shape: _ThreatIntelSetIds,
      locationName: "threatIntelSetIds"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
