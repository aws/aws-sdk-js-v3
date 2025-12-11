// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeViewRequest, DescribeViewResponse } from "../models/models_1";
import { DescribeView } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeViewCommand}.
 */
export interface DescribeViewCommandInput extends DescribeViewRequest {}
/**
 * @public
 *
 * The output of {@link DescribeViewCommand}.
 */
export interface DescribeViewCommandOutput extends DescribeViewResponse, __MetadataBearer {}

/**
 * <p>Retrieves the view for the specified Amazon Connect instance and view identifier.</p>
 *          <p>The view identifier can be supplied as a ViewId or ARN.</p>
 *          <p>
 *             <code>$SAVED</code> needs to be supplied if a view is unpublished.</p>
 *          <p>The view identifier can contain an optional qualifier, for example, <code><view-id>:$SAVED</code>, which
 *    is either an actual version number or an Amazon Connect managed qualifier <code>$SAVED | $LATEST</code>. If it is
 *    not supplied, then <code>$LATEST</code> is assumed for customer managed views and an error is returned if there is no
 *    published content available. Version 1 is assumed for Amazon Web Services managed views.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeViewCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeViewCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeViewRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ViewId: "STRING_VALUE", // required
 * };
 * const command = new DescribeViewCommand(input);
 * const response = await client.send(command);
 * // { // DescribeViewResponse
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
 * @param DescribeViewCommandInput - {@link DescribeViewCommandInput}
 * @returns {@link DescribeViewCommandOutput}
 * @see {@link DescribeViewCommandInput} for command's `input` shape.
 * @see {@link DescribeViewCommandOutput} for command's `response` shape.
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
export class DescribeViewCommand extends $Command
  .classBuilder<
    DescribeViewCommandInput,
    DescribeViewCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DescribeView", {})
  .n("ConnectClient", "DescribeViewCommand")
  .sc(DescribeView)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeViewRequest;
      output: DescribeViewResponse;
    };
    sdk: {
      input: DescribeViewCommandInput;
      output: DescribeViewCommandOutput;
    };
  };
}
