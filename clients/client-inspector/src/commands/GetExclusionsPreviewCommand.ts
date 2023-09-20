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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { GetExclusionsPreviewRequest, GetExclusionsPreviewResponse } from "../models/models_0";
import { de_GetExclusionsPreviewCommand, se_GetExclusionsPreviewCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetExclusionsPreviewCommand}.
 */
export interface GetExclusionsPreviewCommandInput extends GetExclusionsPreviewRequest {}
/**
 * @public
 *
 * The output of {@link GetExclusionsPreviewCommand}.
 */
export interface GetExclusionsPreviewCommandOutput extends GetExclusionsPreviewResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the exclusions preview (a list of ExclusionPreview objects) specified by
 *          the preview token. You can obtain the preview token by running the CreateExclusionsPreview
 *          API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, GetExclusionsPreviewCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, GetExclusionsPreviewCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // GetExclusionsPreviewRequest
 *   assessmentTemplateArn: "STRING_VALUE", // required
 *   previewToken: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   locale: "EN_US",
 * };
 * const command = new GetExclusionsPreviewCommand(input);
 * const response = await client.send(command);
 * // { // GetExclusionsPreviewResponse
 * //   previewStatus: "WORK_IN_PROGRESS" || "COMPLETED", // required
 * //   exclusionPreviews: [ // ExclusionPreviewList
 * //     { // ExclusionPreview
 * //       title: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       recommendation: "STRING_VALUE", // required
 * //       scopes: [ // ScopeList // required
 * //         { // Scope
 * //           key: "INSTANCE_ID" || "RULES_PACKAGE_ARN",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       attributes: [ // AttributeList
 * //         { // Attribute
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetExclusionsPreviewCommandInput - {@link GetExclusionsPreviewCommandInput}
 * @returns {@link GetExclusionsPreviewCommandOutput}
 * @see {@link GetExclusionsPreviewCommandInput} for command's `input` shape.
 * @see {@link GetExclusionsPreviewCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 */
export class GetExclusionsPreviewCommand extends $Command<
  GetExclusionsPreviewCommandInput,
  GetExclusionsPreviewCommandOutput,
  InspectorClientResolvedConfig
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
  constructor(readonly input: GetExclusionsPreviewCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetExclusionsPreviewCommandInput, GetExclusionsPreviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetExclusionsPreviewCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "GetExclusionsPreviewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "InspectorService",
        operation: "GetExclusionsPreview",
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
  private serialize(input: GetExclusionsPreviewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetExclusionsPreviewCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetExclusionsPreviewCommandOutput> {
    return de_GetExclusionsPreviewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
