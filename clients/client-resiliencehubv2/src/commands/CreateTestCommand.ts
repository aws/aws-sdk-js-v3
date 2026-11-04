// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTestRequest, CreateTestResponse } from "../models/models_0";
import { CreateTest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTestCommand}.
 */
export interface CreateTestCommandInput extends CreateTestRequest {}
/**
 * @public
 *
 * The output of {@link CreateTestCommand}.
 */
export interface CreateTestCommandOutput extends CreateTestResponse, __MetadataBearer {}

/**
 * Creates a test for a service by configuring a test template. Each service has one test per template.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, CreateTestCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, CreateTestCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // CreateTestRequest
 *   serviceArn: "STRING_VALUE", // required
 *   testTemplateArn: "STRING_VALUE", // required
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
 * const command = new CreateTestCommand(input);
 * const response = await client.send(command);
 * // { // CreateTestResponse
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
 * @param CreateTestCommandInput - {@link CreateTestCommandInput}
 * @returns {@link CreateTestCommandOutput}
 * @see {@link CreateTestCommandInput} for command's `input` shape.
 * @see {@link CreateTestCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied — caller lacks required permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Conflict — resource already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal service error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validation error — invalid input parameters.
 *
 * @throws {@link Resiliencehubv2ServiceException}
 *
 * Base exception class for all service exceptions from Resiliencehubv2 service.
 *
 * @public
 */
export class CreateTestCommand extends command<CreateTestCommandInput, CreateTestCommandOutput>(
  _ep0,
  _mw0,
  "CreateTest",
  CreateTest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTestRequest;
      output: CreateTestResponse;
    };
    sdk: {
      input: CreateTestCommandInput;
      output: CreateTestCommandOutput;
    };
  };
}
