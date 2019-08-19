import {
  _AccountAggregationSource,
  _UnmarshalledAccountAggregationSource
} from "./_AccountAggregationSource";
import {
  _OrganizationAggregationSource,
  _UnmarshalledOrganizationAggregationSource
} from "./_OrganizationAggregationSource";

/**
 * <p>The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator. </p>
 */
export interface _ConfigurationAggregator {
  /**
   * <p>The name of the aggregator.</p>
   */
  ConfigurationAggregatorName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the aggregator.</p>
   */
  ConfigurationAggregatorArn?: string;

  /**
   * <p>Provides a list of source accounts and regions to be aggregated.</p>
   */
  AccountAggregationSources?:
    | Array<_AccountAggregationSource>
    | Iterable<_AccountAggregationSource>;

  /**
   * <p>Provides an organization and list of regions to be aggregated.</p>
   */
  OrganizationAggregationSource?: _OrganizationAggregationSource;

  /**
   * <p>The time stamp when the configuration aggregator was created.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>The time of the last update.</p>
   */
  LastUpdatedTime?: Date | string | number;
}

export interface _UnmarshalledConfigurationAggregator
  extends _ConfigurationAggregator {
  /**
   * <p>Provides a list of source accounts and regions to be aggregated.</p>
   */
  AccountAggregationSources?: Array<_UnmarshalledAccountAggregationSource>;

  /**
   * <p>Provides an organization and list of regions to be aggregated.</p>
   */
  OrganizationAggregationSource?: _UnmarshalledOrganizationAggregationSource;

  /**
   * <p>The time stamp when the configuration aggregator was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time of the last update.</p>
   */
  LastUpdatedTime?: Date;
}
