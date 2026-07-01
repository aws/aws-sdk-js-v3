// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./ACMClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "CertificateManager", "ACMClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {
  ServiceType: { type: "staticContextParams", value: `ACM` },
};

/**
 * @internal
 */
export const _ep1: EndpointParameterInstructions = {
  ServiceType: { type: "staticContextParams", value: `ACM-ACME` },
};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
