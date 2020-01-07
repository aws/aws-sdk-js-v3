import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetClassifierRequest, GetClassifierResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetClassifierCommandInput = GetClassifierRequest;
export declare type GetClassifierCommandOutput = GetClassifierResponse & __MetadataBearer;
export declare class GetClassifierCommand extends $Command<GetClassifierCommandInput, GetClassifierCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetClassifierCommandInput;
    constructor(input: GetClassifierCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetClassifierCommandInput, GetClassifierCommandOutput>;
    private serialize;
    private deserialize;
}
