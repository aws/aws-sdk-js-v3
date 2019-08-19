import { GetResourcePoliciesInput } from "../shapes/GetResourcePoliciesInput";
import { GetResourcePoliciesOutput } from "../shapes/GetResourcePoliciesOutput";
import { MalformedArnException } from "../shapes/MalformedArnException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetResourcePolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetResourcePolicies",
  http: {
    method: "POST",
    requestUri: "/getresourcepolicies"
  },
  input: {
    shape: GetResourcePoliciesInput
  },
  output: {
    shape: GetResourcePoliciesOutput
  },
  errors: [
    {
      shape: MalformedArnException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ServerInternalException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
