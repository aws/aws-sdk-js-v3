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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyAvailabilityZoneGroupRequest, ModifyAvailabilityZoneGroupResult } from "../models/models_6";
import { de_ModifyAvailabilityZoneGroupCommand, se_ModifyAvailabilityZoneGroupCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyAvailabilityZoneGroupCommand}.
 */
export interface ModifyAvailabilityZoneGroupCommandInput extends ModifyAvailabilityZoneGroupRequest {}
/**
 * @public
 *
 * The output of {@link ModifyAvailabilityZoneGroupCommand}.
 */
export interface ModifyAvailabilityZoneGroupCommandOutput extends ModifyAvailabilityZoneGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Changes the opt-in status of the Local Zone and Wavelength Zone group for your
 *       account.</p>
 *          <p>Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html">
 *   		DescribeAvailabilityZones</a> to view the value for <code>GroupName</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyAvailabilityZoneGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyAvailabilityZoneGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyAvailabilityZoneGroupRequest
 *   GroupName: "STRING_VALUE", // required
 *   OptInStatus: "opted-in" || "not-opted-in", // required
 *   DryRun: true || false,
 * };
 * const command = new ModifyAvailabilityZoneGroupCommand(input);
 * const response = await client.send(command);
 * // { // ModifyAvailabilityZoneGroupResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyAvailabilityZoneGroupCommandInput - {@link ModifyAvailabilityZoneGroupCommandInput}
 * @returns {@link ModifyAvailabilityZoneGroupCommandOutput}
 * @see {@link ModifyAvailabilityZoneGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyAvailabilityZoneGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyAvailabilityZoneGroupCommand extends $Command<
  ModifyAvailabilityZoneGroupCommandInput,
  ModifyAvailabilityZoneGroupCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: ModifyAvailabilityZoneGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyAvailabilityZoneGroupCommandInput, ModifyAvailabilityZoneGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyAvailabilityZoneGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyAvailabilityZoneGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifyAvailabilityZoneGroup",
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
  private serialize(input: ModifyAvailabilityZoneGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyAvailabilityZoneGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyAvailabilityZoneGroupCommandOutput> {
    return de_ModifyAvailabilityZoneGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
