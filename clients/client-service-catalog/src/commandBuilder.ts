// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./ServiceCatalogClient";


/**
 * @internal
 */
export const command = makeBuilder<ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AWS242ServiceCatalogService", "ServiceCatalogClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
