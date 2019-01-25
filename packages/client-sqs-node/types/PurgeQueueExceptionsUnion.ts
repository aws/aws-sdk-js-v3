import {QueueDoesNotExist} from './QueueDoesNotExist';
import {PurgeQueueInProgress} from './PurgeQueueInProgress';
export type PurgeQueueExceptionsUnion = QueueDoesNotExist |
    PurgeQueueInProgress;
