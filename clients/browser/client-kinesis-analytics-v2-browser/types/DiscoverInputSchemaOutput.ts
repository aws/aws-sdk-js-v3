import { _UnmarshalledSourceSchema } from "./_SourceSchema";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DiscoverInputSchemaOutput shape
 */
export interface DiscoverInputSchemaOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The schema inferred from the streaming source. It identifies the format of the data in the streaming source and how each data element maps to corresponding columns in the in-application stream that you can create.</p>
   */
  InputSchema?: _UnmarshalledSourceSchema;

  /**
   * <p>An array of elements, where each element corresponds to a row in a stream record (a stream record can have more than one row).</p>
   */
  ParsedInputRecords?: Array<Array<string>>;

  /**
   * <p>The stream data that was modified by the processor specified in the <code>InputProcessingConfiguration</code> parameter.</p>
   */
  ProcessedInputRecords?: Array<string>;

  /**
   * <p>The raw stream data that was sampled to infer the schema.</p>
   */
  RawInputRecords?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
