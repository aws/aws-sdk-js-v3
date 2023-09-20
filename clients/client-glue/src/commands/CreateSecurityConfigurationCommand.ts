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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateSecurityConfigurationRequest, CreateSecurityConfigurationResponse } from "../models/models_1";
import { de_CreateSecurityConfigurationCommand, se_CreateSecurityConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSecurityConfigurationCommand}.
 */
export interface CreateSecurityConfigurationCommandInput extends CreateSecurityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateSecurityConfigurationCommand}.
 */
export interface CreateSecurityConfigurationCommandOutput
  extends CreateSecurityConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a new security configuration. A security configuration is a set of security properties that can be used by Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html">Encrypting Data Written by Crawlers, Jobs, and Development Endpoints</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateSecurityConfigurationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateSecurityConfigurationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // CreateSecurityConfigurationRequest
 *   Name: "STRING_VALUE", // required
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     S3Encryption: [ // S3EncryptionList
 *       { // S3Encryption
 *         S3EncryptionMode: "DISABLED" || "SSE-KMS" || "SSE-S3",
 *         KmsKeyArn: "STRING_VALUE",
 *       },
 *     ],
 *     CloudWatchEncryption: { // CloudWatchEncryption
 *       CloudWatchEncryptionMode: "DISABLED" || "SSE-KMS",
 *       KmsKeyArn: "STRING_VALUE",
 *     },
 *     JobBookmarksEncryption: { // JobBookmarksEncryption
 *       JobBookmarksEncryptionMode: "DISABLED" || "CSE-KMS",
 *       KmsKeyArn: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateSecurityConfigurationResponse
 * //   Name: "STRING_VALUE",
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateSecurityConfigurationCommandInput - {@link CreateSecurityConfigurationCommandInput}
 * @returns {@link CreateSecurityConfigurationCommandOutput}
 * @see {@link CreateSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateSecurityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class CreateSecurityConfigurationCommand extends $Command<
  CreateSecurityConfigurationCommandInput,
  CreateSecurityConfigurationCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: CreateSecurityConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSecurityConfigurationCommandInput, CreateSecurityConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSecurityConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CreateSecurityConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "CreateSecurityConfiguration",
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
  private serialize(input: CreateSecurityConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSecurityConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateSecurityConfigurationCommandOutput> {
    return de_CreateSecurityConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
