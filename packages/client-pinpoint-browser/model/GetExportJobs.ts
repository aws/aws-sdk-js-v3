import {GetExportJobsInput} from './GetExportJobsInput';
import {GetExportJobsOutput} from './GetExportJobsOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetExportJobs: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetExportJobs',
    http: {
        method: 'GET',
        requestUri: '/v1/apps/{application-id}/jobs/export',
    },
    input: {
        shape: GetExportJobsInput,
    },
    output: {
        shape: GetExportJobsOutput,
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