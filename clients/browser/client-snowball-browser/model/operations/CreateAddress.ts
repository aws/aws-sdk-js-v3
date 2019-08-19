import { CreateAddressInput } from "../shapes/CreateAddressInput";
import { CreateAddressOutput } from "../shapes/CreateAddressOutput";
import { InvalidAddressException } from "../shapes/InvalidAddressException";
import { UnsupportedAddressException } from "../shapes/UnsupportedAddressException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateAddress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAddress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAddressInput
  },
  output: {
    shape: CreateAddressOutput
  },
  errors: [
    {
      shape: InvalidAddressException
    },
    {
      shape: UnsupportedAddressException
    }
  ]
};
