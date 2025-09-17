// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { TestConnectionMessage, TestConnectionResponse } from "../models/models_1";
import { de_TestConnectionCommand, se_TestConnectionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestConnectionCommand}.
 */
export interface TestConnectionCommandInput extends TestConnectionMessage {}
/**
 * @public
 *
 * The output of {@link TestConnectionCommand}.
 */
export interface TestConnectionCommandOutput extends TestConnectionResponse, __MetadataBearer {}

/**
 * <p>Tests the connection between the replication instance and the endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, TestConnectionCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, TestConnectionCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // TestConnectionMessage
 *   ReplicationInstanceArn: "STRING_VALUE", // required
 *   EndpointArn: "STRING_VALUE", // required
 * };
 * const command = new TestConnectionCommand(input);
 * const response = await client.send(command);
 * // { // TestConnectionResponse
 * //   Connection: { // Connection
 * //     ReplicationInstanceArn: "STRING_VALUE",
 * //     EndpointArn: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     LastFailureMessage: "STRING_VALUE",
 * //     EndpointIdentifier: "STRING_VALUE",
 * //     ReplicationInstanceIdentifier: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param TestConnectionCommandInput - {@link TestConnectionCommandInput}
 * @returns {@link TestConnectionCommandOutput}
 * @see {@link TestConnectionCommandInput} for command's `input` shape.
 * @see {@link TestConnectionCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>DMS cannot access the KMS key.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *  <p>The quota for this resource quota has been exceeded.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Test conection
 * ```javascript
 * // Tests the connection between the replication instance and the endpoint.
 * const input = {
 *   EndpointArn: "arn:aws:dms:us-east-1:123456789012:endpoint:RAAR3R22XSH46S3PWLC3NJAWKM",
 *   ReplicationInstanceArn: "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ"
 * };
 * const command = new TestConnectionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Connection:   { /* empty *\/ }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class TestConnectionCommand extends $Command
  .classBuilder<
    TestConnectionCommandInput,
    TestConnectionCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "TestConnection", {})
  .n("DatabaseMigrationServiceClient", "TestConnectionCommand")
  .f(void 0, void 0)
  .ser(se_TestConnectionCommand)
  .de(de_TestConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestConnectionMessage;
      output: TestConnectionResponse;
    };
    sdk: {
      input: TestConnectionCommandInput;
      output: TestConnectionCommandOutput;
    };
  };
}
