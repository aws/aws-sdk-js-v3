import { ListMFADevicesInput } from "../shapes/ListMFADevicesInput";
import { ListMFADevicesOutput } from "../shapes/ListMFADevicesOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListMFADevices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListMFADevices",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListMFADevicesInput
  },
  output: {
    shape: ListMFADevicesOutput,
    resultWrapper: "ListMFADevicesResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
