import { _ErrorDocument, _UnmarshalledErrorDocument } from "./_ErrorDocument";
import { _IndexDocument, _UnmarshalledIndexDocument } from "./_IndexDocument";
import {
  _RedirectAllRequestsTo,
  _UnmarshalledRedirectAllRequestsTo
} from "./_RedirectAllRequestsTo";
import { _RoutingRule, _UnmarshalledRoutingRule } from "./_RoutingRule";

/**
 * <p>Specifies website configuration parameters for an Amazon S3 bucket.</p>
 */
export interface _WebsiteConfiguration {
  /**
   * <p>The name of the error document for the website.</p>
   */
  ErrorDocument?: _ErrorDocument;

  /**
   * <p>The name of the index document for the website.</p>
   */
  IndexDocument?: _IndexDocument;

  /**
   * <p>The redirect behavior for every request to this bucket's website endpoint.</p> <important> <p>If you specify this property, you can't specify any other property.</p> </important>
   */
  RedirectAllRequestsTo?: _RedirectAllRequestsTo;

  /**
   * <p>Rules that define when a redirect is applied and the redirect behavior.</p>
   */
  RoutingRules?: Array<_RoutingRule> | Iterable<_RoutingRule>;
}

export interface _UnmarshalledWebsiteConfiguration
  extends _WebsiteConfiguration {
  /**
   * <p>The name of the error document for the website.</p>
   */
  ErrorDocument?: _UnmarshalledErrorDocument;

  /**
   * <p>The name of the index document for the website.</p>
   */
  IndexDocument?: _UnmarshalledIndexDocument;

  /**
   * <p>The redirect behavior for every request to this bucket's website endpoint.</p> <important> <p>If you specify this property, you can't specify any other property.</p> </important>
   */
  RedirectAllRequestsTo?: _UnmarshalledRedirectAllRequestsTo;

  /**
   * <p>Rules that define when a redirect is applied and the redirect behavior.</p>
   */
  RoutingRules?: Array<_UnmarshalledRoutingRule>;
}
