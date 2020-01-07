import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRegionsRequest, GetRegionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRegionsCommandInput = GetRegionsRequest;
export declare type GetRegionsCommandOutput = GetRegionsResult & __MetadataBearer;
export declare class GetRegionsCommand extends $Command<GetRegionsCommandInput, GetRegionsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRegionsCommandInput;
    constructor(input: GetRegionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRegionsCommandInput, GetRegionsCommandOutput>;
    private serialize;
    private deserialize;
}
