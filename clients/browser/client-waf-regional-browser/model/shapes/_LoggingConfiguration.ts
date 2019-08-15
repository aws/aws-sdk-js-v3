import { _LogDestinationConfigs } from "./_LogDestinationConfigs";
import { _RedactedFields } from "./_RedactedFields";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoggingConfiguration: _Structure_ = {
  type: "structure",
  required: ["ResourceArn", "LogDestinationConfigs"],
  members: {
    ResourceArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LogDestinationConfigs: {
      shape: _LogDestinationConfigs
    },
    RedactedFields: {
      shape: _RedactedFields
    }
  }
};
