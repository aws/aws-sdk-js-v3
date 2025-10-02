// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MedicalImagingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MedicalImagingClient";
import { ListImageSetVersionsRequest, ListImageSetVersionsResponse } from "../models/models_0";
import { de_ListImageSetVersionsCommand, se_ListImageSetVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListImageSetVersionsCommand}.
 */
export interface ListImageSetVersionsCommandInput extends ListImageSetVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListImageSetVersionsCommand}.
 */
export interface ListImageSetVersionsCommandOutput extends ListImageSetVersionsResponse, __MetadataBearer {}

/**
 * <p>List image set versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, ListImageSetVersionsCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, ListImageSetVersionsCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * // import type { MedicalImagingClientConfig } from "@aws-sdk/client-medical-imaging";
 * const config = {}; // type is MedicalImagingClientConfig
 * const client = new MedicalImagingClient(config);
 * const input = { // ListImageSetVersionsRequest
 *   datastoreId: "STRING_VALUE", // required
 *   imageSetId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListImageSetVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListImageSetVersionsResponse
 * //   imageSetPropertiesList: [ // ImageSetPropertiesList // required
 * //     { // ImageSetProperties
 * //       imageSetId: "STRING_VALUE", // required
 * //       versionId: "STRING_VALUE", // required
 * //       imageSetState: "ACTIVE" || "LOCKED" || "DELETED", // required
 * //       ImageSetWorkflowStatus: "CREATED" || "COPIED" || "COPYING" || "COPYING_WITH_READ_ONLY_ACCESS" || "COPY_FAILED" || "UPDATING" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETED" || "IMPORTING" || "IMPORTED" || "IMPORT_FAILED",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       deletedAt: new Date("TIMESTAMP"),
 * //       message: "STRING_VALUE",
 * //       overrides: { // Overrides
 * //         forced: true || false,
 * //       },
 * //       isPrimary: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImageSetVersionsCommandInput - {@link ListImageSetVersionsCommandInput}
 * @returns {@link ListImageSetVersionsCommandOutput}
 * @see {@link ListImageSetVersionsCommandInput} for command's `input` shape.
 * @see {@link ListImageSetVersionsCommandOutput} for command's `response` shape.
 * @see {@link MedicalImagingClientResolvedConfig | config} for MedicalImagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the service.</p>
 *
 * @throws {@link MedicalImagingServiceException}
 * <p>Base exception class for all service exceptions from MedicalImaging service.</p>
 *
 *
 * @public
 */
export class ListImageSetVersionsCommand extends $Command
  .classBuilder<
    ListImageSetVersionsCommandInput,
    ListImageSetVersionsCommandOutput,
    MedicalImagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MedicalImagingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AHIGatewayService", "ListImageSetVersions", {})
  .n("MedicalImagingClient", "ListImageSetVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListImageSetVersionsCommand)
  .de(de_ListImageSetVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImageSetVersionsRequest;
      output: ListImageSetVersionsResponse;
    };
    sdk: {
      input: ListImageSetVersionsCommandInput;
      output: ListImageSetVersionsCommandOutput;
    };
  };
}
