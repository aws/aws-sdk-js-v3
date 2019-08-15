import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetImportInput: _Structure_ = {
  type: "structure",
  required: ["importId"],
  members: {
    importId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "importId"
    }
  }
};
