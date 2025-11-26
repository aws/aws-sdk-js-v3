// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
<<<<<<< HEAD
import { UpdateViewContentRequest, UpdateViewContentResponse } from "../models/models_3";
=======
import type { UpdateViewContentRequest, UpdateViewContentResponse } from "../models/models_2";
>>>>>>> 60efd81940b (chore: codegen)
import { UpdateViewContent } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateViewContentCommand}.
 */
export interface UpdateViewContentCommandInput extends UpdateViewContentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateViewContentCommand}.
 */
export interface UpdateViewContentCommandOutput extends UpdateViewContentResponse, __MetadataBearer {}

/**
 * <p>Updates the view content of the given view identifier in the specified Amazon Connect instance.</p>
 *          <p>It performs content validation if <code>Status</code> is set to <code>SAVED</code> and performs full content
 *    validation if <code>Status</code> is <code>PUBLISHED</code>. Note that the <code>$SAVED</code> alias' content will
 *    always be updated, but the <code>$LATEST</code> alias' content will only be updated if <code>Status</code> is
 *     <code>PUBLISHED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateViewContentCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateViewContentCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateViewContentRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ViewId: "STRING_VALUE", // required
 *   Status: "PUBLISHED" || "SAVED", // required
 *   Content: { // ViewInputContent
 *     Template: "STRING_VALUE",
 *     Actions: [ // ViewActions
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateViewContentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateViewContentResponse
 * //   View: { // View
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Status: "PUBLISHED" || "SAVED",
 * //     Type: "CUSTOMER_MANAGED" || "AWS_MANAGED",
 * //     Description: "STRING_VALUE",
 * //     Version: Number("int"),
 * //     VersionDescription: "STRING_VALUE",
 * //     Content: { // ViewContent
 * //       InputSchema: "STRING_VALUE",
 * //       Template: "STRING_VALUE",
 * //       Actions: [ // ViewActions
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     ViewContentSha256: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateViewContentCommandInput - {@link UpdateViewContentCommandInput}
 * @returns {@link UpdateViewContentCommandOutput}
 * @see {@link UpdateViewContentCommandInput} for command's `input` shape.
 * @see {@link UpdateViewContentCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>That resource is already in use (for example, you're trying to add a record with the same name as an existing
 *    record). If you are trying to delete a resource (for example, DeleteHoursOfOperation or DeletePredefinedAttribute),
 *    remove its reference from related resources and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Displayed when rate-related API limits are exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateViewContentCommand extends $Command
  .classBuilder<
    UpdateViewContentCommandInput,
    UpdateViewContentCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateViewContent", {})
  .n("ConnectClient", "UpdateViewContentCommand")
  .sc(UpdateViewContent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateViewContentRequest;
      output: UpdateViewContentResponse;
    };
    sdk: {
      input: UpdateViewContentCommandInput;
      output: UpdateViewContentCommandOutput;
    };
  };
}
