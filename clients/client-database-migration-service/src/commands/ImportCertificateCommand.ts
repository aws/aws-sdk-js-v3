// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ImportCertificateMessage, ImportCertificateResponse } from "../models/models_0";
import { ImportCertificate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportCertificateCommand}.
 */
export interface ImportCertificateCommandInput extends ImportCertificateMessage {}
/**
 * @public
 *
 * The output of {@link ImportCertificateCommand}.
 */
export interface ImportCertificateCommandOutput extends ImportCertificateResponse, __MetadataBearer {}

/**
 * <p>Uploads the specified certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ImportCertificateCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ImportCertificateCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // ImportCertificateMessage
 *   CertificateIdentifier: "STRING_VALUE", // required
 *   CertificatePem: "STRING_VALUE",
 *   CertificateWallet: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ResourceArn: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ImportCertificateCommand(input);
 * const response = await client.send(command);
 * // { // ImportCertificateResponse
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
 * //   },
 * // };
 *
 * ```
 *
 * @param ImportCertificateCommandInput - {@link ImportCertificateCommandInput}
 * @returns {@link ImportCertificateCommandOutput}
 * @see {@link ImportCertificateCommandInput} for command's `input` shape.
 * @see {@link ImportCertificateCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link InvalidCertificateFault} (client fault)
 *  <p>The certificate was not valid.</p>
 *
 * @throws {@link ResourceAlreadyExistsFault} (client fault)
 *  <p>The resource you are attempting to create already exists.</p>
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *  <p>The quota for this resource quota has been exceeded.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Import certificate
 * ```javascript
 * // Uploads the specified certificate.
 * const input = {
 *   CertificateIdentifier: "",
 *   CertificatePem: ""
 * };
 * const command = new ImportCertificateCommand(input);
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
export class ImportCertificateCommand extends $Command
  .classBuilder<
    ImportCertificateCommandInput,
    ImportCertificateCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "ImportCertificate", {})
  .n("DatabaseMigrationServiceClient", "ImportCertificateCommand")
  .sc(ImportCertificate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportCertificateMessage;
      output: ImportCertificateResponse;
    };
    sdk: {
      input: ImportCertificateCommandInput;
      output: ImportCertificateCommandOutput;
    };
  };
}
