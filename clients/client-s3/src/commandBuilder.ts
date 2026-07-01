// smithy-typescript generated code
import { getFlexibleChecksumsPlugin } from "@aws-sdk/checksums/flexible-checksums";
import {
  getCheckContentLengthHeaderPlugin,
  getLocationConstraintPlugin,
  getS3ExpiresMiddlewarePlugin,
  getSsecPlugin,
  getThrow200ExceptionsPlugin,
} from "@aws-sdk/middleware-sdk-s3/s3";
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./S3Client";


/**
 * @internal
 */
export const command = makeBuilder<S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AmazonS3", "S3Client", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {
  Bucket: { type: "contextParams", name: "Bucket" },
  Key: { type: "contextParams", name: "Key" },
};

/**
 * @internal
 */
export const _ep1: EndpointParameterInstructions = {
  DisableS3ExpressSessionAuth: { type: "staticContextParams", value: true },
  Bucket: { type: "contextParams", name: "Bucket" },
  Key: { type: "contextParams", name: "Key" },
  CopySource: { type: "contextParams", name: "CopySource" },
};

/**
 * @internal
 */
export const _ep2: EndpointParameterInstructions = {
  UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
  DisableAccessPoints: { type: "staticContextParams", value: true },
  Bucket: { type: "contextParams", name: "Bucket" },
};

/**
 * @internal
 */
export const _ep3: EndpointParameterInstructions = {
  UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
  Bucket: { type: "contextParams", name: "Bucket" },
};

/**
 * @internal
 */
export const _ep4: EndpointParameterInstructions = {
  DisableS3ExpressSessionAuth: { type: "staticContextParams", value: true },
  Bucket: { type: "contextParams", name: "Bucket" },
};

/**
 * @internal
 */
export const _ep5: EndpointParameterInstructions = {
  Bucket: { type: "contextParams", name: "Bucket" },
};

/**
 * @internal
 */
export const _ep6: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _ep7: EndpointParameterInstructions = {
  UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
};

/**
 * @internal
 */
export const _ep8: EndpointParameterInstructions = {
  Bucket: { type: "contextParams", name: "Bucket" },
  Prefix: { type: "contextParams", name: "Prefix" },
};

/**
 * @internal
 */
export const _ep9: EndpointParameterInstructions = {
  UseObjectLambdaEndpoint: { type: "staticContextParams", value: true },
};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
  getThrow200ExceptionsPlugin(config),
];

/**
 * @internal
 */
export const _mw1 = (Command: any, cs: any, config: any, o: any) => [
  getThrow200ExceptionsPlugin(config),
  getSsecPlugin(config),
];

/**
 * @internal
 */
export const _mw2 = (Command: any, cs: any, config: any, o: any) => [
  getThrow200ExceptionsPlugin(config),
  getLocationConstraintPlugin(config),
];

/**
 * @internal
 */
export const _mw3 = (Command: any, cs: any, config: any, o: any) => [
  getFlexibleChecksumsPlugin(config, {
    requestAlgorithmMember: { "httpHeader": "x-amz-sdk-checksum-algorithm", "name": "ChecksumAlgorithm", },
    requestChecksumRequired: true,
  }),
];

/**
 * @internal
 */
export const _mw4 = (Command: any, cs: any, config: any, o: any) => [
];

/**
 * @internal
 */
export const _mw5 = (Command: any, cs: any, config: any, o: any) => [
  getFlexibleChecksumsPlugin(config, {
    requestAlgorithmMember: { "httpHeader": "x-amz-sdk-checksum-algorithm", "name": "ChecksumAlgorithm", },
    requestChecksumRequired: true,
  }),
  getThrow200ExceptionsPlugin(config),
];

/**
 * @internal
 */
export const _mw6 = (Command: any, cs: any, config: any, o: any) => [
  getFlexibleChecksumsPlugin(config, {
    requestChecksumRequired: false,
    requestValidationModeMember: "ChecksumMode",
    responseAlgorithms: ["CRC64NVME", "CRC32", "CRC32C", "SHA256", "SHA1", "SHA512", "MD5", "XXHASH64", "XXHASH3", "XXHASH128"],
  }),
];

/**
 * @internal
 */
export const _mw7 = (Command: any, cs: any, config: any, o: any) => [
  getFlexibleChecksumsPlugin(config, {
    requestChecksumRequired: false,
    requestValidationModeMember: "ChecksumMode",
    responseAlgorithms: ["CRC64NVME", "CRC32", "CRC32C", "SHA256", "SHA1", "SHA512", "MD5", "XXHASH64", "XXHASH3", "XXHASH128"],
  }),
  getSsecPlugin(config),
  getS3ExpiresMiddlewarePlugin(config),
];

/**
 * @internal
 */
export const _mw8 = (Command: any, cs: any, config: any, o: any) => [
  getThrow200ExceptionsPlugin(config),
  getSsecPlugin(config),
  getS3ExpiresMiddlewarePlugin(config),
];

/**
 * @internal
 */
export const _mw9 = (Command: any, cs: any, config: any, o: any) => [
  getFlexibleChecksumsPlugin(config, {
    requestAlgorithmMember: { "httpHeader": "x-amz-sdk-checksum-algorithm", "name": "ChecksumAlgorithm", },
    requestChecksumRequired: false,
  }),
];

/**
 * @internal
 */
export const _mw10 = (Command: any, cs: any, config: any, o: any) => [
  getFlexibleChecksumsPlugin(config, {
    requestAlgorithmMember: { "httpHeader": "x-amz-sdk-checksum-algorithm", "name": "ChecksumAlgorithm", },
    requestChecksumRequired: false,
  }),
  getThrow200ExceptionsPlugin(config),
];

/**
 * @internal
 */
export const _mw11 = (Command: any, cs: any, config: any, o: any) => [
  getFlexibleChecksumsPlugin(config, {
    requestAlgorithmMember: { "httpHeader": "x-amz-sdk-checksum-algorithm", "name": "ChecksumAlgorithm", },
    requestChecksumRequired: false,
  }),
  getCheckContentLengthHeaderPlugin(config),
  getThrow200ExceptionsPlugin(config),
  getSsecPlugin(config),
];

/**
 * @internal
 */
export const _mw12 = (Command: any, cs: any, config: any, o: any) => [
  getSsecPlugin(config),
];

/**
 * @internal
 */
export const _mw13 = (Command: any, cs: any, config: any, o: any) => [
  getFlexibleChecksumsPlugin(config, {
    requestAlgorithmMember: { "httpHeader": "x-amz-sdk-checksum-algorithm", "name": "ChecksumAlgorithm", },
    requestChecksumRequired: false,
  }),
  getThrow200ExceptionsPlugin(config),
  getSsecPlugin(config),
];
