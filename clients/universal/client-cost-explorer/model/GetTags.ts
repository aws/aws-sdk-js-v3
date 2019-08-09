import { GetTagsInput } from "./GetTagsInput";
import { GetTagsOutput } from "./GetTagsOutput";
import { LimitExceededException } from "./LimitExceededException";
import { BillExpirationException } from "./BillExpirationException";
import { DataUnavailableException } from "./DataUnavailableException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { RequestChangedException } from "./RequestChangedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetTagsInput
  },
  output: {
    shape: GetTagsOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: BillExpirationException
    },
    {
      shape: DataUnavailableException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: RequestChangedException
    }
  ]
};
