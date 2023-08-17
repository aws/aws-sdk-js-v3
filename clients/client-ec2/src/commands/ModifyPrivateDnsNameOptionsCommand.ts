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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyPrivateDnsNameOptionsRequest, ModifyPrivateDnsNameOptionsResult } from "../models/models_6";
import { de_ModifyPrivateDnsNameOptionsCommand, se_ModifyPrivateDnsNameOptionsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyPrivateDnsNameOptionsCommand}.
 */
export interface ModifyPrivateDnsNameOptionsCommandInput extends ModifyPrivateDnsNameOptionsRequest {}
/**
 * @public
 *
 * The output of {@link ModifyPrivateDnsNameOptionsCommand}.
 */
export interface ModifyPrivateDnsNameOptionsCommandOutput extends ModifyPrivateDnsNameOptionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the options for instance hostnames for the specified instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyPrivateDnsNameOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyPrivateDnsNameOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyPrivateDnsNameOptionsRequest
 *   DryRun: true || false,
 *   InstanceId: "STRING_VALUE", // required
 *   PrivateDnsHostnameType: "ip-name" || "resource-name",
 *   EnableResourceNameDnsARecord: true || false,
 *   EnableResourceNameDnsAAAARecord: true || false,
 * };
 * const command = new ModifyPrivateDnsNameOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ModifyPrivateDnsNameOptionsResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyPrivateDnsNameOptionsCommandInput - {@link ModifyPrivateDnsNameOptionsCommandInput}
 * @returns {@link ModifyPrivateDnsNameOptionsCommandOutput}
 * @see {@link ModifyPrivateDnsNameOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyPrivateDnsNameOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyPrivateDnsNameOptionsCommand extends $Command<
  ModifyPrivateDnsNameOptionsCommandInput,
  ModifyPrivateDnsNameOptionsCommandOutput,
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
  constructor(readonly input: ModifyPrivateDnsNameOptionsCommandInput) {
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
  ): Handler<ModifyPrivateDnsNameOptionsCommandInput, ModifyPrivateDnsNameOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyPrivateDnsNameOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyPrivateDnsNameOptionsCommand";
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
  private serialize(input: ModifyPrivateDnsNameOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyPrivateDnsNameOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyPrivateDnsNameOptionsCommandOutput> {
    return de_ModifyPrivateDnsNameOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
