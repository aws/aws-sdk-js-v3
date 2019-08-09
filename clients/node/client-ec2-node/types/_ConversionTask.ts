import {
  _ImportInstanceTaskDetails,
  _UnmarshalledImportInstanceTaskDetails
} from "./_ImportInstanceTaskDetails";
import {
  _ImportVolumeTaskDetails,
  _UnmarshalledImportVolumeTaskDetails
} from "./_ImportVolumeTaskDetails";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a conversion task.</p>
 */
export interface _ConversionTask {
  /**
   * <p>The ID of the conversion task.</p>
   */
  ConversionTaskId?: string;

  /**
   * <p>The time when the task expires. If the upload isn't complete before the expiration time, we automatically cancel the task.</p>
   */
  ExpirationTime?: string;

  /**
   * <p>If the task is for importing an instance, this contains information about the import instance task.</p>
   */
  ImportInstance?: _ImportInstanceTaskDetails;

  /**
   * <p>If the task is for importing a volume, this contains information about the import volume task.</p>
   */
  ImportVolume?: _ImportVolumeTaskDetails;

  /**
   * <p>The state of the conversion task.</p>
   */
  State?: "active" | "cancelling" | "cancelled" | "completed" | string;

  /**
   * <p>The status message related to the conversion task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Any tags assigned to the task.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledConversionTask extends _ConversionTask {
  /**
   * <p>If the task is for importing an instance, this contains information about the import instance task.</p>
   */
  ImportInstance?: _UnmarshalledImportInstanceTaskDetails;

  /**
   * <p>If the task is for importing a volume, this contains information about the import volume task.</p>
   */
  ImportVolume?: _UnmarshalledImportVolumeTaskDetails;

  /**
   * <p>Any tags assigned to the task.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
