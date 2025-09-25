// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { Application, ArchiveApplicationRequest } from "../models/models_0";
import { ArchiveApplication } from "../schemas/schemas_14_Application";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ArchiveApplicationCommand}.
 */
export interface ArchiveApplicationCommandInput extends ArchiveApplicationRequest {}
/**
 * @public
 *
 * The output of {@link ArchiveApplicationCommand}.
 */
export interface ArchiveApplicationCommandOutput extends Application, __MetadataBearer {}

/**
 * <p>Archive application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ArchiveApplicationCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ArchiveApplicationCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ArchiveApplicationRequest
 *   applicationID: "STRING_VALUE", // required
 *   accountID: "STRING_VALUE",
 * };
 * const command = new ArchiveApplicationCommand(input);
 * const response = await client.send(command);
 * // { // Application
 * //   applicationID: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   isArchived: true || false,
 * //   applicationAggregatedStatus: { // ApplicationAggregatedStatus
 * //     lastUpdateDateTime: "STRING_VALUE",
 * //     healthStatus: "STRING_VALUE",
 * //     progressStatus: "STRING_VALUE",
 * //     totalSourceServers: Number("long"),
 * //   },
 * //   creationDateTime: "STRING_VALUE",
 * //   lastModifiedDateTime: "STRING_VALUE",
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   waveID: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ArchiveApplicationCommandInput - {@link ArchiveApplicationCommandInput}
 * @returns {@link ArchiveApplicationCommandOutput}
 * @see {@link ArchiveApplicationCommandInput} for command's `input` shape.
 * @see {@link ArchiveApplicationCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class ArchiveApplicationCommand extends $Command
  .classBuilder<
    ArchiveApplicationCommandInput,
    ArchiveApplicationCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "ArchiveApplication", {})
  .n("MgnClient", "ArchiveApplicationCommand")
  .sc(ArchiveApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ArchiveApplicationRequest;
      output: Application;
    };
    sdk: {
      input: ArchiveApplicationCommandInput;
      output: ArchiveApplicationCommandOutput;
    };
  };
}
