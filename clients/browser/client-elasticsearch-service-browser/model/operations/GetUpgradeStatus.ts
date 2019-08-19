import { GetUpgradeStatusInput } from "../shapes/GetUpgradeStatusInput";
import { GetUpgradeStatusOutput } from "../shapes/GetUpgradeStatusOutput";
import { BaseException } from "../shapes/BaseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { DisabledOperationException } from "../shapes/DisabledOperationException";
import { ValidationException } from "../shapes/ValidationException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
