import { CreateTransitVirtualInterfaceInput } from "../shapes/CreateTransitVirtualInterfaceInput";
import { CreateTransitVirtualInterfaceOutput } from "../shapes/CreateTransitVirtualInterfaceOutput";
import { DuplicateTagKeysException } from "../shapes/DuplicateTagKeysException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateTransitVirtualInterface: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTransitVirtualInterface",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTransitVirtualInterfaceInput
  },
  output: {
    shape: CreateTransitVirtualInterfaceOutput
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
