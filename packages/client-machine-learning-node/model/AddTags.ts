import {AddTagsInput} from './AddTagsInput';
import {AddTagsOutput} from './AddTagsOutput';
import {InvalidInputException} from './InvalidInputException';
import {InvalidTagException} from './InvalidTagException';
import {TagLimitExceededException} from './TagLimitExceededException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerException} from './InternalServerException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const AddTags: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'AddTags',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: AddTagsInput,
    },
    output: {
        shape: AddTagsOutput,
    },
    errors: [
        {
            shape: InvalidInputException,
        },
        {
            shape: InvalidTagException,
        },
        {
            shape: TagLimitExceededException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: InternalServerException,
        },
    ],
};