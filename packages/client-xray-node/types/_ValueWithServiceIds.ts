import {_AnnotationValue, _UnmarshalledAnnotationValue} from './_AnnotationValue';
import {_ServiceId, _UnmarshalledServiceId} from './_ServiceId';

/**
 * _ValueWithServiceIds shape
 */
export interface _ValueWithServiceIds {
    /**
     * _AnnotationValue shape
     */
    AnnotationValue?: _AnnotationValue;

    /**
     * _ServiceIds shape
     */
    ServiceIds?: Array<_ServiceId>|Iterable<_ServiceId>;
}

export interface _UnmarshalledValueWithServiceIds extends _ValueWithServiceIds {
    /**
     * _AnnotationValue shape
     */
    AnnotationValue?: _UnmarshalledAnnotationValue;

    /**
     * _ServiceIds shape
     */
    ServiceIds?: Array<_UnmarshalledServiceId>;
}