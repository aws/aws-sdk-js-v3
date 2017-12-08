import {Member} from '@aws/types';

export const ERR_RESP_SHAPE: Member = {
    shape: {
        type: 'structure',
        required: ['Error'],
        members: {
            Error: {
                shape: {
                    type: 'structure',
                    required: ['Code', 'Message'],
                    members: {
                        Code: {shape: {type: 'string'}},
                        Message: {shape: {type: 'string'}},
                    }
                }
            }
        }
    }    
}

export type ParsedErrorResponse = {
    Error: {
        Message: string,
        Code: string
    },
    $metadata: {requestId: string},
}
