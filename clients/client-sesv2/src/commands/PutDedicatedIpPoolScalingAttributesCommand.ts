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

import {
  PutDedicatedIpPoolScalingAttributesRequest,
  PutDedicatedIpPoolScalingAttributesResponse,
} from "../models/models_0";
import {
  de_PutDedicatedIpPoolScalingAttributesCommand,
  se_PutDedicatedIpPoolScalingAttributesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutDedicatedIpPoolScalingAttributesCommand}.
 */
export interface PutDedicatedIpPoolScalingAttributesCommandInput extends PutDedicatedIpPoolScalingAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutDedicatedIpPoolScalingAttributesCommand}.
 */
export interface PutDedicatedIpPoolScalingAttributesCommandOutput
  extends PutDedicatedIpPoolScalingAttributesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Used to convert a dedicated IP pool to a different scaling mode.</p>
 *          <note>
 *             <p>
 *                <code>MANAGED</code> pools cannot be converted to <code>STANDARD</code> scaling mode.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutDedicatedIpPoolScalingAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutDedicatedIpPoolScalingAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // PutDedicatedIpPoolScalingAttributesRequest
 *   PoolName: "STRING_VALUE", // required
 *   ScalingMode: "STANDARD" || "MANAGED", // required
 * };
 * const command = new PutDedicatedIpPoolScalingAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutDedicatedIpPoolScalingAttributesCommandInput - {@link PutDedicatedIpPoolScalingAttributesCommandInput}
 * @returns {@link PutDedicatedIpPoolScalingAttributesCommandOutput}
 * @see {@link PutDedicatedIpPoolScalingAttributesCommandInput} for command's `input` shape.
 * @see {@link PutDedicatedIpPoolScalingAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>The resource is being modified by another operation or thread.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 * @example Used to convert a dedicated IP pool to a different scaling mode.
 * ```javascript
 * // This example converts a dedicated IP pool from STANDARD to MANAGED.
 * const input = {
 *   "PoolName": "sample-ses-pool",
 *   "ScalingMode": "MANAGED"
 * };
 * const command = new PutDedicatedIpPoolScalingAttributesCommand(input);
 * await client.send(command);
 * // example id: put-dedicated-ip-pool-scaling-attributes-example-1683639172
 * ```
 *
 */
export class PutDedicatedIpPoolScalingAttributesCommand extends $Command<
  PutDedicatedIpPoolScalingAttributesCommandInput,
  PutDedicatedIpPoolScalingAttributesCommandOutput,
  SESv2ClientResolvedConfig
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
  constructor(readonly input: PutDedicatedIpPoolScalingAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutDedicatedIpPoolScalingAttributesCommandInput, PutDedicatedIpPoolScalingAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutDedicatedIpPoolScalingAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "PutDedicatedIpPoolScalingAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService_v2",
        operation: "PutDedicatedIpPoolScalingAttributes",
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
  private serialize(
    input: PutDedicatedIpPoolScalingAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutDedicatedIpPoolScalingAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutDedicatedIpPoolScalingAttributesCommandOutput> {
    return de_PutDedicatedIpPoolScalingAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
