import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteJobRequest, DeleteJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteJobCommandInput = DeleteJobRequest;
export declare type DeleteJobCommandOutput = DeleteJobResponse & __MetadataBearer;
export declare class DeleteJobCommand extends $Command<DeleteJobCommandInput, DeleteJobCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteJobCommandInput;
    constructor(input: DeleteJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteJobCommandInput, DeleteJobCommandOutput>;
    private serialize;
    private deserialize;
}
