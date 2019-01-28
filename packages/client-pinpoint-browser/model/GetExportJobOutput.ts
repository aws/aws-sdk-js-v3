import {_ExportJobResponse} from './_ExportJobResponse';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetExportJobOutput: _Structure_ = {
    type: 'structure',
    required: [
        'ExportJobResponse',
    ],
    members: {
        ExportJobResponse: {
            shape: _ExportJobResponse,
        },
    },
    payload: 'ExportJobResponse',
};