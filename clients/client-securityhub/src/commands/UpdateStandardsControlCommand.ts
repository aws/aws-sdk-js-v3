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

import { UpdateStandardsControlRequest, UpdateStandardsControlResponse } from "../models/models_2";
import { de_UpdateStandardsControlCommand, se_UpdateStandardsControlCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateStandardsControlCommand}.
 */
export interface UpdateStandardsControlCommandInput extends UpdateStandardsControlRequest {}
/**
 * @public
 *
 * The output of {@link UpdateStandardsControlCommand}.
 */
export interface UpdateStandardsControlCommandOutput extends UpdateStandardsControlResponse, __MetadataBearer {}

/**
 * @public
 * <p>Used to control whether an individual security standard control is enabled or
 *          disabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateStandardsControlCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateStandardsControlCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // UpdateStandardsControlRequest
 *   StandardsControlArn: "STRING_VALUE", // required
 *   ControlStatus: "ENABLED" || "DISABLED",
 *   DisabledReason: "STRING_VALUE",
 * };
 * const command = new UpdateStandardsControlCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateStandardsControlCommandInput - {@link UpdateStandardsControlCommandInput}
 * @returns {@link UpdateStandardsControlCommandOutput}
 * @see {@link UpdateStandardsControlCommandInput} for command's `input` shape.
 * @see {@link UpdateStandardsControlCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To update the enablement status of a standard control
 * ```javascript
 * // The following example disables the specified control in the specified security standard.
 * const input = {
 *   "ControlStatus": "DISABLED",
 *   "DisabledReason": "Not applicable to my service",
 *   "StandardsControlArn": "arn:aws:securityhub:us-west-1:123456789012:control/pci-dss/v/3.2.1/PCI.AutoScaling.1"
 * };
 * const command = new UpdateStandardsControlCommand(input);
 * await client.send(command);
 * // example id: to-update-the-enablement-status-of-a-standard-control-1678912506444
 * ```
 *
 */
export class UpdateStandardsControlCommand extends $Command<
  UpdateStandardsControlCommandInput,
  UpdateStandardsControlCommandOutput,
  SecurityHubClientResolvedConfig
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
  constructor(readonly input: UpdateStandardsControlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateStandardsControlCommandInput, UpdateStandardsControlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateStandardsControlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "UpdateStandardsControlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "UpdateStandardsControl",
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
  private serialize(input: UpdateStandardsControlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateStandardsControlCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateStandardsControlCommandOutput> {
    return de_UpdateStandardsControlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
