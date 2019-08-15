import { GetLogGroupFieldsInput } from "../shapes/GetLogGroupFieldsInput";
import { GetLogGroupFieldsOutput } from "../shapes/GetLogGroupFieldsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
