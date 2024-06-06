// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetRecoveryPointRequest, GetRecoveryPointResponse } from "../models/models_0";
import { de_GetRecoveryPointCommand, se_GetRecoveryPointCommand } from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRecoveryPointCommand}.
 */
export interface GetRecoveryPointCommandInput extends GetRecoveryPointRequest {}
/**
 * @public
 *
 * The output of {@link GetRecoveryPointCommand}.
 */
export interface GetRecoveryPointCommandOutput extends GetRecoveryPointResponse, __MetadataBearer {}

/**
 * <p>Returns information about a recovery point.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, GetRecoveryPointCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, GetRecoveryPointCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // GetRecoveryPointRequest
 *   recoveryPointId: "STRING_VALUE", // required
 * };
 * const command = new GetRecoveryPointCommand(input);
 * const response = await client.send(command);
 * // { // GetRecoveryPointResponse
 * //   recoveryPoint: { // RecoveryPoint
 * //     recoveryPointId: "STRING_VALUE",
 * //     recoveryPointCreateTime: new Date("TIMESTAMP"),
 * //     totalSizeInMegaBytes: Number("double"),
 * //     namespaceName: "STRING_VALUE",
 * //     workgroupName: "STRING_VALUE",
 * //     namespaceArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRecoveryPointCommandInput - {@link GetRecoveryPointCommandInput}
 * @returns {@link GetRecoveryPointCommandOutput}
 * @see {@link GetRecoveryPointCommandInput} for command's `input` shape.
 * @see {@link GetRecoveryPointCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 * @public
 */
export class GetRecoveryPointCommand extends $Command
  .classBuilder<
    GetRecoveryPointCommandInput,
    GetRecoveryPointCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServerless", "GetRecoveryPoint", {})
  .n("RedshiftServerlessClient", "GetRecoveryPointCommand")
  .f(void 0, void 0)
  .ser(se_GetRecoveryPointCommand)
  .de(de_GetRecoveryPointCommand)
  .build() {}
