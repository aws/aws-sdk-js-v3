/**
 * <p>Describes the format of a manifest. If the manifest is in CSV format, also describes the columns contained within the manifest.</p>
 */
export interface _JobManifestSpec {
  /**
   * <p>Indicates which of the available formats the specified manifest uses.</p>
   */
  Format:
    | "S3BatchOperations_CSV_20180820"
    | "S3InventoryReport_CSV_20161130"
    | string;

  /**
   * <p>If the specified manifest object is in the <code>S3BatchOperations_CSV_20180820</code> format, this element describes which columns contain the required data.</p>
   */
  Fields?:
    | Array<"Ignore" | "Bucket" | "Key" | "VersionId" | string>
    | Iterable<"Ignore" | "Bucket" | "Key" | "VersionId" | string>;
}

export interface _UnmarshalledJobManifestSpec extends _JobManifestSpec {
  /**
   * <p>If the specified manifest object is in the <code>S3BatchOperations_CSV_20180820</code> format, this element describes which columns contain the required data.</p>
   */
  Fields?: Array<"Ignore" | "Bucket" | "Key" | "VersionId" | string>;
}
