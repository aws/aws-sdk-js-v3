// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { GetDataSetDetailsRequest, GetDataSetDetailsResponse } from "../models/models_0";
import { de_GetDataSetDetailsCommand, se_GetDataSetDetailsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataSetDetailsCommand}.
 */
export interface GetDataSetDetailsCommandInput extends GetDataSetDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetDataSetDetailsCommand}.
 */
export interface GetDataSetDetailsCommandOutput extends GetDataSetDetailsResponse, __MetadataBearer {}

/**
 * <p>Gets the details of a specific data set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, GetDataSetDetailsCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, GetDataSetDetailsCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const input = { // GetDataSetDetailsRequest
 *   applicationId: "STRING_VALUE", // required
 *   dataSetName: "STRING_VALUE", // required
 * };
 * const command = new GetDataSetDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetDataSetDetailsResponse
 * //   dataSetName: "STRING_VALUE", // required
 * //   dataSetOrg: { // DatasetDetailOrgAttributes Union: only one key present
 * //     vsam: { // VsamDetailAttributes
 * //       encoding: "STRING_VALUE",
 * //       recordFormat: "STRING_VALUE",
 * //       compressed: true || false,
 * //       cacheAtStartup: true || false,
 * //       primaryKey: { // PrimaryKey
 * //         name: "STRING_VALUE",
 * //         offset: Number("int"), // required
 * //         length: Number("int"), // required
 * //       },
 * //       alternateKeys: [ // AlternateKeyList
 * //         { // AlternateKey
 * //           name: "STRING_VALUE",
 * //           offset: Number("int"), // required
 * //           length: Number("int"), // required
 * //           allowDuplicates: true || false,
 * //         },
 * //       ],
 * //     },
 * //     gdg: { // GdgDetailAttributes
 * //       limit: Number("int"),
 * //       rollDisposition: "STRING_VALUE",
 * //     },
 * //     po: { // PoDetailAttributes
 * //       format: "STRING_VALUE", // required
 * //       encoding: "STRING_VALUE", // required
 * //     },
 * //     ps: { // PsDetailAttributes
 * //       format: "STRING_VALUE", // required
 * //       encoding: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   recordLength: Number("int"),
 * //   location: "STRING_VALUE",
 * //   blocksize: Number("int"),
 * //   creationTime: new Date("TIMESTAMP"),
 * //   lastUpdatedTime: new Date("TIMESTAMP"),
 * //   lastReferencedTime: new Date("TIMESTAMP"),
 * //   fileSize: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetDataSetDetailsCommandInput - {@link GetDataSetDetailsCommandInput}
 * @returns {@link GetDataSetDetailsCommandOutput}
 * @see {@link GetDataSetDetailsCommandInput} for command's `input` shape.
 * @see {@link GetDataSetDetailsCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The parameters provided in the request conflict with existing resources.</p>
 *
 * @throws {@link ExecutionTimeoutException} (server fault)
 *  <p> Failed to connect to server, or didn’t receive response within expected time period.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Server cannot process the request at the moment.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 *
 * @public
 */
export class GetDataSetDetailsCommand extends $Command
  .classBuilder<
    GetDataSetDetailsCommandInput,
    GetDataSetDetailsCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsSupernovaControlPlaneService", "GetDataSetDetails", {})
  .n("M2Client", "GetDataSetDetailsCommand")
  .f(void 0, void 0)
  .ser(se_GetDataSetDetailsCommand)
  .de(de_GetDataSetDetailsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataSetDetailsRequest;
      output: GetDataSetDetailsResponse;
    };
    sdk: {
      input: GetDataSetDetailsCommandInput;
      output: GetDataSetDetailsCommandOutput;
    };
  };
}
