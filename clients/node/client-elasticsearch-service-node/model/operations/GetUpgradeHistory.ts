import { GetUpgradeHistoryInput } from "../shapes/GetUpgradeHistoryInput";
import { GetUpgradeHistoryOutput } from "../shapes/GetUpgradeHistoryOutput";
import { BaseException } from "../shapes/BaseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { DisabledOperationException } from "../shapes/DisabledOperationException";
import { ValidationException } from "../shapes/ValidationException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetUpgradeHistory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetUpgradeHistory",
  http: {
    method: "GET",
    requestUri: "/2015-01-01/es/upgradeDomain/{DomainName}/history"
  },
  input: {
    shape: GetUpgradeHistoryInput
  },
  output: {
    shape: GetUpgradeHistoryOutput
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
