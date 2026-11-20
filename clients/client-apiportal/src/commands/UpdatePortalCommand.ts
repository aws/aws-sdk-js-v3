// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePortalRequest, UpdatePortalResponse } from "../models/models_0";
import { UpdatePortal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePortalCommand}.
 */
export interface UpdatePortalCommandInput extends UpdatePortalRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePortalCommand}.
 */
export interface UpdatePortalCommandOutput extends UpdatePortalResponse, __MetadataBearer {}

/**
 * Updates a portal. Only the fields supplied in the request are changed.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, UpdatePortalCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, UpdatePortalCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // UpdatePortalRequest
 *   portalId: "STRING_VALUE", // required
 *   portalContent: { // PortalContent
 *     displayName: "STRING_VALUE", // required
 *     description: "STRING_VALUE",
 *     theme: { // PortalTheme
 *       customColors: { // CustomColors
 *         backgroundColor: "STRING_VALUE", // required
 *         navigationColor: "STRING_VALUE", // required
 *         headerColor: "STRING_VALUE", // required
 *         textColor: "STRING_VALUE", // required
 *         accentColor: "STRING_VALUE", // required
 *         errorValidationColor: "STRING_VALUE", // required
 *       },
 *       logoUploadedAt: new Date("TIMESTAMP"),
 *     },
 *   },
 *   endpointConfiguration: { // EndpointConfigurationRequest Union: only one key present
 *     none: {},
 *     acmManaged: { // ACMManaged
 *       domainName: "STRING_VALUE", // required
 *       certificateArn: "STRING_VALUE", // required
 *     },
 *   },
 *   authorization: { // Authorization
 *     authorizationConfig: { // AuthorizationConfig Union: only one key present
 *       none: {},
 *       cognitoConfig: { // CognitoConfig
 *         userPoolArn: "STRING_VALUE", // required
 *         appClientId: "STRING_VALUE", // required
 *         userPoolDomain: "STRING_VALUE", // required
 *         identityPoolId: "STRING_VALUE",
 *       },
 *     },
 *     fineGrainedAccessControl: "ENABLED" || "DISABLED", // required
 *   },
 *   rumAppMonitorName: "STRING_VALUE",
 *   includedProductArns: [ // IncludedProductArns
 *     "STRING_VALUE",
 *   ],
 *   logoUri: "STRING_VALUE",
 * };
 * const command = new UpdatePortalCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePortalResponse
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
 * // };
 *
 * ```
 *
 * @param UpdatePortalCommandInput - {@link UpdatePortalCommandInput}
 * @returns {@link UpdatePortalCommandOutput}
 * @see {@link UpdatePortalCommandInput} for command's `input` shape.
 * @see {@link UpdatePortalCommandOutput} for command's `response` shape.
 * @see {@link APIPortalClientResolvedConfig | config} for APIPortalClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have permission to perform this operation.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The request is not valid. The message identifies the field or value that failed validation.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource, for example because another operation on it is still in progress.
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
export class UpdatePortalCommand extends command<UpdatePortalCommandInput, UpdatePortalCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePortal",
  UpdatePortal$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePortalRequest;
      output: UpdatePortalResponse;
    };
    sdk: {
      input: UpdatePortalCommandInput;
      output: UpdatePortalCommandOutput;
    };
  };
}
