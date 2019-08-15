import { ListInstancesInput } from "../shapes/ListInstancesInput";
import { ListInstancesOutput } from "../shapes/ListInstancesOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListInstancesInput
  },
  output: {
    shape: ListInstancesOutput
  },
  errors: [
    {
      shape: InternalServerException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
