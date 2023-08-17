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

import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { AssociateTeamMemberRequest, AssociateTeamMemberResult } from "../models/models_0";
import { de_AssociateTeamMemberCommand, se_AssociateTeamMemberCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateTeamMemberCommand}.
 */
export interface AssociateTeamMemberCommandInput extends AssociateTeamMemberRequest {}
/**
 * @public
 *
 * The output of {@link AssociateTeamMemberCommand}.
 */
export interface AssociateTeamMemberCommandOutput extends AssociateTeamMemberResult, __MetadataBearer {}

/**
 * @public
 * <p>Adds an IAM user to the team for an AWS CodeStar project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, AssociateTeamMemberCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, AssociateTeamMemberCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const input = { // AssociateTeamMemberRequest
 *   projectId: "STRING_VALUE", // required
 *   clientRequestToken: "STRING_VALUE",
 *   userArn: "STRING_VALUE", // required
 *   projectRole: "STRING_VALUE", // required
 *   remoteAccessAllowed: true || false,
 * };
 * const command = new AssociateTeamMemberCommand(input);
 * const response = await client.send(command);
 * // { // AssociateTeamMemberResult
 * //   clientRequestToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateTeamMemberCommandInput - {@link AssociateTeamMemberCommandInput}
 * @returns {@link AssociateTeamMemberCommandOutput}
 * @see {@link AssociateTeamMemberCommandInput} for command's `input` shape.
 * @see {@link AssociateTeamMemberCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for CodeStarClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>Another modification is being made. That modification must complete before you can make
 *       your change.</p>
 *
 * @throws {@link InvalidServiceRoleException} (client fault)
 *  <p>The service role is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A resource limit has been exceeded.</p>
 *
 * @throws {@link ProjectConfigurationException} (client fault)
 *  <p>Project configuration information is required but not specified.</p>
 *
 * @throws {@link ProjectNotFoundException} (client fault)
 *  <p>The specified AWS CodeStar project was not found.</p>
 *
 * @throws {@link TeamMemberAlreadyAssociatedException} (client fault)
 *  <p>The team member is already associated with a role in this project.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is either not valid, or it could not be validated.</p>
 *
 * @throws {@link CodeStarServiceException}
 * <p>Base exception class for all service exceptions from CodeStar service.</p>
 *
 */
export class AssociateTeamMemberCommand extends $Command<
  AssociateTeamMemberCommandInput,
  AssociateTeamMemberCommandOutput,
  CodeStarClientResolvedConfig
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
  constructor(readonly input: AssociateTeamMemberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateTeamMemberCommandInput, AssociateTeamMemberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateTeamMemberCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarClient";
    const commandName = "AssociateTeamMemberCommand";
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
  private serialize(input: AssociateTeamMemberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateTeamMemberCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateTeamMemberCommandOutput> {
    return de_AssociateTeamMemberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
