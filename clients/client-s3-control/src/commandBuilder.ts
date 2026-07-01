// smithy-typescript generated code
import { getProcessArnablesPlugin, getRedirectFromPostIdPlugin } from "@aws-sdk/middleware-sdk-s3/s3-control";
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./S3ControlClient";


/**
 * @internal
 */
export const command = makeBuilder<S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AWSS3ControlServiceV20180820", "S3ControlClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {
  RequiresAccountId: { type: "staticContextParams", value: true },
  AccountId: { type: "contextParams", name: "AccountId" },
};

/**
 * @internal
 */
export const _ep1: EndpointParameterInstructions = {
  RequiresAccountId: { type: "staticContextParams", value: true },
  AccessPointName: { type: "contextParams", name: "Name" },
  AccountId: { type: "contextParams", name: "AccountId" },
  Bucket: { type: "contextParams", name: "Bucket" },
};

/**
 * @internal
 */
export const _ep2: EndpointParameterInstructions = {
  OutpostId: { type: "contextParams", name: "OutpostId" },
  Bucket: { type: "contextParams", name: "Bucket" },
};

/**
 * @internal
 */
export const _ep3: EndpointParameterInstructions = {
  RequiresAccountId: { type: "staticContextParams", value: true },
  AccessPointName: { type: "contextParams", name: "Name" },
  AccountId: { type: "contextParams", name: "AccountId" },
};

/**
 * @internal
 */
export const _ep4: EndpointParameterInstructions = {
  RequiresAccountId: { type: "staticContextParams", value: true },
  UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
  AccessPointName: { type: "contextParams", name: "Name" },
  AccountId: { type: "contextParams", name: "AccountId" },
};

/**
 * @internal
 */
export const _ep5: EndpointParameterInstructions = {
  RequiresAccountId: { type: "staticContextParams", value: true },
  AccountId: { type: "contextParams", name: "AccountId" },
  Bucket: { type: "contextParams", name: "Bucket" },
};

/**
 * @internal
 */
export const _ep6: EndpointParameterInstructions = {
  RequiresAccountId: { type: "staticContextParams", value: true },
  UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
  AccountId: { type: "contextParams", name: "AccountId" },
};

/**
 * @internal
 */
export const _ep7: EndpointParameterInstructions = {
  RequiresAccountId: { type: "staticContextParams", value: true },
  OutpostId: { type: "contextParams", name: "OutpostId" },
  AccountId: { type: "contextParams", name: "AccountId" },
};

/**
 * @internal
 */
export const _ep8: EndpointParameterInstructions = {
  RequiresAccountId: { type: "staticContextParams", value: true },
  ResourceArn: { type: "contextParams", name: "ResourceArn" },
  AccountId: { type: "contextParams", name: "AccountId" },
};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
  getProcessArnablesPlugin(config),
  getApplyMd5BodyChecksumPlugin(config),
];

/**
 * @internal
 */
export const _mw1 = (Command: any, cs: any, config: any, o: any) => [
  getProcessArnablesPlugin(config),
];

/**
 * @internal
 */
export const _mw2 = (Command: any, cs: any, config: any, o: any) => [
  getRedirectFromPostIdPlugin(config),
  getApplyMd5BodyChecksumPlugin(config),
];

/**
 * @internal
 */
export const _mw3 = (Command: any, cs: any, config: any, o: any) => [
  getRedirectFromPostIdPlugin(config),
];
