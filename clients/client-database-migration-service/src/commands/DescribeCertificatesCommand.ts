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
import { DescribeCertificatesMessage, DescribeCertificatesResponse } from "../models/models_0";
import { DescribeCertificates } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCertificatesCommand}.
 */
export interface DescribeCertificatesCommandInput extends DescribeCertificatesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeCertificatesCommand}.
 */
export interface DescribeCertificatesCommandOutput extends DescribeCertificatesResponse, __MetadataBearer {}

/**
 * <p>Provides a description of the certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeCertificatesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeCertificatesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeCertificatesMessage
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCertificatesResponse
 * //   Marker: "STRING_VALUE",
 * //   Certificates: [ // CertificateList
 * //     { // Certificate
 * //       CertificateIdentifier: "STRING_VALUE",
 * //       CertificateCreationDate: new Date("TIMESTAMP"),
 * //       CertificatePem: "STRING_VALUE",
 * //       CertificateWallet: new Uint8Array(),
 * //       CertificateArn: "STRING_VALUE",
 * //       CertificateOwner: "STRING_VALUE",
 * //       ValidFromDate: new Date("TIMESTAMP"),
 * //       ValidToDate: new Date("TIMESTAMP"),
 * //       SigningAlgorithm: "STRING_VALUE",
 * //       KeyLength: Number("int"),
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCertificatesCommandInput - {@link DescribeCertificatesCommandInput}
 * @returns {@link DescribeCertificatesCommandOutput}
 * @see {@link DescribeCertificatesCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificatesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Describe certificates
 * ```javascript
 * // Provides a description of the certificate.
 * const input = {
 *   Filters: [
 *     {
 *       Name: "string",
 *       Values: [
 *         "string",
 *         "string"
 *       ]
 *     }
 *   ],
 *   Marker: "",
 *   MaxRecords: 123
 * };
 * const command = new DescribeCertificatesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Certificates:   [],
 *   Marker: ""
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeCertificatesCommand extends $Command
  .classBuilder<
    DescribeCertificatesCommandInput,
    DescribeCertificatesCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DescribeCertificates", {})
  .n("DatabaseMigrationServiceClient", "DescribeCertificatesCommand")
  .sc(DescribeCertificates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCertificatesMessage;
      output: DescribeCertificatesResponse;
    };
    sdk: {
      input: DescribeCertificatesCommandInput;
      output: DescribeCertificatesCommandOutput;
    };
  };
}
