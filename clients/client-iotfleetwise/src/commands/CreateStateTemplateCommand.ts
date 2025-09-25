// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { CreateStateTemplateRequest, CreateStateTemplateResponse } from "../models/models_0";
import { CreateStateTemplate } from "../schemas/schemas_5_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStateTemplateCommand}.
 */
export interface CreateStateTemplateCommandInput extends CreateStateTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateStateTemplateCommand}.
 */
export interface CreateStateTemplateCommandOutput extends CreateStateTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates a state template. State templates contain state properties, which are signals that belong to a signal catalog that is synchronized between the Amazon Web Services IoT FleetWise Edge and the Amazon Web Services Cloud.</p>
 *          <important>
 *             <p>Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html">Amazon Web Services Region and feature availability</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, CreateStateTemplateCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, CreateStateTemplateCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // CreateStateTemplateRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   signalCatalogArn: "STRING_VALUE", // required
 *   stateTemplateProperties: [ // StateTemplateProperties // required
 *     "STRING_VALUE",
 *   ],
 *   dataExtraDimensions: [ // StateTemplateDataExtraDimensionNodePathList
 *     "STRING_VALUE",
 *   ],
 *   metadataExtraDimensions: [ // StateTemplateMetadataExtraDimensionNodePathList
 *     "STRING_VALUE",
 *   ],
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateStateTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateStateTemplateResponse
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateStateTemplateCommandInput - {@link CreateStateTemplateCommandInput}
 * @returns {@link CreateStateTemplateCommandOutput}
 * @see {@link CreateStateTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateStateTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link InvalidSignalsException} (client fault)
 *  <p>The request couldn't be completed because it contains signals that aren't
 *             valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service quota was exceeded. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 *
 * @public
 */
export class CreateStateTemplateCommand extends $Command
  .classBuilder<
    CreateStateTemplateCommandInput,
    CreateStateTemplateCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IoTAutobahnControlPlane", "CreateStateTemplate", {})
  .n("IoTFleetWiseClient", "CreateStateTemplateCommand")
  .sc(CreateStateTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStateTemplateRequest;
      output: CreateStateTemplateResponse;
    };
    sdk: {
      input: CreateStateTemplateCommandInput;
      output: CreateStateTemplateCommandOutput;
    };
  };
}
