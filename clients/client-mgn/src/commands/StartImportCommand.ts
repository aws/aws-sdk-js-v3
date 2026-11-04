// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartImportRequest, StartImportResponse } from "../models/models_0";
import { StartImport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartImportCommand}.
 */
export interface StartImportCommandInput extends StartImportRequest {}
/**
 * @public
 *
 * The output of {@link StartImportCommand}.
 */
export interface StartImportCommandOutput extends StartImportResponse, __MetadataBearer {}

/**
 * Start import.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, StartImportCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, StartImportCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // StartImportRequest
 *   clientToken: "STRING_VALUE",
 *   s3BucketSource: { // S3BucketSource
 *     s3Bucket: "STRING_VALUE", // required
 *     s3Key: "STRING_VALUE", // required
 *     s3BucketOwner: "STRING_VALUE",
 *   },
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartImportCommand(input);
 * const response = await client.send(command);
 * // { // StartImportResponse
 * //   importTask: { // ImportTask
 * //     importID: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     s3BucketSource: { // S3BucketSource
 * //       s3Bucket: "STRING_VALUE", // required
 * //       s3Key: "STRING_VALUE", // required
 * //       s3BucketOwner: "STRING_VALUE",
 * //     },
 * //     creationDateTime: "STRING_VALUE",
 * //     endDateTime: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     progressPercentage: Number("float"),
 * //     summary: { // ImportTaskSummary
 * //       waves: { // ImportTaskSummaryWaves
 * //         createdCount: Number("long"),
 * //         modifiedCount: Number("long"),
 * //       },
 * //       applications: { // ImportTaskSummaryApplications
 * //         createdCount: Number("long"),
 * //         modifiedCount: Number("long"),
 * //       },
 * //       servers: { // ImportTaskSummaryServers
 * //         createdCount: Number("long"),
 * //         modifiedCount: Number("long"),
 * //       },
 * //     },
 * //     tags: { // TagsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartImportCommandInput - {@link StartImportCommandInput}
 * @returns {@link StartImportCommandOutput}
 * @see {@link StartImportCommandInput} for command's `input` shape.
 * @see {@link StartImportCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the target resource.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found exception.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request could not be completed because it exceeded the service quota.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *
 * Uninitialized account exception.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validate exception.
 *
 * @throws {@link MgnServiceException}
 *
 * Base exception class for all service exceptions from Mgn service.
 *
 * @public
 */
export class StartImportCommand extends command<StartImportCommandInput, StartImportCommandOutput>(
  _ep0,
  _mw0,
  "StartImport",
  StartImport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartImportRequest;
      output: StartImportResponse;
    };
    sdk: {
      input: StartImportCommandInput;
      output: StartImportCommandOutput;
    };
  };
}
