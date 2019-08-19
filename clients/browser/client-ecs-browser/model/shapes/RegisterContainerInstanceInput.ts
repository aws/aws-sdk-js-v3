import { _Resources } from "./_Resources";
import { _VersionInfo } from "./_VersionInfo";
import { _Attributes } from "./_Attributes";
import { _PlatformDevices } from "./_PlatformDevices";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterContainerInstanceInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    cluster: {
      shape: {
        type: "string"
      }
    },
    instanceIdentityDocument: {
      shape: {
        type: "string"
      }
    },
    instanceIdentityDocumentSignature: {
      shape: {
        type: "string"
      }
    },
    totalResources: {
      shape: _Resources
    },
    versionInfo: {
      shape: _VersionInfo
    },
    containerInstanceArn: {
      shape: {
        type: "string"
      }
    },
    attributes: {
      shape: _Attributes
    },
    platformDevices: {
      shape: _PlatformDevices
    },
    tags: {
      shape: _Tags
    }
  }
};
