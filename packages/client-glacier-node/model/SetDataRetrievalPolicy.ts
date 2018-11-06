import {SetDataRetrievalPolicyInput} from './SetDataRetrievalPolicyInput';
import {SetDataRetrievalPolicyOutput} from './SetDataRetrievalPolicyOutput';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const SetDataRetrievalPolicy: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'SetDataRetrievalPolicy',
    http: {
        method: 'PUT',
        requestUri: '/{accountId}/policies/data-retrieval',
    },
    input: {
        shape: SetDataRetrievalPolicyInput,
    },
    output: {
        shape: SetDataRetrievalPolicyOutput,
    },
    errors: [
        {
            shape: InvalidParameterValueException,
        },
        {
            shape: MissingParameterValueException,
        },
        {
            shape: ServiceUnavailableException,
        },
    ],
};