import { ApproveAssignmentInput } from "../shapes/ApproveAssignmentInput";
import { ApproveAssignmentOutput } from "../shapes/ApproveAssignmentOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ApproveAssignment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ApproveAssignment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ApproveAssignmentInput
  },
  output: {
    shape: ApproveAssignmentOutput
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
