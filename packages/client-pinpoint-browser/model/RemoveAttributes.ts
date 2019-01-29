import {RemoveAttributesInput} from './RemoveAttributesInput';
import {RemoveAttributesOutput} from './RemoveAttributesOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const RemoveAttributes: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'RemoveAttributes',
    http: {
        method: 'PUT',
        requestUri: '/v1/apps/{application-id}/attributes/{attribute-type}',
    },
    input: {
        shape: RemoveAttributesInput,
    },
    output: {
        shape: RemoveAttributesOutput,
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