import { UpgradeElasticsearchDomainInput } from "./UpgradeElasticsearchDomainInput";
import { UpgradeElasticsearchDomainOutput } from "./UpgradeElasticsearchDomainOutput";
import { BaseException } from "./BaseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { DisabledOperationException } from "./DisabledOperationException";
import { ValidationException } from "./ValidationException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpgradeElasticsearchDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpgradeElasticsearchDomain",
  http: {
    method: "POST",
    requestUri: "/2015-01-01/es/upgradeDomain"
  },
  input: {
    shape: UpgradeElasticsearchDomainInput
  },
  output: {
    shape: UpgradeElasticsearchDomainOutput
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceAlreadyExistsException
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
