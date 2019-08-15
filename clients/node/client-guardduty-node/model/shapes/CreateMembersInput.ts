import { _AccountDetails } from "./_AccountDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateMembersInput: _Structure_ = {
  type: "structure",
  required: ["DetectorId", "AccountDetails"],
  members: {
    DetectorId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "detectorId"
    },
    AccountDetails: {
      shape: _AccountDetails,
      locationName: "accountDetails"
    }
  }
};
