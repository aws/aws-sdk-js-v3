import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { PutContainerPolicyInput, PutContainerPolicyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutContainerPolicyCommandInput = PutContainerPolicyInput;
export declare type PutContainerPolicyCommandOutput = PutContainerPolicyOutput & __MetadataBearer;
export declare class PutContainerPolicyCommand extends $Command<PutContainerPolicyCommandInput, PutContainerPolicyCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: PutContainerPolicyCommandInput;
    constructor(input: PutContainerPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutContainerPolicyCommandInput, PutContainerPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
