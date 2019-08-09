import { DisassociateQualificationFromWorkerInput } from "./DisassociateQualificationFromWorkerInput";
import { DisassociateQualificationFromWorkerOutput } from "./DisassociateQualificationFromWorkerOutput";
import { ServiceFault } from "./ServiceFault";
import { RequestError } from "./RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisassociateQualificationFromWorker: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateQualificationFromWorker",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateQualificationFromWorkerInput
  },
  output: {
    shape: DisassociateQualificationFromWorkerOutput
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
