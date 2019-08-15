import { _ThingGroupProperties } from "./_ThingGroupProperties";
import { _ThingGroupMetadata } from "./_ThingGroupMetadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeThingGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    thingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    thingGroupId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    thingGroupArn: {
      shape: {
        type: "string"
      }
    },
    version: {
      shape: {
        type: "integer"
      }
    },
    thingGroupProperties: {
      shape: _ThingGroupProperties
    },
    thingGroupMetadata: {
      shape: _ThingGroupMetadata
    },
    indexName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    queryString: {
      shape: {
        type: "string",
        min: 1
      }
    },
    queryVersion: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    }
  }
};
