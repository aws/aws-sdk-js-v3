import { ListBackupVaultsInput } from "../shapes/ListBackupVaultsInput";
import { ListBackupVaultsOutput } from "../shapes/ListBackupVaultsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListBackupVaults: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBackupVaults",
  http: {
    method: "GET",
    requestUri: "/backup-vaults/"
  },
  input: {
    shape: ListBackupVaultsInput
  },
  output: {
    shape: ListBackupVaultsOutput
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
