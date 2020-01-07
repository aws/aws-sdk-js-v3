import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { ModifyDBInstanceMessage, ModifyDBInstanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyDBInstanceCommandInput = ModifyDBInstanceMessage;
export declare type ModifyDBInstanceCommandOutput = ModifyDBInstanceResult & __MetadataBearer;
export declare class ModifyDBInstanceCommand extends $Command<ModifyDBInstanceCommandInput, ModifyDBInstanceCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: ModifyDBInstanceCommandInput;
    constructor(input: ModifyDBInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBInstanceCommandInput, ModifyDBInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
