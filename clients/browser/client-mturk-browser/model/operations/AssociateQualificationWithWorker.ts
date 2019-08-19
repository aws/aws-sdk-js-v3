import { AssociateQualificationWithWorkerInput } from "../shapes/AssociateQualificationWithWorkerInput";
import { AssociateQualificationWithWorkerOutput } from "../shapes/AssociateQualificationWithWorkerOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
