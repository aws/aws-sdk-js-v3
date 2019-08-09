import { AllocateTransitVirtualInterfaceInput } from "./AllocateTransitVirtualInterfaceInput";
import { AllocateTransitVirtualInterfaceOutput } from "./AllocateTransitVirtualInterfaceOutput";
import { DuplicateTagKeysException } from "./DuplicateTagKeysException";
import { TooManyTagsException } from "./TooManyTagsException";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
