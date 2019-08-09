import {
  _StreamingDistributionConfig,
  _UnmarshalledStreamingDistributionConfig
} from "./_StreamingDistributionConfig";
import { _Tags, _UnmarshalledTags } from "./_Tags";

/**
 * <p>A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.</p>
 */
export interface _StreamingDistributionConfigWithTags {
  /**
   * <p>A streaming distribution Configuration.</p>
   */
  StreamingDistributionConfig: _StreamingDistributionConfig;

  /**
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   */
  Tags: _Tags;
}

export interface _UnmarshalledStreamingDistributionConfigWithTags
  extends _StreamingDistributionConfigWithTags {
  /**
   * <p>A streaming distribution Configuration.</p>
   */
  StreamingDistributionConfig: _UnmarshalledStreamingDistributionConfig;

  /**
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   */
  Tags: _UnmarshalledTags;
}
