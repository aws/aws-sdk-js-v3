import { ListEmailIdentitiesInput } from "./ListEmailIdentitiesInput";
import { ListEmailIdentitiesOutput } from "./ListEmailIdentitiesOutput";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListEmailIdentities: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListEmailIdentities",
  http: {
    method: "GET",
    requestUri: "/v1/email/identities"
  },
  input: {
    shape: ListEmailIdentitiesInput
  },
  output: {
    shape: ListEmailIdentitiesOutput
  },
  errors: [
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    }
  ]
};
