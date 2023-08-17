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
  MigrationHubOrchestratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubOrchestratorClient";
import { GetWorkflowStepGroupRequest, GetWorkflowStepGroupResponse } from "../models/models_0";
import { de_GetWorkflowStepGroupCommand, se_GetWorkflowStepGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetWorkflowStepGroupCommand}.
 */
export interface GetWorkflowStepGroupCommandInput extends GetWorkflowStepGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkflowStepGroupCommand}.
 */
export interface GetWorkflowStepGroupCommandOutput extends GetWorkflowStepGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get the step group of a migration workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, GetWorkflowStepGroupCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, GetWorkflowStepGroupCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // GetWorkflowStepGroupRequest
 *   id: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE", // required
 * };
 * const command = new GetWorkflowStepGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowStepGroupResponse
 * //   id: "STRING_VALUE",
 * //   workflowId: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   owner: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"),
 * //   lastModifiedTime: new Date("TIMESTAMP"),
 * //   endTime: new Date("TIMESTAMP"),
 * //   tools: [ // ToolsList
 * //     { // Tool
 * //       name: "STRING_VALUE",
 * //       url: "STRING_VALUE",
 * //     },
 * //   ],
 * //   previous: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   next: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetWorkflowStepGroupCommandInput - {@link GetWorkflowStepGroupCommandInput}
 * @returns {@link GetWorkflowStepGroupCommandOutput}
 * @see {@link GetWorkflowStepGroupCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowStepGroupCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubOrchestratorClientResolvedConfig | config} for MigrationHubOrchestratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource is not available.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link MigrationHubOrchestratorServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubOrchestrator service.</p>
 *
 */
export class GetWorkflowStepGroupCommand extends $Command<
  GetWorkflowStepGroupCommandInput,
  GetWorkflowStepGroupCommandOutput,
  MigrationHubOrchestratorClientResolvedConfig
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
  constructor(readonly input: GetWorkflowStepGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubOrchestratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetWorkflowStepGroupCommandInput, GetWorkflowStepGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetWorkflowStepGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubOrchestratorClient";
    const commandName = "GetWorkflowStepGroupCommand";
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
  private serialize(input: GetWorkflowStepGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetWorkflowStepGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWorkflowStepGroupCommandOutput> {
    return de_GetWorkflowStepGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
