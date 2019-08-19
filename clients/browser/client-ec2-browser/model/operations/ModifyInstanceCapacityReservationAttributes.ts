import { ModifyInstanceCapacityReservationAttributesInput } from "../shapes/ModifyInstanceCapacityReservationAttributesInput";
import { ModifyInstanceCapacityReservationAttributesOutput } from "../shapes/ModifyInstanceCapacityReservationAttributesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyInstanceCapacityReservationAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyInstanceCapacityReservationAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyInstanceCapacityReservationAttributesInput
  },
  output: {
    shape: ModifyInstanceCapacityReservationAttributesOutput
  },
  errors: []
};
