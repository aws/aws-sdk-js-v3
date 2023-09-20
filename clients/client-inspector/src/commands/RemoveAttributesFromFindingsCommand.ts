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
import { RemoveAttributesFromFindingsRequest, RemoveAttributesFromFindingsResponse } from "../models/models_0";
import {
  de_RemoveAttributesFromFindingsCommand,
  se_RemoveAttributesFromFindingsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RemoveAttributesFromFindingsCommand}.
 */
export interface RemoveAttributesFromFindingsCommandInput extends RemoveAttributesFromFindingsRequest {}
/**
 * @public
 *
 * The output of {@link RemoveAttributesFromFindingsCommand}.
 */
export interface RemoveAttributesFromFindingsCommandOutput
  extends RemoveAttributesFromFindingsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Removes entire attributes (key and value pairs) from the findings that are specified
 *          by the ARNs of the findings where an attribute with the specified key exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, RemoveAttributesFromFindingsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, RemoveAttributesFromFindingsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // RemoveAttributesFromFindingsRequest
 *   findingArns: [ // AddRemoveAttributesFindingArnList // required
 *     "STRING_VALUE",
 *   ],
 *   attributeKeys: [ // UserAttributeKeyList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RemoveAttributesFromFindingsCommand(input);
 * const response = await client.send(command);
 * // { // RemoveAttributesFromFindingsResponse
 * //   failedItems: { // FailedItems // required
 * //     "<keys>": { // FailedItemDetails
 * //       failureCode: "INVALID_ARN" || "DUPLICATE_ARN" || "ITEM_DOES_NOT_EXIST" || "ACCESS_DENIED" || "LIMIT_EXCEEDED" || "INTERNAL_ERROR", // required
 * //       retryable: true || false, // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param RemoveAttributesFromFindingsCommandInput - {@link RemoveAttributesFromFindingsCommandInput}
 * @returns {@link RemoveAttributesFromFindingsCommandOutput}
 * @see {@link RemoveAttributesFromFindingsCommandInput} for command's `input` shape.
 * @see {@link RemoveAttributesFromFindingsCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceTemporarilyUnavailableException} (server fault)
 *  <p>The serice is temporary unavailable.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @example Remove attributes from findings
 * ```javascript
 * // Removes entire attributes (key and value pairs) from the findings that are specified by the ARNs of the findings where an attribute with the specified key exists.
 * const input = {
 *   "attributeKeys": [
 *     "key=Example,value=example"
 *   ],
 *   "findingArns": [
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-8l1VIE0D/run/0-Z02cjjug/finding/0-T8yM9mEU"
 *   ]
 * };
 * const command = new RemoveAttributesFromFindingsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "failedItems": {}
 * }
 * *\/
 * // example id: remove-attributes-from-findings-1481067246548
 * ```
 *
 */
export class RemoveAttributesFromFindingsCommand extends $Command<
  RemoveAttributesFromFindingsCommandInput,
  RemoveAttributesFromFindingsCommandOutput,
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
  constructor(readonly input: RemoveAttributesFromFindingsCommandInput) {
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
  ): Handler<RemoveAttributesFromFindingsCommandInput, RemoveAttributesFromFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveAttributesFromFindingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "RemoveAttributesFromFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "InspectorService",
        operation: "RemoveAttributesFromFindings",
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
  private serialize(input: RemoveAttributesFromFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RemoveAttributesFromFindingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveAttributesFromFindingsCommandOutput> {
    return de_RemoveAttributesFromFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
