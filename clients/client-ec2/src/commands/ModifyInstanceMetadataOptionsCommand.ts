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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyInstanceMetadataOptionsRequest, ModifyInstanceMetadataOptionsResult } from "../models/models_6";
import {
  deserializeAws_ec2ModifyInstanceMetadataOptionsCommand,
  serializeAws_ec2ModifyInstanceMetadataOptionsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link ModifyInstanceMetadataOptionsCommand}.
 */
export interface ModifyInstanceMetadataOptionsCommandInput extends ModifyInstanceMetadataOptionsRequest {}
/**
 * @public
 *
 * The output of {@link ModifyInstanceMetadataOptionsCommand}.
 */
export interface ModifyInstanceMetadataOptionsCommandOutput
  extends ModifyInstanceMetadataOptionsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Modify the instance metadata parameters on a running or stopped instance. When you
 *             modify the parameters on a stopped instance, they are applied when the instance is
 *             started. When you modify the parameters on a running instance, the API responds with a
 *             state of “pending”. After the parameter modifications are successfully applied to the
 *             instance, the state of the modifications changes from “pending” to “applied” in
 *             subsequent describe-instances API calls. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceMetadataOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceMetadataOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyInstanceMetadataOptionsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   HttpTokens: "optional" || "required",
 *   HttpPutResponseHopLimit: Number("int"),
 *   HttpEndpoint: "disabled" || "enabled",
 *   DryRun: true || false,
 *   HttpProtocolIpv6: "disabled" || "enabled",
 *   InstanceMetadataTags: "disabled" || "enabled",
 * };
 * const command = new ModifyInstanceMetadataOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ModifyInstanceMetadataOptionsCommandInput - {@link ModifyInstanceMetadataOptionsCommandInput}
 * @returns {@link ModifyInstanceMetadataOptionsCommandOutput}
 * @see {@link ModifyInstanceMetadataOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceMetadataOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class ModifyInstanceMetadataOptionsCommand extends $Command<
  ModifyInstanceMetadataOptionsCommandInput,
  ModifyInstanceMetadataOptionsCommandOutput,
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
  constructor(readonly input: ModifyInstanceMetadataOptionsCommandInput) {
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
  ): Handler<ModifyInstanceMetadataOptionsCommandInput, ModifyInstanceMetadataOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyInstanceMetadataOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyInstanceMetadataOptionsCommand";
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
  private serialize(input: ModifyInstanceMetadataOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyInstanceMetadataOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyInstanceMetadataOptionsCommandOutput> {
    return deserializeAws_ec2ModifyInstanceMetadataOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
