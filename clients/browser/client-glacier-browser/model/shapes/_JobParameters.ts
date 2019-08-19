import { _InventoryRetrievalJobInput } from "./_InventoryRetrievalJobInput";
import { _SelectParameters } from "./_SelectParameters";
import { _OutputLocation } from "./_OutputLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobParameters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Format: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    ArchiveId: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    SNSTopic: {
      shape: {
        type: "string"
      }
    },
    RetrievalByteRange: {
      shape: {
        type: "string"
      }
    },
    Tier: {
      shape: {
        type: "string"
      }
    },
    InventoryRetrievalParameters: {
      shape: _InventoryRetrievalJobInput
    },
    SelectParameters: {
      shape: _SelectParameters
    },
    OutputLocation: {
      shape: _OutputLocation
    }
  }
};
