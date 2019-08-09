import { _Parameter, _UnmarshalledParameter } from "./_Parameter";
import {
  _CacheNodeTypeSpecificParameter,
  _UnmarshalledCacheNodeTypeSpecificParameter
} from "./_CacheNodeTypeSpecificParameter";

/**
 * <p>Represents the output of a <code>DescribeEngineDefaultParameters</code> operation.</p>
 */
export interface _EngineDefaults {
  /**
   * <p>Specifies the name of the cache parameter group family to which the engine default parameters apply.</p> <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> | <code>redis2.6</code> | <code>redis2.8</code> | <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> | </p>
   */
  CacheParameterGroupFamily?: string;

  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>Contains a list of engine default parameters.</p>
   */
  Parameters?: Array<_Parameter> | Iterable<_Parameter>;

  /**
   * <p>A list of parameters specific to a particular cache node type. Each element in the list contains detailed information about one parameter.</p>
   */
  CacheNodeTypeSpecificParameters?:
    | Array<_CacheNodeTypeSpecificParameter>
    | Iterable<_CacheNodeTypeSpecificParameter>;
}

export interface _UnmarshalledEngineDefaults extends _EngineDefaults {
  /**
   * <p>Contains a list of engine default parameters.</p>
   */
  Parameters?: Array<_UnmarshalledParameter>;

  /**
   * <p>A list of parameters specific to a particular cache node type. Each element in the list contains detailed information about one parameter.</p>
   */
  CacheNodeTypeSpecificParameters?: Array<
    _UnmarshalledCacheNodeTypeSpecificParameter
  >;
}
