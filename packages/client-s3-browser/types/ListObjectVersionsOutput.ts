import {_UnmarshalledObjectVersion} from './_ObjectVersion';
import {_UnmarshalledDeleteMarkerEntry} from './_DeleteMarkerEntry';
import {_UnmarshalledCommonPrefix} from './_CommonPrefix';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * ListObjectVersionsOutput shape
 */
export interface ListObjectVersionsOutput {
    /**
     * <p>A flag that indicates whether or not Amazon S3 returned all of the results that satisfied the search criteria. If your results were truncated, you can make a follow-up paginated request using the NextKeyMarker and NextVersionIdMarker response parameters as a starting place in another request to return the rest of the results.</p>
     */
    IsTruncated?: boolean;

    /**
     * <p>Marks the last Key returned in a truncated response.</p>
     */
    KeyMarker?: string;

    /**
     * _VersionIdMarker shape
     */
    VersionIdMarker?: string;

    /**
     * <p>Use this value for the key marker request parameter in a subsequent request.</p>
     */
    NextKeyMarker?: string;

    /**
     * <p>Use this value for the next version id marker parameter in a subsequent request.</p>
     */
    NextVersionIdMarker?: string;

    /**
     * _ObjectVersionList shape
     */
    Versions?: Array<_UnmarshalledObjectVersion>;

    /**
     * _DeleteMarkers shape
     */
    DeleteMarkers?: Array<_UnmarshalledDeleteMarkerEntry>;

    /**
     * _BucketName shape
     */
    Name?: string;

    /**
     * _Prefix shape
     */
    Prefix?: string;

    /**
     * _Delimiter shape
     */
    Delimiter?: string;

    /**
     * _MaxKeys shape
     */
    MaxKeys?: number;

    /**
     * _CommonPrefixList shape
     */
    CommonPrefixes?: Array<_UnmarshalledCommonPrefix>;

    /**
     * <p>Encoding type used by Amazon S3 to encode object keys in the response.</p>
     */
    EncodingType?: 'url'|string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
