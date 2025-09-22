// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAppInputSourceRequest, DeleteAppInputSourceResponse } from "../models/models_0";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { DeleteAppInputSource } from "../schemas/schemas_7_App";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAppInputSourceCommand}.
 */
export interface DeleteAppInputSourceCommandInput extends DeleteAppInputSourceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppInputSourceCommand}.
 */
export interface DeleteAppInputSourceCommandOutput extends DeleteAppInputSourceResponse, __MetadataBearer {}

/**
 * <p>Deletes the input source and all of its imported resources from the Resilience Hub
 *       application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DeleteAppInputSourceCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DeleteAppInputSourceCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // DeleteAppInputSourceRequest
 *   appArn: "STRING_VALUE", // required
 *   sourceArn: "STRING_VALUE",
 *   terraformSource: { // TerraformSource
 *     s3StateFileUrl: "STRING_VALUE", // required
 *   },
 *   clientToken: "STRING_VALUE",
 *   eksSourceClusterNamespace: { // EksSourceClusterNamespace
 *     eksClusterArn: "STRING_VALUE", // required
 *     namespace: "STRING_VALUE", // required
 *   },
 * };
 * const command = new DeleteAppInputSourceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAppInputSourceResponse
 * //   appArn: "STRING_VALUE",
 * //   appInputSource: { // AppInputSource
 * //     sourceName: "STRING_VALUE",
 * //     importType: "CfnStack" || "Resource" || "AppRegistryApp" || "ResourceGroup" || "Terraform" || "EKS", // required
 * //     sourceArn: "STRING_VALUE",
 * //     terraformSource: { // TerraformSource
 * //       s3StateFileUrl: "STRING_VALUE", // required
 * //     },
 * //     resourceCount: Number("int"),
 * //     eksSourceClusterNamespace: { // EksSourceClusterNamespace
 * //       eksClusterArn: "STRING_VALUE", // required
 * //       namespace: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteAppInputSourceCommandInput - {@link DeleteAppInputSourceCommandInput}
 * @returns {@link DeleteAppInputSourceCommandOutput}
 * @see {@link DeleteAppInputSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteAppInputSourceCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 *
 * @public
 */
export class DeleteAppInputSourceCommand extends $Command
  .classBuilder<
    DeleteAppInputSourceCommandInput,
    DeleteAppInputSourceCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "DeleteAppInputSource", {})
  .n("ResiliencehubClient", "DeleteAppInputSourceCommand")
  .sc(DeleteAppInputSource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAppInputSourceRequest;
      output: DeleteAppInputSourceResponse;
    };
    sdk: {
      input: DeleteAppInputSourceCommandInput;
      output: DeleteAppInputSourceCommandOutput;
    };
  };
}
