import {PhoneNumberValidateInput} from './PhoneNumberValidateInput';
import {PhoneNumberValidateOutput} from './PhoneNumberValidateOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PhoneNumberValidate: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PhoneNumberValidate',
    http: {
        method: 'POST',
        requestUri: '/v1/phone/number/validate',
    },
    input: {
        shape: PhoneNumberValidateInput,
    },
    output: {
        shape: PhoneNumberValidateOutput,
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