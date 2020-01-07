import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { RestoreTableFromBackupInput, RestoreTableFromBackupOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RestoreTableFromBackupCommandInput = RestoreTableFromBackupInput;
export declare type RestoreTableFromBackupCommandOutput = RestoreTableFromBackupOutput & __MetadataBearer;
export declare class RestoreTableFromBackupCommand extends $Command<RestoreTableFromBackupCommandInput, RestoreTableFromBackupCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: RestoreTableFromBackupCommandInput;
    constructor(input: RestoreTableFromBackupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreTableFromBackupCommandInput, RestoreTableFromBackupCommandOutput>;
    private serialize;
    private deserialize;
}
