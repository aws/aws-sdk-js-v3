import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { AccessDenied } from "./AccessDenied";
import { InvalidArgument } from "./InvalidArgument";
import { InvalidTagging } from "./InvalidTagging";
import { NoSuchResource } from "./NoSuchResource";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListTagsForResource2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsForResource2019_03_26",
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
