import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddTagsToCertificateInput: _Structure_ = {
  type: "structure",
  required: ["CertificateArn", "Tags"],
  members: {
    CertificateArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
