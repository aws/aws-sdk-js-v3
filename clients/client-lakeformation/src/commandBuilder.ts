// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./LakeFormationClient";


/**
 * @internal
 */
export const command = makeBuilder<LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AWSLakeFormation", "LakeFormationClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
