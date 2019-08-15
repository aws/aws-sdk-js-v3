import { _UserStorageMetadata } from "./_UserStorageMetadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _User: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Username: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EmailAddress: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GivenName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Surname: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OrganizationId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RootFolderId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RecycleBinFolderId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    CreatedTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    ModifiedTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    TimeZoneId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Locale: {
      shape: {
        type: "string"
      }
    },
    Storage: {
      shape: _UserStorageMetadata
    }
  }
};
