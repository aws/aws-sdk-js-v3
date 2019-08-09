import { DeleteAttributesInput } from "./DeleteAttributesInput";
import { DeleteAttributesOutput } from "./DeleteAttributesOutput";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { TargetNotFoundException } from "./TargetNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
