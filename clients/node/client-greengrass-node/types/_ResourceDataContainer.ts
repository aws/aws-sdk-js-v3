import {
  _LocalDeviceResourceData,
  _UnmarshalledLocalDeviceResourceData
} from "./_LocalDeviceResourceData";
import {
  _LocalVolumeResourceData,
  _UnmarshalledLocalVolumeResourceData
} from "./_LocalVolumeResourceData";
import {
  _S3MachineLearningModelResourceData,
  _UnmarshalledS3MachineLearningModelResourceData
} from "./_S3MachineLearningModelResourceData";
import {
  _SageMakerMachineLearningModelResourceData,
  _UnmarshalledSageMakerMachineLearningModelResourceData
} from "./_SageMakerMachineLearningModelResourceData";
import {
  _SecretsManagerSecretResourceData,
  _UnmarshalledSecretsManagerSecretResourceData
} from "./_SecretsManagerSecretResourceData";

/**
 * A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData'', ''SecretsManagerSecretResourceData''.
 */
export interface _ResourceDataContainer {
  /**
   * Attributes that define the local device resource.
   */
  LocalDeviceResourceData?: _LocalDeviceResourceData;

  /**
   * Attributes that define the local volume resource.
   */
  LocalVolumeResourceData?: _LocalVolumeResourceData;

  /**
   * Attributes that define an Amazon S3 machine learning resource.
   */
  S3MachineLearningModelResourceData?: _S3MachineLearningModelResourceData;

  /**
   * Attributes that define an Amazon SageMaker machine learning resource.
   */
  SageMakerMachineLearningModelResourceData?: _SageMakerMachineLearningModelResourceData;

  /**
   * Attributes that define a secret resource, which references a secret from AWS Secrets Manager.
   */
  SecretsManagerSecretResourceData?: _SecretsManagerSecretResourceData;
}

export interface _UnmarshalledResourceDataContainer
  extends _ResourceDataContainer {
  /**
   * Attributes that define the local device resource.
   */
  LocalDeviceResourceData?: _UnmarshalledLocalDeviceResourceData;

  /**
   * Attributes that define the local volume resource.
   */
  LocalVolumeResourceData?: _UnmarshalledLocalVolumeResourceData;

  /**
   * Attributes that define an Amazon S3 machine learning resource.
   */
  S3MachineLearningModelResourceData?: _UnmarshalledS3MachineLearningModelResourceData;

  /**
   * Attributes that define an Amazon SageMaker machine learning resource.
   */
  SageMakerMachineLearningModelResourceData?: _UnmarshalledSageMakerMachineLearningModelResourceData;

  /**
   * Attributes that define a secret resource, which references a secret from AWS Secrets Manager.
   */
  SecretsManagerSecretResourceData?: _UnmarshalledSecretsManagerSecretResourceData;
}
