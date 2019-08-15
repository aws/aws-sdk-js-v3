import { ListAliasesInput } from "../shapes/ListAliasesInput";
import { ListAliasesOutput } from "../shapes/ListAliasesOutput";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { InvalidMarkerException } from "../shapes/InvalidMarkerException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAliases: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAliases",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAliasesInput
  },
  output: {
    shape: ListAliasesOutput
  },
  errors: [
    {
      shape: DependencyTimeoutException
    },
    {
      shape: InvalidMarkerException
    },
    {
      shape: KMSInternalException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: NotFoundException
    }
  ]
};
