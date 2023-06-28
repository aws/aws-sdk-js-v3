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
import { GetWorkflowStepRequest, GetWorkflowStepResponse } from "../models/models_0";
import { de_GetWorkflowStepCommand, se_GetWorkflowStepCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetWorkflowStepCommand}.
 */
export interface GetWorkflowStepCommandInput extends GetWorkflowStepRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkflowStepCommand}.
 */
export interface GetWorkflowStepCommandOutput extends GetWorkflowStepResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get a step in the migration workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, GetWorkflowStepCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, GetWorkflowStepCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // GetWorkflowStepRequest
 *   workflowId: "STRING_VALUE", // required
 *   stepGroupId: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetWorkflowStepCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowStepResponse
 * //   name: "STRING_VALUE",
 * //   stepGroupId: "STRING_VALUE",
 * //   workflowId: "STRING_VALUE",
 * //   stepId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   stepActionType: "STRING_VALUE",
 * //   owner: "STRING_VALUE",
 * //   workflowStepAutomationConfiguration: { // WorkflowStepAutomationConfiguration
 * //     scriptLocationS3Bucket: "STRING_VALUE",
 * //     scriptLocationS3Key: { // PlatformScriptKey
 * //       linux: "STRING_VALUE",
 * //       windows: "STRING_VALUE",
 * //     },
 * //     command: { // PlatformCommand
 * //       linux: "STRING_VALUE",
 * //       windows: "STRING_VALUE",
 * //     },
 * //     runEnvironment: "STRING_VALUE",
 * //     targetType: "STRING_VALUE",
 * //   },
 * //   stepTarget: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   outputs: [ // WorkflowStepOutputList
 * //     { // WorkflowStepOutput
 * //       name: "STRING_VALUE",
 * //       dataType: "STRING_VALUE",
 * //       required: true || false,
 * //       value: { // WorkflowStepOutputUnion Union: only one key present
 * //         integerValue: Number("int"),
 * //         stringValue: "STRING_VALUE",
 * //         listOfStringValue: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   previous: [
 * //     "STRING_VALUE",
 * //   ],
 * //   next: [
 * //     "STRING_VALUE",
 * //   ],
 * //   status: "STRING_VALUE",
 * //   statusMessage: "STRING_VALUE",
 * //   scriptOutputLocation: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"),
 * //   lastStartTime: new Date("TIMESTAMP"),
 * //   endTime: new Date("TIMESTAMP"),
 * //   noOfSrvCompleted: Number("int"),
 * //   noOfSrvFailed: Number("int"),
 * //   totalNoOfSrv: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetWorkflowStepCommandInput - {@link GetWorkflowStepCommandInput}
 * @returns {@link GetWorkflowStepCommandOutput}
 * @see {@link GetWorkflowStepCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowStepCommandOutput} for command's `response` shape.
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
 * @throws {@link MigrationHubOrchestratorServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubOrchestrator service.</p>
 *
 */
export class GetWorkflowStepCommand extends $Command<
  GetWorkflowStepCommandInput,
  GetWorkflowStepCommandOutput,
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
  constructor(readonly input: GetWorkflowStepCommandInput) {
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
  ): Handler<GetWorkflowStepCommandInput, GetWorkflowStepCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetWorkflowStepCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubOrchestratorClient";
    const commandName = "GetWorkflowStepCommand";
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
  private serialize(input: GetWorkflowStepCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetWorkflowStepCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWorkflowStepCommandOutput> {
    return de_GetWorkflowStepCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
