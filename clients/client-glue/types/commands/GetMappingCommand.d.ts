import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetMappingRequest, GetMappingResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetMappingCommandInput = GetMappingRequest;
export declare type GetMappingCommandOutput = GetMappingResponse & __MetadataBearer;
export declare class GetMappingCommand extends $Command<GetMappingCommandInput, GetMappingCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetMappingCommandInput;
    constructor(input: GetMappingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMappingCommandInput, GetMappingCommandOutput>;
    private serialize;
    private deserialize;
}
