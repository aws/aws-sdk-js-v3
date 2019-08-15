import { ListAllowedNodeTypeModificationsInput } from "../shapes/ListAllowedNodeTypeModificationsInput";
import { ListAllowedNodeTypeModificationsOutput } from "../shapes/ListAllowedNodeTypeModificationsOutput";
import { CacheClusterNotFoundFault } from "../shapes/CacheClusterNotFoundFault";
import { ReplicationGroupNotFoundFault } from "../shapes/ReplicationGroupNotFoundFault";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAllowedNodeTypeModifications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAllowedNodeTypeModifications",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAllowedNodeTypeModificationsInput
  },
  output: {
    shape: ListAllowedNodeTypeModificationsOutput,
    resultWrapper: "ListAllowedNodeTypeModificationsResult"
  },
  errors: [
    {
      shape: CacheClusterNotFoundFault
    },
    {
      shape: ReplicationGroupNotFoundFault
    },
    {
      shape: InvalidParameterCombinationException
    },
    {
      shape: InvalidParameterValueException
    }
  ]
};
