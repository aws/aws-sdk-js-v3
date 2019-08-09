import { _ModelPackageContainerDefinitionList } from "./_ModelPackageContainerDefinitionList";
import { _TransformInstanceTypes } from "./_TransformInstanceTypes";
import { _RealtimeInferenceInstanceTypes } from "./_RealtimeInferenceInstanceTypes";
import { _ContentTypes } from "./_ContentTypes";
import { _ResponseMIMETypes } from "./_ResponseMIMETypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InferenceSpecification: _Structure_ = {
  type: "structure",
  required: [
    "Containers",
    "SupportedTransformInstanceTypes",
    "SupportedRealtimeInferenceInstanceTypes",
    "SupportedContentTypes",
    "SupportedResponseMIMETypes"
  ],
  members: {
    Containers: {
      shape: _ModelPackageContainerDefinitionList
    },
    SupportedTransformInstanceTypes: {
      shape: _TransformInstanceTypes
    },
    SupportedRealtimeInferenceInstanceTypes: {
      shape: _RealtimeInferenceInstanceTypes
    },
    SupportedContentTypes: {
      shape: _ContentTypes
    },
    SupportedResponseMIMETypes: {
      shape: _ResponseMIMETypes
    }
  }
};
