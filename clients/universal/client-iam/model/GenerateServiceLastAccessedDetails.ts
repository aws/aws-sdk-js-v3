import { GenerateServiceLastAccessedDetailsInput } from "./GenerateServiceLastAccessedDetailsInput";
import { GenerateServiceLastAccessedDetailsOutput } from "./GenerateServiceLastAccessedDetailsOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
