import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { DeleteRepositoryPolicyRequest, DeleteRepositoryPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRepositoryPolicyCommandInput = DeleteRepositoryPolicyRequest;
export declare type DeleteRepositoryPolicyCommandOutput = DeleteRepositoryPolicyResponse & __MetadataBearer;
export declare class DeleteRepositoryPolicyCommand extends $Command<DeleteRepositoryPolicyCommandInput, DeleteRepositoryPolicyCommandOutput, ECRClientResolvedConfig> {
    readonly input: DeleteRepositoryPolicyCommandInput;
    constructor(input: DeleteRepositoryPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRepositoryPolicyCommandInput, DeleteRepositoryPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
