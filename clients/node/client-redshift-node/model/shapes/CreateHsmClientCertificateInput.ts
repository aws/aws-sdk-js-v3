import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateHsmClientCertificateInput: _Structure_ = {
  type: "structure",
  required: ["HsmClientCertificateIdentifier"],
  members: {
    HsmClientCertificateIdentifier: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
