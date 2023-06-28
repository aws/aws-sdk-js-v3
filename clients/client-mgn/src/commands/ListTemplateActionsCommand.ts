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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { ListTemplateActionsRequest, ListTemplateActionsResponse } from "../models/models_0";
import { de_ListTemplateActionsCommand, se_ListTemplateActionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTemplateActionsCommand}.
 */
export interface ListTemplateActionsCommandInput extends ListTemplateActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTemplateActionsCommand}.
 */
export interface ListTemplateActionsCommandOutput extends ListTemplateActionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>List template post migration custom actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListTemplateActionsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListTemplateActionsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // ListTemplateActionsRequest
 *   launchConfigurationTemplateID: "STRING_VALUE", // required
 *   filters: { // TemplateActionsRequestFilters
 *     actionIDs: [ // ActionIDs
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTemplateActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTemplateActionsResponse
 * //   items: [ // TemplateActionDocuments
 * //     { // TemplateActionDocument
 * //       actionID: "STRING_VALUE",
 * //       actionName: "STRING_VALUE",
 * //       documentIdentifier: "STRING_VALUE",
 * //       order: Number("int"),
 * //       documentVersion: "STRING_VALUE",
 * //       active: true || false,
 * //       timeoutSeconds: Number("int"),
 * //       mustSucceedForCutover: true || false,
 * //       parameters: { // SsmDocumentParameters
 * //         "<keys>": [ // SsmParameterStoreParameters
 * //           { // SsmParameterStoreParameter
 * //             parameterType: "STRING_VALUE", // required
 * //             parameterName: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       operatingSystem: "STRING_VALUE",
 * //       externalParameters: { // SsmDocumentExternalParameters
 * //         "<keys>": { // SsmExternalParameter Union: only one key present
 * //           dynamicPath: "STRING_VALUE",
 * //         },
 * //       },
 * //       description: "STRING_VALUE",
 * //       category: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTemplateActionsCommandInput - {@link ListTemplateActionsCommandInput}
 * @returns {@link ListTemplateActionsCommandOutput}
 * @see {@link ListTemplateActionsCommandInput} for command's `input` shape.
 * @see {@link ListTemplateActionsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 */
export class ListTemplateActionsCommand extends $Command<
  ListTemplateActionsCommandInput,
  ListTemplateActionsCommandOutput,
  MgnClientResolvedConfig
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
  constructor(readonly input: ListTemplateActionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTemplateActionsCommandInput, ListTemplateActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTemplateActionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "ListTemplateActionsCommand";
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
  private serialize(input: ListTemplateActionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTemplateActionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTemplateActionsCommandOutput> {
    return de_ListTemplateActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
