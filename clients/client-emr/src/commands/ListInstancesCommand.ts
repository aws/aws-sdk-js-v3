// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListInstancesInput, ListInstancesOutput } from "../models/models_0";
import { de_ListInstancesCommand, se_ListInstancesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListInstancesCommand}.
 */
export interface ListInstancesCommandInput extends ListInstancesInput {}
/**
 * @public
 *
 * The output of {@link ListInstancesCommand}.
 */
export interface ListInstancesCommandOutput extends ListInstancesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Provides information for all active EC2 instances and EC2 instances terminated in the
 *          last 30 days, up to a maximum of 2,000. EC2 instances in any of the following states are
 *          considered active: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListInstancesCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListInstancesCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // ListInstancesInput
 *   ClusterId: "STRING_VALUE", // required
 *   InstanceGroupId: "STRING_VALUE",
 *   InstanceGroupTypes: [ // InstanceGroupTypeList
 *     "MASTER" || "CORE" || "TASK",
 *   ],
 *   InstanceFleetId: "STRING_VALUE",
 *   InstanceFleetType: "MASTER" || "CORE" || "TASK",
 *   InstanceStates: [ // InstanceStateList
 *     "AWAITING_FULFILLMENT" || "PROVISIONING" || "BOOTSTRAPPING" || "RUNNING" || "TERMINATED",
 *   ],
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListInstancesCommandInput - {@link ListInstancesCommandInput}
 * @returns {@link ListInstancesCommandOutput}
 * @see {@link ListInstancesCommandInput} for command's `input` shape.
 * @see {@link ListInstancesCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 *
 */
export class ListInstancesCommand extends $Command<
  ListInstancesCommandInput,
  ListInstancesCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: ListInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInstancesCommandInput, ListInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListInstancesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListInstancesCommand";
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
  private serialize(input: ListInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInstancesCommandOutput> {
    return de_ListInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
