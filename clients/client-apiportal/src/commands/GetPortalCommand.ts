// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPortalRequest, GetPortalResponse } from "../models/models_0";
import { GetPortal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPortalCommand}.
 */
export interface GetPortalCommandInput extends GetPortalRequest {}
/**
 * @public
 *
 * The output of {@link GetPortalCommand}.
 */
export interface GetPortalCommandOutput extends GetPortalResponse, __MetadataBearer {}

/**
 * Returns the configuration, publish status, and preview status of a portal.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, GetPortalCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, GetPortalCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // GetPortalRequest
 *   portalId: "STRING_VALUE", // required
 * };
 * const command = new GetPortalCommand(input);
 * const response = await client.send(command);
 * // { // GetPortalResponse
 * //   portalId: "STRING_VALUE", // required
 * //   portalArn: "STRING_VALUE", // required
 * //   endpointConfiguration: { // EndpointConfigurationResponse
 * //     domainName: "STRING_VALUE",
 * //     certificateArn: "STRING_VALUE",
 * //     portalDomainHostedZoneId: "STRING_VALUE", // required
 * //     portalDefaultDomainName: "STRING_VALUE", // required
 * //   },
 * //   authorization: { // Authorization
 * //     authorizationConfig: { // AuthorizationConfig Union: only one key present
 * //       none: {},
 * //       cognitoConfig: { // CognitoConfig
 * //         userPoolArn: "STRING_VALUE", // required
 * //         appClientId: "STRING_VALUE", // required
 * //         userPoolDomain: "STRING_VALUE", // required
 * //         identityPoolId: "STRING_VALUE",
 * //       },
 * //     },
 * //     fineGrainedAccessControl: "ENABLED" || "DISABLED", // required
 * //   },
 * //   portalContent: { // PortalContent
 * //     displayName: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     theme: { // PortalTheme
 * //       customColors: { // CustomColors
 * //         backgroundColor: "STRING_VALUE", // required
 * //         navigationColor: "STRING_VALUE", // required
 * //         headerColor: "STRING_VALUE", // required
 * //         textColor: "STRING_VALUE", // required
 * //         accentColor: "STRING_VALUE", // required
 * //         errorValidationColor: "STRING_VALUE", // required
 * //       },
 * //       logoUploadedAt: new Date("TIMESTAMP"),
 * //     },
 * //   },
 * //   includedProductArns: [ // IncludedProductArns // required
 * //     "STRING_VALUE",
 * //   ],
 * //   publishStatus: "PUBLISHED" || "PUBLISH_IN_PROGRESS" || "PUBLISH_FAILED" || "DISABLE_IN_PROGRESS" || "DISABLE_FAILED" || "DISABLED",
 * //   statusException: { // PortalStatusException
 * //     exception: "INTERNAL_FAILURE" || "UNSHARED_PRODUCT_EXCEPTION" || "CLOUDFRONT_DOMAIN_IN_USE" || "MISSING_CLOUDFRONT_PERMISSIONS",
 * //     message: "STRING_VALUE",
 * //   },
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   publishedAt: new Date("TIMESTAMP"),
 * //   publishDescription: "STRING_VALUE",
 * //   rumAppMonitorName: "STRING_VALUE",
 * //   preview: { // Preview
 * //     previewStatus: "PREVIEW_IN_PROGRESS" || "PREVIEW_FAILED" || "PREVIEW_READY", // required
 * //     statusException: {
 * //       exception: "INTERNAL_FAILURE" || "UNSHARED_PRODUCT_EXCEPTION" || "CLOUDFRONT_DOMAIN_IN_USE" || "MISSING_CLOUDFRONT_PERMISSIONS",
 * //       message: "STRING_VALUE",
 * //     },
 * //     previewUrl: "STRING_VALUE",
 * //   },
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPortalCommandInput - {@link GetPortalCommandInput}
 * @returns {@link GetPortalCommandOutput}
 * @see {@link GetPortalCommandInput} for command's `input` shape.
 * @see {@link GetPortalCommandOutput} for command's `response` shape.
 * @see {@link APIPortalClientResolvedConfig | config} for APIPortalClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have permission to perform this operation.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The request is not valid. The message identifies the field or value that failed validation.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  The request rate or a service quota was exceeded. Reduce the request rate or the number of resources and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource does not exist, or you do not have access to it.
 *
 * @throws {@link APIPortalServiceException}
 * <p>Base exception class for all service exceptions from APIPortal service.</p>
 *
 *
 * @public
 */
export class GetPortalCommand extends command<GetPortalCommandInput, GetPortalCommandOutput>(
  _ep0,
  _mw0,
  "GetPortal",
  GetPortal$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPortalRequest;
      output: GetPortalResponse;
    };
    sdk: {
      input: GetPortalCommandInput;
      output: GetPortalCommandOutput;
    };
  };
}
