import { AllocatePrivateVirtualInterfaceInput } from "../shapes/AllocatePrivateVirtualInterfaceInput";
import { AllocatePrivateVirtualInterfaceOutput } from "../shapes/AllocatePrivateVirtualInterfaceOutput";
import { DuplicateTagKeysException } from "../shapes/DuplicateTagKeysException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AllocatePrivateVirtualInterface: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AllocatePrivateVirtualInterface",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AllocatePrivateVirtualInterfaceInput
  },
  output: {
    shape: AllocatePrivateVirtualInterfaceOutput
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
