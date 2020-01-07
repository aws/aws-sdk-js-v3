import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteTableRequest, DeleteTableResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTableCommandInput = DeleteTableRequest;
export declare type DeleteTableCommandOutput = DeleteTableResponse & __MetadataBearer;
export declare class DeleteTableCommand extends $Command<DeleteTableCommandInput, DeleteTableCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteTableCommandInput;
    constructor(input: DeleteTableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTableCommandInput, DeleteTableCommandOutput>;
    private serialize;
    private deserialize;
}
