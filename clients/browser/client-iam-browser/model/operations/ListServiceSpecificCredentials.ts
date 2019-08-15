import { ListServiceSpecificCredentialsInput } from "../shapes/ListServiceSpecificCredentialsInput";
import { ListServiceSpecificCredentialsOutput } from "../shapes/ListServiceSpecificCredentialsOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceNotSupportedException } from "../shapes/ServiceNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListServiceSpecificCredentials: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListServiceSpecificCredentials",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListServiceSpecificCredentialsInput
  },
  output: {
    shape: ListServiceSpecificCredentialsOutput,
    resultWrapper: "ListServiceSpecificCredentialsResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceNotSupportedException
    }
  ]
};
