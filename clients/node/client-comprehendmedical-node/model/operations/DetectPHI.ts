import { DetectPHIInput } from "../shapes/DetectPHIInput";
import { DetectPHIOutput } from "../shapes/DetectPHIOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidEncodingException } from "../shapes/InvalidEncodingException";
import { TextSizeLimitExceededException } from "../shapes/TextSizeLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DetectPHI: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetectPHI",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetectPHIInput
  },
  output: {
    shape: DetectPHIOutput
  },
  errors: [
    {
      shape: InternalServerException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: InvalidEncodingException
    },
    {
      shape: TextSizeLimitExceededException
    }
  ]
};
