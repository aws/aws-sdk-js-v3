import { _DeleteFleetSuccessSet } from "./_DeleteFleetSuccessSet";
import { _DeleteFleetErrorSet } from "./_DeleteFleetErrorSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteFleetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SuccessfulFleetDeletions: {
      shape: _DeleteFleetSuccessSet,
      locationName: "successfulFleetDeletionSet"
    },
    UnsuccessfulFleetDeletions: {
      shape: _DeleteFleetErrorSet,
      locationName: "unsuccessfulFleetDeletionSet"
    }
  }
};
