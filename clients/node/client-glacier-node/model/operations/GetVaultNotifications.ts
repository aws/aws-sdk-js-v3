import { GetVaultNotificationsInput } from "../shapes/GetVaultNotificationsInput";
import { GetVaultNotificationsOutput } from "../shapes/GetVaultNotificationsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetVaultNotifications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetVaultNotifications",
  http: {
    method: "GET",
    requestUri: "/{accountId}/vaults/{vaultName}/notification-configuration"
  },
  input: {
    shape: GetVaultNotificationsInput
  },
  output: {
    shape: GetVaultNotificationsOutput
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
