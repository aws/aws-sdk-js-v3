// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ModifyActivityStreamRequest, ModifyActivityStreamResponse } from "../models/models_1";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyActivityStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyActivityStreamCommand}.
 */
export interface ModifyActivityStreamCommandInput extends ModifyActivityStreamRequest {}
/**
 * @public
 *
 * The output of {@link ModifyActivityStreamCommand}.
 */
export interface ModifyActivityStreamCommandOutput extends ModifyActivityStreamResponse, __MetadataBearer {}

/**
 * <p>Changes the audit policy state of a database activity stream to either locked (default) or unlocked. A locked policy is read-only,
 *             whereas an unlocked policy is read/write. If your activity stream is started and locked, you can unlock it, customize your audit policy,
 *             and then lock your activity stream. Restarting the activity stream isn't required. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.Modifying.html"> Modifying a database activity stream</a> in the
 *                 <i>Amazon RDS User Guide</i>. </p>
 *          <p>This operation is supported for RDS for Oracle and Microsoft SQL Server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyActivityStreamCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyActivityStreamCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // ModifyActivityStreamRequest
 *   ResourceArn: "STRING_VALUE",
 *   AuditPolicyState: "locked" || "unlocked",
 * };
 * const command = new ModifyActivityStreamCommand(input);
 * const response = await client.send(command);
 * // { // ModifyActivityStreamResponse
 * //   KmsKeyId: "STRING_VALUE",
 * //   KinesisStreamName: "STRING_VALUE",
 * //   Status: "stopped" || "starting" || "started" || "stopping",
 * //   Mode: "sync" || "async",
 * //   EngineNativeAuditFieldsIncluded: true || false,
 * //   PolicyStatus: "locked" || "unlocked" || "locking-policy" || "unlocking-policy",
 * // };
 *
 * ```
 *
 * @param ModifyActivityStreamCommandInput - {@link ModifyActivityStreamCommandInput}
 * @returns {@link ModifyActivityStreamCommandOutput}
 * @see {@link ModifyActivityStreamCommandInput} for command's `input` shape.
 * @see {@link ModifyActivityStreamCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The specified resource ID was not found.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class ModifyActivityStreamCommand extends $Command
  .classBuilder<
    ModifyActivityStreamCommandInput,
    ModifyActivityStreamCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "ModifyActivityStream", {})
  .n("RDSClient", "ModifyActivityStreamCommand")
  .sc(ModifyActivityStream$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyActivityStreamRequest;
      output: ModifyActivityStreamResponse;
    };
    sdk: {
      input: ModifyActivityStreamCommandInput;
      output: ModifyActivityStreamCommandOutput;
    };
  };
}
