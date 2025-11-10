// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateViewRequest } from "../models/models_0";
import { CreateViewResponse } from "../models/models_1";
import { CreateView } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateViewCommand}.
 */
export interface CreateViewCommandInput extends CreateViewRequest {}
/**
 * @public
 *
 * The output of {@link CreateViewCommand}.
 */
export interface CreateViewCommandOutput extends CreateViewResponse, __MetadataBearer {}

/**
 * <p>Creates a new view with the possible status of <code>SAVED</code> or
 *    <code>PUBLISHED</code>.</p>
 *          <p>The views will have a unique name for each connect instance.</p>
 *          <p>It performs basic content validation if the status is <code>SAVED</code> or full content
 *    validation if the status is set to <code>PUBLISHED</code>. An error is returned if validation
 *    fails. It associates either the <code>$SAVED</code> qualifier or both of the <code>$SAVED</code>
 *    and <code>$LATEST</code> qualifiers with the provided view content based on the status. The view
 *    is idempotent if ClientToken is provided.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateViewCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateViewCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateViewRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   Status: "PUBLISHED" || "SAVED", // required
 *   Content: { // ViewInputContent
 *     Template: "STRING_VALUE",
 *     Actions: [ // ViewActions
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateViewCommand(input);
 * const response = await client.send(command);
 * // { // CreateViewResponse
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
 * @param CreateViewCommandInput - {@link CreateViewCommandInput}
 * @returns {@link CreateViewCommandOutput}
 * @see {@link CreateViewCommandInput} for command's `input` shape.
 * @see {@link CreateViewCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
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
 *  <p>That resource is already in use (for example, you're trying to add a record with the same
 *    name as an existing record). If you are trying to delete a resource (for example,
 *    DeleteHoursOfOperation or DeletePredefinedAttribute), remove its reference from related resources
 *    and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
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
export class CreateViewCommand extends $Command
  .classBuilder<
    CreateViewCommandInput,
    CreateViewCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "CreateView", {})
  .n("ConnectClient", "CreateViewCommand")
  .sc(CreateView)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateViewRequest;
      output: CreateViewResponse;
    };
    sdk: {
      input: CreateViewCommandInput;
      output: CreateViewCommandOutput;
    };
  };
}
