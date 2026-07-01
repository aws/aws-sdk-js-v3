// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./NeptuneGraphClient";


/**
 * @internal
 */
export const command = makeBuilder<NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AmazonNeptuneGraph", "NeptuneGraphClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {
  ApiType: { type: "staticContextParams", value: `ControlPlane` },
};

/**
 * @internal
 */
export const _ep1: EndpointParameterInstructions = {
  ApiType: { type: "staticContextParams", value: `DataPlane` },
};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
