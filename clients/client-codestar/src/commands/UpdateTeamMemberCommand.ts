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

import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { UpdateTeamMemberRequest, UpdateTeamMemberResult } from "../models/models_0";
import { de_UpdateTeamMemberCommand, se_UpdateTeamMemberCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateTeamMemberCommand}.
 */
export interface UpdateTeamMemberCommandInput extends UpdateTeamMemberRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTeamMemberCommand}.
 */
export interface UpdateTeamMemberCommandOutput extends UpdateTeamMemberResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates a team member's attributes in an AWS CodeStar project. For example, you can change a
 *       team member's role in the project, or change whether they have remote access to project
 *       resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, UpdateTeamMemberCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, UpdateTeamMemberCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const input = { // UpdateTeamMemberRequest
 *   projectId: "STRING_VALUE", // required
 *   userArn: "STRING_VALUE", // required
 *   projectRole: "STRING_VALUE",
 *   remoteAccessAllowed: true || false,
 * };
 * const command = new UpdateTeamMemberCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTeamMemberResult
 * //   userArn: "STRING_VALUE",
 * //   projectRole: "STRING_VALUE",
 * //   remoteAccessAllowed: true || false,
 * // };
 *
 * ```
 *
 * @param UpdateTeamMemberCommandInput - {@link UpdateTeamMemberCommandInput}
 * @returns {@link UpdateTeamMemberCommandOutput}
 * @see {@link UpdateTeamMemberCommandInput} for command's `input` shape.
 * @see {@link UpdateTeamMemberCommandOutput} for command's `response` shape.
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
 * @throws {@link TeamMemberNotFoundException} (client fault)
 *  <p>The specified team member was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is either not valid, or it could not be validated.</p>
 *
 * @throws {@link CodeStarServiceException}
 * <p>Base exception class for all service exceptions from CodeStar service.</p>
 *
 */
export class UpdateTeamMemberCommand extends $Command<
  UpdateTeamMemberCommandInput,
  UpdateTeamMemberCommandOutput,
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
  constructor(readonly input: UpdateTeamMemberCommandInput) {
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
  ): Handler<UpdateTeamMemberCommandInput, UpdateTeamMemberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateTeamMemberCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarClient";
    const commandName = "UpdateTeamMemberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeStar_20170419",
        operation: "UpdateTeamMember",
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
  private serialize(input: UpdateTeamMemberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateTeamMemberCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTeamMemberCommandOutput> {
    return de_UpdateTeamMemberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
