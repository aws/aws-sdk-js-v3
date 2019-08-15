import { _SimulationPolicyListType } from "./_SimulationPolicyListType";
import { _ActionNameListType } from "./_ActionNameListType";
import { _ResourceNameListType } from "./_ResourceNameListType";
import { _ContextEntryListType } from "./_ContextEntryListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SimulateCustomPolicyInput: _Structure_ = {
  type: "structure",
  required: ["PolicyInputList", "ActionNames"],
  members: {
    PolicyInputList: {
      shape: _SimulationPolicyListType
    },
    ActionNames: {
      shape: _ActionNameListType
    },
    ResourceArns: {
      shape: _ResourceNameListType
    },
    ResourcePolicy: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceOwner: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CallerArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ContextEntries: {
      shape: _ContextEntryListType
    },
    ResourceHandlingOption: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxItems: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
