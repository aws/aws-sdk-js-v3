/**
 * <p>Represents a single entry in a list of locations. <code>LocationListEntry</code> returns an array that contains a list of locations when the <a>ListLocations</a> operation is called.</p>
 */
export interface _LocationListEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of the location. For Network File System (NFS) or Amazon EFS, the location is the export path. For Amazon S3, the location is the prefix path that you want to mount and use as the root of the location.</p>
   */
  LocationArn?: string;

  /**
   * <p>Represents a list of URLs of a location. <code>LocationUri</code> returns an array that contains a list of locations when the <a>ListLocations</a> operation is called.</p> <p>Format: <code>TYPE://GLOBAL_ID/SUBDIR</code>.</p> <p>TYPE designates the type of location. Valid values: NFS | EFS | S3.</p> <p>GLOBAL_ID is the globally unique identifier of the resource that backs the location. An example for EFS is <code>us-east-2.fs-abcd1234</code>. An example for Amazon S3 is the bucket name, such as <code>myBucket</code>. An example for NFS is a valid IPv4 address or a host name compliant with Domain Name Service (DNS).</p> <p>SUBDIR is a valid file system path, delimited by forward slashes as is the *nix convention. For NFS and Amazon EFS, it's the export path to mount the location. For Amazon S3, it's the prefix path that you mount to and treat as the root of the location.</p> <p/>
   */
  LocationUri?: string;
}

export type _UnmarshalledLocationListEntry = _LocationListEntry;
