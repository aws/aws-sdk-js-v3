import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateTableRequest, UpdateTableResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateTableCommandInput = UpdateTableRequest;
export declare type UpdateTableCommandOutput = UpdateTableResponse & __MetadataBearer;
export declare class UpdateTableCommand extends $Command<UpdateTableCommandInput, UpdateTableCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateTableCommandInput;
    constructor(input: UpdateTableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTableCommandInput, UpdateTableCommandOutput>;
    private serialize;
    private deserialize;
}
