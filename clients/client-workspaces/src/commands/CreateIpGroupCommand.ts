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

import { CreateIpGroupRequest, CreateIpGroupResult } from "../models/models_0";
import { de_CreateIpGroupCommand, se_CreateIpGroupCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateIpGroupCommand}.
 */
export interface CreateIpGroupCommandInput extends CreateIpGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateIpGroupCommand}.
 */
export interface CreateIpGroupCommandOutput extends CreateIpGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates an IP access control group.</p>
 *          <p>An IP access control group provides you with the ability to control the IP addresses
 *          from which users are allowed to access their WorkSpaces. To specify the CIDR address
 *          ranges, add rules to your IP access control group and then associate the group with your
 *          directory. You can add rules when you create the group or at any time using <a>AuthorizeIpRules</a>.</p>
 *          <p>There is a default IP access control group associated with your directory. If you don't
 *          associate an IP access control group with your directory, the default group is used. The
 *          default group includes a default rule that allows users to access their WorkSpaces from
 *          anywhere. You cannot modify the default IP access control group for your directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateIpGroupCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateIpGroupCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // CreateIpGroupRequest
 *   GroupName: "STRING_VALUE", // required
 *   GroupDesc: "STRING_VALUE",
 *   UserRules: [ // IpRuleList
 *     { // IpRuleItem
 *       ipRule: "STRING_VALUE",
 *       ruleDesc: "STRING_VALUE",
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateIpGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateIpGroupResult
 * //   GroupId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateIpGroupCommandInput - {@link CreateIpGroupCommandInput}
 * @returns {@link CreateIpGroupCommandOutput}
 * @see {@link CreateIpGroupCommandInput} for command's `input` shape.
 * @see {@link CreateIpGroupCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceCreationFailedException} (client fault)
 *  <p>The resource could not be created.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 */
export class CreateIpGroupCommand extends $Command<
  CreateIpGroupCommandInput,
  CreateIpGroupCommandOutput,
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
  constructor(readonly input: CreateIpGroupCommandInput) {
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
  ): Handler<CreateIpGroupCommandInput, CreateIpGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateIpGroupCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "CreateIpGroupCommand";
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
  private serialize(input: CreateIpGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateIpGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateIpGroupCommandOutput> {
    return de_CreateIpGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
