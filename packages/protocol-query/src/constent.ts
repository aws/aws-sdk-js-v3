import {Member} from '@aws/types';

export const ERR_RESP_SHAPE: Member = {
    shape: {
        type: 'structure',
        required: ['Error'],
        members: {
            Error: {
                shape: {
                    type: 'structure',
                    required: ['Code'],
                    members: {
                        Code: {shape: {type: 'string'}}
                    }
                }
            }
        }
    }    
}
