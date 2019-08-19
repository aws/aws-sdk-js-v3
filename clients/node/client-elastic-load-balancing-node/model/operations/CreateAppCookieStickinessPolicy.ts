import { CreateAppCookieStickinessPolicyInput } from "../shapes/CreateAppCookieStickinessPolicyInput";
import { CreateAppCookieStickinessPolicyOutput } from "../shapes/CreateAppCookieStickinessPolicyOutput";
import { AccessPointNotFoundException } from "../shapes/AccessPointNotFoundException";
import { DuplicatePolicyNameException } from "../shapes/DuplicatePolicyNameException";
import { TooManyPoliciesException } from "../shapes/TooManyPoliciesException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateAppCookieStickinessPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAppCookieStickinessPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAppCookieStickinessPolicyInput
  },
  output: {
    shape: CreateAppCookieStickinessPolicyOutput,
    resultWrapper: "CreateAppCookieStickinessPolicyResult"
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
