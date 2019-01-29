import {PutEventStreamInput} from './PutEventStreamInput';
import {PutEventStreamOutput} from './PutEventStreamOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutEventStream: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PutEventStream',
    http: {
        method: 'POST',
        requestUri: '/v1/apps/{application-id}/eventstream',
    },
    input: {
        shape: PutEventStreamInput,
    },
    output: {
        shape: PutEventStreamOutput,
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