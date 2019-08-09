import { GetUpgradeStatusInput } from "./GetUpgradeStatusInput";
import { GetUpgradeStatusOutput } from "./GetUpgradeStatusOutput";
import { BaseException } from "./BaseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { DisabledOperationException } from "./DisabledOperationException";
import { ValidationException } from "./ValidationException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetUpgradeStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetUpgradeStatus",
  http: {
    method: "GET",
    requestUri: "/2015-01-01/es/upgradeDomain/{DomainName}/status"
  },
  input: {
    shape: GetUpgradeStatusInput
  },
  output: {
    shape: GetUpgradeStatusOutput
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: DisabledOperationException
    },
    {
      shape: ValidationException
    },
    {
      shape: InternalException
    }
  ]
};
