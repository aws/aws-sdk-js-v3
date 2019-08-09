import { _BaseConfigurationItems } from "./_BaseConfigurationItems";
import { _ResourceKeys } from "./_ResourceKeys";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetResourceConfigOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    baseConfigurationItems: {
      shape: _BaseConfigurationItems
    },
    unprocessedResourceKeys: {
      shape: _ResourceKeys
    }
  }
};
