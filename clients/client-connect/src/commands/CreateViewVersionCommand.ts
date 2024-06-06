// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateViewVersionRequest,
  CreateViewVersionResponse,
  CreateViewVersionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateViewVersionCommand, se_CreateViewVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateViewVersionCommand}.
 */
export interface CreateViewVersionCommandInput extends CreateViewVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateViewVersionCommand}.
 */
export interface CreateViewVersionCommandOutput extends CreateViewVersionResponse, __MetadataBearer {}

/**
 * <p>Publishes a new version of the view identifier.</p>
 *          <p>Versions are immutable and monotonically increasing.</p>
 *          <p>It returns the highest version if there is no change in content compared to that version. An
 *    error is displayed if the supplied ViewContentSha256 is different from the ViewContentSha256 of
 *    the <code>$LATEST</code> alias.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateViewVersionCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateViewVersionCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // CreateViewVersionRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ViewId: "STRING_VALUE", // required
 *   VersionDescription: "STRING_VALUE",
 *   ViewContentSha256: "STRING_VALUE",
 * };
 * const command = new CreateViewVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateViewVersionResponse
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
 * @param CreateViewVersionCommandInput - {@link CreateViewVersionCommandInput}
 * @returns {@link CreateViewVersionCommandOutput}
 * @see {@link CreateViewVersionCommandInput} for command's `input` shape.
 * @see {@link CreateViewVersionCommandOutput} for command's `response` shape.
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
 *  <p>That resource is already in use. Please try another.</p>
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
 * @public
 */
export class CreateViewVersionCommand extends $Command
  .classBuilder<
    CreateViewVersionCommandInput,
    CreateViewVersionCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "CreateViewVersion", {})
  .n("ConnectClient", "CreateViewVersionCommand")
  .f(void 0, CreateViewVersionResponseFilterSensitiveLog)
  .ser(se_CreateViewVersionCommand)
  .de(de_CreateViewVersionCommand)
  .build() {}
