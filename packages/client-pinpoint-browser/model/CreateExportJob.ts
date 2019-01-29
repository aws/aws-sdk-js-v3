import {CreateExportJobInput} from './CreateExportJobInput';
import {CreateExportJobOutput} from './CreateExportJobOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateExportJob: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateExportJob',
    http: {
        method: 'POST',
        requestUri: '/v1/apps/{application-id}/jobs/export',
    },
    input: {
        shape: CreateExportJobInput,
    },
    output: {
        shape: CreateExportJobOutput,
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