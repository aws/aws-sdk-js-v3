import { GetLogRecordInput } from "./GetLogRecordInput";
import { GetLogRecordOutput } from "./GetLogRecordOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
