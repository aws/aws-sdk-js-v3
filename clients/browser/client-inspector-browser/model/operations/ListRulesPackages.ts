import { ListRulesPackagesInput } from "../shapes/ListRulesPackagesInput";
import { ListRulesPackagesOutput } from "../shapes/ListRulesPackagesOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListRulesPackages: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRulesPackages",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListRulesPackagesInput
  },
  output: {
    shape: ListRulesPackagesOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: AccessDeniedException
    }
  ]
};
