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

import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { CreateMatchingWorkflowInput, CreateMatchingWorkflowOutput } from "../models/models_0";
import { de_CreateMatchingWorkflowCommand, se_CreateMatchingWorkflowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateMatchingWorkflowCommand}.
 */
export interface CreateMatchingWorkflowCommandInput extends CreateMatchingWorkflowInput {}
/**
 * @public
 *
 * The output of {@link CreateMatchingWorkflowCommand}.
 */
export interface CreateMatchingWorkflowCommandOutput extends CreateMatchingWorkflowOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a <code>MatchingWorkflow</code> object which stores the configuration of the data processing job
 *          to be run.  It is important to note that there should not be a pre-existing <code>MatchingWorkflow</code>
 *          with the same name. To modify an existing workflow, utilize the <code>UpdateMatchingWorkflow</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, CreateMatchingWorkflowCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, CreateMatchingWorkflowCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * const client = new EntityResolutionClient(config);
 * const input = { // CreateMatchingWorkflowInput
 *   workflowName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   inputSourceConfig: [ // InputSourceConfig // required
 *     { // InputSource
 *       inputSourceARN: "STRING_VALUE", // required
 *       schemaName: "STRING_VALUE", // required
 *       applyNormalization: true || false,
 *     },
 *   ],
 *   outputSourceConfig: [ // OutputSourceConfig // required
 *     { // OutputSource
 *       outputS3Path: "STRING_VALUE", // required
 *       output: [ // OutputAttributes // required
 *         { // OutputAttribute
 *           name: "STRING_VALUE", // required
 *           hashed: true || false,
 *         },
 *       ],
 *       KMSArn: "STRING_VALUE",
 *       applyNormalization: true || false,
 *     },
 *   ],
 *   resolutionTechniques: { // ResolutionTechniques
 *     resolutionType: "RULE_MATCHING" || "ML_MATCHING",
 *     ruleBasedProperties: { // RuleBasedProperties
 *       rules: [ // RuleList // required
 *         { // Rule
 *           ruleName: "STRING_VALUE", // required
 *           matchingKeys: [ // MatchingKeys // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       attributeMatchingModel: "ONE_TO_ONE" || "MANY_TO_MANY", // required
 *     },
 *   },
 *   incrementalRunConfig: { // IncrementalRunConfig
 *     incrementalRunType: "IMMEDIATE",
 *   },
 *   roleArn: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateMatchingWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // CreateMatchingWorkflowOutput
 * //   workflowName: "STRING_VALUE", // required
 * //   workflowArn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   inputSourceConfig: [ // InputSourceConfig // required
 * //     { // InputSource
 * //       inputSourceARN: "STRING_VALUE", // required
 * //       schemaName: "STRING_VALUE", // required
 * //       applyNormalization: true || false,
 * //     },
 * //   ],
 * //   outputSourceConfig: [ // OutputSourceConfig // required
 * //     { // OutputSource
 * //       outputS3Path: "STRING_VALUE", // required
 * //       output: [ // OutputAttributes // required
 * //         { // OutputAttribute
 * //           name: "STRING_VALUE", // required
 * //           hashed: true || false,
 * //         },
 * //       ],
 * //       KMSArn: "STRING_VALUE",
 * //       applyNormalization: true || false,
 * //     },
 * //   ],
 * //   resolutionTechniques: { // ResolutionTechniques
 * //     resolutionType: "RULE_MATCHING" || "ML_MATCHING",
 * //     ruleBasedProperties: { // RuleBasedProperties
 * //       rules: [ // RuleList // required
 * //         { // Rule
 * //           ruleName: "STRING_VALUE", // required
 * //           matchingKeys: [ // MatchingKeys // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       attributeMatchingModel: "ONE_TO_ONE" || "MANY_TO_MANY", // required
 * //     },
 * //   },
 * //   incrementalRunConfig: { // IncrementalRunConfig
 * //     incrementalRunType: "IMMEDIATE",
 * //   },
 * //   roleArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateMatchingWorkflowCommandInput - {@link CreateMatchingWorkflowCommandInput}
 * @returns {@link CreateMatchingWorkflowCommandOutput}
 * @see {@link CreateMatchingWorkflowCommandInput} for command's `input` shape.
 * @see {@link CreateMatchingWorkflowCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. <code>HTTP Status Code: 403</code>
 *          </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource. Example: Workflow already exists,
 *       Schema already exists, Workflow is currently running, etc.  <code>HTTP Status Code: 400</code>
 *          </p>
 *
 * @throws {@link ExceedsLimitException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current AWS Entity Resolution account limits.
 *       The error message describes the limit exceeded. <code>HTTP Status Code: 402</code>
 *          </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the AWS Entity Resolution service. <code>HTTP Status Code: 500</code>
 *          </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. <code>HTTP Status Code: 429</code>
 *          </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by AWS Entity Resolution. <code>HTTP Status Code: 400</code>
 *          </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 */
export class CreateMatchingWorkflowCommand extends $Command<
  CreateMatchingWorkflowCommandInput,
  CreateMatchingWorkflowCommandOutput,
  EntityResolutionClientResolvedConfig
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
  constructor(readonly input: CreateMatchingWorkflowCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EntityResolutionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMatchingWorkflowCommandInput, CreateMatchingWorkflowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMatchingWorkflowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EntityResolutionClient";
    const commandName = "CreateMatchingWorkflowCommand";
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
  private serialize(input: CreateMatchingWorkflowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateMatchingWorkflowCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMatchingWorkflowCommandOutput> {
    return de_CreateMatchingWorkflowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
