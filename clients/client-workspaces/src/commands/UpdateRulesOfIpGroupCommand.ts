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

import { UpdateRulesOfIpGroupRequest, UpdateRulesOfIpGroupResult } from "../models/models_0";
import { de_UpdateRulesOfIpGroupCommand, se_UpdateRulesOfIpGroupCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 *
 * The input for {@link UpdateRulesOfIpGroupCommand}.
 */
export interface UpdateRulesOfIpGroupCommandInput extends UpdateRulesOfIpGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRulesOfIpGroupCommand}.
 */
export interface UpdateRulesOfIpGroupCommandOutput extends UpdateRulesOfIpGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Replaces the current rules of the specified IP access control group with the specified
 *          rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, UpdateRulesOfIpGroupCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, UpdateRulesOfIpGroupCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // UpdateRulesOfIpGroupRequest
 *   GroupId: "STRING_VALUE", // required
 *   UserRules: [ // IpRuleList // required
 *     { // IpRuleItem
 *       ipRule: "STRING_VALUE",
 *       ruleDesc: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateRulesOfIpGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateRulesOfIpGroupCommandInput - {@link UpdateRulesOfIpGroupCommandInput}
 * @returns {@link UpdateRulesOfIpGroupCommandOutput}
 * @see {@link UpdateRulesOfIpGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateRulesOfIpGroupCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The state of the resource is not valid for this operation.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 *
 */
export class UpdateRulesOfIpGroupCommand extends $Command<
  UpdateRulesOfIpGroupCommandInput,
  UpdateRulesOfIpGroupCommandOutput,
  WorkSpacesClientResolvedConfig
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
  constructor(readonly input: UpdateRulesOfIpGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRulesOfIpGroupCommandInput, UpdateRulesOfIpGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRulesOfIpGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "UpdateRulesOfIpGroupCommand";
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
  private serialize(input: UpdateRulesOfIpGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateRulesOfIpGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRulesOfIpGroupCommandOutput> {
    return de_UpdateRulesOfIpGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
