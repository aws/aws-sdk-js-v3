import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetConnectionRequest, GetConnectionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetConnectionCommandInput = GetConnectionRequest;
export declare type GetConnectionCommandOutput = GetConnectionResponse & __MetadataBearer;
export declare class GetConnectionCommand extends $Command<GetConnectionCommandInput, GetConnectionCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetConnectionCommandInput;
    constructor(input: GetConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConnectionCommandInput, GetConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
