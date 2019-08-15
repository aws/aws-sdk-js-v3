import { ModifyIdFormatInput } from "../shapes/ModifyIdFormatInput";
import { ModifyIdFormatOutput } from "../shapes/ModifyIdFormatOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyIdFormat: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyIdFormat",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyIdFormatInput
  },
  output: {
    shape: ModifyIdFormatOutput
  },
  errors: []
};
