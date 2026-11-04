// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSolutionVersionRequest, CreateSolutionVersionResponse } from "../models/models_0";
import { CreateSolutionVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSolutionVersionCommand}.
 */
export interface CreateSolutionVersionCommandInput extends CreateSolutionVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateSolutionVersionCommand}.
 */
export interface CreateSolutionVersionCommandOutput extends CreateSolutionVersionResponse, __MetadataBearer {}

/**
 * Trains or retrains an active solution in a Custom dataset group. A solution is created using the [CreateSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html) operation and must be in the ACTIVE state before calling `CreateSolutionVersion`. A new version of the solution is created every time you call this operation.
 *
 * **Status**
 *
 * A solution version can be in one of the following states:
 *
 * - CREATE PENDING
 * - CREATE IN_PROGRESS
 * - ACTIVE
 * - CREATE FAILED
 * - CREATE STOPPING
 * - CREATE STOPPED
 *
 * To get the status of the version, call [DescribeSolutionVersion](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html). Wait until the status shows as ACTIVE before calling `CreateCampaign`.
 *
 * If the status shows as CREATE FAILED, the response includes a `failureReason` key, which describes why the job failed.
 *
 * **Related APIs**
 *
 * - [ListSolutionVersions](https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html)
 * - [DescribeSolutionVersion](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html)
 * - [ListSolutions](https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html)
 * - [CreateSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html)
 * - [DescribeSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html)
 * - [DeleteSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateSolutionVersionCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateSolutionVersionCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // CreateSolutionVersionRequest
 *   name: "STRING_VALUE",
 *   solutionArn: "STRING_VALUE", // required
 *   trainingMode: "FULL" || "UPDATE" || "AUTOTRAIN",
 *   tags: [ // Tags
 *     { // Tag
 *       tagKey: "STRING_VALUE", // required
 *       tagValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateSolutionVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateSolutionVersionResponse
 * //   solutionVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSolutionVersionCommandInput - {@link CreateSolutionVersionCommandInput}
 * @returns {@link CreateSolutionVersionCommandOutput}
 * @see {@link CreateSolutionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateSolutionVersionCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Provide a valid value for the field or parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The limit on the number of requests per second has been exceeded.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The specified resource already exists.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Could not find the specified resource.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * You have exceeded the maximum number of tags you can apply to this resource.
 *
 * @throws {@link PersonalizeServiceException}
 *
 * Base exception class for all service exceptions from Personalize service.
 *
 * @public
 */
export class CreateSolutionVersionCommand extends command<CreateSolutionVersionCommandInput, CreateSolutionVersionCommandOutput>(
  _ep0,
  _mw0,
  "CreateSolutionVersion",
  CreateSolutionVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSolutionVersionRequest;
      output: CreateSolutionVersionResponse;
    };
    sdk: {
      input: CreateSolutionVersionCommandInput;
      output: CreateSolutionVersionCommandOutput;
    };
  };
}
