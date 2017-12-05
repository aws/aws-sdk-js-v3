import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {RepositoryNameExistsException} from './RepositoryNameExistsException';
import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {SdkExceptions} from '@aws/types';
export type UpdateRepositoryNameExceptionTypesUnion = RepositoryDoesNotExistException |
    RepositoryNameExistsException |
    RepositoryNameRequiredException |
    InvalidRepositoryNameException |
    SdkExceptions;
