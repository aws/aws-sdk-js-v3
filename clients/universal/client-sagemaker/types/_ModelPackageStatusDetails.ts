import {
  _ModelPackageStatusItem,
  _UnmarshalledModelPackageStatusItem
} from "./_ModelPackageStatusItem";

/**
 * <p>Specifies the validation and image scan statuses of the model package.</p>
 */
export interface _ModelPackageStatusDetails {
  /**
   * <p>The validation status of the model package.</p>
   */
  ValidationStatuses:
    | Array<_ModelPackageStatusItem>
    | Iterable<_ModelPackageStatusItem>;

  /**
   * <p>The status of the scan of the Docker image container for the model package.</p>
   */
  ImageScanStatuses?:
    | Array<_ModelPackageStatusItem>
    | Iterable<_ModelPackageStatusItem>;
}

export interface _UnmarshalledModelPackageStatusDetails
  extends _ModelPackageStatusDetails {
  /**
   * <p>The validation status of the model package.</p>
   */
  ValidationStatuses: Array<_UnmarshalledModelPackageStatusItem>;

  /**
   * <p>The status of the scan of the Docker image container for the model package.</p>
   */
  ImageScanStatuses?: Array<_UnmarshalledModelPackageStatusItem>;
}
