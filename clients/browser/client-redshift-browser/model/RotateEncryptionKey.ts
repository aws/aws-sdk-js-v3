import { RotateEncryptionKeyInput } from "./RotateEncryptionKeyInput";
import { RotateEncryptionKeyOutput } from "./RotateEncryptionKeyOutput";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { DependentServiceRequestThrottlingFault } from "./DependentServiceRequestThrottlingFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
