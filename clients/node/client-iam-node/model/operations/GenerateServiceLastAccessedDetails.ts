import { GenerateServiceLastAccessedDetailsInput } from "../shapes/GenerateServiceLastAccessedDetailsInput";
import { GenerateServiceLastAccessedDetailsOutput } from "../shapes/GenerateServiceLastAccessedDetailsOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GenerateServiceLastAccessedDetails: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GenerateServiceLastAccessedDetails",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GenerateServiceLastAccessedDetailsInput
  },
  output: {
    shape: GenerateServiceLastAccessedDetailsOutput,
    resultWrapper: "GenerateServiceLastAccessedDetailsResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: InvalidInputException
    }
  ]
};
