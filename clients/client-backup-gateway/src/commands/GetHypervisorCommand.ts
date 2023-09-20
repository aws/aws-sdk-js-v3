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
import { GetHypervisorInput, GetHypervisorOutput } from "../models/models_0";
import { de_GetHypervisorCommand, se_GetHypervisorCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetHypervisorCommand}.
 */
export interface GetHypervisorCommandInput extends GetHypervisorInput {}
/**
 * @public
 *
 * The output of {@link GetHypervisorCommand}.
 */
export interface GetHypervisorCommandOutput extends GetHypervisorOutput, __MetadataBearer {}

/**
 * @public
 * <p>This action requests information about the specified hypervisor to which the gateway will connect.
 *       A hypervisor is hardware, software, or firmware that creates and manages virtual machines,
 *       and allocates resources to them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, GetHypervisorCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, GetHypervisorCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const input = { // GetHypervisorInput
 *   HypervisorArn: "STRING_VALUE", // required
 * };
 * const command = new GetHypervisorCommand(input);
 * const response = await client.send(command);
 * // { // GetHypervisorOutput
 * //   Hypervisor: { // HypervisorDetails
 * //     Host: "STRING_VALUE",
 * //     HypervisorArn: "STRING_VALUE",
 * //     KmsKeyArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     LogGroupArn: "STRING_VALUE",
 * //     State: "STRING_VALUE",
 * //     LastSuccessfulMetadataSyncTime: new Date("TIMESTAMP"),
 * //     LatestMetadataSyncStatusMessage: "STRING_VALUE",
 * //     LatestMetadataSyncStatus: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetHypervisorCommandInput - {@link GetHypervisorCommandInput}
 * @returns {@link GetHypervisorCommandOutput}
 * @see {@link GetHypervisorCommandInput} for command's `input` shape.
 * @see {@link GetHypervisorCommandOutput} for command's `response` shape.
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
export class GetHypervisorCommand extends $Command<
  GetHypervisorCommandInput,
  GetHypervisorCommandOutput,
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
  constructor(readonly input: GetHypervisorCommandInput) {
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
  ): Handler<GetHypervisorCommandInput, GetHypervisorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetHypervisorCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "GetHypervisorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "BackupOnPremises_v20210101",
        operation: "GetHypervisor",
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
  private serialize(input: GetHypervisorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetHypervisorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetHypervisorCommandOutput> {
    return de_GetHypervisorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
