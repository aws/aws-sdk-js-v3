import { _ThingTypeProperties } from "./_ThingTypeProperties";
import { _ThingTypeMetadata } from "./_ThingTypeMetadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeThingTypeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    thingTypeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    thingTypeId: {
      shape: {
        type: "string"
      }
    },
    thingTypeArn: {
      shape: {
        type: "string"
      }
    },
    thingTypeProperties: {
      shape: _ThingTypeProperties
    },
    thingTypeMetadata: {
      shape: _ThingTypeMetadata
    }
  }
};
