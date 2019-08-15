import { RestoreAddressToClassicInput } from "../shapes/RestoreAddressToClassicInput";
import { RestoreAddressToClassicOutput } from "../shapes/RestoreAddressToClassicOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RestoreAddressToClassic: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RestoreAddressToClassic",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RestoreAddressToClassicInput
  },
  output: {
    shape: RestoreAddressToClassicOutput
  },
  errors: []
};
