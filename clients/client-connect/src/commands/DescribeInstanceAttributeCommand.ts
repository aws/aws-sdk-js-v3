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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DescribeInstanceAttributeRequest, DescribeInstanceAttributeResponse } from "../models/models_0";
import { de_DescribeInstanceAttributeCommand, se_DescribeInstanceAttributeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceAttributeCommand}.
 */
export interface DescribeInstanceAttributeCommandInput extends DescribeInstanceAttributeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceAttributeCommand}.
 */
export interface DescribeInstanceAttributeCommandOutput extends DescribeInstanceAttributeResponse, __MetadataBearer {}

/**
 * @public
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Describes the specified instance attribute.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeInstanceAttributeCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeInstanceAttributeCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DescribeInstanceAttributeRequest
 *   InstanceId: "STRING_VALUE", // required
 *   AttributeType: "INBOUND_CALLS" || "OUTBOUND_CALLS" || "CONTACTFLOW_LOGS" || "CONTACT_LENS" || "AUTO_RESOLVE_BEST_VOICES" || "USE_CUSTOM_TTS_VOICES" || "EARLY_MEDIA" || "MULTI_PARTY_CONFERENCE" || "HIGH_VOLUME_OUTBOUND" || "ENHANCED_CONTACT_MONITORING", // required
 * };
 * const command = new DescribeInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceAttributeResponse
 * //   Attribute: { // Attribute
 * //     AttributeType: "INBOUND_CALLS" || "OUTBOUND_CALLS" || "CONTACTFLOW_LOGS" || "CONTACT_LENS" || "AUTO_RESOLVE_BEST_VOICES" || "USE_CUSTOM_TTS_VOICES" || "EARLY_MEDIA" || "MULTI_PARTY_CONFERENCE" || "HIGH_VOLUME_OUTBOUND" || "ENHANCED_CONTACT_MONITORING",
 * //     Value: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeInstanceAttributeCommandInput - {@link DescribeInstanceAttributeCommandInput}
 * @returns {@link DescribeInstanceAttributeCommandOutput}
 * @see {@link DescribeInstanceAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceAttributeCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class DescribeInstanceAttributeCommand extends $Command<
  DescribeInstanceAttributeCommandInput,
  DescribeInstanceAttributeCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: DescribeInstanceAttributeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInstanceAttributeCommandInput, DescribeInstanceAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInstanceAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DescribeInstanceAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "DescribeInstanceAttribute",
      },
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
  private serialize(input: DescribeInstanceAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeInstanceAttributeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceAttributeCommandOutput> {
    return de_DescribeInstanceAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
