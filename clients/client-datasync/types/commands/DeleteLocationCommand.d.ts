import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DeleteLocationRequest, DeleteLocationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLocationCommandInput = DeleteLocationRequest;
export declare type DeleteLocationCommandOutput = DeleteLocationResponse & __MetadataBearer;
export declare class DeleteLocationCommand extends $Command<DeleteLocationCommandInput, DeleteLocationCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: DeleteLocationCommandInput;
    constructor(input: DeleteLocationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLocationCommandInput, DeleteLocationCommandOutput>;
    private serialize;
    private deserialize;
}
