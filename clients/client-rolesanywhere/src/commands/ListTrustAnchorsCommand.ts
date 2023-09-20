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

import { ListRequest, ListTrustAnchorsResponse } from "../models/models_0";
import { de_ListTrustAnchorsCommand, se_ListTrustAnchorsCommand } from "../protocols/Aws_restJson1";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTrustAnchorsCommand}.
 */
export interface ListTrustAnchorsCommandInput extends ListRequest {}
/**
 * @public
 *
 * The output of {@link ListTrustAnchorsCommand}.
 */
export interface ListTrustAnchorsCommandOutput extends ListTrustAnchorsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the trust anchors in the authenticated account and Amazon Web Services Region.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>rolesanywhere:ListTrustAnchors</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, ListTrustAnchorsCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, ListTrustAnchorsCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * const client = new RolesAnywhereClient(config);
 * const input = { // ListRequest
 *   nextToken: "STRING_VALUE",
 *   pageSize: Number("int"),
 * };
 * const command = new ListTrustAnchorsCommand(input);
 * const response = await client.send(command);
 * // { // ListTrustAnchorsResponse
 * //   nextToken: "STRING_VALUE",
 * //   trustAnchors: [ // TrustAnchorDetails
 * //     { // TrustAnchorDetail
 * //       trustAnchorId: "STRING_VALUE",
 * //       trustAnchorArn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       source: { // Source
 * //         sourceType: "STRING_VALUE",
 * //         sourceData: { // SourceData Union: only one key present
 * //           x509CertificateData: "STRING_VALUE",
 * //           acmPcaArn: "STRING_VALUE",
 * //         },
 * //       },
 * //       enabled: true || false,
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       notificationSettings: [ // NotificationSettingDetails
 * //         { // NotificationSettingDetail
 * //           enabled: true || false, // required
 * //           event: "STRING_VALUE", // required
 * //           threshold: Number("int"),
 * //           channel: "STRING_VALUE",
 * //           configuredBy: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTrustAnchorsCommandInput - {@link ListTrustAnchorsCommandInput}
 * @returns {@link ListTrustAnchorsCommandOutput}
 * @see {@link ListTrustAnchorsCommandInput} for command's `input` shape.
 * @see {@link ListTrustAnchorsCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link RolesAnywhereServiceException}
 * <p>Base exception class for all service exceptions from RolesAnywhere service.</p>
 *
 */
export class ListTrustAnchorsCommand extends $Command<
  ListTrustAnchorsCommandInput,
  ListTrustAnchorsCommandOutput,
  RolesAnywhereClientResolvedConfig
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
  constructor(readonly input: ListTrustAnchorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RolesAnywhereClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTrustAnchorsCommandInput, ListTrustAnchorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTrustAnchorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RolesAnywhereClient";
    const commandName = "ListTrustAnchorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RolesAnywhere",
        operation: "ListTrustAnchors",
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
  private serialize(input: ListTrustAnchorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTrustAnchorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTrustAnchorsCommandOutput> {
    return de_ListTrustAnchorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
