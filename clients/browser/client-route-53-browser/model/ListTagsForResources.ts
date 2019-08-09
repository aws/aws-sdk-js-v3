import { ListTagsForResourcesInput } from "./ListTagsForResourcesInput";
import { ListTagsForResourcesOutput } from "./ListTagsForResourcesOutput";
import { InvalidInput } from "./InvalidInput";
import { NoSuchHealthCheck } from "./NoSuchHealthCheck";
import { NoSuchHostedZone } from "./NoSuchHostedZone";
import { PriorRequestNotComplete } from "./PriorRequestNotComplete";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListTagsForResources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsForResources",
  http: {
    method: "POST",
    requestUri: "/2013-04-01/tags/{ResourceType}"
  },
  input: {
    shape: ListTagsForResourcesInput,
    locationName: "ListTagsForResourcesRequest",
    xmlNamespace: {
      uri: "https://route53.amazonaws.com/doc/2013-04-01/"
    }
  },
  output: {
    shape: ListTagsForResourcesOutput
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
