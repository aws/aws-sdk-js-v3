import {_ExportJobsResponse} from './_ExportJobsResponse';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetSegmentExportJobsOutput: _Structure_ = {
    type: 'structure',
    required: [
        'ExportJobsResponse',
    ],
    members: {
        ExportJobsResponse: {
            shape: _ExportJobsResponse,
        },
    },
    payload: 'ExportJobsResponse',
};