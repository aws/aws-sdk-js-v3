// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  PersonalizeRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./PersonalizeRuntimeClient";


/**
 * @internal
 */
export const command = makeBuilder<PersonalizeRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AmazonPersonalizeRuntime", "PersonalizeRuntimeClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
