import { CreateModelPackageInput } from "../shapes/CreateModelPackageInput";
import { CreateModelPackageOutput } from "../shapes/CreateModelPackageOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateModelPackage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateModelPackage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateModelPackageInput
  },
  output: {
    shape: CreateModelPackageOutput
  },
  errors: []
};
