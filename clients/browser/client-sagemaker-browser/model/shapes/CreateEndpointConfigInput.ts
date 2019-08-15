import { _ProductionVariantList } from "./_ProductionVariantList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateEndpointConfigInput: _Structure_ = {
  type: "structure",
  required: ["EndpointConfigName", "ProductionVariants"],
  members: {
    EndpointConfigName: {
      shape: {
        type: "string"
      }
    },
    ProductionVariants: {
      shape: _ProductionVariantList
    },
    Tags: {
      shape: _TagList
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    }
  }
};
