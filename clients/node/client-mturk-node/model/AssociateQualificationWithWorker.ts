import { AssociateQualificationWithWorkerInput } from "./AssociateQualificationWithWorkerInput";
import { AssociateQualificationWithWorkerOutput } from "./AssociateQualificationWithWorkerOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AssociateQualificationWithWorker: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateQualificationWithWorker",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateQualificationWithWorkerInput
  },
  output: {
    shape: AssociateQualificationWithWorkerOutput
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
