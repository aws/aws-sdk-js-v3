import { GetUpgradeHistoryInput } from "./GetUpgradeHistoryInput";
import { GetUpgradeHistoryOutput } from "./GetUpgradeHistoryOutput";
import { BaseException } from "./BaseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { DisabledOperationException } from "./DisabledOperationException";
import { ValidationException } from "./ValidationException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
