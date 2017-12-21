import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {RepositoryNameExistsException} from './RepositoryNameExistsException';
import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {UnkownServiceException} from '@aws/types';
export type UpdateRepositoryNameExceptionsUnion = RepositoryDoesNotExistException |
    RepositoryNameExistsException |
    RepositoryNameRequiredException |
    InvalidRepositoryNameException |
    UnkownServiceException;
