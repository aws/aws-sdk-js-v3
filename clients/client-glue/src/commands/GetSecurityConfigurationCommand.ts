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
import { GetSecurityConfigurationRequest, GetSecurityConfigurationResponse } from "../models/models_1";
import { de_GetSecurityConfigurationCommand, se_GetSecurityConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSecurityConfigurationCommand}.
 */
export interface GetSecurityConfigurationCommandInput extends GetSecurityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetSecurityConfigurationCommand}.
 */
export interface GetSecurityConfigurationCommandOutput extends GetSecurityConfigurationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a specified security configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSecurityConfigurationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSecurityConfigurationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetSecurityConfigurationRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetSecurityConfigurationResponse
 * //   SecurityConfiguration: { // SecurityConfiguration
 * //     Name: "STRING_VALUE",
 * //     CreatedTimeStamp: new Date("TIMESTAMP"),
 * //     EncryptionConfiguration: { // EncryptionConfiguration
 * //       S3Encryption: [ // S3EncryptionList
 * //         { // S3Encryption
 * //           S3EncryptionMode: "DISABLED" || "SSE-KMS" || "SSE-S3",
 * //           KmsKeyArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CloudWatchEncryption: { // CloudWatchEncryption
 * //         CloudWatchEncryptionMode: "DISABLED" || "SSE-KMS",
 * //         KmsKeyArn: "STRING_VALUE",
 * //       },
 * //       JobBookmarksEncryption: { // JobBookmarksEncryption
 * //         JobBookmarksEncryptionMode: "DISABLED" || "CSE-KMS",
 * //         KmsKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSecurityConfigurationCommandInput - {@link GetSecurityConfigurationCommandInput}
 * @returns {@link GetSecurityConfigurationCommandOutput}
 * @see {@link GetSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetSecurityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class GetSecurityConfigurationCommand extends $Command<
  GetSecurityConfigurationCommandInput,
  GetSecurityConfigurationCommandOutput,
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
  constructor(readonly input: GetSecurityConfigurationCommandInput) {
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
  ): Handler<GetSecurityConfigurationCommandInput, GetSecurityConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSecurityConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetSecurityConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetSecurityConfiguration",
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
  private serialize(input: GetSecurityConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSecurityConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSecurityConfigurationCommandOutput> {
    return de_GetSecurityConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
