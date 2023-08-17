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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateNetworkProfileRequest, CreateNetworkProfileResult } from "../models/models_0";
import { de_CreateNetworkProfileCommand, se_CreateNetworkProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateNetworkProfileCommand}.
 */
export interface CreateNetworkProfileCommandInput extends CreateNetworkProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkProfileCommand}.
 */
export interface CreateNetworkProfileCommandOutput extends CreateNetworkProfileResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a network profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateNetworkProfileCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateNetworkProfileCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // CreateNetworkProfileRequest
 *   projectArn: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   type: "CURATED" || "PRIVATE",
 *   uplinkBandwidthBits: Number("long"),
 *   downlinkBandwidthBits: Number("long"),
 *   uplinkDelayMs: Number("long"),
 *   downlinkDelayMs: Number("long"),
 *   uplinkJitterMs: Number("long"),
 *   downlinkJitterMs: Number("long"),
 *   uplinkLossPercent: Number("int"),
 *   downlinkLossPercent: Number("int"),
 * };
 * const command = new CreateNetworkProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateNetworkProfileResult
 * //   networkProfile: { // NetworkProfile
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     type: "CURATED" || "PRIVATE",
 * //     uplinkBandwidthBits: Number("long"),
 * //     downlinkBandwidthBits: Number("long"),
 * //     uplinkDelayMs: Number("long"),
 * //     downlinkDelayMs: Number("long"),
 * //     uplinkJitterMs: Number("long"),
 * //     downlinkJitterMs: Number("long"),
 * //     uplinkLossPercent: Number("int"),
 * //     downlinkLossPercent: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateNetworkProfileCommandInput - {@link CreateNetworkProfileCommandInput}
 * @returns {@link CreateNetworkProfileCommandOutput}
 * @see {@link CreateNetworkProfileCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkProfileCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 */
export class CreateNetworkProfileCommand extends $Command<
  CreateNetworkProfileCommandInput,
  CreateNetworkProfileCommandOutput,
  DeviceFarmClientResolvedConfig
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
  constructor(readonly input: CreateNetworkProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateNetworkProfileCommandInput, CreateNetworkProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNetworkProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "CreateNetworkProfileCommand";
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
  private serialize(input: CreateNetworkProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateNetworkProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNetworkProfileCommandOutput> {
    return de_CreateNetworkProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
