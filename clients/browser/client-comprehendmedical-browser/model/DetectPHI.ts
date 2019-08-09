import { DetectPHIInput } from "./DetectPHIInput";
import { DetectPHIOutput } from "./DetectPHIOutput";
import { InternalServerException } from "./InternalServerException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidEncodingException } from "./InvalidEncodingException";
import { TextSizeLimitExceededException } from "./TextSizeLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
