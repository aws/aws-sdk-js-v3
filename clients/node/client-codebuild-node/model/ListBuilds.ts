import { ListBuildsInput } from "./ListBuildsInput";
import { ListBuildsOutput } from "./ListBuildsOutput";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListBuilds: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBuilds",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListBuildsInput
  },
  output: {
    shape: ListBuildsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    }
  ]
};
