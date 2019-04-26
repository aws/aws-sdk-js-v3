import {_ErrorDocument, _UnmarshalledErrorDocument} from './_ErrorDocument';
import {_IndexDocument, _UnmarshalledIndexDocument} from './_IndexDocument';
import {_RedirectAllRequestsTo, _UnmarshalledRedirectAllRequestsTo} from './_RedirectAllRequestsTo';
import {_RoutingRule, _UnmarshalledRoutingRule} from './_RoutingRule';

/**
 * _WebsiteConfiguration shape
 */
export interface _WebsiteConfiguration {
    /**
     * _ErrorDocument shape
     */
    ErrorDocument?: _ErrorDocument;

    /**
     * _IndexDocument shape
     */
    IndexDocument?: _IndexDocument;

    /**
     * _RedirectAllRequestsTo shape
     */
    RedirectAllRequestsTo?: _RedirectAllRequestsTo;

    /**
     * _RoutingRules shape
     */
    RoutingRules?: Array<_RoutingRule>|Iterable<_RoutingRule>;
}

export interface _UnmarshalledWebsiteConfiguration extends _WebsiteConfiguration {
    /**
     * _ErrorDocument shape
     */
    ErrorDocument?: _UnmarshalledErrorDocument;

    /**
     * _IndexDocument shape
     */
    IndexDocument?: _UnmarshalledIndexDocument;

    /**
     * _RedirectAllRequestsTo shape
     */
    RedirectAllRequestsTo?: _UnmarshalledRedirectAllRequestsTo;

    /**
     * _RoutingRules shape
     */
    RoutingRules?: Array<_UnmarshalledRoutingRule>;
}