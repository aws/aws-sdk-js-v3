import { _CmafPackage } from "./_CmafPackage";
import { _DashPackage } from "./_DashPackage";
import { _HlsPackage } from "./_HlsPackage";
import { _MssPackage } from "./_MssPackage";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PackagingConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
    },
    CmafPackage: {
      shape: _CmafPackage,
      locationName: "cmafPackage"
    },
    DashPackage: {
      shape: _DashPackage,
      locationName: "dashPackage"
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
    MssPackage: {
      shape: _MssPackage,
      locationName: "mssPackage"
    },
    PackagingGroupId: {
      shape: {
        type: "string"
      },
      locationName: "packagingGroupId"
    }
  }
};
