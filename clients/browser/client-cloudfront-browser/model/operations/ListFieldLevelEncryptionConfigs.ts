import { ListFieldLevelEncryptionConfigsInput } from "../shapes/ListFieldLevelEncryptionConfigsInput";
import { ListFieldLevelEncryptionConfigsOutput } from "../shapes/ListFieldLevelEncryptionConfigsOutput";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListFieldLevelEncryptionConfigs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListFieldLevelEncryptionConfigs",
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
