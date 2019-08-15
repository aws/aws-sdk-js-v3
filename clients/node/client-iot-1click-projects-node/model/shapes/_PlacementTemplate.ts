import { _DefaultPlacementAttributeMap } from "./_DefaultPlacementAttributeMap";
import { _DeviceTemplateMap } from "./_DeviceTemplateMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PlacementTemplate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    defaultAttributes: {
      shape: _DefaultPlacementAttributeMap
    },
    deviceTemplates: {
      shape: _DeviceTemplateMap
    }
  }
};
