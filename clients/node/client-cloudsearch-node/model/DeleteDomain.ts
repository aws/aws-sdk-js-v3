import { DeleteDomainInput } from "./DeleteDomainInput";
import { DeleteDomainOutput } from "./DeleteDomainOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDomain",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDomainInput
  },
  output: {
    shape: DeleteDomainOutput,
    resultWrapper: "DeleteDomainResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    }
  ]
};
