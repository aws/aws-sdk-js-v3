import { _InputDescriptions } from "./_InputDescriptions";
import { _OutputDescriptions } from "./_OutputDescriptions";
import { _ReferenceDataSourceDescriptions } from "./_ReferenceDataSourceDescriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SqlApplicationConfigurationDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InputDescriptions: {
      shape: _InputDescriptions
    },
    OutputDescriptions: {
      shape: _OutputDescriptions
    },
    ReferenceDataSourceDescriptions: {
      shape: _ReferenceDataSourceDescriptions
    }
  }
};
