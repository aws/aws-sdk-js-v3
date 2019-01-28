import {List as _List_} from '@aws-sdk/types';
import {_EndpointResponse} from './_EndpointResponse';

export const _ListOfEndpointResponse: _List_ = {
    type: 'list',
    member: {
        shape: _EndpointResponse,
    },
};