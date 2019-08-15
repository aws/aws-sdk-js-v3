import { _PublicKeyConfig } from "./_PublicKeyConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PublicKey: _Structure_ = {
  type: "structure",
  required: ["Id", "CreatedTime", "PublicKeyConfig"],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    PublicKeyConfig: {
      shape: _PublicKeyConfig
    }
  }
};
