import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetOTAUpdateInput: _Structure_ = {
  type: "structure",
  required: ["otaUpdateId"],
  members: {
    otaUpdateId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "otaUpdateId"
    }
  }
};
