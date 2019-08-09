import { GetAssignmentInput } from "./GetAssignmentInput";
import { GetAssignmentOutput } from "./GetAssignmentOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
