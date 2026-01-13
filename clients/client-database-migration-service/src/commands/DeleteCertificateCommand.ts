// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteCertificateMessage, DeleteCertificateResponse } from "../models/models_0";
import { DeleteCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCertificateCommand}.
 */
export interface DeleteCertificateCommandInput extends DeleteCertificateMessage {}
/**
 * @public
 *
 * The output of {@link DeleteCertificateCommand}.
 */
export interface DeleteCertificateCommandOutput extends DeleteCertificateResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified certificate. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteCertificateCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteCertificateCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DeleteCertificateMessage
 *   CertificateArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteCertificateCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCertificateResponse
 * //   Certificate: { // Certificate
 * //     CertificateIdentifier: "STRING_VALUE",
 * //     CertificateCreationDate: new Date("TIMESTAMP"),
 * //     CertificatePem: "STRING_VALUE",
 * //     CertificateWallet: new Uint8Array(),
 * //     CertificateArn: "STRING_VALUE",
 * //     CertificateOwner: "STRING_VALUE",
 * //     ValidFromDate: new Date("TIMESTAMP"),
 * //     ValidToDate: new Date("TIMESTAMP"),
 * //     SigningAlgorithm: "STRING_VALUE",
 * //     KeyLength: Number("int"),
 * //     KmsKeyId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteCertificateCommandInput - {@link DeleteCertificateCommandInput}
 * @returns {@link DeleteCertificateCommandOutput}
 * @see {@link DeleteCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteCertificateCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Delete Certificate
 * ```javascript
 * // Deletes the specified certificate.
 * const input = {
 *   CertificateArn: "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUSM457DE6XFJCJQ"
 * };
 * const command = new DeleteCertificateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Certificate:   { /* empty *\/ }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteCertificateCommand extends $Command
  .classBuilder<
    DeleteCertificateCommandInput,
    DeleteCertificateCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DeleteCertificate", {})
  .n("DatabaseMigrationServiceClient", "DeleteCertificateCommand")
  .sc(DeleteCertificate$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCertificateMessage;
      output: DeleteCertificateResponse;
    };
    sdk: {
      input: DeleteCertificateCommandInput;
      output: DeleteCertificateCommandOutput;
    };
  };
}
