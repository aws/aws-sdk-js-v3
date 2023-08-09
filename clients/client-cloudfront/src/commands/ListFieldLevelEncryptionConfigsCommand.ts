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
import { ListFieldLevelEncryptionConfigsRequest, ListFieldLevelEncryptionConfigsResult } from "../models/models_1";
import {
  de_ListFieldLevelEncryptionConfigsCommand,
  se_ListFieldLevelEncryptionConfigsCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFieldLevelEncryptionConfigsCommand}.
 */
export interface ListFieldLevelEncryptionConfigsCommandInput extends ListFieldLevelEncryptionConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListFieldLevelEncryptionConfigsCommand}.
 */
export interface ListFieldLevelEncryptionConfigsCommandOutput
  extends ListFieldLevelEncryptionConfigsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>List all field-level encryption configurations that have been created in CloudFront for this
 * 			account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListFieldLevelEncryptionConfigsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListFieldLevelEncryptionConfigsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // ListFieldLevelEncryptionConfigsRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListFieldLevelEncryptionConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListFieldLevelEncryptionConfigsResult
 * //   FieldLevelEncryptionList: { // FieldLevelEncryptionList
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // FieldLevelEncryptionSummaryList
 * //       { // FieldLevelEncryptionSummary
 * //         Id: "STRING_VALUE", // required
 * //         LastModifiedTime: new Date("TIMESTAMP"), // required
 * //         Comment: "STRING_VALUE",
 * //         QueryArgProfileConfig: { // QueryArgProfileConfig
 * //           ForwardWhenQueryArgProfileIsUnknown: true || false, // required
 * //           QueryArgProfiles: { // QueryArgProfiles
 * //             Quantity: Number("int"), // required
 * //             Items: [ // QueryArgProfileList
 * //               { // QueryArgProfile
 * //                 QueryArg: "STRING_VALUE", // required
 * //                 ProfileId: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         ContentTypeProfileConfig: { // ContentTypeProfileConfig
 * //           ForwardWhenContentTypeIsUnknown: true || false, // required
 * //           ContentTypeProfiles: { // ContentTypeProfiles
 * //             Quantity: Number("int"), // required
 * //             Items: [ // ContentTypeProfileList
 * //               { // ContentTypeProfile
 * //                 Format: "URLEncoded", // required
 * //                 ProfileId: "STRING_VALUE",
 * //                 ContentType: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListFieldLevelEncryptionConfigsCommandInput - {@link ListFieldLevelEncryptionConfigsCommandInput}
 * @returns {@link ListFieldLevelEncryptionConfigsCommandOutput}
 * @see {@link ListFieldLevelEncryptionConfigsCommandInput} for command's `input` shape.
 * @see {@link ListFieldLevelEncryptionConfigsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class ListFieldLevelEncryptionConfigsCommand extends $Command<
  ListFieldLevelEncryptionConfigsCommandInput,
  ListFieldLevelEncryptionConfigsCommandOutput,
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
  constructor(readonly input: ListFieldLevelEncryptionConfigsCommandInput) {
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
  ): Handler<ListFieldLevelEncryptionConfigsCommandInput, ListFieldLevelEncryptionConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFieldLevelEncryptionConfigsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListFieldLevelEncryptionConfigsCommand";
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
  private serialize(
    input: ListFieldLevelEncryptionConfigsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListFieldLevelEncryptionConfigsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListFieldLevelEncryptionConfigsCommandOutput> {
    return de_ListFieldLevelEncryptionConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
