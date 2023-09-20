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
import { ModifyIpamScopeRequest, ModifyIpamScopeResult } from "../models/models_6";
import { de_ModifyIpamScopeCommand, se_ModifyIpamScopeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyIpamScopeCommand}.
 */
export interface ModifyIpamScopeCommandInput extends ModifyIpamScopeRequest {}
/**
 * @public
 *
 * The output of {@link ModifyIpamScopeCommand}.
 */
export interface ModifyIpamScopeCommandOutput extends ModifyIpamScopeResult, __MetadataBearer {}

/**
 * @public
 * <p>Modify an IPAM scope.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyIpamScopeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyIpamScopeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyIpamScopeRequest
 *   DryRun: true || false,
 *   IpamScopeId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 * };
 * const command = new ModifyIpamScopeCommand(input);
 * const response = await client.send(command);
 * // { // ModifyIpamScopeResult
 * //   IpamScope: { // IpamScope
 * //     OwnerId: "STRING_VALUE",
 * //     IpamScopeId: "STRING_VALUE",
 * //     IpamScopeArn: "STRING_VALUE",
 * //     IpamArn: "STRING_VALUE",
 * //     IpamRegion: "STRING_VALUE",
 * //     IpamScopeType: "public" || "private",
 * //     IsDefault: true || false,
 * //     Description: "STRING_VALUE",
 * //     PoolCount: Number("int"),
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyIpamScopeCommandInput - {@link ModifyIpamScopeCommandInput}
 * @returns {@link ModifyIpamScopeCommandOutput}
 * @see {@link ModifyIpamScopeCommandInput} for command's `input` shape.
 * @see {@link ModifyIpamScopeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyIpamScopeCommand extends $Command<
  ModifyIpamScopeCommandInput,
  ModifyIpamScopeCommandOutput,
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
  constructor(readonly input: ModifyIpamScopeCommandInput) {
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
  ): Handler<ModifyIpamScopeCommandInput, ModifyIpamScopeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyIpamScopeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyIpamScopeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifyIpamScope",
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
  private serialize(input: ModifyIpamScopeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyIpamScopeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyIpamScopeCommandOutput> {
    return de_ModifyIpamScopeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
