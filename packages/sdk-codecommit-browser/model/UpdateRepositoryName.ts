import {UpdateRepositoryNameInput} from './UpdateRepositoryNameInput';
import {UpdateRepositoryNameOutput} from './UpdateRepositoryNameOutput';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {RepositoryNameExistsException} from './RepositoryNameExistsException';
import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateRepositoryName: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateRepositoryName',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdateRepositoryNameInput,
    },
    output: {
        shape: UpdateRepositoryNameOutput,
    },
    errors: [
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: RepositoryNameExistsException,
        },
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
    ],
};