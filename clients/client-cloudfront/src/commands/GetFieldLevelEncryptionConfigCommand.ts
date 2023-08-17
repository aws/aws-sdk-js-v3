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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetFieldLevelEncryptionConfigRequest, GetFieldLevelEncryptionConfigResult } from "../models/models_1";
import {
  de_GetFieldLevelEncryptionConfigCommand,
  se_GetFieldLevelEncryptionConfigCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetFieldLevelEncryptionConfigCommand}.
 */
export interface GetFieldLevelEncryptionConfigCommandInput extends GetFieldLevelEncryptionConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetFieldLevelEncryptionConfigCommand}.
 */
export interface GetFieldLevelEncryptionConfigCommandOutput
  extends GetFieldLevelEncryptionConfigResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Get the field-level encryption configuration information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetFieldLevelEncryptionConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetFieldLevelEncryptionConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetFieldLevelEncryptionConfigRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetFieldLevelEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetFieldLevelEncryptionConfigResult
 * //   FieldLevelEncryptionConfig: { // FieldLevelEncryptionConfig
 * //     CallerReference: "STRING_VALUE", // required
 * //     Comment: "STRING_VALUE",
 * //     QueryArgProfileConfig: { // QueryArgProfileConfig
 * //       ForwardWhenQueryArgProfileIsUnknown: true || false, // required
 * //       QueryArgProfiles: { // QueryArgProfiles
 * //         Quantity: Number("int"), // required
 * //         Items: [ // QueryArgProfileList
 * //           { // QueryArgProfile
 * //             QueryArg: "STRING_VALUE", // required
 * //             ProfileId: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     ContentTypeProfileConfig: { // ContentTypeProfileConfig
 * //       ForwardWhenContentTypeIsUnknown: true || false, // required
 * //       ContentTypeProfiles: { // ContentTypeProfiles
 * //         Quantity: Number("int"), // required
 * //         Items: [ // ContentTypeProfileList
 * //           { // ContentTypeProfile
 * //             Format: "URLEncoded", // required
 * //             ProfileId: "STRING_VALUE",
 * //             ContentType: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFieldLevelEncryptionConfigCommandInput - {@link GetFieldLevelEncryptionConfigCommandInput}
 * @returns {@link GetFieldLevelEncryptionConfigCommandOutput}
 * @see {@link GetFieldLevelEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link GetFieldLevelEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchFieldLevelEncryptionConfig} (client fault)
 *  <p>The specified configuration for field-level encryption doesn't exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class GetFieldLevelEncryptionConfigCommand extends $Command<
  GetFieldLevelEncryptionConfigCommandInput,
  GetFieldLevelEncryptionConfigCommandOutput,
  CloudFrontClientResolvedConfig
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
  constructor(readonly input: GetFieldLevelEncryptionConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFieldLevelEncryptionConfigCommandInput, GetFieldLevelEncryptionConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFieldLevelEncryptionConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetFieldLevelEncryptionConfigCommand";
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
  private serialize(input: GetFieldLevelEncryptionConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetFieldLevelEncryptionConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetFieldLevelEncryptionConfigCommandOutput> {
    return de_GetFieldLevelEncryptionConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
