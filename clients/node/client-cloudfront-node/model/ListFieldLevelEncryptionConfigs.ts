import { ListFieldLevelEncryptionConfigsInput } from "./ListFieldLevelEncryptionConfigsInput";
import { ListFieldLevelEncryptionConfigsOutput } from "./ListFieldLevelEncryptionConfigsOutput";
import { InvalidArgument } from "./InvalidArgument";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListFieldLevelEncryptionConfigs2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListFieldLevelEncryptionConfigs2019_03_26",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/field-level-encryption"
  },
  input: {
    shape: ListFieldLevelEncryptionConfigsInput
  },
  output: {
    shape: ListFieldLevelEncryptionConfigsOutput
  },
  errors: [
    {
      shape: InvalidArgument
    }
  ]
};
