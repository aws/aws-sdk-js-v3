import {CreateImportJobInput} from './CreateImportJobInput';
import {CreateImportJobOutput} from './CreateImportJobOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateImportJob: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateImportJob',
    http: {
        method: 'POST',
        requestUri: '/v1/apps/{application-id}/jobs/import',
    },
    input: {
        shape: CreateImportJobInput,
    },
    output: {
        shape: CreateImportJobOutput,
    },
    errors: [
        {
            shape: BadRequestException,
        },
        {
            shape: InternalServerErrorException,
        },
        {
            shape: ForbiddenException,
        },
        {
            shape: NotFoundException,
        },
        {
            shape: MethodNotAllowedException,
        },
        {
            shape: TooManyRequestsException,
        },
    ],
};