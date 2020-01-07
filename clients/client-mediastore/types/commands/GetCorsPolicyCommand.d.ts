import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { GetCorsPolicyInput, GetCorsPolicyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCorsPolicyCommandInput = GetCorsPolicyInput;
export declare type GetCorsPolicyCommandOutput = GetCorsPolicyOutput & __MetadataBearer;
export declare class GetCorsPolicyCommand extends $Command<GetCorsPolicyCommandInput, GetCorsPolicyCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: GetCorsPolicyCommandInput;
    constructor(input: GetCorsPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCorsPolicyCommandInput, GetCorsPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
