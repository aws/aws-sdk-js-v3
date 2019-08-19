/**
 * <p>Describes an association between a route table and a subnet.</p>
 */
export interface _RouteTableAssociation {
  /**
   * <p>Indicates whether this is the main route table.</p>
   */
  Main?: boolean;

  /**
   * <p>The ID of the association between a route table and a subnet.</p>
   */
  RouteTableAssociationId?: string;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId?: string;

  /**
   * <p>The ID of the subnet. A subnet ID is not returned for an implicit association.</p>
   */
  SubnetId?: string;
}

export type _UnmarshalledRouteTableAssociation = _RouteTableAssociation;
