import { _EncryptionConfiguration } from "./_EncryptionConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSecurityConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["Name", "EncryptionConfiguration"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EncryptionConfiguration: {
      shape: _EncryptionConfiguration
    }
  }
};
