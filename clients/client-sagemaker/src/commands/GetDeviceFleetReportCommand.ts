// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GetDeviceFleetReportRequest, GetDeviceFleetReportResponse } from "../models/models_2";
import {
  deserializeAws_json1_1GetDeviceFleetReportCommand,
  serializeAws_json1_1GetDeviceFleetReportCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 *
 * The input for {@link GetDeviceFleetReportCommand}.
 */
export interface GetDeviceFleetReportCommandInput extends GetDeviceFleetReportRequest {}
/**
 * @public
 *
 * The output of {@link GetDeviceFleetReportCommand}.
 */
export interface GetDeviceFleetReportCommandOutput extends GetDeviceFleetReportResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, GetDeviceFleetReportCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, GetDeviceFleetReportCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // GetDeviceFleetReportRequest
 *   DeviceFleetName: "STRING_VALUE", // required
 * };
 * const command = new GetDeviceFleetReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetDeviceFleetReportCommandInput - {@link GetDeviceFleetReportCommandInput}
 * @returns {@link GetDeviceFleetReportCommandOutput}
 * @see {@link GetDeviceFleetReportCommandInput} for command's `input` shape.
 * @see {@link GetDeviceFleetReportCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 *
 */
export class GetDeviceFleetReportCommand extends $Command<
  GetDeviceFleetReportCommandInput,
  GetDeviceFleetReportCommandOutput,
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
  constructor(readonly input: GetDeviceFleetReportCommandInput) {
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
  ): Handler<GetDeviceFleetReportCommandInput, GetDeviceFleetReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDeviceFleetReportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "GetDeviceFleetReportCommand";
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
  private serialize(input: GetDeviceFleetReportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDeviceFleetReportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeviceFleetReportCommandOutput> {
    return deserializeAws_json1_1GetDeviceFleetReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
