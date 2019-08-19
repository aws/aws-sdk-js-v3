import { CopyObjectInput } from "../shapes/CopyObjectInput";
import { CopyObjectOutput } from "../shapes/CopyObjectOutput";
import { ObjectNotInActiveTierError } from "../shapes/ObjectNotInActiveTierError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CopyObject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CopyObject",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}/{Key+}"
  },
  input: {
    shape: CopyObjectInput
  },
  output: {
    shape: CopyObjectOutput
  },
  errors: [
    {
      shape: ObjectNotInActiveTierError
    }
  ]
};
