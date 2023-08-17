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

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { ListVirtualMachinesInput, ListVirtualMachinesOutput } from "../models/models_0";
import { de_ListVirtualMachinesCommand, se_ListVirtualMachinesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListVirtualMachinesCommand}.
 */
export interface ListVirtualMachinesCommandInput extends ListVirtualMachinesInput {}
/**
 * @public
 *
 * The output of {@link ListVirtualMachinesCommand}.
 */
export interface ListVirtualMachinesCommandOutput extends ListVirtualMachinesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists your virtual machines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, ListVirtualMachinesCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, ListVirtualMachinesCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const input = { // ListVirtualMachinesInput
 *   HypervisorArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListVirtualMachinesCommand(input);
 * const response = await client.send(command);
 * // { // ListVirtualMachinesOutput
 * //   VirtualMachines: [ // VirtualMachines
 * //     { // VirtualMachine
 * //       HostName: "STRING_VALUE",
 * //       HypervisorId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Path: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       LastBackupDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVirtualMachinesCommandInput - {@link ListVirtualMachinesCommandInput}
 * @returns {@link ListVirtualMachinesCommandOutput}
 * @see {@link ListVirtualMachinesCommandInput} for command's `input` shape.
 * @see {@link ListVirtualMachinesCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
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
export class ListVirtualMachinesCommand extends $Command<
  ListVirtualMachinesCommandInput,
  ListVirtualMachinesCommandOutput,
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
  constructor(readonly input: ListVirtualMachinesCommandInput) {
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
  ): Handler<ListVirtualMachinesCommandInput, ListVirtualMachinesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVirtualMachinesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "ListVirtualMachinesCommand";
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
  private serialize(input: ListVirtualMachinesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListVirtualMachinesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVirtualMachinesCommandOutput> {
    return de_ListVirtualMachinesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
