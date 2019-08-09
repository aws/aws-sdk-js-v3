import { ListAllowedNodeTypeModificationsInput } from "./ListAllowedNodeTypeModificationsInput";
import { ListAllowedNodeTypeModificationsOutput } from "./ListAllowedNodeTypeModificationsOutput";
import { CacheClusterNotFoundFault } from "./CacheClusterNotFoundFault";
import { ReplicationGroupNotFoundFault } from "./ReplicationGroupNotFoundFault";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
