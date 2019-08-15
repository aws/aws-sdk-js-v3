import { AllocateTransitVirtualInterfaceInput } from "../shapes/AllocateTransitVirtualInterfaceInput";
import { AllocateTransitVirtualInterfaceOutput } from "../shapes/AllocateTransitVirtualInterfaceOutput";
import { DuplicateTagKeysException } from "../shapes/DuplicateTagKeysException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AllocateTransitVirtualInterface: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AllocateTransitVirtualInterface",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AllocateTransitVirtualInterfaceInput
  },
  output: {
    shape: AllocateTransitVirtualInterfaceOutput
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
