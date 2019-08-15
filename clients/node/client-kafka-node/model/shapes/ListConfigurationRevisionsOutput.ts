import { ___listOfConfigurationRevision } from "./___listOfConfigurationRevision";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListConfigurationRevisionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    Revisions: {
      shape: ___listOfConfigurationRevision,
      locationName: "revisions"
    }
  }
};
