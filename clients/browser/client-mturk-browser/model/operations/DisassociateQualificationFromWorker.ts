import { DisassociateQualificationFromWorkerInput } from "../shapes/DisassociateQualificationFromWorkerInput";
import { DisassociateQualificationFromWorkerOutput } from "../shapes/DisassociateQualificationFromWorkerOutput";
import { ServiceFault } from "../shapes/ServiceFault";
import { RequestError } from "../shapes/RequestError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
