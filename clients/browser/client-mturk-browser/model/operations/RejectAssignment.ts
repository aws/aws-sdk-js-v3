import { RejectAssignmentInput } from "../shapes/RejectAssignmentInput";
import { RejectAssignmentOutput } from "../shapes/RejectAssignmentOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RejectAssignment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RejectAssignment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RejectAssignmentInput
  },
  output: {
    shape: RejectAssignmentOutput
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
