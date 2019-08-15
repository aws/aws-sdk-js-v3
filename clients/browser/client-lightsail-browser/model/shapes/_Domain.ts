import { _ResourceLocation } from "./_ResourceLocation";
import { _TagList } from "./_TagList";
import { _DomainEntryList } from "./_DomainEntryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Domain: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    supportCode: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    location: {
      shape: _ResourceLocation
    },
    resourceType: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    },
    domainEntries: {
      shape: _DomainEntryList
    }
  }
};
