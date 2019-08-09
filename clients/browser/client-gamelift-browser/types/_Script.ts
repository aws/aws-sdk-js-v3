import { _S3Location, _UnmarshalledS3Location } from "./_S3Location";

/**
 * <p>Properties describing a Realtime script.</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateScript</a> </p> </li> <li> <p> <a>ListScripts</a> </p> </li> <li> <p> <a>DescribeScript</a> </p> </li> <li> <p> <a>UpdateScript</a> </p> </li> <li> <p> <a>DeleteScript</a> </p> </li> </ul>
 */
export interface _Script {
  /**
   * <p>Unique identifier for a Realtime script</p>
   */
  ScriptId?: string;

  /**
   * <p>Descriptive label that is associated with a script. Script names do not need to be unique.</p>
   */
  Name?: string;

  /**
   * <p>Version that is associated with a build or script. Version strings do not need to be unique.</p>
   */
  Version?: string;

  /**
   * <p>File size of the uploaded Realtime script, expressed in bytes. When files are uploaded from an S3 location, this value remains at "0".</p>
   */
  SizeOnDisk?: number;

  /**
   * <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>Location in Amazon Simple Storage Service (Amazon S3) where build or script files are stored for access by Amazon GameLift. This location is specified in <a>CreateBuild</a>, <a>CreateScript</a>, and <a>UpdateScript</a> requests. </p>
   */
  StorageLocation?: _S3Location;
}

export interface _UnmarshalledScript extends _Script {
  /**
   * <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  CreationTime?: Date;

  /**
   * <p>Location in Amazon Simple Storage Service (Amazon S3) where build or script files are stored for access by Amazon GameLift. This location is specified in <a>CreateBuild</a>, <a>CreateScript</a>, and <a>UpdateScript</a> requests. </p>
   */
  StorageLocation?: _UnmarshalledS3Location;
}
