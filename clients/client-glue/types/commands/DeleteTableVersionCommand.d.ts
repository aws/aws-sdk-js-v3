import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteTableVersionRequest, DeleteTableVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTableVersionCommandInput = DeleteTableVersionRequest;
export declare type DeleteTableVersionCommandOutput = DeleteTableVersionResponse & __MetadataBearer;
export declare class DeleteTableVersionCommand extends $Command<DeleteTableVersionCommandInput, DeleteTableVersionCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteTableVersionCommandInput;
    constructor(input: DeleteTableVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTableVersionCommandInput, DeleteTableVersionCommandOutput>;
    private serialize;
    private deserialize;
}
