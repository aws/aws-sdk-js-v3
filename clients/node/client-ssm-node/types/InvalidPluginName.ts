import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The plugin name is not valid.</p>
 */
export interface InvalidPluginName
  extends __ServiceException__<_InvalidPluginNameDetails> {
  name: "InvalidPluginName";
}

export interface _InvalidPluginNameDetails {}
