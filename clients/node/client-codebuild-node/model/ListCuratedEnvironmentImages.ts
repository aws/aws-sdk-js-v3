import { ListCuratedEnvironmentImagesInput } from "./ListCuratedEnvironmentImagesInput";
import { ListCuratedEnvironmentImagesOutput } from "./ListCuratedEnvironmentImagesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListCuratedEnvironmentImages: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCuratedEnvironmentImages",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListCuratedEnvironmentImagesInput
  },
  output: {
    shape: ListCuratedEnvironmentImagesOutput
  },
  errors: []
};
