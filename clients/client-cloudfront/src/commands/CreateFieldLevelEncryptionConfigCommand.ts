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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateFieldLevelEncryptionConfigRequest, CreateFieldLevelEncryptionConfigResult } from "../models/models_0";
import {
  de_CreateFieldLevelEncryptionConfigCommand,
  se_CreateFieldLevelEncryptionConfigCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateFieldLevelEncryptionConfigCommand}.
 */
export interface CreateFieldLevelEncryptionConfigCommandInput extends CreateFieldLevelEncryptionConfigRequest {}
/**
 * @public
 *
 * The output of {@link CreateFieldLevelEncryptionConfigCommand}.
 */
export interface CreateFieldLevelEncryptionConfigCommandOutput
  extends CreateFieldLevelEncryptionConfigResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Create a new field-level encryption configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateFieldLevelEncryptionConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateFieldLevelEncryptionConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // CreateFieldLevelEncryptionConfigRequest
 *   FieldLevelEncryptionConfig: { // FieldLevelEncryptionConfig
 *     CallerReference: "STRING_VALUE", // required
 *     Comment: "STRING_VALUE",
 *     QueryArgProfileConfig: { // QueryArgProfileConfig
 *       ForwardWhenQueryArgProfileIsUnknown: true || false, // required
 *       QueryArgProfiles: { // QueryArgProfiles
 *         Quantity: Number("int"), // required
 *         Items: [ // QueryArgProfileList
 *           { // QueryArgProfile
 *             QueryArg: "STRING_VALUE", // required
 *             ProfileId: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *     ContentTypeProfileConfig: { // ContentTypeProfileConfig
 *       ForwardWhenContentTypeIsUnknown: true || false, // required
 *       ContentTypeProfiles: { // ContentTypeProfiles
 *         Quantity: Number("int"), // required
 *         Items: [ // ContentTypeProfileList
 *           { // ContentTypeProfile
 *             Format: "URLEncoded", // required
 *             ProfileId: "STRING_VALUE",
 *             ContentType: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *   },
 * };
 * const command = new CreateFieldLevelEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreateFieldLevelEncryptionConfigResult
 * //   FieldLevelEncryption: { // FieldLevelEncryption
 * //     Id: "STRING_VALUE", // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     FieldLevelEncryptionConfig: { // FieldLevelEncryptionConfig
 * //       CallerReference: "STRING_VALUE", // required
 * //       Comment: "STRING_VALUE",
 * //       QueryArgProfileConfig: { // QueryArgProfileConfig
 * //         ForwardWhenQueryArgProfileIsUnknown: true || false, // required
 * //         QueryArgProfiles: { // QueryArgProfiles
 * //           Quantity: Number("int"), // required
 * //           Items: [ // QueryArgProfileList
 * //             { // QueryArgProfile
 * //               QueryArg: "STRING_VALUE", // required
 * //               ProfileId: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       ContentTypeProfileConfig: { // ContentTypeProfileConfig
 * //         ForwardWhenContentTypeIsUnknown: true || false, // required
 * //         ContentTypeProfiles: { // ContentTypeProfiles
 * //           Quantity: Number("int"), // required
 * //           Items: [ // ContentTypeProfileList
 * //             { // ContentTypeProfile
 * //               Format: "URLEncoded", // required
 * //               ProfileId: "STRING_VALUE",
 * //               ContentType: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   },
 * //   Location: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFieldLevelEncryptionConfigCommandInput - {@link CreateFieldLevelEncryptionConfigCommandInput}
 * @returns {@link CreateFieldLevelEncryptionConfigCommandOutput}
 * @see {@link CreateFieldLevelEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link CreateFieldLevelEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link FieldLevelEncryptionConfigAlreadyExists} (client fault)
 *  <p>The specified configuration for field-level encryption already exists.</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't
 * 			match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link NoSuchFieldLevelEncryptionProfile} (client fault)
 *  <p>The specified profile for field-level encryption doesn't exist.</p>
 *
 * @throws {@link QueryArgProfileEmpty} (client fault)
 *  <p>No profile specified for the field-level encryption query argument.</p>
 *
 * @throws {@link TooManyFieldLevelEncryptionConfigs} (client fault)
 *  <p>The maximum number of configurations for field-level encryption have been
 * 			created.</p>
 *
 * @throws {@link TooManyFieldLevelEncryptionContentTypeProfiles} (client fault)
 *  <p>The maximum number of content type profiles for field-level encryption have been
 * 			created.</p>
 *
 * @throws {@link TooManyFieldLevelEncryptionQueryArgProfiles} (client fault)
 *  <p>The maximum number of query arg profiles for field-level encryption have been
 * 			created.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class CreateFieldLevelEncryptionConfigCommand extends $Command<
  CreateFieldLevelEncryptionConfigCommandInput,
  CreateFieldLevelEncryptionConfigCommandOutput,
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
  constructor(readonly input: CreateFieldLevelEncryptionConfigCommandInput) {
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
  ): Handler<CreateFieldLevelEncryptionConfigCommandInput, CreateFieldLevelEncryptionConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFieldLevelEncryptionConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateFieldLevelEncryptionConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Cloudfront2020_05_31",
        operation: "CreateFieldLevelEncryptionConfig",
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
  private serialize(
    input: CreateFieldLevelEncryptionConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateFieldLevelEncryptionConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateFieldLevelEncryptionConfigCommandOutput> {
    return de_CreateFieldLevelEncryptionConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
