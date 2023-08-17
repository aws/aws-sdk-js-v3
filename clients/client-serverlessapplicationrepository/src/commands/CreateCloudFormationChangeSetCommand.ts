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

import { CreateCloudFormationChangeSetRequest, CreateCloudFormationChangeSetResponse } from "../models/models_0";
import {
  de_CreateCloudFormationChangeSetCommand,
  se_CreateCloudFormationChangeSetCommand,
} from "../protocols/Aws_restJson1";
import {
  ServerlessApplicationRepositoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServerlessApplicationRepositoryClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCloudFormationChangeSetCommand}.
 */
export interface CreateCloudFormationChangeSetCommandInput extends CreateCloudFormationChangeSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateCloudFormationChangeSetCommand}.
 */
export interface CreateCloudFormationChangeSetCommandOutput
  extends CreateCloudFormationChangeSetResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates an AWS CloudFormation change set for the given application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, CreateCloudFormationChangeSetCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, CreateCloudFormationChangeSetCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const input = { // CreateCloudFormationChangeSetRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   Capabilities: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 *   ChangeSetName: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   NotificationArns: [
 *     "STRING_VALUE",
 *   ],
 *   ParameterOverrides: [ // __listOfParameterValue
 *     { // ParameterValue
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ResourceTypes: [
 *     "STRING_VALUE",
 *   ],
 *   RollbackConfiguration: { // RollbackConfiguration
 *     MonitoringTimeInMinutes: Number("int"),
 *     RollbackTriggers: [ // __listOfRollbackTrigger
 *       { // RollbackTrigger
 *         Arn: "STRING_VALUE", // required
 *         Type: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   SemanticVersion: "STRING_VALUE",
 *   StackName: "STRING_VALUE", // required
 *   Tags: [ // __listOfTag
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   TemplateId: "STRING_VALUE",
 * };
 * const command = new CreateCloudFormationChangeSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateCloudFormationChangeSetResponse
 * //   ApplicationId: "STRING_VALUE",
 * //   ChangeSetId: "STRING_VALUE",
 * //   SemanticVersion: "STRING_VALUE",
 * //   StackId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCloudFormationChangeSetCommandInput - {@link CreateCloudFormationChangeSetCommandInput}
 * @returns {@link CreateCloudFormationChangeSetCommandOutput}
 * @see {@link CreateCloudFormationChangeSetCommandInput} for command's `input` shape.
 * @see {@link CreateCloudFormationChangeSetCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for ServerlessApplicationRepositoryClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is not authenticated.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The AWS Serverless Application Repository service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The client is sending more than the allowed number of requests per unit of time.</p>
 *
 * @throws {@link ServerlessApplicationRepositoryServiceException}
 * <p>Base exception class for all service exceptions from ServerlessApplicationRepository service.</p>
 *
 */
export class CreateCloudFormationChangeSetCommand extends $Command<
  CreateCloudFormationChangeSetCommandInput,
  CreateCloudFormationChangeSetCommandOutput,
  ServerlessApplicationRepositoryClientResolvedConfig
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
  constructor(readonly input: CreateCloudFormationChangeSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServerlessApplicationRepositoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCloudFormationChangeSetCommandInput, CreateCloudFormationChangeSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCloudFormationChangeSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServerlessApplicationRepositoryClient";
    const commandName = "CreateCloudFormationChangeSetCommand";
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
  private serialize(input: CreateCloudFormationChangeSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCloudFormationChangeSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCloudFormationChangeSetCommandOutput> {
    return de_CreateCloudFormationChangeSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
