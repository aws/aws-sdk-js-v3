/**
 * _Http shape
 */
export interface _Http {
    /**
     * _String shape
     */
    HttpURL?: string;

    /**
     * _NullableInteger shape
     */
    HttpStatus?: number;

    /**
     * _String shape
     */
    HttpMethod?: string;

    /**
     * _String shape
     */
    UserAgent?: string;

    /**
     * _String shape
     */
    ClientIp?: string;
}

export type _UnmarshalledHttp = _Http;