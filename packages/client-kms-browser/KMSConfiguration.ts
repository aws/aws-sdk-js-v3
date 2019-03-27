import * as __aws_crypto_sha256_browser from '@aws-crypto/sha256-browser';
import * as __aws_sdk_core_handler from '@aws-sdk/core-handler';
import * as __aws_sdk_fetch_http_handler from '@aws-sdk/fetch-http-handler';
import * as __aws_sdk_json_builder from '@aws-sdk/json-builder';
import * as __aws_sdk_json_error_unmarshaller from '@aws-sdk/json-error-unmarshaller';
import * as __aws_sdk_json_parser from '@aws-sdk/json-parser';
import * as __aws_sdk_middleware_serializer from '@aws-sdk/middleware-serializer';
import * as __aws_sdk_protocol_json_rpc from '@aws-sdk/protocol-json-rpc';
import * as __aws_sdk_signature_v4 from '@aws-sdk/signature-v4';
import * as __aws_sdk_signing_middleware from '@aws-sdk/signing-middleware';
import * as __aws_sdk_stream_collector_browser from '@aws-sdk/stream-collector-browser';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as __aws_sdk_url_parser_browser from '@aws-sdk/url-parser-browser';
import * as __aws_sdk_util_base64_browser from '@aws-sdk/util-base64-browser';
import * as __aws_sdk_util_body_length_browser from '@aws-sdk/util-body-length-browser';
import * as __aws_sdk_util_utf8_browser from '@aws-sdk/util-utf8-browser';
import {OutputTypesUnion} from './types/OutputTypesUnion';

export interface KMSConfiguration {
    /**
     * The function that will be used to convert a base64-encoded string to a byte array
     */
    base64Decoder?: __aws_sdk_types.Decoder;

    /**
     * The function that will be used to convert binary data to a base64-encoded string
     */
    base64Encoder?: __aws_sdk_types.Encoder;

    /**
     * The credentials used to sign requests.
     */
    credentials: __aws_sdk_types.Credentials|__aws_sdk_types.Provider<__aws_sdk_types.Credentials>;

    /**
     * A function that determines how long (in milliseconds) the SDK should wait before retrying a request
     */
    delayDecider?: __aws_sdk_types.DelayDecider;

    /**
     * The fully qualified endpoint of the webservice. This is only required when using a custom endpoint (for example, when using a local version of S3).
     */
    endpoint?: string|__aws_sdk_types.HttpEndpoint|__aws_sdk_types.Provider<__aws_sdk_types.HttpEndpoint>;

    /**
     * The endpoint provider to call if no endpoint is provided
     */
    endpointProvider?: any;

    /**
     * The handler to use as the core of the client's middleware stack
     */
    handler?: __aws_sdk_types.Terminalware<any, Blob>;

    /**
     * The HTTP handler to use
     */
    httpHandler?: __aws_sdk_types.HttpHandler<Blob>;

    /**
     * The maximum number of redirects to follow for a service request. Set to `0` to disable retries.
     */
    maxRedirects?: number;

    /**
     * The maximum number of times requests that encounter potentially transient failures should be retried
     */
    maxRetries?: number;

    /**
     * The configuration profile to use.
     */
    profile?: string;

    /**
     * The AWS region to which this client will send requests
     */
    region: string|__aws_sdk_types.Provider<string>;

    /**
     * A function that determines whether an error is retryable
     */
    retryDecider?: __aws_sdk_types.RetryDecider;

    /**
     * A constructor for a class implementing the @aws-sdk/types.Hash interface that computes the SHA-256 HMAC or checksum of a string or binary buffer
     */
    sha256?: __aws_sdk_types.HashConstructor;

    /**
     * The signer to use when signing requests.
     */
    signer?: __aws_sdk_types.RequestSigner;

    /**
     * The service name with which to sign requests.
     */
    signingName?: string;

    /**
     * Whether SSL is enabled for requests.
     */
    sslEnabled?: boolean;

    /**
     * A function that converts a stream into an array of bytes.
     */
    streamCollector?: __aws_sdk_types.StreamCollector<Blob>;

    /**
     * The function that will be used to convert strings into HTTP endpoints
     */
    urlParser?: __aws_sdk_types.UrlParser;

    /**
     * The function that will be used to convert a UTF8-encoded string to a byte array
     */
    utf8Decoder?: __aws_sdk_types.Decoder;

    /**
     * The function that will be used to convert binary data to a UTF-8 encoded string
     */
    utf8Encoder?: __aws_sdk_types.Encoder;
}

export interface KMSResolvableConfiguration extends KMSConfiguration {
    /**
     * Whether the HTTP handler was injected by the user and should thus not be destroyed when this client is
     */
    _user_injected_http_handler: any;

    /**
     * A function that can calculate the length of a request body.
     */
    bodyLengthChecker: (body: any) => number | undefined;

    /**
     * The parser to use when converting HTTP responses to SDK output types
     */
    parser: __aws_sdk_types.ResponseParser<Blob>;

    /**
     * The serializer to use when converting SDK input to HTTP requests
     */
    serializer: __aws_sdk_types.Provider<__aws_sdk_types.RequestSerializer<Blob>>;
}

export interface KMSResolvedConfiguration extends KMSConfiguration {
    _user_injected_http_handler: boolean;

    base64Decoder: __aws_sdk_types.Decoder;

    base64Encoder: __aws_sdk_types.Encoder;

    bodyLengthChecker: (body: any) => number | undefined;

    credentials: __aws_sdk_types.Provider<__aws_sdk_types.Credentials>;

    endpoint: __aws_sdk_types.Provider<__aws_sdk_types.HttpEndpoint>;

    endpointProvider: any;

    handler: __aws_sdk_types.Terminalware<any, Blob>;

    httpHandler: __aws_sdk_types.HttpHandler<Blob>;

    maxRedirects: number;

    maxRetries: number;

    parser: __aws_sdk_types.ResponseParser<Blob>;

    region: __aws_sdk_types.Provider<string>;

    serializer: __aws_sdk_types.Provider<__aws_sdk_types.RequestSerializer<Blob>>;

    sha256: __aws_sdk_types.HashConstructor;

    signer: __aws_sdk_types.RequestSigner;

    signingName: string;

    sslEnabled: boolean;

    streamCollector: __aws_sdk_types.StreamCollector<Blob>;

    urlParser: __aws_sdk_types.UrlParser;

    utf8Decoder: __aws_sdk_types.Decoder;

    utf8Encoder: __aws_sdk_types.Encoder;
}

export const configurationProperties: __aws_sdk_types.ConfigurationDefinition<
    KMSResolvableConfiguration,
    KMSResolvedConfiguration
> = {
    profile: {},
    maxRedirects: {
        defaultValue: 10
    },
    maxRetries: {
        defaultValue: 3
    },
    region: {
        required: true,
        normalize: (
            value: string|__aws_sdk_types.Provider<string>|undefined
        ) => {
            if (typeof value === 'string') {
                const promisified = Promise.resolve(value);
                return () => promisified;
            }

            return value!;
        }
    },
    sslEnabled: {
        defaultValue: true
    },
    urlParser: {
        defaultValue: __aws_sdk_url_parser_browser.parseUrl
    },
    endpointProvider: {
        defaultValue: (
            sslEnabled: boolean,
            region: string,
        ) => ({
            protocol: sslEnabled ? 'https:' : 'http:',
            path: '/',
            hostname: `kms.${region}.amazonaws.com`
        })
    },
    endpoint: {
        defaultProvider: (
            configuration: {
                sslEnabled: boolean,
                endpointProvider: any,
                region: __aws_sdk_types.Provider<string>,
            }
        ) => {
            const promisified = configuration.region()
                .then(region => configuration.endpointProvider(
                    configuration.sslEnabled,
                    region
                ));
            return () => promisified;
        },
        normalize: (
            value: string|__aws_sdk_types.HttpEndpoint|__aws_sdk_types.Provider<__aws_sdk_types.HttpEndpoint>|undefined,
            configuration: {
                urlParser?: __aws_sdk_types.UrlParser,
            }
        ): __aws_sdk_types.Provider<__aws_sdk_types.HttpEndpoint> => {
            if (typeof value === 'string') {
                const promisified = Promise.resolve(configuration.urlParser!(value));
                return () => promisified;
            } else if (typeof value === 'object') {
                const promisified = Promise.resolve(value);
                return () => promisified;
            }

            // Users are not required to supply an endpoint, so `value`
            // could be undefined. This function, however, will only be
            // invoked if `value` is defined, so the return will never
            // be undefined.
            return value!;
        }
    },
    base64Decoder: {
        defaultValue: __aws_sdk_util_base64_browser.fromBase64
    },
    base64Encoder: {
        defaultValue: __aws_sdk_util_base64_browser.toBase64
    },
    utf8Decoder: {
        defaultValue: __aws_sdk_util_utf8_browser.fromUtf8
    },
    utf8Encoder: {
        defaultValue: __aws_sdk_util_utf8_browser.toUtf8
    },
    streamCollector: {
        defaultValue: __aws_sdk_stream_collector_browser.streamCollector
    },
    serializer: {
        defaultProvider: (
            configuration: {
                base64Encoder: __aws_sdk_types.Encoder,
                endpoint: __aws_sdk_types.Provider<__aws_sdk_types.HttpEndpoint>,
                utf8Decoder: __aws_sdk_types.Decoder
            }
        ) => {
            const promisified = configuration.endpoint()
                .then(endpoint => new __aws_sdk_protocol_json_rpc.JsonRpcSerializer<Blob>(
                    endpoint,
                    new __aws_sdk_json_builder.JsonBuilder(
                        configuration.base64Encoder,
                        configuration.utf8Decoder
                    )
                ));
            return () => promisified;
        }
    },
    parser: {
        defaultProvider: (
            configuration: {
                base64Decoder: __aws_sdk_types.Decoder,
                streamCollector: __aws_sdk_types.StreamCollector<Blob>,
                utf8Encoder: __aws_sdk_types.Encoder
            }
        ) => new __aws_sdk_protocol_json_rpc.JsonRpcParser(
            new __aws_sdk_json_parser.JsonParser(
                configuration.base64Decoder
            ),
            __aws_sdk_json_error_unmarshaller.jsonErrorUnmarshaller,
            configuration.streamCollector,
            configuration.utf8Encoder
        )
    },
    _user_injected_http_handler: {
        defaultProvider: (configuration: {httpHandler?: any}) => !configuration.httpHandler
    },
    httpHandler: {
        defaultProvider: () => new __aws_sdk_fetch_http_handler.FetchHttpHandler()
    },
    handler: {
        defaultProvider: (
            configuration: {
                httpHandler: __aws_sdk_types.HttpHandler<Blob>,
                parser: __aws_sdk_types.ResponseParser<Blob>,
            }
        ) => __aws_sdk_core_handler.coreHandler<OutputTypesUnion, Blob>(
            configuration.httpHandler,
            configuration.parser
        )
    },
    bodyLengthChecker: {
        defaultValue: __aws_sdk_util_body_length_browser.calculateBodyLength
    },
    retryDecider: {},
    delayDecider: {},
    credentials: {
        required: true,
        normalize: (
            value: __aws_sdk_types.Credentials|__aws_sdk_types.Provider<__aws_sdk_types.Credentials>
        ) => {
            if (typeof value === 'object') {
                const promisified = Promise.resolve(value);
                return () => promisified;
            }

            return value;
        }
    },
    sha256: {
        defaultValue: __aws_crypto_sha256_browser.Sha256
    },
    signingName: {
        defaultValue: 'kms'
    },
    signer: {
        defaultProvider: (
            configuration: {
                credentials: __aws_sdk_types.Provider<__aws_sdk_types.Credentials>,
                region: __aws_sdk_types.Provider<string>,
                sha256: __aws_sdk_types.HashConstructor,
                signingName: string,
            }
        ) => new __aws_sdk_signature_v4.SignatureV4({
            credentials: configuration.credentials,
            region: configuration.region,
            service: configuration.signingName,
            sha256: configuration.sha256,
            uriEscapePath: false,
        })
    },
};