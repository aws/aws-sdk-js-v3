import { ListResourceTagsInput } from "../shapes/ListResourceTagsInput";
import { ListResourceTagsOutput } from "../shapes/ListResourceTagsOutput";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { InvalidMarkerException } from "../shapes/InvalidMarkerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListResourceTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListResourceTags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListResourceTagsInput
  },
  output: {
    shape: ListResourceTagsOutput
  },
  errors: [
    {
      shape: KMSInternalException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: InvalidMarkerException
    }
  ]
};
