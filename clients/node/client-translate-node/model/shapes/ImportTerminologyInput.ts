import { _TerminologyData } from "./_TerminologyData";
import { _EncryptionKey } from "./_EncryptionKey";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportTerminologyInput: _Structure_ = {
  type: "structure",
  required: ["Name", "MergeStrategy", "TerminologyData"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MergeStrategy: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    TerminologyData: {
      shape: _TerminologyData
    },
    EncryptionKey: {
      shape: _EncryptionKey
    }
  }
};
