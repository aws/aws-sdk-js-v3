import { GetAssignmentInput } from "../shapes/GetAssignmentInput";
import { GetAssignmentOutput } from "../shapes/GetAssignmentOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetAssignment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAssignment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAssignmentInput
  },
  output: {
    shape: GetAssignmentOutput
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
