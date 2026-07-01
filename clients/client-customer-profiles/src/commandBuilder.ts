// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type {
  CustomerProfilesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./CustomerProfilesClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "CustomerProfiles_20200815", "CustomerProfilesClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
