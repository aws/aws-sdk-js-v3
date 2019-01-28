import {GetSegmentVersionInput} from './GetSegmentVersionInput';
import {GetSegmentVersionOutput} from './GetSegmentVersionOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetSegmentVersion: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetSegmentVersion',
    http: {
        method: 'GET',
        requestUri: '/v1/apps/{application-id}/segments/{segment-id}/versions/{version}',
    },
    input: {
        shape: GetSegmentVersionInput,
    },
    output: {
        shape: GetSegmentVersionOutput,
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