import { _FileLocation, _UnmarshalledFileLocation } from "./_FileLocation";
import { _CodeSigning, _UnmarshalledCodeSigning } from "./_CodeSigning";

/**
 * <p>Describes a file to be associated with an OTA update.</p>
 */
export interface _OTAUpdateFile {
  /**
   * <p>The name of the file.</p>
   */
  fileName?: string;

  /**
   * <p>The file version.</p>
   */
  fileVersion?: string;

  /**
   * <p>The location of the updated firmware.</p>
   */
  fileLocation?: _FileLocation;

  /**
   * <p>The code signing method of the file.</p>
   */
  codeSigning?: _CodeSigning;

  /**
   * <p>A list of name/attribute pairs.</p>
   */
  attributes?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledOTAUpdateFile extends _OTAUpdateFile {
  /**
   * <p>The location of the updated firmware.</p>
   */
  fileLocation?: _UnmarshalledFileLocation;

  /**
   * <p>The code signing method of the file.</p>
   */
  codeSigning?: _UnmarshalledCodeSigning;

  /**
   * <p>A list of name/attribute pairs.</p>
   */
  attributes?: { [key: string]: string };
}
