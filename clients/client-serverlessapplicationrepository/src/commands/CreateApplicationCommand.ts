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

import { CreateApplicationRequest, CreateApplicationResponse } from "../models/models_0";
import { de_CreateApplicationCommand, se_CreateApplicationCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandInput extends CreateApplicationRequest {}
/**
 * @public
 *
 * The output of {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandOutput extends CreateApplicationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an application, optionally including an AWS SAM file to create the first application version in the same call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, CreateApplicationCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, CreateApplicationCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const input = { // CreateApplicationRequest
 *   Author: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   HomePageUrl: "STRING_VALUE",
 *   Labels: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 *   LicenseBody: "STRING_VALUE",
 *   LicenseUrl: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   ReadmeBody: "STRING_VALUE",
 *   ReadmeUrl: "STRING_VALUE",
 *   SemanticVersion: "STRING_VALUE",
 *   SourceCodeArchiveUrl: "STRING_VALUE",
 *   SourceCodeUrl: "STRING_VALUE",
 *   SpdxLicenseId: "STRING_VALUE",
 *   TemplateBody: "STRING_VALUE",
 *   TemplateUrl: "STRING_VALUE",
 * };
 * const command = new CreateApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateApplicationResponse
 * //   ApplicationId: "STRING_VALUE",
 * //   Author: "STRING_VALUE",
 * //   CreationTime: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   HomePageUrl: "STRING_VALUE",
 * //   IsVerifiedAuthor: true || false,
 * //   Labels: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   LicenseUrl: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   ReadmeUrl: "STRING_VALUE",
 * //   SpdxLicenseId: "STRING_VALUE",
 * //   VerifiedAuthorUrl: "STRING_VALUE",
 * //   Version: { // Version
 * //     ApplicationId: "STRING_VALUE", // required
 * //     CreationTime: "STRING_VALUE", // required
 * //     ParameterDefinitions: [ // __listOfParameterDefinition // required
 * //       { // ParameterDefinition
 * //         AllowedPattern: "STRING_VALUE",
 * //         AllowedValues: [
 * //           "STRING_VALUE",
 * //         ],
 * //         ConstraintDescription: "STRING_VALUE",
 * //         DefaultValue: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         MaxLength: Number("int"),
 * //         MaxValue: Number("int"),
 * //         MinLength: Number("int"),
 * //         MinValue: Number("int"),
 * //         Name: "STRING_VALUE", // required
 * //         NoEcho: true || false,
 * //         ReferencedByResources: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Type: "STRING_VALUE",
 * //       },
 * //     ],
 * //     RequiredCapabilities: [ // __listOfCapability // required
 * //       "CAPABILITY_IAM" || "CAPABILITY_NAMED_IAM" || "CAPABILITY_AUTO_EXPAND" || "CAPABILITY_RESOURCE_POLICY",
 * //     ],
 * //     ResourcesSupported: true || false, // required
 * //     SemanticVersion: "STRING_VALUE", // required
 * //     SourceCodeArchiveUrl: "STRING_VALUE",
 * //     SourceCodeUrl: "STRING_VALUE",
 * //     TemplateUrl: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateApplicationCommandInput - {@link CreateApplicationCommandInput}
 * @returns {@link CreateApplicationCommandOutput}
 * @see {@link CreateApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationCommandOutput} for command's `response` shape.
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
export class CreateApplicationCommand extends $Command<
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
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
  constructor(readonly input: CreateApplicationCommandInput) {
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
  ): Handler<CreateApplicationCommandInput, CreateApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServerlessApplicationRepositoryClient";
    const commandName = "CreateApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ServerlessApplicationRepository",
        operation: "CreateApplication",
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
  private serialize(input: CreateApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateApplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateApplicationCommandOutput> {
    return de_CreateApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
