/**
 * <p>Limits that are applicable for given storage type. </p>
 */
export interface _StorageTypeLimit {
  /**
   * <p> Name of storage limits that are applicable for given storage type. If <code> <a>StorageType</a> </code> is ebs, following storage options are applicable <ol> <li>MinimumVolumeSize</li> Minimum amount of volume size that is applicable for given storage type.It can be empty if it is not applicable. <li>MaximumVolumeSize</li> Maximum amount of volume size that is applicable for given storage type.It can be empty if it is not applicable. <li>MaximumIops</li> Maximum amount of Iops that is applicable for given storage type.It can be empty if it is not applicable. <li>MinimumIops</li> Minimum amount of Iops that is applicable for given storage type.It can be empty if it is not applicable. </ol> </p>
   */
  LimitName?: string;

  /**
   * <p> Values for the <code> <a>StorageTypeLimit$LimitName</a> </code> . </p>
   */
  LimitValues?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledStorageTypeLimit extends _StorageTypeLimit {
  /**
   * <p> Values for the <code> <a>StorageTypeLimit$LimitName</a> </code> . </p>
   */
  LimitValues?: Array<string>;
}
