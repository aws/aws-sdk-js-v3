import { TagResourceInput } from "../shapes/TagResourceInput";
import { TagResourceOutput } from "../shapes/TagResourceOutput";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { TagQuotaPerResourceExceeded } from "../shapes/TagQuotaPerResourceExceeded";
import { InvalidARNFault } from "../shapes/InvalidARNFault";
import { InvalidClusterStateFault } from "../shapes/InvalidClusterStateFault";
import { ServiceLinkedRoleNotFoundFault } from "../shapes/ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TagResourceInput
  },
  output: {
    shape: TagResourceOutput
  },
  errors: [
    {
      shape: ClusterNotFoundFault
    },
    {
      shape: TagQuotaPerResourceExceeded
    },
    {
      shape: InvalidARNFault
    },
    {
      shape: InvalidClusterStateFault
    },
    {
      shape: ServiceLinkedRoleNotFoundFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
