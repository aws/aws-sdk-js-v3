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
import { ListFieldLevelEncryptionProfilesRequest, ListFieldLevelEncryptionProfilesResult } from "../models/models_1";
import {
  de_ListFieldLevelEncryptionProfilesCommand,
  se_ListFieldLevelEncryptionProfilesCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFieldLevelEncryptionProfilesCommand}.
 */
export interface ListFieldLevelEncryptionProfilesCommandInput extends ListFieldLevelEncryptionProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListFieldLevelEncryptionProfilesCommand}.
 */
export interface ListFieldLevelEncryptionProfilesCommandOutput
  extends ListFieldLevelEncryptionProfilesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Request a list of field-level encryption profiles that have been created in CloudFront for
 * 			this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListFieldLevelEncryptionProfilesCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListFieldLevelEncryptionProfilesCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // ListFieldLevelEncryptionProfilesRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListFieldLevelEncryptionProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListFieldLevelEncryptionProfilesResult
 * //   FieldLevelEncryptionProfileList: { // FieldLevelEncryptionProfileList
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // FieldLevelEncryptionProfileSummaryList
 * //       { // FieldLevelEncryptionProfileSummary
 * //         Id: "STRING_VALUE", // required
 * //         LastModifiedTime: new Date("TIMESTAMP"), // required
 * //         Name: "STRING_VALUE", // required
 * //         EncryptionEntities: { // EncryptionEntities
 * //           Quantity: Number("int"), // required
 * //           Items: [ // EncryptionEntityList
 * //             { // EncryptionEntity
 * //               PublicKeyId: "STRING_VALUE", // required
 * //               ProviderId: "STRING_VALUE", // required
 * //               FieldPatterns: { // FieldPatterns
 * //                 Quantity: Number("int"), // required
 * //                 Items: [ // FieldPatternList
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //           ],
 * //         },
 * //         Comment: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListFieldLevelEncryptionProfilesCommandInput - {@link ListFieldLevelEncryptionProfilesCommandInput}
 * @returns {@link ListFieldLevelEncryptionProfilesCommandOutput}
 * @see {@link ListFieldLevelEncryptionProfilesCommandInput} for command's `input` shape.
 * @see {@link ListFieldLevelEncryptionProfilesCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class ListFieldLevelEncryptionProfilesCommand extends $Command<
  ListFieldLevelEncryptionProfilesCommandInput,
  ListFieldLevelEncryptionProfilesCommandOutput,
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
  constructor(readonly input: ListFieldLevelEncryptionProfilesCommandInput) {
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
  ): Handler<ListFieldLevelEncryptionProfilesCommandInput, ListFieldLevelEncryptionProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFieldLevelEncryptionProfilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListFieldLevelEncryptionProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Cloudfront2020_05_31",
        operation: "ListFieldLevelEncryptionProfiles",
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
    input: ListFieldLevelEncryptionProfilesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListFieldLevelEncryptionProfilesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListFieldLevelEncryptionProfilesCommandOutput> {
    return de_ListFieldLevelEncryptionProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
