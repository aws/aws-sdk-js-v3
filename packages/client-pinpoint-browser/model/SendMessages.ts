import {SendMessagesInput} from './SendMessagesInput';
import {SendMessagesOutput} from './SendMessagesOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const SendMessages: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'SendMessages',
    http: {
        method: 'POST',
        requestUri: '/v1/apps/{application-id}/messages',
    },
    input: {
        shape: SendMessagesInput,
    },
    output: {
        shape: SendMessagesOutput,
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