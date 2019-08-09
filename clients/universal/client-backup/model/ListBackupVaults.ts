import { ListBackupVaultsInput } from "./ListBackupVaultsInput";
import { ListBackupVaultsOutput } from "./ListBackupVaultsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
