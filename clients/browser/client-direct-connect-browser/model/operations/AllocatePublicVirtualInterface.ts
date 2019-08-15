import { AllocatePublicVirtualInterfaceInput } from "../shapes/AllocatePublicVirtualInterfaceInput";
import { AllocatePublicVirtualInterfaceOutput } from "../shapes/AllocatePublicVirtualInterfaceOutput";
import { DuplicateTagKeysException } from "../shapes/DuplicateTagKeysException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AllocatePublicVirtualInterface: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AllocatePublicVirtualInterface",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AllocatePublicVirtualInterfaceInput
  },
  output: {
    shape: AllocatePublicVirtualInterfaceOutput
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
