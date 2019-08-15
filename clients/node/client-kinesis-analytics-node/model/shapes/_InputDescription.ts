import { _InAppStreamNames } from "./_InAppStreamNames";
import { _InputProcessingConfigurationDescription } from "./_InputProcessingConfigurationDescription";
import { _KinesisStreamsInputDescription } from "./_KinesisStreamsInputDescription";
import { _KinesisFirehoseInputDescription } from "./_KinesisFirehoseInputDescription";
import { _SourceSchema } from "./_SourceSchema";
import { _InputParallelism } from "./_InputParallelism";
import { _InputStartingPositionConfiguration } from "./_InputStartingPositionConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InputId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NamePrefix: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InAppStreamNames: {
      shape: _InAppStreamNames
    },
    InputProcessingConfigurationDescription: {
      shape: _InputProcessingConfigurationDescription
    },
    KinesisStreamsInputDescription: {
      shape: _KinesisStreamsInputDescription
    },
    KinesisFirehoseInputDescription: {
      shape: _KinesisFirehoseInputDescription
    },
    InputSchema: {
      shape: _SourceSchema
    },
    InputParallelism: {
      shape: _InputParallelism
    },
    InputStartingPositionConfiguration: {
      shape: _InputStartingPositionConfiguration
    }
  }
};
