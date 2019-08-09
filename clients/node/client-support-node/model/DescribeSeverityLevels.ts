import { DescribeSeverityLevelsInput } from "./DescribeSeverityLevelsInput";
import { DescribeSeverityLevelsOutput } from "./DescribeSeverityLevelsOutput";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeSeverityLevels: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSeverityLevels",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSeverityLevelsInput
  },
  output: {
    shape: DescribeSeverityLevelsOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
