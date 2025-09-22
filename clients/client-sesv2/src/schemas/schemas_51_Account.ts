// smithy-typescript generated code
import { list, sim } from "@smithy/core/schema";

import { _ACEA, _ACEAd, _UCD, _WURL, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AdditionalContactEmailAddress = sim(n0, _ACEA, 0, 8);
export var UseCaseDescription = sim(n0, _UCD, 0, 8);
export var WebsiteURL = sim(n0, _WURL, 0, 8);
export var AdditionalContactEmailAddresses = list(n0, _ACEAd, 8, [() => AdditionalContactEmailAddress, 0]);
