import { DescribeFpgaImagesInput } from "../shapes/DescribeFpgaImagesInput";
import { DescribeFpgaImagesOutput } from "../shapes/DescribeFpgaImagesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeFpgaImages: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeFpgaImages",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeFpgaImagesInput
  },
  output: {
    shape: DescribeFpgaImagesOutput
  },
  errors: []
};
