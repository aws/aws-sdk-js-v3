import {
  _InternetGatewayAttachment,
  _UnmarshalledInternetGatewayAttachment
} from "./_InternetGatewayAttachment";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes an internet gateway.</p>
 */
export interface _InternetGateway {
  /**
   * <p>Any VPCs attached to the internet gateway.</p>
   */
  Attachments?:
    | Array<_InternetGatewayAttachment>
    | Iterable<_InternetGatewayAttachment>;

  /**
   * <p>The ID of the internet gateway.</p>
   */
  InternetGatewayId?: string;

  /**
   * <p>The ID of the AWS account that owns the internet gateway.</p>
   */
  OwnerId?: string;

  /**
   * <p>Any tags assigned to the internet gateway.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledInternetGateway extends _InternetGateway {
  /**
   * <p>Any VPCs attached to the internet gateway.</p>
   */
  Attachments?: Array<_UnmarshalledInternetGatewayAttachment>;

  /**
   * <p>Any tags assigned to the internet gateway.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
