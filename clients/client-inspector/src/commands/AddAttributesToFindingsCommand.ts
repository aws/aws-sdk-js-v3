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
import { AddAttributesToFindingsRequest, AddAttributesToFindingsResponse } from "../models/models_0";
import { de_AddAttributesToFindingsCommand, se_AddAttributesToFindingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddAttributesToFindingsCommand}.
 */
export interface AddAttributesToFindingsCommandInput extends AddAttributesToFindingsRequest {}
/**
 * @public
 *
 * The output of {@link AddAttributesToFindingsCommand}.
 */
export interface AddAttributesToFindingsCommandOutput extends AddAttributesToFindingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Assigns attributes (key and value pairs) to the findings that are specified by the
 *          ARNs of the findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, AddAttributesToFindingsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, AddAttributesToFindingsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // AddAttributesToFindingsRequest
 *   findingArns: [ // AddRemoveAttributesFindingArnList // required
 *     "STRING_VALUE",
 *   ],
 *   attributes: [ // UserAttributeList // required
 *     { // Attribute
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AddAttributesToFindingsCommand(input);
 * const response = await client.send(command);
 * // { // AddAttributesToFindingsResponse
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
 * @param AddAttributesToFindingsCommandInput - {@link AddAttributesToFindingsCommandInput}
 * @returns {@link AddAttributesToFindingsCommandOutput}
 * @see {@link AddAttributesToFindingsCommandInput} for command's `input` shape.
 * @see {@link AddAttributesToFindingsCommandOutput} for command's `response` shape.
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
 * @example Add attributes to findings
 * ```javascript
 * // Assigns attributes (key and value pairs) to the findings that are specified by the ARNs of the findings.
 * const input = {
 *   "attributes": [
 *     {
 *       "key": "Example",
 *       "value": "example"
 *     }
 *   ],
 *   "findingArns": [
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-8l1VIE0D/run/0-Z02cjjug/finding/0-T8yM9mEU"
 *   ]
 * };
 * const command = new AddAttributesToFindingsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "failedItems": {}
 * }
 * *\/
 * // example id: add-attributes-to-findings-1481063856401
 * ```
 *
 */
export class AddAttributesToFindingsCommand extends $Command<
  AddAttributesToFindingsCommandInput,
  AddAttributesToFindingsCommandOutput,
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
  constructor(readonly input: AddAttributesToFindingsCommandInput) {
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
  ): Handler<AddAttributesToFindingsCommandInput, AddAttributesToFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddAttributesToFindingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "AddAttributesToFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "InspectorService",
        operation: "AddAttributesToFindings",
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
  private serialize(input: AddAttributesToFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddAttributesToFindingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddAttributesToFindingsCommandOutput> {
    return de_AddAttributesToFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
