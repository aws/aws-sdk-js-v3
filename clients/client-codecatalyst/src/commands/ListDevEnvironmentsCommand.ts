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

import { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import { ListDevEnvironmentsRequest, ListDevEnvironmentsResponse } from "../models/models_0";
import { de_ListDevEnvironmentsCommand, se_ListDevEnvironmentsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDevEnvironmentsCommand}.
 */
export interface ListDevEnvironmentsCommandInput extends ListDevEnvironmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListDevEnvironmentsCommand}.
 */
export interface ListDevEnvironmentsCommandOutput extends ListDevEnvironmentsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of Dev Environments in a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, ListDevEnvironmentsCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, ListDevEnvironmentsCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * const client = new CodeCatalystClient(config);
 * const input = { // ListDevEnvironmentsRequest
 *   spaceName: "STRING_VALUE", // required
 *   projectName: "STRING_VALUE", // required
 *   filters: [ // Filters
 *     { // Filter
 *       key: "STRING_VALUE", // required
 *       values: [ // StringList // required
 *         "STRING_VALUE",
 *       ],
 *       comparisonOperator: "STRING_VALUE",
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDevEnvironmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListDevEnvironmentsResponse
 * //   items: [ // DevEnvironmentSummaryList // required
 * //     { // DevEnvironmentSummary
 * //       spaceName: "STRING_VALUE",
 * //       projectName: "STRING_VALUE",
 * //       id: "STRING_VALUE", // required
 * //       lastUpdatedTime: new Date("TIMESTAMP"), // required
 * //       creatorId: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       statusReason: "STRING_VALUE",
 * //       repositories: [ // DevEnvironmentRepositorySummaries // required
 * //         { // DevEnvironmentRepositorySummary
 * //           repositoryName: "STRING_VALUE", // required
 * //           branchName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       alias: "STRING_VALUE",
 * //       ides: [ // Ides
 * //         { // Ide
 * //           runtime: "STRING_VALUE",
 * //           name: "STRING_VALUE",
 * //         },
 * //       ],
 * //       instanceType: "STRING_VALUE", // required
 * //       inactivityTimeoutMinutes: Number("int"), // required
 * //       persistentStorage: { // PersistentStorage
 * //         sizeInGiB: Number("int"), // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDevEnvironmentsCommandInput - {@link ListDevEnvironmentsCommandInput}
 * @returns {@link ListDevEnvironmentsCommandOutput}
 * @see {@link ListDevEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListDevEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient access to perform this action. Verify that you are a member of a role that allows this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request was denied because the requested operation would cause a conflict with the current state of a service resource associated with the request.
 *        Another user might have updated the resource. Reload, make sure you have the latest data, and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied because the specified resource was not found. Verify that the spelling is correct and that you have access to the resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was denied because one or more resources has reached its limits for the tier the space belongs to. Either reduce
 *       the number of resources, or change the tier if applicable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied because an input failed to satisfy the constraints specified by the service. Check the spelling and input requirements, and then try again.</p>
 *
 * @throws {@link CodeCatalystServiceException}
 * <p>Base exception class for all service exceptions from CodeCatalyst service.</p>
 *
 */
export class ListDevEnvironmentsCommand extends $Command<
  ListDevEnvironmentsCommandInput,
  ListDevEnvironmentsCommandOutput,
  CodeCatalystClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListDevEnvironmentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCatalystClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDevEnvironmentsCommandInput, ListDevEnvironmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDevEnvironmentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCatalystClient";
    const commandName = "ListDevEnvironmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeCatalyst",
        operation: "ListDevEnvironments",
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
  private serialize(input: ListDevEnvironmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDevEnvironmentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDevEnvironmentsCommandOutput> {
    return de_ListDevEnvironmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
