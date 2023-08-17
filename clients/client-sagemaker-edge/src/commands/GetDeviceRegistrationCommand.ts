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

import { GetDeviceRegistrationRequest, GetDeviceRegistrationResult } from "../models/models_0";
import { de_GetDeviceRegistrationCommand, se_GetDeviceRegistrationCommand } from "../protocols/Aws_restJson1";
import { SagemakerEdgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SagemakerEdgeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDeviceRegistrationCommand}.
 */
export interface GetDeviceRegistrationCommandInput extends GetDeviceRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link GetDeviceRegistrationCommand}.
 */
export interface GetDeviceRegistrationCommandOutput extends GetDeviceRegistrationResult, __MetadataBearer {}

/**
 * @public
 * <p>Use to check if a device is registered with SageMaker Edge Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SagemakerEdgeClient, GetDeviceRegistrationCommand } from "@aws-sdk/client-sagemaker-edge"; // ES Modules import
 * // const { SagemakerEdgeClient, GetDeviceRegistrationCommand } = require("@aws-sdk/client-sagemaker-edge"); // CommonJS import
 * const client = new SagemakerEdgeClient(config);
 * const input = { // GetDeviceRegistrationRequest
 *   DeviceName: "STRING_VALUE", // required
 *   DeviceFleetName: "STRING_VALUE", // required
 * };
 * const command = new GetDeviceRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // GetDeviceRegistrationResult
 * //   DeviceRegistration: "STRING_VALUE",
 * //   CacheTTL: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDeviceRegistrationCommandInput - {@link GetDeviceRegistrationCommandInput}
 * @returns {@link GetDeviceRegistrationCommandOutput}
 * @see {@link GetDeviceRegistrationCommandInput} for command's `input` shape.
 * @see {@link GetDeviceRegistrationCommandOutput} for command's `response` shape.
 * @see {@link SagemakerEdgeClientResolvedConfig | config} for SagemakerEdgeClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (client fault)
 *  <p>An internal failure occurred. Try your request again. If the problem
 *       persists, contact Amazon Web Services customer support.</p>
 *
 * @throws {@link SagemakerEdgeServiceException}
 * <p>Base exception class for all service exceptions from SagemakerEdge service.</p>
 *
 */
export class GetDeviceRegistrationCommand extends $Command<
  GetDeviceRegistrationCommandInput,
  GetDeviceRegistrationCommandOutput,
  SagemakerEdgeClientResolvedConfig
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
  constructor(readonly input: GetDeviceRegistrationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SagemakerEdgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDeviceRegistrationCommandInput, GetDeviceRegistrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDeviceRegistrationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SagemakerEdgeClient";
    const commandName = "GetDeviceRegistrationCommand";
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
  private serialize(input: GetDeviceRegistrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDeviceRegistrationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeviceRegistrationCommandOutput> {
    return de_GetDeviceRegistrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
