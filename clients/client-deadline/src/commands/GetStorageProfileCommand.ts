// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetStorageProfileRequest, GetStorageProfileResponse } from "../models/models_0";
import { GetStorageProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStorageProfileCommand}.
 */
export interface GetStorageProfileCommandInput extends GetStorageProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetStorageProfileCommand}.
 */
export interface GetStorageProfileCommandOutput extends GetStorageProfileResponse, __MetadataBearer {}

/**
 * <p>Gets a storage profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetStorageProfileCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetStorageProfileCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // GetStorageProfileRequest
 *   farmId: "STRING_VALUE", // required
 *   storageProfileId: "STRING_VALUE", // required
 * };
 * const command = new GetStorageProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetStorageProfileResponse
 * //   storageProfileId: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE", // required
 * //   osFamily: "WINDOWS" || "LINUX" || "MACOS", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * //   fileSystemLocations: [ // FileSystemLocationsList
 * //     { // FileSystemLocation
 * //       name: "STRING_VALUE", // required
 * //       path: "STRING_VALUE", // required
 * //       type: "SHARED" || "LOCAL", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetStorageProfileCommandInput - {@link GetStorageProfileCommandInput}
 * @returns {@link GetStorageProfileCommandOutput}
 * @see {@link GetStorageProfileCommandInput} for command's `input` shape.
 * @see {@link GetStorageProfileCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class GetStorageProfileCommand extends $Command
  .classBuilder<
    GetStorageProfileCommandInput,
    GetStorageProfileCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "GetStorageProfile", {})
  .n("DeadlineClient", "GetStorageProfileCommand")
  .sc(GetStorageProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStorageProfileRequest;
      output: GetStorageProfileResponse;
    };
    sdk: {
      input: GetStorageProfileCommandInput;
      output: GetStorageProfileCommandOutput;
    };
  };
}
