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

import { CreateApplicationVersionRequest, CreateApplicationVersionResponse } from "../models/models_0";
import { de_CreateApplicationVersionCommand, se_CreateApplicationVersionCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link CreateApplicationVersionCommand}.
 */
export interface CreateApplicationVersionCommandInput extends CreateApplicationVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateApplicationVersionCommand}.
 */
export interface CreateApplicationVersionCommandOutput extends CreateApplicationVersionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an application version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, CreateApplicationVersionCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, CreateApplicationVersionCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const input = { // CreateApplicationVersionRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   SemanticVersion: "STRING_VALUE", // required
 *   SourceCodeArchiveUrl: "STRING_VALUE",
 *   SourceCodeUrl: "STRING_VALUE",
 *   TemplateBody: "STRING_VALUE",
 *   TemplateUrl: "STRING_VALUE",
 * };
 * const command = new CreateApplicationVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateApplicationVersionResponse
 * //   ApplicationId: "STRING_VALUE",
 * //   CreationTime: "STRING_VALUE",
 * //   ParameterDefinitions: [ // __listOfParameterDefinition
 * //     { // ParameterDefinition
 * //       AllowedPattern: "STRING_VALUE",
 * //       AllowedValues: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //       ConstraintDescription: "STRING_VALUE",
 * //       DefaultValue: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       MaxLength: Number("int"),
 * //       MaxValue: Number("int"),
 * //       MinLength: Number("int"),
 * //       MinValue: Number("int"),
 * //       Name: "STRING_VALUE", // required
 * //       NoEcho: true || false,
 * //       ReferencedByResources: [ // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Type: "STRING_VALUE",
 * //     },
 * //   ],
 * //   RequiredCapabilities: [ // __listOfCapability
 * //     "CAPABILITY_IAM" || "CAPABILITY_NAMED_IAM" || "CAPABILITY_AUTO_EXPAND" || "CAPABILITY_RESOURCE_POLICY",
 * //   ],
 * //   ResourcesSupported: true || false,
 * //   SemanticVersion: "STRING_VALUE",
 * //   SourceCodeArchiveUrl: "STRING_VALUE",
 * //   SourceCodeUrl: "STRING_VALUE",
 * //   TemplateUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateApplicationVersionCommandInput - {@link CreateApplicationVersionCommandInput}
 * @returns {@link CreateApplicationVersionCommandOutput}
 * @see {@link CreateApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for ServerlessApplicationRepositoryClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource already exists.</p>
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
export class CreateApplicationVersionCommand extends $Command<
  CreateApplicationVersionCommandInput,
  CreateApplicationVersionCommandOutput,
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
  constructor(readonly input: CreateApplicationVersionCommandInput) {
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
  ): Handler<CreateApplicationVersionCommandInput, CreateApplicationVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateApplicationVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServerlessApplicationRepositoryClient";
    const commandName = "CreateApplicationVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ServerlessApplicationRepository",
        operation: "CreateApplicationVersion",
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
  private serialize(input: CreateApplicationVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateApplicationVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateApplicationVersionCommandOutput> {
    return de_CreateApplicationVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
