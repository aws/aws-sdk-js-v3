// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type {
  CodestarNotificationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./CodestarNotificationsClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<CodestarNotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "CodeStarNotifications_20191015", "CodestarNotificationsClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
