import { _InputProcessingConfigurationUpdate } from "./_InputProcessingConfigurationUpdate";
import { _KinesisStreamsInputUpdate } from "./_KinesisStreamsInputUpdate";
import { _KinesisFirehoseInputUpdate } from "./_KinesisFirehoseInputUpdate";
import { _InputSchemaUpdate } from "./_InputSchemaUpdate";
import { _InputParallelismUpdate } from "./_InputParallelismUpdate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputUpdate: _Structure_ = {
  type: "structure",
  required: ["InputId"],
  members: {
    InputId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NamePrefixUpdate: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InputProcessingConfigurationUpdate: {
      shape: _InputProcessingConfigurationUpdate
    },
    KinesisStreamsInputUpdate: {
      shape: _KinesisStreamsInputUpdate
    },
    KinesisFirehoseInputUpdate: {
      shape: _KinesisFirehoseInputUpdate
    },
    InputSchemaUpdate: {
      shape: _InputSchemaUpdate
    },
    InputParallelismUpdate: {
      shape: _InputParallelismUpdate
    }
  }
};
