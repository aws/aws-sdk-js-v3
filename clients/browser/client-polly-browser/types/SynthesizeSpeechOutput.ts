import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SynthesizeSpeechOutput shape
 */
export interface SynthesizeSpeechOutput<StreamType = Blob>
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Stream containing the synthesized speech. </p>
   */
  AudioStream?: StreamType;

  /**
   * <p> Specifies the type audio stream. This should reflect the <code>OutputFormat</code> parameter in your request. </p> <ul> <li> <p> If you request <code>mp3</code> as the <code>OutputFormat</code>, the <code>ContentType</code> returned is audio/mpeg. </p> </li> <li> <p> If you request <code>ogg_vorbis</code> as the <code>OutputFormat</code>, the <code>ContentType</code> returned is audio/ogg. </p> </li> <li> <p> If you request <code>pcm</code> as the <code>OutputFormat</code>, the <code>ContentType</code> returned is audio/pcm in a signed 16-bit, 1 channel (mono), little-endian format. </p> </li> <li> <p>If you request <code>json</code> as the <code>OutputFormat</code>, the <code>ContentType</code> returned is audio/json.</p> </li> </ul> <p> </p>
   */
  ContentType?: string;

  /**
   * <p>Number of characters synthesized.</p>
   */
  RequestCharacters?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
