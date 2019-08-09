import { DescribeEmergencyContactSettingsInput } from "./DescribeEmergencyContactSettingsInput";
import { DescribeEmergencyContactSettingsOutput } from "./DescribeEmergencyContactSettingsOutput";
import { InternalErrorException } from "./InternalErrorException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeEmergencyContactSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEmergencyContactSettings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEmergencyContactSettingsInput
  },
  output: {
    shape: DescribeEmergencyContactSettingsOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
