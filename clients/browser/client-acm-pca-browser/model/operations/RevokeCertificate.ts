import { RevokeCertificateInput } from "../shapes/RevokeCertificateInput";
import { RevokeCertificateOutput } from "../shapes/RevokeCertificateOutput";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { RequestAlreadyProcessedException } from "../shapes/RequestAlreadyProcessedException";
import { RequestInProgressException } from "../shapes/RequestInProgressException";
import { RequestFailedException } from "../shapes/RequestFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
