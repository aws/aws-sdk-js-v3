import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { CreateDBInstanceMessage, CreateDBInstanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDBInstanceCommandInput = CreateDBInstanceMessage;
export declare type CreateDBInstanceCommandOutput = CreateDBInstanceResult & __MetadataBearer;
export declare class CreateDBInstanceCommand extends $Command<CreateDBInstanceCommandInput, CreateDBInstanceCommandOutput, DocDBClientResolvedConfig> {
    readonly input: CreateDBInstanceCommandInput;
    constructor(input: CreateDBInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDBInstanceCommandInput, CreateDBInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
