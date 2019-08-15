import { _InputUpdates } from "./_InputUpdates";
import { _OutputUpdates } from "./_OutputUpdates";
import { _ReferenceDataSourceUpdates } from "./_ReferenceDataSourceUpdates";
import { _CloudWatchLoggingOptionUpdates } from "./_CloudWatchLoggingOptionUpdates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InputUpdates: {
      shape: _InputUpdates
    },
    ApplicationCodeUpdate: {
      shape: {
        type: "string"
      }
    },
    OutputUpdates: {
      shape: _OutputUpdates
    },
    ReferenceDataSourceUpdates: {
      shape: _ReferenceDataSourceUpdates
    },
    CloudWatchLoggingOptionUpdates: {
      shape: _CloudWatchLoggingOptionUpdates
    }
  }
};
