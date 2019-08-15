import { ListHITsInput } from "../shapes/ListHITsInput";
import { ListHITsOutput } from "../shapes/ListHITsOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListHITs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListHITs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListHITsInput
  },
  output: {
    shape: ListHITsOutput
  },
  errors: [
    {
      shape: ServiceFault
    },
    {
      shape: RequestError
    }
  ]
};
