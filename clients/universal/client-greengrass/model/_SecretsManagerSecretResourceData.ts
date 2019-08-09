import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SecretsManagerSecretResourceData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ARN: {
      shape: {
        type: "string"
      }
    },
    AdditionalStagingLabelsToDownload: {
      shape: ___listOf__string
    }
  }
};
