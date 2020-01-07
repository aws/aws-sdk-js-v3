import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { GetContainerPolicyInput, GetContainerPolicyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetContainerPolicyCommandInput = GetContainerPolicyInput;
export declare type GetContainerPolicyCommandOutput = GetContainerPolicyOutput & __MetadataBearer;
export declare class GetContainerPolicyCommand extends $Command<GetContainerPolicyCommandInput, GetContainerPolicyCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: GetContainerPolicyCommandInput;
    constructor(input: GetContainerPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetContainerPolicyCommandInput, GetContainerPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
