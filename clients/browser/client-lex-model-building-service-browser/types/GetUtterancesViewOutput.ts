import { _UnmarshalledUtteranceList } from "./_UtteranceList";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetUtterancesViewOutput shape
 */
export interface GetUtterancesViewOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the bot for which utterance information was returned.</p>
   */
  botName?: string;

  /**
   * <p>An array of <a>UtteranceList</a> objects, each containing a list of <a>UtteranceData</a> objects describing the utterances that were processed by your bot. The response contains a maximum of 100 <code>UtteranceData</code> objects for each version.</p>
   */
  utterances?: Array<_UnmarshalledUtteranceList>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
