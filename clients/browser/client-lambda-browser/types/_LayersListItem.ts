import {
  _LayerVersionsListItem,
  _UnmarshalledLayerVersionsListItem
} from "./_LayerVersionsListItem";

/**
 * <p>Details about an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>.</p>
 */
export interface _LayersListItem {
  /**
   * <p>The name of the layer.</p>
   */
  LayerName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the function layer.</p>
   */
  LayerArn?: string;

  /**
   * <p>The newest version of the layer.</p>
   */
  LatestMatchingVersion?: _LayerVersionsListItem;
}

export interface _UnmarshalledLayersListItem extends _LayersListItem {
  /**
   * <p>The newest version of the layer.</p>
   */
  LatestMatchingVersion?: _UnmarshalledLayerVersionsListItem;
}
