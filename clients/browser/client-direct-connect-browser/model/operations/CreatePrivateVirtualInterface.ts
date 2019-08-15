import { CreatePrivateVirtualInterfaceInput } from "../shapes/CreatePrivateVirtualInterfaceInput";
import { CreatePrivateVirtualInterfaceOutput } from "../shapes/CreatePrivateVirtualInterfaceOutput";
import { DuplicateTagKeysException } from "../shapes/DuplicateTagKeysException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePrivateVirtualInterface: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePrivateVirtualInterface",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePrivateVirtualInterfaceInput
  },
  output: {
    shape: CreatePrivateVirtualInterfaceOutput
  },
  errors: [
    {
      shape: DuplicateTagKeysException
    },
    {
      shape: TooManyTagsException
    },
    {
      shape: DirectConnectServerException
    },
    {
      shape: DirectConnectClientException
    }
  ]
};
