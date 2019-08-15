import { ListTagsForResourceInput } from "../shapes/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "../shapes/ListTagsForResourceOutput";
import { AccessDenied } from "../shapes/AccessDenied";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { InvalidTagging } from "../shapes/InvalidTagging";
import { NoSuchResource } from "../shapes/NoSuchResource";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTagsForResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsForResource",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/tagging"
  },
  input: {
    shape: ListTagsForResourceInput
  },
  output: {
    shape: ListTagsForResourceOutput
  },
  errors: [
    {
      shape: AccessDenied
    },
    {
      shape: InvalidArgument
    },
    {
      shape: InvalidTagging
    },
    {
      shape: NoSuchResource
    }
  ]
};
