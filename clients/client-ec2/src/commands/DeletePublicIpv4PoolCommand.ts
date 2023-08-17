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
import { DeletePublicIpv4PoolRequest, DeletePublicIpv4PoolResult } from "../models/models_2";
import { de_DeletePublicIpv4PoolCommand, se_DeletePublicIpv4PoolCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeletePublicIpv4PoolCommand}.
 */
export interface DeletePublicIpv4PoolCommandInput extends DeletePublicIpv4PoolRequest {}
/**
 * @public
 *
 * The output of {@link DeletePublicIpv4PoolCommand}.
 */
export interface DeletePublicIpv4PoolCommandOutput extends DeletePublicIpv4PoolResult, __MetadataBearer {}

/**
 * @public
 * <p>Delete a public IPv4 pool. A public IPv4 pool is an EC2 IP address pool required for the public IPv4 CIDRs that you own and bring to Amazon Web Services to manage with IPAM. IPv6 addresses you bring to Amazon Web Services, however, use IPAM pools only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeletePublicIpv4PoolCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeletePublicIpv4PoolCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeletePublicIpv4PoolRequest
 *   DryRun: true || false,
 *   PoolId: "STRING_VALUE", // required
 * };
 * const command = new DeletePublicIpv4PoolCommand(input);
 * const response = await client.send(command);
 * // { // DeletePublicIpv4PoolResult
 * //   ReturnValue: true || false,
 * // };
 *
 * ```
 *
 * @param DeletePublicIpv4PoolCommandInput - {@link DeletePublicIpv4PoolCommandInput}
 * @returns {@link DeletePublicIpv4PoolCommandOutput}
 * @see {@link DeletePublicIpv4PoolCommandInput} for command's `input` shape.
 * @see {@link DeletePublicIpv4PoolCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeletePublicIpv4PoolCommand extends $Command<
  DeletePublicIpv4PoolCommandInput,
  DeletePublicIpv4PoolCommandOutput,
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
  constructor(readonly input: DeletePublicIpv4PoolCommandInput) {
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
  ): Handler<DeletePublicIpv4PoolCommandInput, DeletePublicIpv4PoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeletePublicIpv4PoolCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeletePublicIpv4PoolCommand";
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
  private serialize(input: DeletePublicIpv4PoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeletePublicIpv4PoolCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePublicIpv4PoolCommandOutput> {
    return de_DeletePublicIpv4PoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
