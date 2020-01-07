import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { DeleteContainerPolicyInput, DeleteContainerPolicyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteContainerPolicyCommandInput = DeleteContainerPolicyInput;
export declare type DeleteContainerPolicyCommandOutput = DeleteContainerPolicyOutput & __MetadataBearer;
export declare class DeleteContainerPolicyCommand extends $Command<DeleteContainerPolicyCommandInput, DeleteContainerPolicyCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: DeleteContainerPolicyCommandInput;
    constructor(input: DeleteContainerPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteContainerPolicyCommandInput, DeleteContainerPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
