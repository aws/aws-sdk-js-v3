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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetSecurityConfigurationsRequest, GetSecurityConfigurationsResponse } from "../models/models_1";
import { de_GetSecurityConfigurationsCommand, se_GetSecurityConfigurationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSecurityConfigurationsCommand}.
 */
export interface GetSecurityConfigurationsCommandInput extends GetSecurityConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link GetSecurityConfigurationsCommand}.
 */
export interface GetSecurityConfigurationsCommandOutput extends GetSecurityConfigurationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of all security configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSecurityConfigurationsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSecurityConfigurationsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetSecurityConfigurationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetSecurityConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // GetSecurityConfigurationsResponse
 * //   SecurityConfigurations: [ // SecurityConfigurationList
 * //     { // SecurityConfiguration
 * //       Name: "STRING_VALUE",
 * //       CreatedTimeStamp: new Date("TIMESTAMP"),
 * //       EncryptionConfiguration: { // EncryptionConfiguration
 * //         S3Encryption: [ // S3EncryptionList
 * //           { // S3Encryption
 * //             S3EncryptionMode: "DISABLED" || "SSE-KMS" || "SSE-S3",
 * //             KmsKeyArn: "STRING_VALUE",
 * //           },
 * //         ],
 * //         CloudWatchEncryption: { // CloudWatchEncryption
 * //           CloudWatchEncryptionMode: "DISABLED" || "SSE-KMS",
 * //           KmsKeyArn: "STRING_VALUE",
 * //         },
 * //         JobBookmarksEncryption: { // JobBookmarksEncryption
 * //           JobBookmarksEncryptionMode: "DISABLED" || "CSE-KMS",
 * //           KmsKeyArn: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSecurityConfigurationsCommandInput - {@link GetSecurityConfigurationsCommandInput}
 * @returns {@link GetSecurityConfigurationsCommandOutput}
 * @see {@link GetSecurityConfigurationsCommandInput} for command's `input` shape.
 * @see {@link GetSecurityConfigurationsCommandOutput} for command's `response` shape.
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
export class GetSecurityConfigurationsCommand extends $Command<
  GetSecurityConfigurationsCommandInput,
  GetSecurityConfigurationsCommandOutput,
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
  constructor(readonly input: GetSecurityConfigurationsCommandInput) {
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
  ): Handler<GetSecurityConfigurationsCommandInput, GetSecurityConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSecurityConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetSecurityConfigurationsCommand";
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
  private serialize(input: GetSecurityConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSecurityConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSecurityConfigurationsCommandOutput> {
    return de_GetSecurityConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
