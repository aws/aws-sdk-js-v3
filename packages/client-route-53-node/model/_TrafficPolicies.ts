import {List as _List_} from '@aws-sdk/types';
import {_TrafficPolicy} from './_TrafficPolicy';

export const _TrafficPolicies: _List_ = {
    type: 'list',
    member: {
        shape: _TrafficPolicy,
        locationName: 'TrafficPolicy',
    },
};