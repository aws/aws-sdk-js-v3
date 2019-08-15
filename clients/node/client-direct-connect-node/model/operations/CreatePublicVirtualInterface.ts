import { CreatePublicVirtualInterfaceInput } from "../shapes/CreatePublicVirtualInterfaceInput";
import { CreatePublicVirtualInterfaceOutput } from "../shapes/CreatePublicVirtualInterfaceOutput";
import { DuplicateTagKeysException } from "../shapes/DuplicateTagKeysException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePublicVirtualInterface: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePublicVirtualInterface",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePublicVirtualInterfaceInput
  },
  output: {
    shape: CreatePublicVirtualInterfaceOutput
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
