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

import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { UpdateACLRequest, UpdateACLResponse } from "../models/models_0";
import { de_UpdateACLCommand, se_UpdateACLCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateACLCommand}.
 */
export interface UpdateACLCommandInput extends UpdateACLRequest {}
/**
 * @public
 *
 * The output of {@link UpdateACLCommand}.
 */
export interface UpdateACLCommandOutput extends UpdateACLResponse, __MetadataBearer {}

/**
 * @public
 * <p>Changes the list of users that belong to the Access Control List.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, UpdateACLCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, UpdateACLCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // UpdateACLRequest
 *   ACLName: "STRING_VALUE", // required
 *   UserNamesToAdd: [ // UserNameListInput
 *     "STRING_VALUE",
 *   ],
 *   UserNamesToRemove: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateACLCommand(input);
 * const response = await client.send(command);
 * // { // UpdateACLResponse
 * //   ACL: { // ACL
 * //     Name: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     UserNames: [ // UserNameList
 * //       "STRING_VALUE",
 * //     ],
 * //     MinimumEngineVersion: "STRING_VALUE",
 * //     PendingChanges: { // ACLPendingChanges
 * //       UserNamesToRemove: [
 * //         "STRING_VALUE",
 * //       ],
 * //       UserNamesToAdd: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Clusters: [ // ACLClusterNameList
 * //       "STRING_VALUE",
 * //     ],
 * //     ARN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateACLCommandInput - {@link UpdateACLCommandInput}
 * @returns {@link UpdateACLCommandOutput}
 * @see {@link UpdateACLCommandInput} for command's `input` shape.
 * @see {@link UpdateACLCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link ACLNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link DefaultUserRequired} (client fault)
 *  <p></p>
 *
 * @throws {@link DuplicateUserNameFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidACLStateFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link UserNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 */
export class UpdateACLCommand extends $Command<
  UpdateACLCommandInput,
  UpdateACLCommandOutput,
  MemoryDBClientResolvedConfig
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
  constructor(readonly input: UpdateACLCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MemoryDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateACLCommandInput, UpdateACLCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateACLCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "UpdateACLCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonMemoryDB",
        operation: "UpdateACL",
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
  private serialize(input: UpdateACLCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateACLCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateACLCommandOutput> {
    return de_UpdateACLCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
