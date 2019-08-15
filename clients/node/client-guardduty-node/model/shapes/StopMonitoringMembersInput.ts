import { _AccountIds } from "./_AccountIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopMonitoringMembersInput: _Structure_ = {
  type: "structure",
  required: ["DetectorId", "AccountIds"],
  members: {
    DetectorId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "detectorId"
    },
    AccountIds: {
      shape: _AccountIds,
      locationName: "accountIds"
    }
  }
};
