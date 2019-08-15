import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateCertificateInput: _Structure_ = {
  type: "structure",
  required: ["Arn"],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
    }
  }
};
