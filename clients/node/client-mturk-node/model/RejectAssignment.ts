import { RejectAssignmentInput } from "./RejectAssignmentInput";
import { RejectAssignmentOutput } from "./RejectAssignmentOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
