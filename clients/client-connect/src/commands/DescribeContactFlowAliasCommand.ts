// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeContactFlowAliasRequest, DescribeContactFlowAliasResponse } from "../models/models_1";
import { DescribeContactFlowAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeContactFlowAliasCommand}.
 */
export interface DescribeContactFlowAliasCommandInput extends DescribeContactFlowAliasRequest {}
/**
 * @public
 *
 * The output of {@link DescribeContactFlowAliasCommand}.
 */
export interface DescribeContactFlowAliasCommandOutput extends DescribeContactFlowAliasResponse, __MetadataBearer {}

/**
 * Returns information about a specific flow alias, including the version that it points to.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeContactFlowAliasCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeContactFlowAliasCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeContactFlowAliasRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowId: "STRING_VALUE", // required
 *   AliasId: "STRING_VALUE", // required
 * };
 * const command = new DescribeContactFlowAliasCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContactFlowAliasResponse
 * //   ContactFlowAlias: { // ContactFlowAliasInfo
 * //     ContactFlowId: "STRING_VALUE",
 * //     ContactFlowArn: "STRING_VALUE",
 * //     AliasId: "STRING_VALUE",
 * //     Version: Number("long"),
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     LastModifiedRegion: "STRING_VALUE",
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeContactFlowAliasCommandInput - {@link DescribeContactFlowAliasCommandInput}
 * @returns {@link DescribeContactFlowAliasCommandOutput}
 * @see {@link DescribeContactFlowAliasCommandInput} for command's `input` shape.
 * @see {@link DescribeContactFlowAliasCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class DescribeContactFlowAliasCommand extends command<DescribeContactFlowAliasCommandInput, DescribeContactFlowAliasCommandOutput>(
  _ep0,
  _mw0,
  "DescribeContactFlowAlias",
  DescribeContactFlowAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeContactFlowAliasRequest;
      output: DescribeContactFlowAliasResponse;
    };
    sdk: {
      input: DescribeContactFlowAliasCommandInput;
      output: DescribeContactFlowAliasCommandOutput;
    };
  };
}
