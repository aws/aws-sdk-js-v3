import { PutTelemetryRecordsInput } from "../shapes/PutTelemetryRecordsInput";
import { PutTelemetryRecordsOutput } from "../shapes/PutTelemetryRecordsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottledException } from "../shapes/ThrottledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutTelemetryRecords: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutTelemetryRecords",
  http: {
    method: "POST",
    requestUri: "/TelemetryRecords"
  },
  input: {
    shape: PutTelemetryRecordsInput
  },
  output: {
    shape: PutTelemetryRecordsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottledException
    }
  ]
};
