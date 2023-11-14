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
import { DisassociateTrunkInterfaceRequest, DisassociateTrunkInterfaceResult } from "../models/models_5";
import { de_DisassociateTrunkInterfaceCommand, se_DisassociateTrunkInterfaceCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateTrunkInterfaceCommand}.
 */
export interface DisassociateTrunkInterfaceCommandInput extends DisassociateTrunkInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateTrunkInterfaceCommand}.
 */
export interface DisassociateTrunkInterfaceCommandOutput extends DisassociateTrunkInterfaceResult, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This API action is currently in <b>limited preview only</b>.
 *                 If you are interested in using this feature, contact your account manager.</p>
 *          </note>
 *          <p>Removes an association between a branch network interface with a trunk network interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateTrunkInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateTrunkInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisassociateTrunkInterfaceRequest
 *   AssociationId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DisassociateTrunkInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateTrunkInterfaceResult
 * //   Return: true || false,
 * //   ClientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateTrunkInterfaceCommandInput - {@link DisassociateTrunkInterfaceCommandInput}
 * @returns {@link DisassociateTrunkInterfaceCommandOutput}
 * @see {@link DisassociateTrunkInterfaceCommandInput} for command's `input` shape.
 * @see {@link DisassociateTrunkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DisassociateTrunkInterfaceCommand extends $Command<
  DisassociateTrunkInterfaceCommandInput,
  DisassociateTrunkInterfaceCommandOutput,
  EC2ClientResolvedConfig
> {
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
  constructor(readonly input: DisassociateTrunkInterfaceCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateTrunkInterfaceCommandInput, DisassociateTrunkInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateTrunkInterfaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateTrunkInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DisassociateTrunkInterface",
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
  private serialize(input: DisassociateTrunkInterfaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisassociateTrunkInterfaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateTrunkInterfaceCommandOutput> {
    return de_DisassociateTrunkInterfaceCommand(output, context);
  }
}
