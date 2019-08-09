import { ListSSHPublicKeysInput } from "./ListSSHPublicKeysInput";
import { ListSSHPublicKeysOutput } from "./ListSSHPublicKeysOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListSSHPublicKeys: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSSHPublicKeys",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSSHPublicKeysInput
  },
  output: {
    shape: ListSSHPublicKeysOutput,
    resultWrapper: "ListSSHPublicKeysResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    }
  ]
};
