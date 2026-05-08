// smithy-typescript generated code
import type { AwsRegionExtensionConfiguration } from "@aws-sdk/types";
import type { HttpHandlerExtensionConfiguration } from "@smithy/core/protocols";
import type { DefaultExtensionConfiguration } from "@smithy/types";

import type { HttpAuthExtensionConfiguration } from "./auth/httpAuthExtensionConfiguration";

/**
 * @internal
 */
export interface SecurityLakeExtensionConfiguration
  extends HttpHandlerExtensionConfiguration,
    DefaultExtensionConfiguration,
    AwsRegionExtensionConfiguration,
    HttpAuthExtensionConfiguration {}
