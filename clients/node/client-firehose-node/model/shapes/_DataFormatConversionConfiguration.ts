import { _SchemaConfiguration } from "./_SchemaConfiguration";
import { _InputFormatConfiguration } from "./_InputFormatConfiguration";
import { _OutputFormatConfiguration } from "./_OutputFormatConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DataFormatConversionConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SchemaConfiguration: {
      shape: _SchemaConfiguration
    },
    InputFormatConfiguration: {
      shape: _InputFormatConfiguration
    },
    OutputFormatConfiguration: {
      shape: _OutputFormatConfiguration
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
