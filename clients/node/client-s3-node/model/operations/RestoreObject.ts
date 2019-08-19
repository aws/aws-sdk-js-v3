import { RestoreObjectInput } from "../shapes/RestoreObjectInput";
import { RestoreObjectOutput } from "../shapes/RestoreObjectOutput";
import { ObjectAlreadyInActiveTierError } from "../shapes/ObjectAlreadyInActiveTierError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RestoreObject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RestoreObject",
  http: {
    method: "POST",
    requestUri: "/{Bucket}/{Key+}?restore"
  },
  input: {
    shape: RestoreObjectInput
  },
  output: {
    shape: RestoreObjectOutput
  },
  errors: [
    {
      shape: ObjectAlreadyInActiveTierError
    }
  ]
};
