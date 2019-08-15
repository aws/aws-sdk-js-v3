import { _ThingGroupNameList } from "./_ThingGroupNameList";
import { _Attributes } from "./_Attributes";
import { _ThingConnectivity } from "./_ThingConnectivity";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ThingDocument: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    thingName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    thingId: {
      shape: {
        type: "string"
      }
    },
    thingTypeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    thingGroupNames: {
      shape: _ThingGroupNameList
    },
    attributes: {
      shape: _Attributes
    },
    shadow: {
      shape: {
        type: "string"
      }
    },
    connectivity: {
      shape: _ThingConnectivity
    }
  }
};
