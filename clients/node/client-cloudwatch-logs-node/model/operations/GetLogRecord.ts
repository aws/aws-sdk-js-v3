import { GetLogRecordInput } from "../shapes/GetLogRecordInput";
import { GetLogRecordOutput } from "../shapes/GetLogRecordOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetLogRecord: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetLogRecord",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetLogRecordInput
  },
  output: {
    shape: GetLogRecordOutput
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
