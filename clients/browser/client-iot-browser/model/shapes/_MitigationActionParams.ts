import { _UpdateDeviceCertificateParams } from "./_UpdateDeviceCertificateParams";
import { _UpdateCACertificateParams } from "./_UpdateCACertificateParams";
import { _AddThingsToThingGroupParams } from "./_AddThingsToThingGroupParams";
import { _ReplaceDefaultPolicyVersionParams } from "./_ReplaceDefaultPolicyVersionParams";
import { _EnableIoTLoggingParams } from "./_EnableIoTLoggingParams";
import { _PublishFindingToSnsParams } from "./_PublishFindingToSnsParams";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MitigationActionParams: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    updateDeviceCertificateParams: {
      shape: _UpdateDeviceCertificateParams
    },
    updateCACertificateParams: {
      shape: _UpdateCACertificateParams
    },
    addThingsToThingGroupParams: {
      shape: _AddThingsToThingGroupParams
    },
    replaceDefaultPolicyVersionParams: {
      shape: _ReplaceDefaultPolicyVersionParams
    },
    enableIoTLoggingParams: {
      shape: _EnableIoTLoggingParams
    },
    publishFindingToSnsParams: {
      shape: _PublishFindingToSnsParams
    }
  }
};
