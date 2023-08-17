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

import { GetApplicationRequest, GetApplicationResponse } from "../models/models_0";
import { de_GetApplicationCommand, se_GetApplicationCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link GetApplicationCommand}.
 */
export interface GetApplicationCommandInput extends GetApplicationRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationCommand}.
 */
export interface GetApplicationCommandOutput extends GetApplicationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, GetApplicationCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, GetApplicationCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const input = { // GetApplicationRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   SemanticVersion: "STRING_VALUE",
 * };
 * const command = new GetApplicationCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationResponse
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
 * @param GetApplicationCommandInput - {@link GetApplicationCommandInput}
 * @returns {@link GetApplicationCommandOutput}
 * @see {@link GetApplicationCommandInput} for command's `input` shape.
 * @see {@link GetApplicationCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource (for example, an access policy statement) specified in the request doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The client is sending more than the allowed number of requests per unit of time.</p>
 *
 * @throws {@link ServerlessApplicationRepositoryServiceException}
 * <p>Base exception class for all service exceptions from ServerlessApplicationRepository service.</p>
 *
 */
export class GetApplicationCommand extends $Command<
  GetApplicationCommandInput,
  GetApplicationCommandOutput,
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
  constructor(readonly input: GetApplicationCommandInput) {
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
  ): Handler<GetApplicationCommandInput, GetApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServerlessApplicationRepositoryClient";
    const commandName = "GetApplicationCommand";
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
  private serialize(input: GetApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetApplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetApplicationCommandOutput> {
    return de_GetApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
