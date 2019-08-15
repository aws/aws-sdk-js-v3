import { _ThingTypeProperties } from "./_ThingTypeProperties";
import { _ThingTypeMetadata } from "./_ThingTypeMetadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ThingTypeDefinition: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    thingTypeName: {
      shape: {
        type: "string",
        min: 1
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
