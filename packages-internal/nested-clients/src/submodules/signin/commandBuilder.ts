// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { ServiceInputTypes, ServiceOutputTypes, SigninClientResolvedConfig } from "./SigninClient";


/**
 * @internal
 */
export const command = makeBuilder<SigninClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "Signin", "SigninClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {
  IsControlPlane: { type: "staticContextParams", value: false },
};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
