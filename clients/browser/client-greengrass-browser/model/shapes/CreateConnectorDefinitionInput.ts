import { _ConnectorDefinitionVersion } from "./_ConnectorDefinitionVersion";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateConnectorDefinitionInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AmznClientToken: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "X-Amzn-Client-Token"
    },
    InitialVersion: {
      shape: _ConnectorDefinitionVersion
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _Tags
    }
  }
};
