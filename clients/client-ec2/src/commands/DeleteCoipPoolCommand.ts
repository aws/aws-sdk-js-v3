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
import { DeleteCoipPoolRequest, DeleteCoipPoolResult } from "../models/models_2";
import { de_DeleteCoipPoolCommand, se_DeleteCoipPoolCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteCoipPoolCommand}.
 */
export interface DeleteCoipPoolCommandInput extends DeleteCoipPoolRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCoipPoolCommand}.
 */
export interface DeleteCoipPoolCommandOutput extends DeleteCoipPoolResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a pool of customer-owned IP (CoIP) addresses. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteCoipPoolCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteCoipPoolCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteCoipPoolRequest
 *   CoipPoolId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteCoipPoolCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCoipPoolResult
 * //   CoipPool: { // CoipPool
 * //     PoolId: "STRING_VALUE",
 * //     PoolCidrs: [ // ValueStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     LocalGatewayRouteTableId: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PoolArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteCoipPoolCommandInput - {@link DeleteCoipPoolCommandInput}
 * @returns {@link DeleteCoipPoolCommandOutput}
 * @see {@link DeleteCoipPoolCommandInput} for command's `input` shape.
 * @see {@link DeleteCoipPoolCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeleteCoipPoolCommand extends $Command<
  DeleteCoipPoolCommandInput,
  DeleteCoipPoolCommandOutput,
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
  constructor(readonly input: DeleteCoipPoolCommandInput) {
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
  ): Handler<DeleteCoipPoolCommandInput, DeleteCoipPoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCoipPoolCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteCoipPoolCommand";
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
  private serialize(input: DeleteCoipPoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteCoipPoolCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCoipPoolCommandOutput> {
    return de_DeleteCoipPoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
