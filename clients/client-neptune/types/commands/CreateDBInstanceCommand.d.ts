import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { CreateDBInstanceMessage, CreateDBInstanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDBInstanceCommandInput = CreateDBInstanceMessage;
export declare type CreateDBInstanceCommandOutput = CreateDBInstanceResult & __MetadataBearer;
export declare class CreateDBInstanceCommand extends $Command<CreateDBInstanceCommandInput, CreateDBInstanceCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: CreateDBInstanceCommandInput;
    constructor(input: CreateDBInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDBInstanceCommandInput, CreateDBInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
