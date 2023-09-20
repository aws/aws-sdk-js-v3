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
import { RestoreAddressToClassicRequest, RestoreAddressToClassicResult } from "../models/models_6";
import { de_RestoreAddressToClassicCommand, se_RestoreAddressToClassicCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RestoreAddressToClassicCommand}.
 */
export interface RestoreAddressToClassicCommandInput extends RestoreAddressToClassicRequest {}
/**
 * @public
 *
 * The output of {@link RestoreAddressToClassicCommand}.
 */
export interface RestoreAddressToClassicCommandOutput extends RestoreAddressToClassicResult, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This action is deprecated.</p>
 *          </note>
 *          <p>Restores an Elastic IP address that was previously moved to the EC2-VPC platform back to the EC2-Classic platform. You cannot move an Elastic IP address that was originally allocated for use in EC2-VPC. The Elastic IP address must not be associated with an instance or network interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RestoreAddressToClassicCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RestoreAddressToClassicCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RestoreAddressToClassicRequest
 *   DryRun: true || false,
 *   PublicIp: "STRING_VALUE", // required
 * };
 * const command = new RestoreAddressToClassicCommand(input);
 * const response = await client.send(command);
 * // { // RestoreAddressToClassicResult
 * //   PublicIp: "STRING_VALUE",
 * //   Status: "MoveInProgress" || "InVpc" || "InClassic",
 * // };
 *
 * ```
 *
 * @param RestoreAddressToClassicCommandInput - {@link RestoreAddressToClassicCommandInput}
 * @returns {@link RestoreAddressToClassicCommandOutput}
 * @see {@link RestoreAddressToClassicCommandInput} for command's `input` shape.
 * @see {@link RestoreAddressToClassicCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class RestoreAddressToClassicCommand extends $Command<
  RestoreAddressToClassicCommandInput,
  RestoreAddressToClassicCommandOutput,
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
  constructor(readonly input: RestoreAddressToClassicCommandInput) {
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
  ): Handler<RestoreAddressToClassicCommandInput, RestoreAddressToClassicCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreAddressToClassicCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RestoreAddressToClassicCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "RestoreAddressToClassic",
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
  private serialize(input: RestoreAddressToClassicCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RestoreAddressToClassicCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreAddressToClassicCommandOutput> {
    return de_RestoreAddressToClassicCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
