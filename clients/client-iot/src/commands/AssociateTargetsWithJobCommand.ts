// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateTargetsWithJobRequest, AssociateTargetsWithJobResponse } from "../models/models_0";
import { AssociateTargetsWithJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateTargetsWithJobCommand}.
 */
export interface AssociateTargetsWithJobCommandInput extends AssociateTargetsWithJobRequest {}
/**
 * @public
 *
 * The output of {@link AssociateTargetsWithJobCommand}.
 */
export interface AssociateTargetsWithJobCommandOutput extends AssociateTargetsWithJobResponse, __MetadataBearer {}

/**
 * Associates a group with a continuous job. The following criteria must be met:
 *
 * - The job must have been created with the `targetSelection` field set to "CONTINUOUS".
 * - The job status must currently be "IN_PROGRESS".
 * - The total number of targets associated with a job must not exceed 100.
 *
 * Requires permission to access the [AssociateTargetsWithJob](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AssociateTargetsWithJobCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AssociateTargetsWithJobCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // AssociateTargetsWithJobRequest
 *   targets: [ // JobTargets // required
 *     "STRING_VALUE",
 *   ],
 *   jobId: "STRING_VALUE", // required
 *   comment: "STRING_VALUE",
 *   namespaceId: "STRING_VALUE",
 * };
 * const command = new AssociateTargetsWithJobCommand(input);
 * const response = await client.send(command);
 * // { // AssociateTargetsWithJobResponse
 * //   jobArn: "STRING_VALUE",
 * //   jobId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateTargetsWithJobCommandInput - {@link AssociateTargetsWithJobCommandInput}
 * @returns {@link AssociateTargetsWithJobCommandOutput}
 * @see {@link AssociateTargetsWithJobCommandInput} for command's `input` shape.
 * @see {@link AssociateTargetsWithJobCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit has been exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class AssociateTargetsWithJobCommand extends command<AssociateTargetsWithJobCommandInput, AssociateTargetsWithJobCommandOutput>(
  _ep0,
  _mw0,
  "AssociateTargetsWithJob",
  AssociateTargetsWithJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateTargetsWithJobRequest;
      output: AssociateTargetsWithJobResponse;
    };
    sdk: {
      input: AssociateTargetsWithJobCommandInput;
      output: AssociateTargetsWithJobCommandOutput;
    };
  };
}
