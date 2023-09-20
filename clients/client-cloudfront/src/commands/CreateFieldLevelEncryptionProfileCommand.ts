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
import { CreateFieldLevelEncryptionProfileRequest, CreateFieldLevelEncryptionProfileResult } from "../models/models_0";
import {
  de_CreateFieldLevelEncryptionProfileCommand,
  se_CreateFieldLevelEncryptionProfileCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateFieldLevelEncryptionProfileCommand}.
 */
export interface CreateFieldLevelEncryptionProfileCommandInput extends CreateFieldLevelEncryptionProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateFieldLevelEncryptionProfileCommand}.
 */
export interface CreateFieldLevelEncryptionProfileCommandOutput
  extends CreateFieldLevelEncryptionProfileResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Create a field-level encryption profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateFieldLevelEncryptionProfileCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateFieldLevelEncryptionProfileCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // CreateFieldLevelEncryptionProfileRequest
 *   FieldLevelEncryptionProfileConfig: { // FieldLevelEncryptionProfileConfig
 *     Name: "STRING_VALUE", // required
 *     CallerReference: "STRING_VALUE", // required
 *     Comment: "STRING_VALUE",
 *     EncryptionEntities: { // EncryptionEntities
 *       Quantity: Number("int"), // required
 *       Items: [ // EncryptionEntityList
 *         { // EncryptionEntity
 *           PublicKeyId: "STRING_VALUE", // required
 *           ProviderId: "STRING_VALUE", // required
 *           FieldPatterns: { // FieldPatterns
 *             Quantity: Number("int"), // required
 *             Items: [ // FieldPatternList
 *               "STRING_VALUE",
 *             ],
 *           },
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new CreateFieldLevelEncryptionProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateFieldLevelEncryptionProfileResult
 * //   FieldLevelEncryptionProfile: { // FieldLevelEncryptionProfile
 * //     Id: "STRING_VALUE", // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     FieldLevelEncryptionProfileConfig: { // FieldLevelEncryptionProfileConfig
 * //       Name: "STRING_VALUE", // required
 * //       CallerReference: "STRING_VALUE", // required
 * //       Comment: "STRING_VALUE",
 * //       EncryptionEntities: { // EncryptionEntities
 * //         Quantity: Number("int"), // required
 * //         Items: [ // EncryptionEntityList
 * //           { // EncryptionEntity
 * //             PublicKeyId: "STRING_VALUE", // required
 * //             ProviderId: "STRING_VALUE", // required
 * //             FieldPatterns: { // FieldPatterns
 * //               Quantity: Number("int"), // required
 * //               Items: [ // FieldPatternList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   Location: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFieldLevelEncryptionProfileCommandInput - {@link CreateFieldLevelEncryptionProfileCommandInput}
 * @returns {@link CreateFieldLevelEncryptionProfileCommandOutput}
 * @see {@link CreateFieldLevelEncryptionProfileCommandInput} for command's `input` shape.
 * @see {@link CreateFieldLevelEncryptionProfileCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link FieldLevelEncryptionProfileAlreadyExists} (client fault)
 *  <p>The specified profile for field-level encryption already exists.</p>
 *
 * @throws {@link FieldLevelEncryptionProfileSizeExceeded} (client fault)
 *  <p>The maximum size of a profile for field-level encryption was exceeded.</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't
 * 			match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link NoSuchPublicKey} (client fault)
 *  <p>The specified public key doesn't exist.</p>
 *
 * @throws {@link TooManyFieldLevelEncryptionEncryptionEntities} (client fault)
 *  <p>The maximum number of encryption entities for field-level encryption have been
 * 			created.</p>
 *
 * @throws {@link TooManyFieldLevelEncryptionFieldPatterns} (client fault)
 *  <p>The maximum number of field patterns for field-level encryption have been
 * 			created.</p>
 *
 * @throws {@link TooManyFieldLevelEncryptionProfiles} (client fault)
 *  <p>The maximum number of profiles for field-level encryption have been created.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class CreateFieldLevelEncryptionProfileCommand extends $Command<
  CreateFieldLevelEncryptionProfileCommandInput,
  CreateFieldLevelEncryptionProfileCommandOutput,
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
  constructor(readonly input: CreateFieldLevelEncryptionProfileCommandInput) {
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
  ): Handler<CreateFieldLevelEncryptionProfileCommandInput, CreateFieldLevelEncryptionProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFieldLevelEncryptionProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateFieldLevelEncryptionProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Cloudfront2020_05_31",
        operation: "CreateFieldLevelEncryptionProfile",
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
    input: CreateFieldLevelEncryptionProfileCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateFieldLevelEncryptionProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateFieldLevelEncryptionProfileCommandOutput> {
    return de_CreateFieldLevelEncryptionProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
