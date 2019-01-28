/**
 * Baidu Cloud Push credentials
 */
export interface _BaiduChannelRequest {
    /**
     * Platform credential API key from Baidu.
     */
    ApiKey?: string;

    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: boolean;

    /**
     * Platform credential Secret key from Baidu.
     */
    SecretKey?: string;
}

export type _UnmarshalledBaiduChannelRequest = _BaiduChannelRequest;