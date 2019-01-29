import {Structure as _Structure_} from '@aws-sdk/types';

export const _NumberValidateResponse: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Carrier: {
            shape: {
                type: 'string',
            },
        },
        City: {
            shape: {
                type: 'string',
            },
        },
        CleansedPhoneNumberE164: {
            shape: {
                type: 'string',
            },
        },
        CleansedPhoneNumberNational: {
            shape: {
                type: 'string',
            },
        },
        Country: {
            shape: {
                type: 'string',
            },
        },
        CountryCodeIso2: {
            shape: {
                type: 'string',
            },
        },
        CountryCodeNumeric: {
            shape: {
                type: 'string',
            },
        },
        County: {
            shape: {
                type: 'string',
            },
        },
        OriginalCountryCodeIso2: {
            shape: {
                type: 'string',
            },
        },
        OriginalPhoneNumber: {
            shape: {
                type: 'string',
            },
        },
        PhoneType: {
            shape: {
                type: 'string',
            },
        },
        PhoneTypeCode: {
            shape: {
                type: 'integer',
            },
        },
        Timezone: {
            shape: {
                type: 'string',
            },
        },
        ZipCode: {
            shape: {
                type: 'string',
            },
        },
    },
};