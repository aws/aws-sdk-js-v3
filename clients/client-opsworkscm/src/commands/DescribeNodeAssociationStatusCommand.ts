// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeNodeAssociationStatusRequest,
  DescribeNodeAssociationStatusResponse,
  DescribeNodeAssociationStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import {
  de_DescribeNodeAssociationStatusCommand,
  se_DescribeNodeAssociationStatusCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNodeAssociationStatusCommand}.
 */
export interface DescribeNodeAssociationStatusCommandInput extends DescribeNodeAssociationStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNodeAssociationStatusCommand}.
 */
export interface DescribeNodeAssociationStatusCommandOutput
  extends DescribeNodeAssociationStatusResponse,
    __MetadataBearer {}

/**
 * <p>
 *       Returns the current status of an existing association or disassociation request.
 *     </p>
 *          <p>
 *       A <code>ResourceNotFoundException</code> is thrown when no recent association or disassociation request with the specified token is found,
 *       or when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, DescribeNodeAssociationStatusCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, DescribeNodeAssociationStatusCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const input = { // DescribeNodeAssociationStatusRequest
 *   NodeAssociationStatusToken: "STRING_VALUE", // required
 *   ServerName: "STRING_VALUE", // required
 * };
 * const command = new DescribeNodeAssociationStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNodeAssociationStatusResponse
 * //   NodeAssociationStatus: "SUCCESS" || "FAILED" || "IN_PROGRESS",
 * //   EngineAttributes: [ // EngineAttributes
 * //     { // EngineAttribute
 * //       Name: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeNodeAssociationStatusCommandInput - {@link DescribeNodeAssociationStatusCommandInput}
 * @returns {@link DescribeNodeAssociationStatusCommandOutput}
 * @see {@link DescribeNodeAssociationStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeNodeAssociationStatusCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for OpsWorksCMClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more of the provided request parameters are not valid.
 *     </p>
 *
 * @throws {@link OpsWorksCMServiceException}
 * <p>Base exception class for all service exceptions from OpsWorksCM service.</p>
 *
 *
 * @public
 */
export class DescribeNodeAssociationStatusCommand extends $Command
  .classBuilder<
    DescribeNodeAssociationStatusCommandInput,
    DescribeNodeAssociationStatusCommandOutput,
    OpsWorksCMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpsWorksCMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpsWorksCM_V2016_11_01", "DescribeNodeAssociationStatus", {})
  .n("OpsWorksCMClient", "DescribeNodeAssociationStatusCommand")
  .f(void 0, DescribeNodeAssociationStatusResponseFilterSensitiveLog)
  .ser(se_DescribeNodeAssociationStatusCommand)
  .de(de_DescribeNodeAssociationStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNodeAssociationStatusRequest;
      output: DescribeNodeAssociationStatusResponse;
    };
    sdk: {
      input: DescribeNodeAssociationStatusCommandInput;
      output: DescribeNodeAssociationStatusCommandOutput;
    };
  };
}
