// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./OrganizationsClient";


/**
 * @internal
 */
export const command = makeBuilder<OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AWSOrganizationsV20161128", "OrganizationsClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
