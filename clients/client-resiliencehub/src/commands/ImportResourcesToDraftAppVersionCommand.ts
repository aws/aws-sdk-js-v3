// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImportResourcesToDraftAppVersionRequest, ImportResourcesToDraftAppVersionResponse } from "../models/models_0";
import {
  de_ImportResourcesToDraftAppVersionCommand,
  se_ImportResourcesToDraftAppVersionCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportResourcesToDraftAppVersionCommand}.
 */
export interface ImportResourcesToDraftAppVersionCommandInput extends ImportResourcesToDraftAppVersionRequest {}
/**
 * @public
 *
 * The output of {@link ImportResourcesToDraftAppVersionCommand}.
 */
export interface ImportResourcesToDraftAppVersionCommandOutput
  extends ImportResourcesToDraftAppVersionResponse,
    __MetadataBearer {}

/**
 * <p>Imports resources to Resilience Hub application draft version from different input sources. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover
 *         the structure and describe your Resilience Hub application</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ImportResourcesToDraftAppVersionCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ImportResourcesToDraftAppVersionCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // ImportResourcesToDraftAppVersionRequest
 *   appArn: "STRING_VALUE", // required
 *   sourceArns: [ // ArnList
 *     "STRING_VALUE",
 *   ],
 *   terraformSources: [ // TerraformSourceList
 *     { // TerraformSource
 *       s3StateFileUrl: "STRING_VALUE", // required
 *     },
 *   ],
 *   importStrategy: "STRING_VALUE",
 *   eksSources: [ // EksSourceList
 *     { // EksSource
 *       eksClusterArn: "STRING_VALUE", // required
 *       namespaces: [ // EksNamespaceList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ImportResourcesToDraftAppVersionCommand(input);
 * const response = await client.send(command);
 * // { // ImportResourcesToDraftAppVersionResponse
 * //   appArn: "STRING_VALUE", // required
 * //   appVersion: "STRING_VALUE", // required
 * //   sourceArns: [ // ArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   status: "STRING_VALUE", // required
 * //   terraformSources: [ // TerraformSourceList
 * //     { // TerraformSource
 * //       s3StateFileUrl: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   eksSources: [ // EksSourceList
 * //     { // EksSource
 * //       eksClusterArn: "STRING_VALUE", // required
 * //       namespaces: [ // EksNamespaceList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ImportResourcesToDraftAppVersionCommandInput - {@link ImportResourcesToDraftAppVersionCommandInput}
 * @returns {@link ImportResourcesToDraftAppVersionCommandOutput}
 * @see {@link ImportResourcesToDraftAppVersionCommandInput} for command's `input` shape.
 * @see {@link ImportResourcesToDraftAppVersionCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception occurs when you have exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use Service Quotas to request a service quota increase.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 * @public
 */
export class ImportResourcesToDraftAppVersionCommand extends $Command
  .classBuilder<
    ImportResourcesToDraftAppVersionCommandInput,
    ImportResourcesToDraftAppVersionCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "ImportResourcesToDraftAppVersion", {})
  .n("ResiliencehubClient", "ImportResourcesToDraftAppVersionCommand")
  .f(void 0, void 0)
  .ser(se_ImportResourcesToDraftAppVersionCommand)
  .de(de_ImportResourcesToDraftAppVersionCommand)
  .build() {}
