import {ConcurrentModification} from './ConcurrentModification';
import {NoSuchHostedZone} from './NoSuchHostedZone';
import {NoSuchCloudWatchLogsLogGroup} from './NoSuchCloudWatchLogsLogGroup';
import {InvalidInput} from './InvalidInput';
import {QueryLoggingConfigAlreadyExists} from './QueryLoggingConfigAlreadyExists';
import {InsufficientCloudWatchLogsResourcePolicy} from './InsufficientCloudWatchLogsResourcePolicy';
export type CreateQueryLoggingConfigExceptionsUnion = ConcurrentModification |
    NoSuchHostedZone |
    NoSuchCloudWatchLogsLogGroup |
    InvalidInput |
    QueryLoggingConfigAlreadyExists |
    InsufficientCloudWatchLogsResourcePolicy;
