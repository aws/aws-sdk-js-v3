import {_AnnotationValue, _UnmarshalledAnnotationValue} from './_AnnotationValue';
import {_ServiceId, _UnmarshalledServiceId} from './_ServiceId';

/**
 * <p>Information about a segment annotation.</p>
 */
export interface _ValueWithServiceIds {
    /**
     * <p>Values of the annotation.</p>
     */
    AnnotationValue?: _AnnotationValue;

    /**
     * <p>Services to which the annotation applies.</p>
     */
    ServiceIds?: Array<_ServiceId>|Iterable<_ServiceId>;
}

export interface _UnmarshalledValueWithServiceIds extends _ValueWithServiceIds {
    /**
     * <p>Values of the annotation.</p>
     */
    AnnotationValue?: _UnmarshalledAnnotationValue;

    /**
     * <p>Services to which the annotation applies.</p>
     */
    ServiceIds?: Array<_UnmarshalledServiceId>;
}