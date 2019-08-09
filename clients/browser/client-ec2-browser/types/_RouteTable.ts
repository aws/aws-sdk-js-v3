import {
  _RouteTableAssociation,
  _UnmarshalledRouteTableAssociation
} from "./_RouteTableAssociation";
import {
  _PropagatingVgw,
  _UnmarshalledPropagatingVgw
} from "./_PropagatingVgw";
import { _Route, _UnmarshalledRoute } from "./_Route";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a route table.</p>
 */
export interface _RouteTable {
  /**
   * <p>The associations between the route table and one or more subnets.</p>
   */
  Associations?:
    | Array<_RouteTableAssociation>
    | Iterable<_RouteTableAssociation>;

  /**
   * <p>Any virtual private gateway (VGW) propagating routes.</p>
   */
  PropagatingVgws?: Array<_PropagatingVgw> | Iterable<_PropagatingVgw>;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId?: string;

  /**
   * <p>The routes in the route table.</p>
   */
  Routes?: Array<_Route> | Iterable<_Route>;

  /**
   * <p>Any tags assigned to the route table.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the AWS account that owns the route table.</p>
   */
  OwnerId?: string;
}

export interface _UnmarshalledRouteTable extends _RouteTable {
  /**
   * <p>The associations between the route table and one or more subnets.</p>
   */
  Associations?: Array<_UnmarshalledRouteTableAssociation>;

  /**
   * <p>Any virtual private gateway (VGW) propagating routes.</p>
   */
  PropagatingVgws?: Array<_UnmarshalledPropagatingVgw>;

  /**
   * <p>The routes in the route table.</p>
   */
  Routes?: Array<_UnmarshalledRoute>;

  /**
   * <p>Any tags assigned to the route table.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
