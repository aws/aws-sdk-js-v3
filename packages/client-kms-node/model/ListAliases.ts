import {ListAliasesInput} from './ListAliasesInput';
import {ListAliasesOutput} from './ListAliasesOutput';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidMarkerException} from './InvalidMarkerException';
import {KMSInternalException} from './KMSInternalException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListAliases: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListAliases',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListAliasesInput,
    },
    output: {
        shape: ListAliasesOutput,
    },
    errors: [
        {
            shape: DependencyTimeoutException,
        },
        {
            shape: InvalidMarkerException,
        },
        {
            shape: KMSInternalException,
        },
    ],
};