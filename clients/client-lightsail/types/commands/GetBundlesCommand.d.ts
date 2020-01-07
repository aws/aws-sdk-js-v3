import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetBundlesRequest, GetBundlesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBundlesCommandInput = GetBundlesRequest;
export declare type GetBundlesCommandOutput = GetBundlesResult & __MetadataBearer;
export declare class GetBundlesCommand extends $Command<GetBundlesCommandInput, GetBundlesCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetBundlesCommandInput;
    constructor(input: GetBundlesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBundlesCommandInput, GetBundlesCommandOutput>;
    private serialize;
    private deserialize;
}
