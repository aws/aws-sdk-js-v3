// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./MgnClient";


/**
 * @internal
 */
export const command = makeBuilder<MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "ApplicationMigrationService", "MgnClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
