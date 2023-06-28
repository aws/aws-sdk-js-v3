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
import { GetHypervisorPropertyMappingsInput, GetHypervisorPropertyMappingsOutput } from "../models/models_0";
import {
  de_GetHypervisorPropertyMappingsCommand,
  se_GetHypervisorPropertyMappingsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetHypervisorPropertyMappingsCommand}.
 */
export interface GetHypervisorPropertyMappingsCommandInput extends GetHypervisorPropertyMappingsInput {}
/**
 * @public
 *
 * The output of {@link GetHypervisorPropertyMappingsCommand}.
 */
export interface GetHypervisorPropertyMappingsCommandOutput
  extends GetHypervisorPropertyMappingsOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>This action retrieves the property mappings for the specified hypervisor.
 *       A hypervisor property mapping displays the relationship of entity properties
 *       available from the on-premises hypervisor to the properties available in Amazon Web Services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, GetHypervisorPropertyMappingsCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, GetHypervisorPropertyMappingsCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const input = { // GetHypervisorPropertyMappingsInput
 *   HypervisorArn: "STRING_VALUE", // required
 * };
 * const command = new GetHypervisorPropertyMappingsCommand(input);
 * const response = await client.send(command);
 * // { // GetHypervisorPropertyMappingsOutput
 * //   HypervisorArn: "STRING_VALUE",
 * //   VmwareToAwsTagMappings: [ // VmwareToAwsTagMappings
 * //     { // VmwareToAwsTagMapping
 * //       VmwareCategory: "STRING_VALUE", // required
 * //       VmwareTagName: "STRING_VALUE", // required
 * //       AwsTagKey: "STRING_VALUE", // required
 * //       AwsTagValue: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   IamRoleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetHypervisorPropertyMappingsCommandInput - {@link GetHypervisorPropertyMappingsCommandInput}
 * @returns {@link GetHypervisorPropertyMappingsCommandOutput}
 * @see {@link GetHypervisorPropertyMappingsCommandInput} for command's `input` shape.
 * @see {@link GetHypervisorPropertyMappingsCommandOutput} for command's `response` shape.
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
export class GetHypervisorPropertyMappingsCommand extends $Command<
  GetHypervisorPropertyMappingsCommandInput,
  GetHypervisorPropertyMappingsCommandOutput,
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
  constructor(readonly input: GetHypervisorPropertyMappingsCommandInput) {
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
  ): Handler<GetHypervisorPropertyMappingsCommandInput, GetHypervisorPropertyMappingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetHypervisorPropertyMappingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "GetHypervisorPropertyMappingsCommand";
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
  private serialize(input: GetHypervisorPropertyMappingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetHypervisorPropertyMappingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetHypervisorPropertyMappingsCommandOutput> {
    return de_GetHypervisorPropertyMappingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
