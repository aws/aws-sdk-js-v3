import { _AddTags } from "./_AddTags";
import { _TagKeys } from "./_TagKeys";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateProductInput: _Structure_ = {
  type: "structure",
  required: ["Id"],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Owner: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Distributor: {
      shape: {
        type: "string"
      }
    },
    SupportDescription: {
      shape: {
        type: "string"
      }
    },
    SupportEmail: {
      shape: {
        type: "string"
      }
    },
    SupportUrl: {
      shape: {
        type: "string"
      }
    },
    AddTags: {
      shape: _AddTags
    },
    RemoveTags: {
      shape: _TagKeys
    }
  }
};
