import { ListAssignmentsForHITInput } from "./ListAssignmentsForHITInput";
import { ListAssignmentsForHITOutput } from "./ListAssignmentsForHITOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListAssignmentsForHIT: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAssignmentsForHIT",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAssignmentsForHITInput
  },
  output: {
    shape: ListAssignmentsForHITOutput
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
