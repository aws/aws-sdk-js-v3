import {DeleteEndpointInput} from './DeleteEndpointInput';
import {DeleteEndpointOutput} from './DeleteEndpointOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteEndpoint: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteEndpoint',
    http: {
        method: 'DELETE',
        requestUri: '/v1/apps/{application-id}/endpoints/{endpoint-id}',
    },
    input: {
        shape: DeleteEndpointInput,
    },
    output: {
        shape: DeleteEndpointOutput,
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