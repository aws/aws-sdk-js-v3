import { _AttributeBooleanValue } from "./_AttributeBooleanValue";
import { _ProductCodeList } from "./_ProductCodeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVolumeAttributeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AutoEnableIO: {
      shape: _AttributeBooleanValue,
      locationName: "autoEnableIO"
    },
    ProductCodes: {
      shape: _ProductCodeList,
      locationName: "productCodes"
    },
    VolumeId: {
      shape: {
        type: "string"
      },
      locationName: "volumeId"
    }
  }
};
