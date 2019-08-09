import {
  _StorageTypeLimit,
  _UnmarshalledStorageTypeLimit
} from "./_StorageTypeLimit";

/**
 * <p>StorageTypes represents the list of storage related types and their attributes that are available for given InstanceType. </p>
 */
export interface _StorageType {
  /**
   * <p> Type of the storage. List of available storage options: <ol> <li>instance</li> Inbuilt storage available for the given Instance <li>ebs</li> Elastic block storage that would be attached to the given Instance </ol> </p>
   */
  StorageTypeName?: string;

  /**
   * <p> SubType of the given storage type. List of available sub-storage options: For "instance" storageType we wont have any storageSubType, in case of "ebs" storageType we will have following valid storageSubTypes <ol> <li>standard</li> <li>gp2</li> <li>io1</li> </ol> Refer <code><a>VolumeType</a></code> for more information regarding above EBS storage options. </p>
   */
  StorageSubTypeName?: string;

  /**
   * <p>List of limits that are applicable for given storage type. </p>
   */
  StorageTypeLimits?: Array<_StorageTypeLimit> | Iterable<_StorageTypeLimit>;
}

export interface _UnmarshalledStorageType extends _StorageType {
  /**
   * <p>List of limits that are applicable for given storage type. </p>
   */
  StorageTypeLimits?: Array<_UnmarshalledStorageTypeLimit>;
}
