import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { GetSnowballUsageRequest, GetSnowballUsageResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSnowballUsageCommandInput = GetSnowballUsageRequest;
export declare type GetSnowballUsageCommandOutput = GetSnowballUsageResult & __MetadataBearer;
export declare class GetSnowballUsageCommand extends $Command<GetSnowballUsageCommandInput, GetSnowballUsageCommandOutput, SnowballClientResolvedConfig> {
    readonly input: GetSnowballUsageCommandInput;
    constructor(input: GetSnowballUsageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSnowballUsageCommandInput, GetSnowballUsageCommandOutput>;
    private serialize;
    private deserialize;
}
