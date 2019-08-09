import { CreateAdditionalAssignmentsForHITInput } from "./CreateAdditionalAssignmentsForHITInput";
import { CreateAdditionalAssignmentsForHITOutput } from "./CreateAdditionalAssignmentsForHITOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateAdditionalAssignmentsForHIT: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAdditionalAssignmentsForHIT",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAdditionalAssignmentsForHITInput
  },
  output: {
    shape: CreateAdditionalAssignmentsForHITOutput
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
