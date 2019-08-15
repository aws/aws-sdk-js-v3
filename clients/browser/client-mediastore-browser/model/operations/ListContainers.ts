import { ListContainersInput } from "../shapes/ListContainersInput";
import { ListContainersOutput } from "../shapes/ListContainersOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListContainers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListContainers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListContainersInput
  },
  output: {
    shape: ListContainersOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
