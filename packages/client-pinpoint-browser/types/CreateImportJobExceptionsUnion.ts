import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
export type CreateImportJobExceptionsUnion = BadRequestException |
    InternalServerErrorException |
    ForbiddenException |
    NotFoundException |
    MethodNotAllowedException |
    TooManyRequestsException;
