import { ListAttributesInput } from "../shapes/ListAttributesInput";
import { ListAttributesOutput } from "../shapes/ListAttributesOutput";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAttributesInput
  },
  output: {
    shape: ListAttributesOutput
  },
  errors: [
    {
      shape: ClusterNotFoundException
    },
    {
      shape: InvalidParameterException
    }
  ]
};
