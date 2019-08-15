import { DeleteAttributesInput } from "../shapes/DeleteAttributesInput";
import { DeleteAttributesOutput } from "../shapes/DeleteAttributesOutput";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { TargetNotFoundException } from "../shapes/TargetNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAttributesInput
  },
  output: {
    shape: DeleteAttributesOutput
  },
  errors: [
    {
      shape: ClusterNotFoundException
    },
    {
      shape: TargetNotFoundException
    },
    {
      shape: InvalidParameterException
    }
  ]
};
