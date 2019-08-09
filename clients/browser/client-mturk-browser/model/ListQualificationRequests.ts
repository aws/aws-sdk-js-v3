import { ListQualificationRequestsInput } from "./ListQualificationRequestsInput";
import { ListQualificationRequestsOutput } from "./ListQualificationRequestsOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
