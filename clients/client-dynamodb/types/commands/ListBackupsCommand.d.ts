import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { ListBackupsInput, ListBackupsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListBackupsCommandInput = ListBackupsInput;
export declare type ListBackupsCommandOutput = ListBackupsOutput & __MetadataBearer;
export declare class ListBackupsCommand extends $Command<ListBackupsCommandInput, ListBackupsCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: ListBackupsCommandInput;
    constructor(input: ListBackupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBackupsCommandInput, ListBackupsCommandOutput>;
    private serialize;
    private deserialize;
}
