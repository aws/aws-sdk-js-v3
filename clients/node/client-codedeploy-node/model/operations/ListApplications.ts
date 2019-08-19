import { ListApplicationsInput } from "../shapes/ListApplicationsInput";
import { ListApplicationsOutput } from "../shapes/ListApplicationsOutput";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListApplications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListApplications",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListApplicationsInput
  },
  output: {
    shape: ListApplicationsOutput
  },
  errors: [
    {
      shape: InvalidNextTokenException
    }
  ]
};
