import { ListQualificationRequestsInput } from "../shapes/ListQualificationRequestsInput";
import { ListQualificationRequestsOutput } from "../shapes/ListQualificationRequestsOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListQualificationRequests: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListQualificationRequests",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListQualificationRequestsInput
  },
  output: {
    shape: ListQualificationRequestsOutput
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
