import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateThreatIntelSetOutput: _Structure_ = {
  type: "structure",
  required: ["ThreatIntelSetId"],
  members: {
    ThreatIntelSetId: {
      shape: {
        type: "string"
      },
      locationName: "threatIntelSetId"
    }
  }
};
