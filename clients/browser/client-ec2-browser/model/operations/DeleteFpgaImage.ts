import { DeleteFpgaImageInput } from "../shapes/DeleteFpgaImageInput";
import { DeleteFpgaImageOutput } from "../shapes/DeleteFpgaImageOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteFpgaImage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFpgaImage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteFpgaImageInput
  },
  output: {
    shape: DeleteFpgaImageOutput
  },
  errors: []
};
