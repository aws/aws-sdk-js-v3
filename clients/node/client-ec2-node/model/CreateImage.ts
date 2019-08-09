import { CreateImageInput } from "./CreateImageInput";
import { CreateImageOutput } from "./CreateImageOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateImage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateImage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateImageInput
  },
  output: {
    shape: CreateImageOutput
  },
  errors: []
};
