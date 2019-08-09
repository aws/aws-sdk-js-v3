import {
  _DistributionConfig,
  _UnmarshalledDistributionConfig
} from "./_DistributionConfig";
import { _Tags, _UnmarshalledTags } from "./_Tags";

/**
 * <p>A distribution Configuration and a list of tags to be associated with the distribution.</p>
 */
export interface _DistributionConfigWithTags {
  /**
   * <p>A distribution configuration.</p>
   */
  DistributionConfig: _DistributionConfig;

  /**
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   */
  Tags: _Tags;
}

export interface _UnmarshalledDistributionConfigWithTags
  extends _DistributionConfigWithTags {
  /**
   * <p>A distribution configuration.</p>
   */
  DistributionConfig: _UnmarshalledDistributionConfig;

  /**
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   */
  Tags: _UnmarshalledTags;
}
