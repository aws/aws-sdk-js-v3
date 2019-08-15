import { _JobTargets } from "./_JobTargets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateTargetsWithJobInput: _Structure_ = {
  type: "structure",
  required: ["targets", "jobId"],
  members: {
    targets: {
      shape: _JobTargets
    },
    jobId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "jobId"
    },
    comment: {
      shape: {
        type: "string"
      }
    }
  }
};
