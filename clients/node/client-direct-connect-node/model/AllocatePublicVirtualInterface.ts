import { AllocatePublicVirtualInterfaceInput } from "./AllocatePublicVirtualInterfaceInput";
import { AllocatePublicVirtualInterfaceOutput } from "./AllocatePublicVirtualInterfaceOutput";
import { DuplicateTagKeysException } from "./DuplicateTagKeysException";
import { TooManyTagsException } from "./TooManyTagsException";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
