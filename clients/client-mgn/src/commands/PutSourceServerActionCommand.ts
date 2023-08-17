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
import { PutSourceServerActionRequest, SourceServerActionDocument } from "../models/models_0";
import { de_PutSourceServerActionCommand, se_PutSourceServerActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutSourceServerActionCommand}.
 */
export interface PutSourceServerActionCommandInput extends PutSourceServerActionRequest {}
/**
 * @public
 *
 * The output of {@link PutSourceServerActionCommand}.
 */
export interface PutSourceServerActionCommandOutput extends SourceServerActionDocument, __MetadataBearer {}

/**
 * @public
 * <p>Put source server post migration custom action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, PutSourceServerActionCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, PutSourceServerActionCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // PutSourceServerActionRequest
 *   sourceServerID: "STRING_VALUE", // required
 *   actionName: "STRING_VALUE", // required
 *   documentIdentifier: "STRING_VALUE", // required
 *   order: Number("int"), // required
 *   actionID: "STRING_VALUE", // required
 *   documentVersion: "STRING_VALUE",
 *   active: true || false,
 *   timeoutSeconds: Number("int"),
 *   mustSucceedForCutover: true || false,
 *   parameters: { // SsmDocumentParameters
 *     "<keys>": [ // SsmParameterStoreParameters
 *       { // SsmParameterStoreParameter
 *         parameterType: "STRING_VALUE", // required
 *         parameterName: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   externalParameters: { // SsmDocumentExternalParameters
 *     "<keys>": { // SsmExternalParameter Union: only one key present
 *       dynamicPath: "STRING_VALUE",
 *     },
 *   },
 *   description: "STRING_VALUE",
 *   category: "STRING_VALUE",
 *   accountID: "STRING_VALUE",
 * };
 * const command = new PutSourceServerActionCommand(input);
 * const response = await client.send(command);
 * // { // SourceServerActionDocument
 * //   actionID: "STRING_VALUE",
 * //   actionName: "STRING_VALUE",
 * //   documentIdentifier: "STRING_VALUE",
 * //   order: Number("int"),
 * //   documentVersion: "STRING_VALUE",
 * //   active: true || false,
 * //   timeoutSeconds: Number("int"),
 * //   mustSucceedForCutover: true || false,
 * //   parameters: { // SsmDocumentParameters
 * //     "<keys>": [ // SsmParameterStoreParameters
 * //       { // SsmParameterStoreParameter
 * //         parameterType: "STRING_VALUE", // required
 * //         parameterName: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   externalParameters: { // SsmDocumentExternalParameters
 * //     "<keys>": { // SsmExternalParameter Union: only one key present
 * //       dynamicPath: "STRING_VALUE",
 * //     },
 * //   },
 * //   description: "STRING_VALUE",
 * //   category: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutSourceServerActionCommandInput - {@link PutSourceServerActionCommandInput}
 * @returns {@link PutSourceServerActionCommandOutput}
 * @see {@link PutSourceServerActionCommandInput} for command's `input` shape.
 * @see {@link PutSourceServerActionCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 */
export class PutSourceServerActionCommand extends $Command<
  PutSourceServerActionCommandInput,
  PutSourceServerActionCommandOutput,
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
  constructor(readonly input: PutSourceServerActionCommandInput) {
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
  ): Handler<PutSourceServerActionCommandInput, PutSourceServerActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutSourceServerActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "PutSourceServerActionCommand";
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
  private serialize(input: PutSourceServerActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutSourceServerActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutSourceServerActionCommandOutput> {
    return de_PutSourceServerActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
