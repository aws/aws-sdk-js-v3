import { CopyFpgaImageInput } from "../shapes/CopyFpgaImageInput";
import { CopyFpgaImageOutput } from "../shapes/CopyFpgaImageOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CopyFpgaImage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CopyFpgaImage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CopyFpgaImageInput
  },
  output: {
    shape: CopyFpgaImageOutput
  },
  errors: []
};
