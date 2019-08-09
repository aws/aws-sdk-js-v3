import { CreateAppCookieStickinessPolicyInput } from "./CreateAppCookieStickinessPolicyInput";
import { CreateAppCookieStickinessPolicyOutput } from "./CreateAppCookieStickinessPolicyOutput";
import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { DuplicatePolicyNameException } from "./DuplicatePolicyNameException";
import { TooManyPoliciesException } from "./TooManyPoliciesException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
