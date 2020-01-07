import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteRelationalDatabaseRequest, DeleteRelationalDatabaseResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRelationalDatabaseCommandInput = DeleteRelationalDatabaseRequest;
export declare type DeleteRelationalDatabaseCommandOutput = DeleteRelationalDatabaseResult & __MetadataBearer;
export declare class DeleteRelationalDatabaseCommand extends $Command<DeleteRelationalDatabaseCommandInput, DeleteRelationalDatabaseCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteRelationalDatabaseCommandInput;
    constructor(input: DeleteRelationalDatabaseCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRelationalDatabaseCommandInput, DeleteRelationalDatabaseCommandOutput>;
    private serialize;
    private deserialize;
}
