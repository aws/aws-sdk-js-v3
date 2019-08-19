import { _DocumentParameterList } from "./_DocumentParameterList";
import { _PlatformTypeList } from "./_PlatformTypeList";
import { _TagList } from "./_TagList";
import { _AttachmentInformationList } from "./_AttachmentInformationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DocumentDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Sha1: {
      shape: {
        type: "string"
      }
    },
    Hash: {
      shape: {
        type: "string"
      }
    },
    HashType: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    VersionName: {
      shape: {
        type: "string"
      }
    },
    Owner: {
      shape: {
        type: "string"
      }
    },
    CreatedDate: {
      shape: {
        type: "timestamp"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    StatusInformation: {
      shape: {
        type: "string"
      }
    },
    DocumentVersion: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: _DocumentParameterList
    },
    PlatformTypes: {
      shape: _PlatformTypeList
    },
    DocumentType: {
      shape: {
        type: "string"
      }
    },
    SchemaVersion: {
      shape: {
        type: "string"
      }
    },
    LatestVersion: {
      shape: {
        type: "string"
      }
    },
    DefaultVersion: {
      shape: {
        type: "string"
      }
    },
    DocumentFormat: {
      shape: {
        type: "string"
      }
    },
    TargetType: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    },
    AttachmentsInformation: {
      shape: _AttachmentInformationList
    }
  }
};
