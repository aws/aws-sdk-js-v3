import { GetResourcePoliciesInput } from "./GetResourcePoliciesInput";
import { GetResourcePoliciesOutput } from "./GetResourcePoliciesOutput";
import { MalformedArnException } from "./MalformedArnException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ServerInternalException } from "./ServerInternalException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
