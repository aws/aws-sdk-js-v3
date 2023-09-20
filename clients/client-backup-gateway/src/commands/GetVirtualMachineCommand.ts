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

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { GetVirtualMachineInput, GetVirtualMachineOutput } from "../models/models_0";
import { de_GetVirtualMachineCommand, se_GetVirtualMachineCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetVirtualMachineCommand}.
 */
export interface GetVirtualMachineCommandInput extends GetVirtualMachineInput {}
/**
 * @public
 *
 * The output of {@link GetVirtualMachineCommand}.
 */
export interface GetVirtualMachineCommandOutput extends GetVirtualMachineOutput, __MetadataBearer {}

/**
 * @public
 * <p>By providing the ARN (Amazon Resource Name), this API returns the virtual machine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, GetVirtualMachineCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, GetVirtualMachineCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const input = { // GetVirtualMachineInput
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetVirtualMachineCommand(input);
 * const response = await client.send(command);
 * // { // GetVirtualMachineOutput
 * //   VirtualMachine: { // VirtualMachineDetails
 * //     HostName: "STRING_VALUE",
 * //     HypervisorId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Path: "STRING_VALUE",
 * //     ResourceArn: "STRING_VALUE",
 * //     LastBackupDate: new Date("TIMESTAMP"),
 * //     VmwareTags: [ // VmwareTags
 * //       { // VmwareTag
 * //         VmwareCategory: "STRING_VALUE",
 * //         VmwareTagName: "STRING_VALUE",
 * //         VmwareTagDescription: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVirtualMachineCommandInput - {@link GetVirtualMachineCommandInput}
 * @returns {@link GetVirtualMachineCommandOutput}
 * @see {@link GetVirtualMachineCommandInput} for command's `input` shape.
 * @see {@link GetVirtualMachineCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action wasn't found.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation did not succeed because an internal error occurred. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>TPS has been limited to protect against intentional or unintentional
 *     high request volumes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation did not succeed because a validation error occurred.</p>
 *
 * @throws {@link BackupGatewayServiceException}
 * <p>Base exception class for all service exceptions from BackupGateway service.</p>
 *
 */
export class GetVirtualMachineCommand extends $Command<
  GetVirtualMachineCommandInput,
  GetVirtualMachineCommandOutput,
  BackupGatewayClientResolvedConfig
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
  constructor(readonly input: GetVirtualMachineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetVirtualMachineCommandInput, GetVirtualMachineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetVirtualMachineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "GetVirtualMachineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "BackupOnPremises_v20210101",
        operation: "GetVirtualMachine",
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
  private serialize(input: GetVirtualMachineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetVirtualMachineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetVirtualMachineCommandOutput> {
    return de_GetVirtualMachineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
