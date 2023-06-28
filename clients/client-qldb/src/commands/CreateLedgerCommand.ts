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

import { CreateLedgerRequest, CreateLedgerResponse } from "../models/models_0";
import { de_CreateLedgerCommand, se_CreateLedgerCommand } from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLedgerCommand}.
 */
export interface CreateLedgerCommandInput extends CreateLedgerRequest {}
/**
 * @public
 *
 * The output of {@link CreateLedgerCommand}.
 */
export interface CreateLedgerCommandOutput extends CreateLedgerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new ledger in your Amazon Web Services account in the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, CreateLedgerCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, CreateLedgerCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const input = { // CreateLedgerRequest
 *   Name: "STRING_VALUE", // required
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   PermissionsMode: "ALLOW_ALL" || "STANDARD", // required
 *   DeletionProtection: true || false,
 *   KmsKey: "STRING_VALUE",
 * };
 * const command = new CreateLedgerCommand(input);
 * const response = await client.send(command);
 * // { // CreateLedgerResponse
 * //   Name: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   State: "CREATING" || "ACTIVE" || "DELETING" || "DELETED",
 * //   CreationDateTime: new Date("TIMESTAMP"),
 * //   PermissionsMode: "ALLOW_ALL" || "STANDARD",
 * //   DeletionProtection: true || false,
 * //   KmsKeyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLedgerCommandInput - {@link CreateLedgerCommandInput}
 * @returns {@link CreateLedgerCommandOutput}
 * @see {@link CreateLedgerCommandInput} for command's `input` shape.
 * @see {@link CreateLedgerCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in the request aren't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have reached the limit on the maximum number of resources allowed.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource can't be modified at this time.</p>
 *
 * @throws {@link QLDBServiceException}
 * <p>Base exception class for all service exceptions from QLDB service.</p>
 *
 */
export class CreateLedgerCommand extends $Command<
  CreateLedgerCommandInput,
  CreateLedgerCommandOutput,
  QLDBClientResolvedConfig
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
  constructor(readonly input: CreateLedgerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QLDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLedgerCommandInput, CreateLedgerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateLedgerCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "CreateLedgerCommand";
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
  private serialize(input: CreateLedgerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLedgerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLedgerCommandOutput> {
    return de_CreateLedgerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
