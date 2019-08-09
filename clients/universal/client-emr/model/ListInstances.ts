import { ListInstancesInput } from "./ListInstancesInput";
import { ListInstancesOutput } from "./ListInstancesOutput";
import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
