import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelContactInput: _Structure_ = {
  type: "structure",
  required: ["contactId"],
  members: {
    contactId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "contactId"
    }
  }
};
