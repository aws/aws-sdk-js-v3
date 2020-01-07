import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { CreateBackupInput, CreateBackupOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateBackupCommandInput = CreateBackupInput;
export declare type CreateBackupCommandOutput = CreateBackupOutput & __MetadataBearer;
export declare class CreateBackupCommand extends $Command<CreateBackupCommandInput, CreateBackupCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: CreateBackupCommandInput;
    constructor(input: CreateBackupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateBackupCommandInput, CreateBackupCommandOutput>;
    private serialize;
    private deserialize;
}
