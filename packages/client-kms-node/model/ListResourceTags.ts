import {ListResourceTagsInput} from './ListResourceTagsInput';
import {ListResourceTagsOutput} from './ListResourceTagsOutput';
import {KMSInternalException} from './KMSInternalException';
import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {InvalidMarkerException} from './InvalidMarkerException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListResourceTags: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListResourceTags',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListResourceTagsInput,
    },
    output: {
        shape: ListResourceTagsOutput,
    },
    errors: [
        {
            shape: KMSInternalException,
        },
        {
            shape: NotFoundException,
        },
        {
            shape: InvalidArnException,
        },
        {
            shape: InvalidMarkerException,
        },
    ],
};