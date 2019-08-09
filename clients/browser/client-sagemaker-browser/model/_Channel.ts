import { _DataSource } from "./_DataSource";
import { _ShuffleConfig } from "./_ShuffleConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Channel: _Structure_ = {
  type: "structure",
  required: ["ChannelName", "DataSource"],
  members: {
    ChannelName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DataSource: {
      shape: _DataSource
    },
    ContentType: {
      shape: {
        type: "string"
      }
    },
    CompressionType: {
      shape: {
        type: "string"
      }
    },
    RecordWrapperType: {
      shape: {
        type: "string"
      }
    },
    InputMode: {
      shape: {
        type: "string"
      }
    },
    ShuffleConfig: {
      shape: _ShuffleConfig
    }
  }
};
