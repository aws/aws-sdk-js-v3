import { ListServiceSpecificCredentialsInput } from "./ListServiceSpecificCredentialsInput";
import { ListServiceSpecificCredentialsOutput } from "./ListServiceSpecificCredentialsOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceNotSupportedException } from "./ServiceNotSupportedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
