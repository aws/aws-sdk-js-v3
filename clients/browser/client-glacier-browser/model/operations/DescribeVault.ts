import { DescribeVaultInput } from "../shapes/DescribeVaultInput";
import { DescribeVaultOutput } from "../shapes/DescribeVaultOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeVault: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVault",
  http: {
    method: "GET",
    requestUri: "/{accountId}/vaults/{vaultName}"
  },
  input: {
    shape: DescribeVaultInput
  },
  output: {
    shape: DescribeVaultOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: MissingParameterValueException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
