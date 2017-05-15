export const SHA_256_HASH: {name: 'SHA-256'} = {name: 'SHA-256'};

export const SHA_256_HMAC_ALGO: {name: 'HMAC', hash: {name: 'SHA-256'} } = {
    name: 'HMAC',
    hash: SHA_256_HASH
};
