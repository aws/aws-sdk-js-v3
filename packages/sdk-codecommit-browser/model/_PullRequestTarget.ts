import {_MergeMetadata} from './_MergeMetadata';
import {Structure as _Structure_} from '@aws/types';

export const _PullRequestTarget: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        repositoryName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        sourceReference: {
            shape: {
                type: 'string',
            },
        },
        destinationReference: {
            shape: {
                type: 'string',
            },
        },
        destinationCommit: {
            shape: {
                type: 'string',
            },
        },
        sourceCommit: {
            shape: {
                type: 'string',
            },
        },
        mergeMetadata: {
            shape: _MergeMetadata,
        },
    },
};