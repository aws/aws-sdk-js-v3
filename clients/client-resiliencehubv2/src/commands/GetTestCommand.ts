// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTestRequest, GetTestResponse } from "../models/models_0";
import { GetTest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTestCommand}.
 */
export interface GetTestCommandInput extends GetTestRequest {}
/**
 * @public
 *
 * The output of {@link GetTestCommand}.
 */
export interface GetTestCommandOutput extends GetTestResponse, __MetadataBearer {}

/**
 * <p>Retrieves a test by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, GetTestCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, GetTestCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // GetTestRequest
 *   testId: "STRING_VALUE", // required
 *   serviceArn: "STRING_VALUE", // required
 * };
 * const command = new GetTestCommand(input);
 * const response = await client.send(command);
 * // { // GetTestResponse
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
 * @param GetTestCommandInput - {@link GetTestCommandInput}
 * @returns {@link GetTestCommandOutput}
 * @see {@link GetTestCommandInput} for command's `input` shape.
 * @see {@link GetTestCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
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
export class GetTestCommand extends command<GetTestCommandInput, GetTestCommandOutput>(
  _ep0,
  _mw0,
  "GetTest",
  GetTest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTestRequest;
      output: GetTestResponse;
    };
    sdk: {
      input: GetTestCommandInput;
      output: GetTestCommandOutput;
    };
  };
}
