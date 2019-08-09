import { ListContainersInput } from "./ListContainersInput";
import { ListContainersOutput } from "./ListContainersOutput";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
