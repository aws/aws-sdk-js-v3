import {CreateAliasInput} from './CreateAliasInput';
import {CreateAliasOutput} from './CreateAliasOutput';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {AlreadyExistsException} from './AlreadyExistsException';
import {NotFoundException} from './NotFoundException';
import {InvalidAliasNameException} from './InvalidAliasNameException';
import {KMSInternalException} from './KMSInternalException';
import {LimitExceededException} from './LimitExceededException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateAlias: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateAlias',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: CreateAliasInput,
    },
    output: {
        shape: CreateAliasOutput,
    },
    errors: [
        {
            shape: DependencyTimeoutException,
        },
        {
            shape: AlreadyExistsException,
        },
        {
            shape: NotFoundException,
        },
        {
            shape: InvalidAliasNameException,
        },
        {
            shape: KMSInternalException,
        },
        {
            shape: LimitExceededException,
        },
        {
            shape: KMSInvalidStateException,
        },
    ],
};