import { ListModelPackagesInput } from "./ListModelPackagesInput";
import { ListModelPackagesOutput } from "./ListModelPackagesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListModelPackages: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListModelPackages",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListModelPackagesInput
  },
  output: {
    shape: ListModelPackagesOutput
  },
  errors: []
};
