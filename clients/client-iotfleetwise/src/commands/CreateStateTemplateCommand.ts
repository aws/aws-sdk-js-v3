// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateStateTemplateRequest, CreateStateTemplateResponse } from "../models/models_0";
import { CreateStateTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a state template. State templates contain state properties, which are signals that belong to a signal catalog that is synchronized between the Amazon Web Services IoT FleetWise Edge and the Amazon Web Services Cloud.
 *
 * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
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
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request couldn't be completed because the server temporarily failed.
 *
 * @throws {@link InvalidSignalsException} (client fault)
 *
 * The request couldn't be completed because it contains signals that aren't valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A service quota was exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource wasn't found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request couldn't be completed due to throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IoTFleetWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTFleetWise service.
 *
 * @public
 */
export class CreateStateTemplateCommand extends command<CreateStateTemplateCommandInput, CreateStateTemplateCommandOutput>(
  _ep0,
  _mw0,
  "CreateStateTemplate",
  CreateStateTemplate$
) {
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
