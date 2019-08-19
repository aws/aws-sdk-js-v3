import { _InputUpdates } from "./_InputUpdates";
import { _OutputUpdates } from "./_OutputUpdates";
import { _ReferenceDataSourceUpdates } from "./_ReferenceDataSourceUpdates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SqlApplicationConfigurationUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InputUpdates: {
      shape: _InputUpdates
    },
    OutputUpdates: {
      shape: _OutputUpdates
    },
    ReferenceDataSourceUpdates: {
      shape: _ReferenceDataSourceUpdates
    }
  }
};
