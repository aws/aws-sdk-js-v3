import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateIPSetOutput: _Structure_ = {
  type: "structure",
  required: ["IpSetId"],
  members: {
    IpSetId: {
      shape: {
        type: "string"
      },
      locationName: "ipSetId"
    }
  }
};
