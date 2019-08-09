/**
 * <p>The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>.</p>
 */
export interface _ThingIndexingConfiguration {
  /**
   * <p>Thing indexing mode. Valid values are:</p> <ul> <li> <p>REGISTRY – Your thing index contains registry data only.</p> </li> <li> <p>REGISTRY_AND_SHADOW - Your thing index contains registry and shadow data.</p> </li> <li> <p>OFF - Thing indexing is disabled.</p> </li> </ul>
   */
  thingIndexingMode: "OFF" | "REGISTRY" | "REGISTRY_AND_SHADOW" | string;

  /**
   * <p>Thing connectivity indexing mode. Valid values are: </p> <ul> <li> <p>STATUS – Your thing index contains connectivity status. To enable thing connectivity indexing, thingIndexMode must not be set to OFF.</p> </li> <li> <p>OFF - Thing connectivity status indexing is disabled.</p> </li> </ul>
   */
  thingConnectivityIndexingMode?: "OFF" | "STATUS" | string;
}

export type _UnmarshalledThingIndexingConfiguration = _ThingIndexingConfiguration;
