import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateClassifierRequest, UpdateClassifierResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateClassifierCommandInput = UpdateClassifierRequest;
export declare type UpdateClassifierCommandOutput = UpdateClassifierResponse & __MetadataBearer;
export declare class UpdateClassifierCommand extends $Command<UpdateClassifierCommandInput, UpdateClassifierCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateClassifierCommandInput;
    constructor(input: UpdateClassifierCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateClassifierCommandInput, UpdateClassifierCommandOutput>;
    private serialize;
    private deserialize;
}
