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

import {
  UpdateMaintenanceWindowTargetRequest,
  UpdateMaintenanceWindowTargetRequestFilterSensitiveLog,
  UpdateMaintenanceWindowTargetResult,
  UpdateMaintenanceWindowTargetResultFilterSensitiveLog,
} from "../models/models_2";
import {
  de_UpdateMaintenanceWindowTargetCommand,
  se_UpdateMaintenanceWindowTargetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateMaintenanceWindowTargetCommand}.
 */
export interface UpdateMaintenanceWindowTargetCommandInput extends UpdateMaintenanceWindowTargetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMaintenanceWindowTargetCommand}.
 */
export interface UpdateMaintenanceWindowTargetCommandOutput
  extends UpdateMaintenanceWindowTargetResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the target of an existing maintenance window. You
 *    can change the following:</p>
 *          <ul>
 *             <li>
 *                <p>Name</p>
 *             </li>
 *             <li>
 *                <p>Description</p>
 *             </li>
 *             <li>
 *                <p>Owner</p>
 *             </li>
 *             <li>
 *                <p>IDs for an ID target</p>
 *             </li>
 *             <li>
 *                <p>Tags for a Tag target</p>
 *             </li>
 *             <li>
 *                <p>From any supported tag type to another. The three supported tag types are ID target, Tag
 *      target, and resource group. For more information, see <a>Target</a>.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>If a parameter is null, then the corresponding field isn't modified.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateMaintenanceWindowTargetCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateMaintenanceWindowTargetCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // UpdateMaintenanceWindowTargetRequest
 *   WindowId: "STRING_VALUE", // required
 *   WindowTargetId: "STRING_VALUE", // required
 *   Targets: [ // Targets
 *     { // Target
 *       Key: "STRING_VALUE",
 *       Values: [ // TargetValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   OwnerInformation: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Replace: true || false,
 * };
 * const command = new UpdateMaintenanceWindowTargetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMaintenanceWindowTargetResult
 * //   WindowId: "STRING_VALUE",
 * //   WindowTargetId: "STRING_VALUE",
 * //   Targets: [ // Targets
 * //     { // Target
 * //       Key: "STRING_VALUE",
 * //       Values: [ // TargetValues
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   OwnerInformation: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateMaintenanceWindowTargetCommandInput - {@link UpdateMaintenanceWindowTargetCommandInput}
 * @returns {@link UpdateMaintenanceWindowTargetCommandOutput}
 * @see {@link UpdateMaintenanceWindowTargetCommandInput} for command's `input` shape.
 * @see {@link UpdateMaintenanceWindowTargetCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DoesNotExistException} (client fault)
 *  <p>Error returned when the ID specified for a resource, such as a maintenance window or patch
 *    baseline, doesn't exist.</p>
 *          <p>For information about resource quotas in Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class UpdateMaintenanceWindowTargetCommand extends $Command<
  UpdateMaintenanceWindowTargetCommandInput,
  UpdateMaintenanceWindowTargetCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: UpdateMaintenanceWindowTargetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateMaintenanceWindowTargetCommandInput, UpdateMaintenanceWindowTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateMaintenanceWindowTargetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateMaintenanceWindowTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateMaintenanceWindowTargetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateMaintenanceWindowTargetResultFilterSensitiveLog,
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
  private serialize(input: UpdateMaintenanceWindowTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateMaintenanceWindowTargetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateMaintenanceWindowTargetCommandOutput> {
    return de_UpdateMaintenanceWindowTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
