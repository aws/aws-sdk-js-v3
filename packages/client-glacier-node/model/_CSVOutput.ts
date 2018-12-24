import {Structure as _Structure_} from '@aws-sdk/types';

export const _CSVOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        QuoteFields: {
            shape: {
                type: 'string',
            },
        },
        QuoteEscapeCharacter: {
            shape: {
                type: 'string',
            },
        },
        RecordDelimiter: {
            shape: {
                type: 'string',
            },
        },
        FieldDelimiter: {
            shape: {
                type: 'string',
            },
        },
        QuoteCharacter: {
            shape: {
                type: 'string',
            },
        },
    },
};