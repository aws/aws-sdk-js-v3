/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 */
export interface _DescribeVaultOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the vault.</p>
   */
  VaultARN?: string;

  /**
   * <p>The name of the vault.</p>
   */
  VaultName?: string;

  /**
   * <p>The Universal Coordinated Time (UTC) date when the vault was created. This value should be a string in the ISO 8601 date format, for example <code>2012-03-20T17:03:43.221Z</code>.</p>
   */
  CreationDate?: string;

  /**
   * <p>The Universal Coordinated Time (UTC) date when Amazon Glacier completed the last vault inventory. This value should be a string in the ISO 8601 date format, for example <code>2012-03-20T17:03:43.221Z</code>.</p>
   */
  LastInventoryDate?: string;

  /**
   * <p>The number of archives in the vault as of the last inventory date. This field will return <code>null</code> if an inventory has not yet run on the vault, for example if you just created the vault.</p>
   */
  NumberOfArchives?: number;

  /**
   * <p>Total size, in bytes, of the archives in the vault as of the last inventory date. This field will return null if an inventory has not yet run on the vault, for example if you just created the vault.</p>
   */
  SizeInBytes?: number;
}

export type _UnmarshalledDescribeVaultOutput = _DescribeVaultOutput;
