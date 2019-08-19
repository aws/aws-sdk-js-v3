import { UpgradeElasticsearchDomainInput } from "../shapes/UpgradeElasticsearchDomainInput";
import { UpgradeElasticsearchDomainOutput } from "../shapes/UpgradeElasticsearchDomainOutput";
import { BaseException } from "../shapes/BaseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { DisabledOperationException } from "../shapes/DisabledOperationException";
import { ValidationException } from "../shapes/ValidationException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
