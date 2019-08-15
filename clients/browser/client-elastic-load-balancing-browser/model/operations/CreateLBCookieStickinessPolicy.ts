import { CreateLBCookieStickinessPolicyInput } from "../shapes/CreateLBCookieStickinessPolicyInput";
import { CreateLBCookieStickinessPolicyOutput } from "../shapes/CreateLBCookieStickinessPolicyOutput";
import { AccessPointNotFoundException } from "../shapes/AccessPointNotFoundException";
import { DuplicatePolicyNameException } from "../shapes/DuplicatePolicyNameException";
import { TooManyPoliciesException } from "../shapes/TooManyPoliciesException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
