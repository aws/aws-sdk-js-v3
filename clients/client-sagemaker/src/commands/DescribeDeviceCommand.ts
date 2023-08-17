// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { DescribeDeviceRequest, DescribeDeviceResponse } from "../models/models_2";
import { de_DescribeDeviceCommand, se_DescribeDeviceCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDeviceCommand}.
 */
export interface DescribeDeviceCommandInput extends DescribeDeviceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDeviceCommand}.
 */
export interface DescribeDeviceCommandOutput extends DescribeDeviceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeDeviceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeDeviceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeDeviceRequest
 *   NextToken: "STRING_VALUE",
 *   DeviceName: "STRING_VALUE", // required
 *   DeviceFleetName: "STRING_VALUE", // required
 * };
 * const command = new DescribeDeviceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeviceResponse
 * //   DeviceArn: "STRING_VALUE",
 * //   DeviceName: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   DeviceFleetName: "STRING_VALUE", // required
 * //   IotThingName: "STRING_VALUE",
 * //   RegistrationTime: new Date("TIMESTAMP"), // required
 * //   LatestHeartbeat: new Date("TIMESTAMP"),
 * //   Models: [ // EdgeModels
 * //     { // EdgeModel
 * //       ModelName: "STRING_VALUE", // required
 * //       ModelVersion: "STRING_VALUE", // required
 * //       LatestSampleTime: new Date("TIMESTAMP"),
 * //       LatestInference: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   MaxModels: Number("int"),
 * //   NextToken: "STRING_VALUE",
 * //   AgentVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDeviceCommandInput - {@link DescribeDeviceCommandInput}
 * @returns {@link DescribeDeviceCommandOutput}
 * @see {@link DescribeDeviceCommandInput} for command's `input` shape.
 * @see {@link DescribeDeviceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeDeviceCommand extends $Command<
  DescribeDeviceCommandInput,
  DescribeDeviceCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDeviceCommandInput, DescribeDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDeviceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDeviceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDeviceCommandOutput> {
    return de_DescribeDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
