import { ListAssignmentsForHITInput } from "../shapes/ListAssignmentsForHITInput";
import { ListAssignmentsForHITOutput } from "../shapes/ListAssignmentsForHITOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
