import {DeleteImportedKeyMaterialInput} from './DeleteImportedKeyMaterialInput';
import {DeleteImportedKeyMaterialOutput} from './DeleteImportedKeyMaterialOutput';
import {InvalidArnException} from './InvalidArnException';
import {UnsupportedOperationException} from './UnsupportedOperationException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {NotFoundException} from './NotFoundException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteImportedKeyMaterial: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteImportedKeyMaterial',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DeleteImportedKeyMaterialInput,
    },
    output: {
        shape: DeleteImportedKeyMaterialOutput,
    },
    errors: [
        {
            shape: InvalidArnException,
        },
        {
            shape: UnsupportedOperationException,
        },
        {
            shape: DependencyTimeoutException,
        },
        {
            shape: NotFoundException,
        },
        {
            shape: KMSInternalException,
        },
        {
            shape: KMSInvalidStateException,
        },
    ],
};