import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetIPSetInput: _Structure_ = {
  type: "structure",
  required: ["DetectorId", "IpSetId"],
  members: {
    DetectorId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "detectorId"
    },
    IpSetId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ipSetId"
    }
  }
};
