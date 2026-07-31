// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTestRequest, UpdateTestResponse } from "../models/models_0";
import { UpdateTest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateTestCommand}.
 */
export interface UpdateTestCommandInput extends UpdateTestRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTestCommand}.
 */
export interface UpdateTestCommandOutput extends UpdateTestResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration of an existing test.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, UpdateTestCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, UpdateTestCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // UpdateTestRequest
 *   testId: "STRING_VALUE", // required
 *   serviceArn: "STRING_VALUE", // required
 *   loggingConfiguration: { // LoggingConfiguration
 *     s3BucketName: "STRING_VALUE",
 *     cloudWatchLogGroupArn: "STRING_VALUE",
 *     logSchemaVersion: "STRING_VALUE",
 *   },
 *   stopConditions: [ // StopConditionList
 *     { // StopCondition
 *       source: "aws:cloudwatch:alarm" || "none", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   roleName: "STRING_VALUE",
 *   parameters: { // TestParameters
 *     "<keys>": [ // StringList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateTestCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTestResponse
 * //   test: { // Test
 * //     testId: "STRING_VALUE", // required
 * //     testTemplateArn: "STRING_VALUE", // required
 * //     serviceArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     actions: [ // TestActionList
 * //       { // TestAction
 * //         actionId: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         resourceType: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     loggingConfiguration: { // LoggingConfiguration
 * //       s3BucketName: "STRING_VALUE",
 * //       cloudWatchLogGroupArn: "STRING_VALUE",
 * //       logSchemaVersion: "STRING_VALUE",
 * //     },
 * //     stopConditions: [ // StopConditionList
 * //       { // StopCondition
 * //         source: "aws:cloudwatch:alarm" || "none", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     roleName: "STRING_VALUE",
 * //     parameters: { // TestParameters
 * //       "<keys>": [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     totalTestRuns: Number("int"), // required
 * //     successfulTestRuns: Number("int"), // required
 * //     creationTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateTestCommandInput - {@link UpdateTestCommandInput}
 * @returns {@link UpdateTestCommandOutput}
 * @see {@link UpdateTestCommandInput} for command's `input` shape.
 * @see {@link UpdateTestCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Conflict — resource already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class UpdateTestCommand extends command<UpdateTestCommandInput, UpdateTestCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTest",
  UpdateTest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTestRequest;
      output: UpdateTestResponse;
    };
    sdk: {
      input: UpdateTestCommandInput;
      output: UpdateTestCommandOutput;
    };
  };
}
