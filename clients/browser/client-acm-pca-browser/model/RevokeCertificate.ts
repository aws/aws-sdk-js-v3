import { RevokeCertificateInput } from "./RevokeCertificateInput";
import { RevokeCertificateOutput } from "./RevokeCertificateOutput";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidStateException } from "./InvalidStateException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { RequestAlreadyProcessedException } from "./RequestAlreadyProcessedException";
import { RequestInProgressException } from "./RequestInProgressException";
import { RequestFailedException } from "./RequestFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RevokeCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RevokeCertificate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RevokeCertificateInput
  },
  output: {
    shape: RevokeCertificateOutput
  },
  errors: [
    {
      shape: ConcurrentModificationException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: InvalidStateException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: RequestAlreadyProcessedException
    },
    {
      shape: RequestInProgressException
    },
    {
      shape: RequestFailedException
    }
  ]
};
