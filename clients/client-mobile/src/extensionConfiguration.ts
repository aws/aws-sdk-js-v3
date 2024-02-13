// smithy-typescript generated code
import { AwsRegionExtensionConfiguration } from "@aws-sdk/types";
import { HttpHandlerExtensionConfiguration } from "@smithy/protocol-http";
import { DefaultExtensionConfiguration } from "@smithy/types";

import { HttpAuthExtensionConfiguration } from "./auth/httpAuthExtensionConfiguration";

/**
 * @internal
 */
export interface MobileExtensionConfiguration
  extends HttpHandlerExtensionConfiguration,
    DefaultExtensionConfiguration,
    AwsRegionExtensionConfiguration,
    HttpAuthExtensionConfiguration {}
