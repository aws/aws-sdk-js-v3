import {DeleteSegmentInput} from './DeleteSegmentInput';
import {DeleteSegmentOutput} from './DeleteSegmentOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteSegment: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteSegment',
    http: {
        method: 'DELETE',
        requestUri: '/v1/apps/{application-id}/segments/{segment-id}',
    },
    input: {
        shape: DeleteSegmentInput,
    },
    output: {
        shape: DeleteSegmentOutput,
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