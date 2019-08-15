import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFieldLevelEncryptionInput: _Structure_ = {
  type: "structure",
  required: ["Id"],
  members: {
    Id: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Id"
    }
  }
};
