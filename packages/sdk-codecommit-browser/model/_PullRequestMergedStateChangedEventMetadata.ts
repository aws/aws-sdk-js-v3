import {_MergeMetadata} from './_MergeMetadata';
import {Structure as _Structure_} from '@aws/types';

export const _PullRequestMergedStateChangedEventMetadata: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        destinationReference: {
            shape: {
                type: 'string',
            },
        },
        mergeMetadata: {
            shape: _MergeMetadata,
        },
    },
};