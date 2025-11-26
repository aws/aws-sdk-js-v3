// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateResourceShareRequest, UpdateResourceShareResponse } from "../models/models_0";
import type { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { UpdateResourceShare } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateResourceShareCommand}.
 */
export interface UpdateResourceShareCommandInput extends UpdateResourceShareRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResourceShareCommand}.
 */
export interface UpdateResourceShareCommandOutput extends UpdateResourceShareResponse, __MetadataBearer {}

/**
 * <p>Modifies some of the properties of the specified resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, UpdateResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, UpdateResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // UpdateResourceShareRequest
 *   resourceShareArn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   allowExternalPrincipals: true || false,
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateResourceShareCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResourceShareResponse
 * //   resourceShare: { // ResourceShare
 * //     resourceShareArn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     owningAccountId: "STRING_VALUE",
 * //     allowExternalPrincipals: true || false,
 * //     status: "PENDING" || "ACTIVE" || "FAILED" || "DELETING" || "DELETED",
 * //     statusMessage: "STRING_VALUE",
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdatedTime: new Date("TIMESTAMP"),
 * //     featureSet: "CREATED_FROM_POLICY" || "PROMOTING_TO_STANDARD" || "STANDARD",
 * //   },
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateResourceShareCommandInput - {@link UpdateResourceShareCommandInput}
 * @returns {@link UpdateResourceShareCommandOutput}
 * @see {@link UpdateResourceShareCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceShareCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The operation failed because the client token input parameter matched one that was
 *             used with a previous call to the operation, but at least one of the other input
 *             parameters is different from the previous call.</p>
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *  <p>The operation failed because the specified client token isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>The operation failed because a required input parameter is missing.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The operation failed because the requested operation isn't permitted.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The operation failed because a specified resource couldn't be found.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 *
 * @public
 */
export class UpdateResourceShareCommand extends $Command
  .classBuilder<
    UpdateResourceShareCommandInput,
    UpdateResourceShareCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonResourceSharing", "UpdateResourceShare", {})
  .n("RAMClient", "UpdateResourceShareCommand")
  .sc(UpdateResourceShare)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResourceShareRequest;
      output: UpdateResourceShareResponse;
    };
    sdk: {
      input: UpdateResourceShareCommandInput;
      output: UpdateResourceShareCommandOutput;
    };
  };
}
