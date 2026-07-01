// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type {
  CloudFrontKeyValueStoreClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./CloudFrontKeyValueStoreClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<CloudFrontKeyValueStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "CloudFrontKeyValueStore", "CloudFrontKeyValueStoreClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {
  KvsARN: { type: "contextParams", name: "KvsARN" },
};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
