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

import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { DescribeMigrationTaskRequest, DescribeMigrationTaskResult } from "../models/models_0";
import { de_DescribeMigrationTaskCommand, se_DescribeMigrationTaskCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMigrationTaskCommand}.
 */
export interface DescribeMigrationTaskCommandInput extends DescribeMigrationTaskRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMigrationTaskCommand}.
 */
export interface DescribeMigrationTaskCommandOutput extends DescribeMigrationTaskResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of all attributes associated with a specific migration task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, DescribeMigrationTaskCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, DescribeMigrationTaskCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const input = { // DescribeMigrationTaskRequest
 *   ProgressUpdateStream: "STRING_VALUE", // required
 *   MigrationTaskName: "STRING_VALUE", // required
 * };
 * const command = new DescribeMigrationTaskCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMigrationTaskResult
 * //   MigrationTask: { // MigrationTask
 * //     ProgressUpdateStream: "STRING_VALUE",
 * //     MigrationTaskName: "STRING_VALUE",
 * //     Task: { // Task
 * //       Status: "NOT_STARTED" || "IN_PROGRESS" || "FAILED" || "COMPLETED", // required
 * //       StatusDetail: "STRING_VALUE",
 * //       ProgressPercent: Number("int"),
 * //     },
 * //     UpdateDateTime: new Date("TIMESTAMP"),
 * //     ResourceAttributeList: [ // LatestResourceAttributeList
 * //       { // ResourceAttribute
 * //         Type: "IPV4_ADDRESS" || "IPV6_ADDRESS" || "MAC_ADDRESS" || "FQDN" || "VM_MANAGER_ID" || "VM_MANAGED_OBJECT_REFERENCE" || "VM_NAME" || "VM_PATH" || "BIOS_ID" || "MOTHERBOARD_SERIAL_NUMBER", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeMigrationTaskCommandInput - {@link DescribeMigrationTaskCommandInput}
 * @returns {@link DescribeMigrationTaskCommandOutput}
 * @see {@link DescribeMigrationTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeMigrationTaskCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for MigrationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home region is not set. Set the home region to continue.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Exception raised when an internal, configuration, or dependency error is
 *          encountered.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Exception raised when the provided input violates a policy constraint or is entered in
 *          the wrong format or data type.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception raised when the request references a resource (Application Discovery Service
 *          configuration, update stream, migration task, etc.) that does not exist in Application
 *          Discovery Service (Application Discovery Service) or in Migration Hub's repository.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Exception raised when there is an internal, configuration, or dependency error
 *          encountered.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link MigrationHubServiceException}
 * <p>Base exception class for all service exceptions from MigrationHub service.</p>
 *
 */
export class DescribeMigrationTaskCommand extends $Command<
  DescribeMigrationTaskCommandInput,
  DescribeMigrationTaskCommandOutput,
  MigrationHubClientResolvedConfig
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
  constructor(readonly input: DescribeMigrationTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMigrationTaskCommandInput, DescribeMigrationTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMigrationTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "DescribeMigrationTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSMigrationHub",
        operation: "DescribeMigrationTask",
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
  private serialize(input: DescribeMigrationTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeMigrationTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMigrationTaskCommandOutput> {
    return de_DescribeMigrationTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
