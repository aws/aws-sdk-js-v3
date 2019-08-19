import { _CmafPackage } from "./_CmafPackage";
import { _DashPackage } from "./_DashPackage";
import { _HlsPackage } from "./_HlsPackage";
import { _MssPackage } from "./_MssPackage";
import { _Tags } from "./_Tags";
import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateOriginEndpointOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
    },
    ChannelId: {
      shape: {
        type: "string"
      },
      locationName: "channelId"
    },
    CmafPackage: {
      shape: _CmafPackage,
      locationName: "cmafPackage"
    },
    DashPackage: {
      shape: _DashPackage,
      locationName: "dashPackage"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    HlsPackage: {
      shape: _HlsPackage,
      locationName: "hlsPackage"
    },
    Id: {
      shape: {
        type: "string"
      },
      locationName: "id"
    },
    ManifestName: {
      shape: {
        type: "string"
      },
      locationName: "manifestName"
    },
    MssPackage: {
      shape: _MssPackage,
      locationName: "mssPackage"
    },
    StartoverWindowSeconds: {
      shape: {
        type: "integer"
      },
      locationName: "startoverWindowSeconds"
    },
    Tags: {
      shape: _Tags,
      locationName: "tags"
    },
    TimeDelaySeconds: {
      shape: {
        type: "integer"
      },
      locationName: "timeDelaySeconds"
    },
    Url: {
      shape: {
        type: "string"
      },
      locationName: "url"
    },
    Whitelist: {
      shape: ___listOf__string,
      locationName: "whitelist"
    }
  }
};
