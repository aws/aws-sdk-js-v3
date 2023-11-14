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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ModifyInstanceGroupsInput } from "../models/models_0";
import { de_ModifyInstanceGroupsCommand, se_ModifyInstanceGroupsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyInstanceGroupsCommand}.
 */
export interface ModifyInstanceGroupsCommandInput extends ModifyInstanceGroupsInput {}
/**
 * @public
 *
 * The output of {@link ModifyInstanceGroupsCommand}.
 */
export interface ModifyInstanceGroupsCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>ModifyInstanceGroups modifies the number of nodes and configuration settings of an
 *          instance group. The input parameters include the new target instance count for the group
 *          and the instance group ID. The call will either succeed or fail atomically.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ModifyInstanceGroupsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ModifyInstanceGroupsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // ModifyInstanceGroupsInput
 *   ClusterId: "STRING_VALUE",
 *   InstanceGroups: [ // InstanceGroupModifyConfigList
 *     { // InstanceGroupModifyConfig
 *       InstanceGroupId: "STRING_VALUE", // required
 *       InstanceCount: Number("int"),
 *       EC2InstanceIdsToTerminate: [ // EC2InstanceIdsToTerminateList
 *         "STRING_VALUE",
 *       ],
 *       ShrinkPolicy: { // ShrinkPolicy
 *         DecommissionTimeout: Number("int"),
 *         InstanceResizePolicy: { // InstanceResizePolicy
 *           InstancesToTerminate: [ // EC2InstanceIdsList
 *             "STRING_VALUE",
 *           ],
 *           InstancesToProtect: [
 *             "STRING_VALUE",
 *           ],
 *           InstanceTerminationTimeout: Number("int"),
 *         },
 *       },
 *       ReconfigurationType: "OVERWRITE" || "MERGE",
 *       Configurations: [ // ConfigurationList
 *         { // Configuration
 *           Classification: "STRING_VALUE",
 *           Configurations: [
 *             {
 *               Classification: "STRING_VALUE",
 *               Configurations: "<ConfigurationList>",
 *               Properties: { // StringMap
 *                 "<keys>": "STRING_VALUE",
 *               },
 *             },
 *           ],
 *           Properties: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new ModifyInstanceGroupsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyInstanceGroupsCommandInput - {@link ModifyInstanceGroupsCommandInput}
 * @returns {@link ModifyInstanceGroupsCommandOutput}
 * @see {@link ModifyInstanceGroupsCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceGroupsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class ModifyInstanceGroupsCommand extends $Command<
  ModifyInstanceGroupsCommandInput,
  ModifyInstanceGroupsCommandOutput,
  EMRClientResolvedConfig
> {
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
  constructor(readonly input: ModifyInstanceGroupsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyInstanceGroupsCommandInput, ModifyInstanceGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyInstanceGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ModifyInstanceGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticMapReduce",
        operation: "ModifyInstanceGroups",
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
  private serialize(input: ModifyInstanceGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyInstanceGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyInstanceGroupsCommandOutput> {
    return de_ModifyInstanceGroupsCommand(output, context);
  }
}
