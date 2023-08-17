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

import { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import { GetDevEnvironmentRequest, GetDevEnvironmentResponse } from "../models/models_0";
import { de_GetDevEnvironmentCommand, se_GetDevEnvironmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDevEnvironmentCommand}.
 */
export interface GetDevEnvironmentCommandInput extends GetDevEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link GetDevEnvironmentCommand}.
 */
export interface GetDevEnvironmentCommandOutput extends GetDevEnvironmentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a Dev Environment for a source repository in a project. Dev Environments are specific to the user who creates them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, GetDevEnvironmentCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, GetDevEnvironmentCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * const client = new CodeCatalystClient(config);
 * const input = { // GetDevEnvironmentRequest
 *   spaceName: "STRING_VALUE", // required
 *   projectName: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetDevEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // GetDevEnvironmentResponse
 * //   spaceName: "STRING_VALUE", // required
 * //   projectName: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   lastUpdatedTime: new Date("TIMESTAMP"), // required
 * //   creatorId: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   statusReason: "STRING_VALUE",
 * //   repositories: [ // DevEnvironmentRepositorySummaries // required
 * //     { // DevEnvironmentRepositorySummary
 * //       repositoryName: "STRING_VALUE", // required
 * //       branchName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   alias: "STRING_VALUE",
 * //   ides: [ // Ides
 * //     { // Ide
 * //       runtime: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   instanceType: "STRING_VALUE", // required
 * //   inactivityTimeoutMinutes: Number("int"), // required
 * //   persistentStorage: { // PersistentStorage
 * //     sizeInGiB: Number("int"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDevEnvironmentCommandInput - {@link GetDevEnvironmentCommandInput}
 * @returns {@link GetDevEnvironmentCommandOutput}
 * @see {@link GetDevEnvironmentCommandInput} for command's `input` shape.
 * @see {@link GetDevEnvironmentCommandOutput} for command's `response` shape.
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
export class GetDevEnvironmentCommand extends $Command<
  GetDevEnvironmentCommandInput,
  GetDevEnvironmentCommandOutput,
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
  constructor(readonly input: GetDevEnvironmentCommandInput) {
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
  ): Handler<GetDevEnvironmentCommandInput, GetDevEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDevEnvironmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCatalystClient";
    const commandName = "GetDevEnvironmentCommand";
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
  private serialize(input: GetDevEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDevEnvironmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDevEnvironmentCommandOutput> {
    return de_GetDevEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
