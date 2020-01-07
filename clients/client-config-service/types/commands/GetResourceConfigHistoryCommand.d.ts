import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetResourceConfigHistoryRequest, GetResourceConfigHistoryResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetResourceConfigHistoryCommandInput = GetResourceConfigHistoryRequest;
export declare type GetResourceConfigHistoryCommandOutput = GetResourceConfigHistoryResponse & __MetadataBearer;
export declare class GetResourceConfigHistoryCommand extends $Command<GetResourceConfigHistoryCommandInput, GetResourceConfigHistoryCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetResourceConfigHistoryCommandInput;
    constructor(input: GetResourceConfigHistoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResourceConfigHistoryCommandInput, GetResourceConfigHistoryCommandOutput>;
    private serialize;
    private deserialize;
}
