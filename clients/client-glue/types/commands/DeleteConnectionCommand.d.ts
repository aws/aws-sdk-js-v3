import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteConnectionRequest, DeleteConnectionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteConnectionCommandInput = DeleteConnectionRequest;
export declare type DeleteConnectionCommandOutput = DeleteConnectionResponse & __MetadataBearer;
export declare class DeleteConnectionCommand extends $Command<DeleteConnectionCommandInput, DeleteConnectionCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteConnectionCommandInput;
    constructor(input: DeleteConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConnectionCommandInput, DeleteConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
