import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateKeysAndCertificateInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    setAsActive: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "setAsActive"
    }
  }
};
