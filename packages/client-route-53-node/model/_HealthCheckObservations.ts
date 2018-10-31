import {List as _List_} from '@aws-sdk/types';
import {_HealthCheckObservation} from './_HealthCheckObservation';

export const _HealthCheckObservations: _List_ = {
    type: 'list',
    member: {
        shape: _HealthCheckObservation,
        locationName: 'HealthCheckObservation',
    },
};