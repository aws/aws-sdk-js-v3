import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { PutCorsPolicyInput, PutCorsPolicyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutCorsPolicyCommandInput = PutCorsPolicyInput;
export declare type PutCorsPolicyCommandOutput = PutCorsPolicyOutput & __MetadataBearer;
export declare class PutCorsPolicyCommand extends $Command<PutCorsPolicyCommandInput, PutCorsPolicyCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: PutCorsPolicyCommandInput;
    constructor(input: PutCorsPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutCorsPolicyCommandInput, PutCorsPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
