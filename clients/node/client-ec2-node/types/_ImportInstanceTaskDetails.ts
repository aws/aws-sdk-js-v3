import {
  _ImportInstanceVolumeDetailItem,
  _UnmarshalledImportInstanceVolumeDetailItem
} from "./_ImportInstanceVolumeDetailItem";

/**
 * <p>Describes an import instance task.</p>
 */
export interface _ImportInstanceTaskDetails {
  /**
   * <p>A description of the task.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The instance operating system.</p>
   */
  Platform?: "Windows" | string;

  /**
   * <p>The volumes.</p>
   */
  Volumes?:
    | Array<_ImportInstanceVolumeDetailItem>
    | Iterable<_ImportInstanceVolumeDetailItem>;
}

export interface _UnmarshalledImportInstanceTaskDetails
  extends _ImportInstanceTaskDetails {
  /**
   * <p>The volumes.</p>
   */
  Volumes?: Array<_UnmarshalledImportInstanceVolumeDetailItem>;
}
