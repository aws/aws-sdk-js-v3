import {CreateSamplingRuleInput} from './CreateSamplingRuleInput';
import {CreateSamplingRuleOutput} from './CreateSamplingRuleOutput';
import {InvalidRequestException} from './InvalidRequestException';
import {ThrottledException} from './ThrottledException';
import {RuleLimitExceededException} from './RuleLimitExceededException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateSamplingRule: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateSamplingRule',
    http: {
        method: 'POST',
        requestUri: '/CreateSamplingRule',
    },
    input: {
        shape: CreateSamplingRuleInput,
    },
    output: {
        shape: CreateSamplingRuleOutput,
    },
    errors: [
        {
            shape: InvalidRequestException,
        },
        {
            shape: ThrottledException,
        },
        {
            shape: RuleLimitExceededException,
        },
    ],
};