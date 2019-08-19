import { ListTagsForResourceInput } from "../shapes/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "../shapes/ListTagsForResourceOutput";
import { InvalidInput } from "../shapes/InvalidInput";
import { NoSuchHealthCheck } from "../shapes/NoSuchHealthCheck";
import { NoSuchHostedZone } from "../shapes/NoSuchHostedZone";
import { PriorRequestNotComplete } from "../shapes/PriorRequestNotComplete";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTagsForResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsForResource",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/tags/{ResourceType}/{ResourceId}"
  },
  input: {
    shape: ListTagsForResourceInput
  },
  output: {
    shape: ListTagsForResourceOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: NoSuchHealthCheck
    },
    {
      shape: NoSuchHostedZone
    },
    {
      shape: PriorRequestNotComplete
    },
    {
      shape: ThrottlingException
    }
  ]
};
