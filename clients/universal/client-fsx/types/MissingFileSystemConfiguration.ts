import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>File system configuration is required for this operation.</p>
 */
export interface MissingFileSystemConfiguration
  extends __ServiceException__<_MissingFileSystemConfigurationDetails> {
  name: "MissingFileSystemConfiguration";
}

export interface _MissingFileSystemConfigurationDetails {
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}
