import {AddPermissionInput} from './AddPermissionInput';
import {AddPermissionOutput} from './AddPermissionOutput';
import {OverLimit} from './OverLimit';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const AddPermission: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'AddPermission',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: AddPermissionInput,
    },
    output: {
        shape: AddPermissionOutput,
    },
    errors: [
        {
            shape: OverLimit,
        },
    ],
};