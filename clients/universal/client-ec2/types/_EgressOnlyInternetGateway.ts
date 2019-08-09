import {
  _InternetGatewayAttachment,
  _UnmarshalledInternetGatewayAttachment
} from "./_InternetGatewayAttachment";

/**
 * <p>Describes an egress-only internet gateway.</p>
 */
export interface _EgressOnlyInternetGateway {
  /**
   * <p>Information about the attachment of the egress-only internet gateway.</p>
   */
  Attachments?:
    | Array<_InternetGatewayAttachment>
    | Iterable<_InternetGatewayAttachment>;

  /**
   * <p>The ID of the egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;
}

export interface _UnmarshalledEgressOnlyInternetGateway
  extends _EgressOnlyInternetGateway {
  /**
   * <p>Information about the attachment of the egress-only internet gateway.</p>
   */
  Attachments?: Array<_UnmarshalledInternetGatewayAttachment>;
}
