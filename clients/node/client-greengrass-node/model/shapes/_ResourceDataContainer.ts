import { _LocalDeviceResourceData } from "./_LocalDeviceResourceData";
import { _LocalVolumeResourceData } from "./_LocalVolumeResourceData";
import { _S3MachineLearningModelResourceData } from "./_S3MachineLearningModelResourceData";
import { _SageMakerMachineLearningModelResourceData } from "./_SageMakerMachineLearningModelResourceData";
import { _SecretsManagerSecretResourceData } from "./_SecretsManagerSecretResourceData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceDataContainer: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LocalDeviceResourceData: {
      shape: _LocalDeviceResourceData
    },
    LocalVolumeResourceData: {
      shape: _LocalVolumeResourceData
    },
    S3MachineLearningModelResourceData: {
      shape: _S3MachineLearningModelResourceData
    },
    SageMakerMachineLearningModelResourceData: {
      shape: _SageMakerMachineLearningModelResourceData
    },
    SecretsManagerSecretResourceData: {
      shape: _SecretsManagerSecretResourceData
    }
  }
};
