import { GetLogGroupFieldsInput } from "./GetLogGroupFieldsInput";
import { GetLogGroupFieldsOutput } from "./GetLogGroupFieldsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetLogGroupFields: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetLogGroupFields",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetLogGroupFieldsInput
  },
  output: {
    shape: GetLogGroupFieldsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
