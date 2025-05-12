// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateStorageProfileRequest,
  CreateStorageProfileRequestFilterSensitiveLog,
  CreateStorageProfileResponse,
} from "../models/models_0";
import { de_CreateStorageProfileCommand, se_CreateStorageProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStorageProfileCommand}.
 */
export interface CreateStorageProfileCommandInput extends CreateStorageProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateStorageProfileCommand}.
 */
export interface CreateStorageProfileCommandOutput extends CreateStorageProfileResponse, __MetadataBearer {}

/**
 * <p>Creates a storage profile that specifies the operating system, file type, and file location of resources used on a farm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, CreateStorageProfileCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, CreateStorageProfileCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // CreateStorageProfileRequest
 *   clientToken: "STRING_VALUE",
 *   farmId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE", // required
 *   osFamily: "WINDOWS" || "LINUX" || "MACOS", // required
 *   fileSystemLocations: [ // FileSystemLocationsList
 *     { // FileSystemLocation
 *       name: "STRING_VALUE", // required
 *       path: "STRING_VALUE", // required
 *       type: "SHARED" || "LOCAL", // required
 *     },
 *   ],
 * };
 * const command = new CreateStorageProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateStorageProfileResponse
 * //   storageProfileId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateStorageProfileCommandInput - {@link CreateStorageProfileCommandInput}
 * @returns {@link CreateStorageProfileCommandOutput}
 * @see {@link CreateStorageProfileCommandInput} for command's `input` shape.
 * @see {@link CreateStorageProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You exceeded your service quota. Service quotas, also referred to as limits, are the maximum number of service resources or operations for your Amazon Web Services account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class CreateStorageProfileCommand extends $Command
  .classBuilder<
    CreateStorageProfileCommandInput,
    CreateStorageProfileCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "CreateStorageProfile", {})
  .n("DeadlineClient", "CreateStorageProfileCommand")
  .f(CreateStorageProfileRequestFilterSensitiveLog, void 0)
  .ser(se_CreateStorageProfileCommand)
  .de(de_CreateStorageProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStorageProfileRequest;
      output: CreateStorageProfileResponse;
    };
    sdk: {
      input: CreateStorageProfileCommandInput;
      output: CreateStorageProfileCommandOutput;
    };
  };
}
