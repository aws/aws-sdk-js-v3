import { CreateTransitVirtualInterfaceInput } from "./CreateTransitVirtualInterfaceInput";
import { CreateTransitVirtualInterfaceOutput } from "./CreateTransitVirtualInterfaceOutput";
import { DuplicateTagKeysException } from "./DuplicateTagKeysException";
import { TooManyTagsException } from "./TooManyTagsException";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
