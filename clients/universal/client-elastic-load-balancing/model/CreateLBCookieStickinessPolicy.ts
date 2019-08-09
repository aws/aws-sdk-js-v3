import { CreateLBCookieStickinessPolicyInput } from "./CreateLBCookieStickinessPolicyInput";
import { CreateLBCookieStickinessPolicyOutput } from "./CreateLBCookieStickinessPolicyOutput";
import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { DuplicatePolicyNameException } from "./DuplicatePolicyNameException";
import { TooManyPoliciesException } from "./TooManyPoliciesException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateLBCookieStickinessPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLBCookieStickinessPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateLBCookieStickinessPolicyInput
  },
  output: {
    shape: CreateLBCookieStickinessPolicyOutput,
    resultWrapper: "CreateLBCookieStickinessPolicyResult"
  },
  errors: [
    {
      shape: AccessPointNotFoundException
    },
    {
      shape: DuplicatePolicyNameException
    },
    {
      shape: TooManyPoliciesException
    },
    {
      shape: InvalidConfigurationRequestException
    }
  ]
};
