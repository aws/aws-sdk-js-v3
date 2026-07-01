// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type {
  ARCRegionSwitchClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./ARCRegionSwitchClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<ARCRegionSwitchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "ArcRegionSwitch", "ARCRegionSwitchClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _ep1: EndpointParameterInstructions = {
  UseControlPlaneEndpoint: { type: "staticContextParams", value: true },
};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
