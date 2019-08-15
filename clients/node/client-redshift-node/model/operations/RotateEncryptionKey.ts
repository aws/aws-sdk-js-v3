import { RotateEncryptionKeyInput } from "../shapes/RotateEncryptionKeyInput";
import { RotateEncryptionKeyOutput } from "../shapes/RotateEncryptionKeyOutput";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { InvalidClusterStateFault } from "../shapes/InvalidClusterStateFault";
import { DependentServiceRequestThrottlingFault } from "../shapes/DependentServiceRequestThrottlingFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RotateEncryptionKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RotateEncryptionKey",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RotateEncryptionKeyInput
  },
  output: {
    shape: RotateEncryptionKeyOutput,
    resultWrapper: "RotateEncryptionKeyResult"
  },
  errors: [
    {
      shape: ClusterNotFoundFault
    },
    {
      shape: InvalidClusterStateFault
    },
    {
      shape: DependentServiceRequestThrottlingFault
    }
  ]
};
