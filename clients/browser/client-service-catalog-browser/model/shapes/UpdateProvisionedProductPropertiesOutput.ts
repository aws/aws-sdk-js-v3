import { _ProvisionedProductProperties } from "./_ProvisionedProductProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateProvisionedProductPropertiesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProvisionedProductId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProvisionedProductProperties: {
      shape: _ProvisionedProductProperties
    },
    RecordId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
