import { ListTagsInput } from "./ListTagsInput";
import { ListTagsOutput } from "./ListTagsOutput";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { InvalidARNFault } from "./InvalidARNFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { ServiceLinkedRoleNotFoundFault } from "./ServiceLinkedRoleNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTagsInput
  },
  output: {
    shape: ListTagsOutput
  },
  errors: [
    {
      shape: ClusterNotFoundFault
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
