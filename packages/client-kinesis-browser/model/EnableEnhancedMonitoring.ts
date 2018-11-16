import {EnableEnhancedMonitoringInput} from './EnableEnhancedMonitoringInput';
import {EnableEnhancedMonitoringOutput} from './EnableEnhancedMonitoringOutput';
import {InvalidArgumentException} from './InvalidArgumentException';
import {LimitExceededException} from './LimitExceededException';
import {ResourceInUseException} from './ResourceInUseException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const EnableEnhancedMonitoring: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'EnableEnhancedMonitoring',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: EnableEnhancedMonitoringInput,
    },
    output: {
        shape: EnableEnhancedMonitoringOutput,
    },
    errors: [
        {
            shape: InvalidArgumentException,
        },
        {
            shape: LimitExceededException,
        },
        {
            shape: ResourceInUseException,
        },
        {
            shape: ResourceNotFoundException,
        },
    ],
};