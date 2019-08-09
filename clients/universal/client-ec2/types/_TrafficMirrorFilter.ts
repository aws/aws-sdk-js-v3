import {
  _TrafficMirrorFilterRule,
  _UnmarshalledTrafficMirrorFilterRule
} from "./_TrafficMirrorFilterRule";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes the Traffic Mirror filter.</p>
 */
export interface _TrafficMirrorFilter {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId?: string;

  /**
   * <p>Information about the ingress rules that are associated with the Traffic Mirror filter.</p>
   */
  IngressFilterRules?:
    | Array<_TrafficMirrorFilterRule>
    | Iterable<_TrafficMirrorFilterRule>;

  /**
   * <p>Information about the egress rules that are associated with the Traffic Mirror filter.</p>
   */
  EgressFilterRules?:
    | Array<_TrafficMirrorFilterRule>
    | Iterable<_TrafficMirrorFilterRule>;

  /**
   * <p>The network service traffic that is associated with the Traffic Mirror filter.</p>
   */
  NetworkServices?:
    | Array<"amazon-dns" | string>
    | Iterable<"amazon-dns" | string>;

  /**
   * <p>The description of the Traffic Mirror filter.</p>
   */
  Description?: string;

  /**
   * <p>The tags assigned to the Traffic Mirror filter.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledTrafficMirrorFilter extends _TrafficMirrorFilter {
  /**
   * <p>Information about the ingress rules that are associated with the Traffic Mirror filter.</p>
   */
  IngressFilterRules?: Array<_UnmarshalledTrafficMirrorFilterRule>;

  /**
   * <p>Information about the egress rules that are associated with the Traffic Mirror filter.</p>
   */
  EgressFilterRules?: Array<_UnmarshalledTrafficMirrorFilterRule>;

  /**
   * <p>The network service traffic that is associated with the Traffic Mirror filter.</p>
   */
  NetworkServices?: Array<"amazon-dns" | string>;

  /**
   * <p>The tags assigned to the Traffic Mirror filter.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
