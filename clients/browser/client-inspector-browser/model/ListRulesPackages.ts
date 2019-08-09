import { ListRulesPackagesInput } from "./ListRulesPackagesInput";
import { ListRulesPackagesOutput } from "./ListRulesPackagesOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
