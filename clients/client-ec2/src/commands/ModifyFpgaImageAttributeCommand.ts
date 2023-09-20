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
import { ModifyFpgaImageAttributeRequest, ModifyFpgaImageAttributeResult } from "../models/models_6";
import { de_ModifyFpgaImageAttributeCommand, se_ModifyFpgaImageAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyFpgaImageAttributeCommand}.
 */
export interface ModifyFpgaImageAttributeCommandInput extends ModifyFpgaImageAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ModifyFpgaImageAttributeCommand}.
 */
export interface ModifyFpgaImageAttributeCommandOutput extends ModifyFpgaImageAttributeResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the specified attribute of the specified Amazon FPGA Image (AFI).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyFpgaImageAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyFpgaImageAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyFpgaImageAttributeRequest
 *   DryRun: true || false,
 *   FpgaImageId: "STRING_VALUE", // required
 *   Attribute: "description" || "name" || "loadPermission" || "productCodes",
 *   OperationType: "add" || "remove",
 *   UserIds: [ // UserIdStringList
 *     "STRING_VALUE",
 *   ],
 *   UserGroups: [ // UserGroupStringList
 *     "STRING_VALUE",
 *   ],
 *   ProductCodes: [ // ProductCodeStringList
 *     "STRING_VALUE",
 *   ],
 *   LoadPermission: { // LoadPermissionModifications
 *     Add: [ // LoadPermissionListRequest
 *       { // LoadPermissionRequest
 *         Group: "all",
 *         UserId: "STRING_VALUE",
 *       },
 *     ],
 *     Remove: [
 *       {
 *         Group: "all",
 *         UserId: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 * };
 * const command = new ModifyFpgaImageAttributeCommand(input);
 * const response = await client.send(command);
 * // { // ModifyFpgaImageAttributeResult
 * //   FpgaImageAttribute: { // FpgaImageAttribute
 * //     FpgaImageId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     LoadPermissions: [ // LoadPermissionList
 * //       { // LoadPermission
 * //         UserId: "STRING_VALUE",
 * //         Group: "all",
 * //       },
 * //     ],
 * //     ProductCodes: [ // ProductCodeList
 * //       { // ProductCode
 * //         ProductCodeId: "STRING_VALUE",
 * //         ProductCodeType: "devpay" || "marketplace",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyFpgaImageAttributeCommandInput - {@link ModifyFpgaImageAttributeCommandInput}
 * @returns {@link ModifyFpgaImageAttributeCommandOutput}
 * @see {@link ModifyFpgaImageAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyFpgaImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyFpgaImageAttributeCommand extends $Command<
  ModifyFpgaImageAttributeCommandInput,
  ModifyFpgaImageAttributeCommandOutput,
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
  constructor(readonly input: ModifyFpgaImageAttributeCommandInput) {
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
  ): Handler<ModifyFpgaImageAttributeCommandInput, ModifyFpgaImageAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyFpgaImageAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyFpgaImageAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifyFpgaImageAttribute",
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
  private serialize(input: ModifyFpgaImageAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyFpgaImageAttributeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyFpgaImageAttributeCommandOutput> {
    return de_ModifyFpgaImageAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
