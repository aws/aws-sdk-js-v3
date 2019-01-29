import {CreateSegmentInput} from './CreateSegmentInput';
import {CreateSegmentOutput} from './CreateSegmentOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateSegment: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateSegment',
    http: {
        method: 'POST',
        requestUri: '/v1/apps/{application-id}/segments',
    },
    input: {
        shape: CreateSegmentInput,
    },
    output: {
        shape: CreateSegmentOutput,
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