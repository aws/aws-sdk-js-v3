import { _InputStartingPositionConfiguration } from "./_InputStartingPositionConfiguration";
import { _S3Configuration } from "./_S3Configuration";
import { _InputProcessingConfiguration } from "./_InputProcessingConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DiscoverInputSchemaInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RoleARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InputStartingPositionConfiguration: {
      shape: _InputStartingPositionConfiguration
    },
    S3Configuration: {
      shape: _S3Configuration
    },
    InputProcessingConfiguration: {
      shape: _InputProcessingConfiguration
    }
  }
};
