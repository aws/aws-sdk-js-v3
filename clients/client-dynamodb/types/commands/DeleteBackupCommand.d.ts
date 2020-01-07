import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DeleteBackupInput, DeleteBackupOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteBackupCommandInput = DeleteBackupInput;
export declare type DeleteBackupCommandOutput = DeleteBackupOutput & __MetadataBearer;
export declare class DeleteBackupCommand extends $Command<DeleteBackupCommandInput, DeleteBackupCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DeleteBackupCommandInput;
    constructor(input: DeleteBackupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBackupCommandInput, DeleteBackupCommandOutput>;
    private serialize;
    private deserialize;
}
