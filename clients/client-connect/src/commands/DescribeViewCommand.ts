// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeViewRequest, DescribeViewResponse } from "../models/models_1";
import { DescribeView$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the view for the specified Connect Customer instance and view identifier.
 *
 * The view identifier can be supplied as a ViewId or ARN.
 *
 * `$SAVED` needs to be supplied if a view is unpublished.
 *
 * The view identifier can contain an optional qualifier, for example, `<view-id>:$SAVED`, which is either an actual version number or an Connect Customer managed qualifier `$SAVED | $LATEST`. If it is not supplied, then `$LATEST` is assumed for customer managed views and an error is returned if there is no published content available. Version 1 is assumed for Amazon Web Services managed views.
 *
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
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Displayed when rate-related API limits are exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class DescribeViewCommand extends command<DescribeViewCommandInput, DescribeViewCommandOutput>(
  _ep0,
  _mw0,
  "DescribeView",
  DescribeView$
) {
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
